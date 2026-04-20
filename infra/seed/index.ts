/**
 * Seed dev fixtures: the KTech tenant with canonical modules, sample entries,
 * and an API key.
 *
 * The `ktech` tenant is seeded from the static snapshot at `api/_fixtures.ts`
 * so local Postgres ends up with the same content that the Vercel demo serves.
 *
 * Run: `pnpm seed`
 */
import bcrypt from "bcrypt";
import { randomBytes, createHash } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import { MODULES, ENTRIES_BY_SLUG } from "../../api/_fixtures";

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_MIGRATE_URL ?? process.env.DATABASE_URL! } },
});

type EntryStatus = "draft" | "scheduled" | "active" | "expired" | "archived";

async function upsertTenantUsers(tenantId: string) {
  const editor = await prisma.user.upsert({
    where: { tenantId_email: { tenantId, email: "ibrahim@example.com" } },
    create: {
      tenantId,
      email: "ibrahim@example.com",
      name: "Ibrahim (Editor)",
      role: "CLIENT_EDITOR",
      passwordHash: await bcrypt.hash("password1", 10),
    },
    update: {},
  });
  const admin = await prisma.user.upsert({
    where: { tenantId_email: { tenantId, email: "admin@pairai.com" } },
    create: {
      tenantId,
      email: "admin@pairai.com",
      name: "PAIR Admin",
      role: "PAIR_ADMIN",
      passwordHash: await bcrypt.hash("password1", 10),
    },
    update: {},
  });
  return { editor, admin };
}

async function issueApiKey(tenantId: string, slug: string) {
  const raw = `tb_live_${randomBytes(24).toString("hex")}`;
  const hash = createHash("sha256").update(raw).digest("hex");
  await prisma.apiKey.upsert({
    where: { keyHash: hash },
    create: {
      tenantId,
      keyHash: hash,
      keyPrefix: raw.slice(0, 12),
      label: "Seed bot key",
      scopes: ["read:kb", "write:analytics"],
    },
    update: {},
  });
  console.log(`Seeded ${slug}: api_key = ${raw}`);
}

// Module slugs from the pre-rebrand Cinescape fixture set. Seed runs on every
// deploy, so dropping these here guarantees stale Knowledge cards (e.g.
// "Cinemas & Hours", "Active Offers") disappear without a manual SQL step.
const LEGACY_MODULE_SLUGS = [
  "branches",
  "escalation_rules",
  "faqs",
  "intents",
  "partners",
  "policy_matrix",
  "promotions",
];

async function purgeLegacyTenants() {
  // Pre-rebrand databases still carry an orphaned 'cinescape' tenant. Its
  // modules surface in admin sessions (RLS bypass), causing duplicate cards
  // on the Knowledge page. Cascades clear modules/entries/sessions.
  const stale = await prisma.tenant.findUnique({ where: { slug: "cinescape" } });
  if (stale) {
    await prisma.tenant.delete({ where: { slug: "cinescape" } });
    console.log("Purged legacy 'cinescape' tenant");
  }
}

async function seedKtech() {
  await purgeLegacyTenants();

  const tenant = await prisma.tenant.upsert({
    where: { slug: "ktech" },
    create: { slug: "ktech", name: "KTech", timezone: "Asia/Kuwait" },
    update: {},
  });

  // Drop legacy cinescape modules that may have been seeded under the
  // 'ktech' tenant before the rebrand. Cascades clear their entries.
  const removed = await prisma.module.deleteMany({
    where: { tenantId: tenant.id, slug: { in: LEGACY_MODULE_SLUGS } },
  });
  if (removed.count > 0) {
    console.log(`Removed ${removed.count} legacy modules from 'ktech' tenant`);
  }

  const { editor } = await upsertTenantUsers(tenant.id);

  const moduleIdBySlug = new Map<string, string>();
  for (const mod of MODULES) {
    const row = await prisma.module.upsert({
      where: { tenantId_slug: { tenantId: tenant.id, slug: mod.slug } },
      create: {
        tenantId: tenant.id,
        slug: mod.slug,
        label: mod.label,
        icon: mod.icon ?? null,
        fieldDefinitions: mod.fieldDefinitions as unknown as object,
      },
      update: {
        label: mod.label,
        icon: mod.icon ?? null,
        fieldDefinitions: mod.fieldDefinitions as unknown as object,
      },
    });
    moduleIdBySlug.set(mod.slug, row.id);
  }

  let entryCount = 0;
  for (const [slug, entries] of Object.entries(ENTRIES_BY_SLUG)) {
    const moduleId = moduleIdBySlug.get(slug);
    if (!moduleId) {
      console.warn(`Skipping ${entries.length} entries: no module for slug "${slug}"`);
      continue;
    }
    for (const entry of entries) {
      await prisma.entry.upsert({
        where: {
          tenantId_moduleId_externalId: {
            tenantId: tenant.id,
            moduleId,
            externalId: entry.id,
          },
        },
        create: {
          tenantId: tenant.id,
          moduleId,
          externalId: entry.id,
          createdBy: editor.id,
          status: entry.status as EntryStatus,
          data: entry.data as object,
        },
        update: {
          data: entry.data as object,
          status: entry.status as EntryStatus,
        },
      });
      entryCount++;
    }
  }

  await issueApiKey(tenant.id, "ktech");
  console.log(`Seeded ktech: ${MODULES.length} modules, ${entryCount} entries`);
}

async function main() {
  await seedKtech();
  console.log("Seed complete.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
