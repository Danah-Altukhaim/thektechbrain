# KTech — AI Agent Knowledge Base

Source material for the KTech (Kuwait Technical College) AI agent project. All files are in markdown/CSV for easy grep/read from Claude Code.

## Project context

KTech is a private technical college in Kuwait, regulated by the Private Universities Council (PUC / مجلس الجامعات الخاصة). This folder contains the authoritative source documents for defining an AI agent that answers student-facing questions about registration, attendance, exams, fees, scholarships, student life, and technical support.

The knowledge base is derived from a single consolidated brain export (`source/ktech_brain.csv`) covering four departments: **Student Services**, **Registration**, **Finance**, and **Student Life**.

## Folder layout

```
ktech/
├── INDEX.md                ← you are here
├── source/
│   └── ktech_brain.csv     ← original 171-row Q&A export (UTF-8, 2026-04-20)
└── content/
    └── faq.md              ← same Q&A, organized by department and topic
```

## File guide

| File | Contents | Authoritative for |
| ---- | -------- | ----------------- |
| `source/ktech_brain.csv` | 171 rows, columns: `Question/Issue`, `Answer`, `Dept`, `Files & media`, `Category`, `Last added`, `Created time`. Many rows reference attachments under `BRAIN/…` (PDFs, JPGs, PNGs) that are not yet imported — the filenames are preserved for traceability. | Ground truth. Treat the CSV as canonical; `faq.md` is a derived view. |
| `content/faq.md` | Same Q&A re-organized: by **Department** first, then by **Topic** within department. Questions preserve student phrasing (Arabic, with multiple rephrasings separated by `/`). Attachments are called out inline. | Agent prompt assembly — the grouping matches how students actually route questions. |

## Departments in scope

| Department | Scope | Primary channel |
| ---------- | ----- | --------------- |
| Student Services | Exams, attendance/absences, scheduling, tech support, IDs, advising, majors, general scholarship questions | AcademicAdvising@ktech.edu.kw |
| Registration | Graduation certificates, scholarship documents, social stipend (الإعانة), book allowance, transcripts, transfers, hold/withdraw, major change (official) | Office 106, ground floor |
| Finance | Tuition per credit, installments, deposits, summer fees, re-taking courses, system blocks | finance@ktech.edu.kw · WhatsApp 65145596 |
| Student Life | Clubs, events, sports teams | studentlife@ktech.edu.kw · Office 172, ground floor |

## Key facts the agent should know

**Identity**

- Institution: KTech (Kuwait Technical College).
- Regulator: Private Universities Council (PUC) — https://www.puc.edu.kw/
- Student portal: https://mysis.ktech.edu.kw/
- Student app: **ktech hub** (used for attendance, medical excuses, sports leave, etc.)
- Tech support portal: https://tks.ktech.edu.kw/
- Current operating mode: remote/online until further notice; staff reachable 9 AM – 5 PM.

**Academic calendar (current data point in CSV)**

- Last day of current course: **21 May 2026**.
- Theoretical final exams: **14 – 20 May 2026**.
- Add/drop window: first week of each semester (Fall / Spring).
- Major-change applications: last two weeks of Fall / Spring (announced via Outlook).
- Social stipend / bank-account changes: first two weeks of Fall / Spring.
- Official calendar attachments referenced as `BRAIN/UPDATED*.pdf`.

**Attendance (from Student Services answers)**

- Late > 10 minutes → entry is at the instructor's discretion.
- Late > 15 minutes to an exam → not allowed in.
- Max 3 excused absences; medical excuse must be submitted via **ktech hub** within **3 working days** of the absence (medical certificate within **5 working days**).
- FA threshold depends on course credit-hours (absence is counted in hours, not sessions). See `BRAIN/Attendance_Program.jpg` and `BRAIN/Attendance_Foundation.jpg`.
- Makeup exams only for: hospitalization (overnight+) or death of a first-degree relative. Documentation via ktech hub within 3 working days.

**Registration rules**

- Course retakes: only courses graded **C-** or lower; max **6 retakes** across the student's entire study.
- Enrollment hold (وقف قيد): up to **2 semesters** total; scholarship students need PUC approval.
- ID replacement: 5 KD fee, handled by Tech Support (first floor).
- Graduation certificates are collected from PUC, not KTech; date announced via Outlook.
- Third-party pickup of a certificate requires an email to Registration with the delegate's name + civil ID.

**Scholarships (PUC internal scholarship / بعثة داخلية)**

- Kuwaitis only. Diploma: age 17–23, GPA ≥ 2.5, ≥ 15 completed credits, not employed in private sector. Bachelor: age ≤ 27, GPA ≥ 3.00, ≥ 15 completed credits, not employed in private sector.
- Self-funded → scholarship transfer window: **first week** of Fall / Spring only.
- Required docs (PUC): student + guardian civil ID, Sahel "to whom it may concern" (employment status), 5 KD (transcript) + 10 KD (scholarship registration), original high-school certificate if not already on file.
- Book allowance: PUC-managed, no fixed date, scholarship students only.
- Diploma in Network Security can continue to Bachelor of Cybersecurity **without** a major-change application.
- Major change requires 12–30 credits completed, GPA ≥ 2.67; student pays for any credits that don't transfer to the new major.

**Fees**

- Diploma: **190 KD / credit** (before discount).
- Bachelor: **240 KD / credit** (before discount).
- Foundation course: **3,250 KD** (no discount).
- Installments: **3 payments over 3 months**, regular semesters only; summer is **one lump sum before registration**.
- Retaking a course: full price, **no discount**.
- Deposits to unblock the system: **400 KD** (Diploma), **500 KD** (Bachelor). Registration is fully blocked until the deposit is paid; deposits are credited toward tuition.
- Past-semester balance must be cleared before grades are visible.

**Student Life**

- 12 active clubs (Acting, Esports, Photography, Music, Art & Crafts, Community, Programming, Robotics, Cybersecurity, Debate, Arabic Book Club, English Book Club).
- 4 sports teams (Futsal, Football, Basketball, Padel) — each has a boys' and a girls' squad.
- Events: Open Day, awareness campaigns, exhibitions, recreational activities — announced via social + Outlook.

## Gaps / known issues for the agent project

1. **Attachments are referenced but not imported.** `source/ktech_brain.csv` points to ~20 files under `BRAIN/…` (PDFs, JPGs). Only the filenames are in-repo; the files themselves are not. The agent should surface the filename when it would normally attach — then fall back to "ask the department" if the file isn't available.
2. **Fee amounts can change per-student.** The CSV lists *list* prices (KD 190 / 240 / 3250). The effective price depends on a per-student discount set at admission. The agent must **not** quote a final total — always state the unit price and defer to Registration/Finance for the per-student total.
3. **Pending balances are per-student.** The row "كم المديونية علي" has a placeholder answer ("المبلغ اللي باقي عليك هو ------- دينار"). The agent cannot answer this without a finance-system integration; route to WhatsApp 65145596 or finance@ktech.edu.kw.
4. **Calendar data is point-in-time.** The dates for the current semester (21 May 2026 end, 14–20 May exams) come from a CSV snapshot. The attached `BRAIN/UPDATED*.pdf` files are the actual calendar — re-ingest when a new semester's calendar is issued.
5. **Multilingual answers.** Almost all Q&A pairs are in Arabic (Kuwaiti dialect). English-only students are likely underserved by the current knowledge base — flag as a product gap.
6. **No API / system-of-record documentation.** Unlike the Cinescape predecessor of this project, there is no published API spec yet for KTech internal systems (mysis, ktech hub, tks). The agent can only reference URLs, not act on behalf of the student.

## How to use this with Claude Code

From the project root, point Claude Code at this folder and it will grep across `INDEX.md` and `content/faq.md`. Suggested starting prompts:

- `@docs/ktech/INDEX.md summarize the agent's scope and departments`
- `@docs/ktech/content/faq.md list every rule about absences, with citations`
- `@docs/ktech/content/faq.md @docs/ktech/INDEX.md design the conversation flow for "I can't register, I'm blocked"`
- `@docs/ktech/source/ktech_brain.csv group questions by department and count them`

For any question involving money or dates, cross-check `faq.md` against the **Key facts** section of this INDEX — the INDEX is normalized to KD / absolute dates while the FAQ preserves the original (often approximate) student-facing phrasing.
