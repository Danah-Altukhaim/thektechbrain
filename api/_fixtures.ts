// Static fixture data for the Vercel demo deploy; writes do not persist.
// Kept in sync with infra/seed/index.ts, which round-trips this snapshot
// into the local Postgres DB so `pnpm seed` produces the same content.
//
// Domain: KTech (Kuwait Technical College) — sourced from
// `docs/ktech/source/ktech_brain.csv`. Modules mirror the four student-
// facing departments and entries are FAQ-style question/answer pairs.

export const MODULES = [
  {
    "id": "11111111-1111-4111-8111-000000000001",
    "slug": "student-services",
    "label": "Student Services",
    "icon": "users",
    "fieldDefinitions": [
      {
        "key": "question",
        "type": "text",
        "label": "Question / Issue",
        "required": true,
        "localized": false
      },
      {
        "key": "answer",
        "type": "textarea",
        "label": "Answer",
        "required": true,
        "localized": false
      },
      {
        "key": "category",
        "type": "text",
        "label": "Category",
        "required": false,
        "localized": false
      },
      {
        "key": "files",
        "type": "textarea",
        "label": "Files & media",
        "required": false,
        "localized": false
      }
    ]
  },
  {
    "id": "22222222-2222-4222-8222-000000000002",
    "slug": "registration",
    "label": "Registration",
    "icon": "clipboard-list",
    "fieldDefinitions": [
      {
        "key": "question",
        "type": "text",
        "label": "Question / Issue",
        "required": true,
        "localized": false
      },
      {
        "key": "answer",
        "type": "textarea",
        "label": "Answer",
        "required": true,
        "localized": false
      },
      {
        "key": "category",
        "type": "text",
        "label": "Category",
        "required": false,
        "localized": false
      },
      {
        "key": "files",
        "type": "textarea",
        "label": "Files & media",
        "required": false,
        "localized": false
      }
    ]
  },
  {
    "id": "33333333-3333-4333-8333-000000000003",
    "slug": "student-life",
    "label": "Student Life",
    "icon": "graduation-cap",
    "fieldDefinitions": [
      {
        "key": "question",
        "type": "text",
        "label": "Question / Issue",
        "required": true,
        "localized": false
      },
      {
        "key": "answer",
        "type": "textarea",
        "label": "Answer",
        "required": true,
        "localized": false
      },
      {
        "key": "category",
        "type": "text",
        "label": "Category",
        "required": false,
        "localized": false
      },
      {
        "key": "files",
        "type": "textarea",
        "label": "Files & media",
        "required": false,
        "localized": false
      }
    ]
  },
  {
    "id": "44444444-4444-4444-8444-000000000004",
    "slug": "finance",
    "label": "Finance",
    "icon": "dollar-sign",
    "fieldDefinitions": [
      {
        "key": "question",
        "type": "text",
        "label": "Question / Issue",
        "required": true,
        "localized": false
      },
      {
        "key": "answer",
        "type": "textarea",
        "label": "Answer",
        "required": true,
        "localized": false
      },
      {
        "key": "category",
        "type": "text",
        "label": "Category",
        "required": false,
        "localized": false
      },
      {
        "key": "files",
        "type": "textarea",
        "label": "Files & media",
        "required": false,
        "localized": false
      }
    ]
  }
] as const;

type FixtureEntry = {
  id: string;
  data: Record<string, unknown>;
  status: string;
  updatedAt: string;
};

export const ENTRIES_BY_SLUG: Record<string, FixtureEntry[]> = {
  "student-services": [
    {
      "id": "3e12a39d-c3dc-5d09-b07f-afbfa4344673",
      "data": {
        "question": "اقدر استعمل الة حاسبة حق الاختبار / اقدر استعمل نوت او ورقة حق اختبار الميدتيرم",
        "answer": "مُرفق بالملف أهم التعليمات الخاصة بالاختبارات الإلكترونية (عن بُعد)",
        "files": "BRAIN/Midterm_Exam_Rules.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "df8a819a-f9db-54ff-85b2-07aaadadbf00",
      "data": {
        "question": "موجودين اليوم في الكلية؟ / اقدر اراجعكم شخصيا؟",
        "answer": "نظرا للظروف الحالية الحرم الجامعي مغلق ولكن متواجدين نساعدكم عن بُعد من الساعة 9 الصبح إلى 5 العصر",
        "files": "BRAIN/4dd5e514-4129-4366-af04-4d2c13656b1c.png"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e533580b-3a43-5bcb-823d-13dc7135df33",
      "data": {
        "question": "شلون انزل lockdown browser",
        "answer": "مرفق بالملف خطوات تحميل برنامج lockdown browser",
        "files": "BRAIN/Respondus_LockDown_Browser.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "0b698d19-b02b-5261-b9ec-41439e34b139",
      "data": {
        "question": "بسجل في موقع التوظيف",
        "answer": "لأي استفسارات تخص موقع التوظيف للخريجين يرجى التواصل على هذا الرقم 📲  66188026",
        "files": "BRAIN/How-to-steps_Alumni.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "11c608a4-69a5-5bdf-846d-d97aa00f0c8b",
      "data": {
        "question": "ابي ايميل قسم شؤون الطلبة / الارشاد الطلابي / الخدمات الطلابية / الادفايزر / Academic Advising",
        "answer": "للتواصل مع قسم شؤون الطلبة عن طريق الايميل mailto:AcademicAdvising@ktech.edu.kw"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "1568e504-2355-5e1e-9448-de74ccb23b27",
      "data": {
        "question": "شلون اشتري كتب اونلاين",
        "answer": "لشراء الكتب اونلاين يرجى التواصل مع المكتبة mailto:library@ktech.edu.kw"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "6ae0af73-6a27-57e1-865a-f730ff449ab6",
      "data": {
        "question": "متى السحب والإضافة",
        "answer": "فترة السحب والإضافة تكون أول أسبوع من بداية الكورس الأول و الكورس الثاني",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "98561534-a5cc-5179-b9ca-a7fe118a000a",
      "data": {
        "question": "متى اخر يوم تسجيل مواد",
        "answer": "إذا تبي تعرف أهم التواريخ خلال دراستك في الكلية، راجع التقويم الأكاديمي",
        "files": "BRAIN/UPDATED.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "6fbfe00e-bff5-5a6e-b7f3-1488af10a7e7",
      "data": {
        "question": "متى الاختبارات",
        "answer": "إذا تبي تعرف التواريخ المهمة خلال دراستك في الكلية، راجع التقويم الأكاديمي \nبالنسبة للاختبارات العملية موعدها يكون قبل الاختبارات النظرية بأسبوع وتأكد من دكتور المادة",
        "files": "BRAIN/UPDATED%201.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "701b7a92-7c0a-5862-8210-a52ab5c61a49",
      "data": {
        "question": "متى بداية الكورس / متى يخلص الكورس / متى آخر يوم محاضرات / متى نعطل",
        "answer": "آخر يوم بالكورس يصادف تاريخ 21 مايو 2026\nواختبارات نهاية الفصل النظرية رح تكون من تاريخ 14 إلى 20 مايو 2026\nمرفق التقويم الأكاديمي",
        "category": "Student Services",
        "files": "BRAIN/UPDATED%202.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "ea39c10c-5369-5c52-afb6-2353377266cf",
      "data": {
        "question": "متى عطلة راس السنة",
        "answer": "إذا تبي تعرف أيام العطل الرسمية والتواريخ المهمة خلال دراستك في الكلية، راجع التقويم الأكاديمي",
        "category": "Student Services",
        "files": "BRAIN/UPDATED%203.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "06b749a7-e2be-548c-80f1-97ce6b69e0d4",
      "data": {
        "question": "الداوم اونلاين ؟",
        "answer": "حاليا الدراسة عن بعد (أونلاين) حتى إشعار آخر. تابعوا الايميل الجامعي لأي مستجدات",
        "files": "BRAIN/PHOTO-2026-03-01-21-26-23.jpg"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "2bc31a94-34ab-52fd-b62a-a9b17d8eb6f8",
      "data": {
        "question": "تيمز مو شغال عندي",
        "answer": "في حال واجهتكم أي مشاكل تقنية تواصلوا مع قسم الدعم الفني من خلال الرابط التالي: https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftks.ktech.edu.kw%2F&data=05%7C02%7CAcademicAdvising%40ktech.edu.kw%7Cf1f46322e7154ef8190e08de776c8011%7Ce536d3cad4dd4dcc9f8358add1d31431%7C0%7C0%7C639079505064728954%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=YqHiB8NJq5cJEiWv%2BDmb2iriUlLnTCxuQJFO2cRzY%2BI%3D&reserved=0 \nيرجى تسجيل الدخول باستخدام حسابك الجامعي وإنشاء طلب مساعدة ومتابعة حالته"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "b1aea1e9-0bd1-5eb0-b86d-70ff2194fca7",
      "data": {
        "question": "جم اقدر اتأخر على المحاضرة",
        "answer": "في حال تأخر الطالب أكثر من 10 دقايق عن المحاضرة رح يكون السماح بالدخول من صلاحيات دكتور / أستاذ المادة",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e6f4cb72-0e16-5740-a5e7-304170eae94d",
      "data": {
        "question": "جم غياب اقدر اخذ بالكورس",
        "answer": "الحد الأقصى للغياب بعذر هو 3 غيابات وتسليم العذر الطبي لازم يكون خلال 3 أيام عمل من تاريخ الغياب على تطبيق ktech hub عن طريق الخطوات التالية",
        "category": "Student Services",
        "files": "BRAIN/HOW_TO_SUBMIT_EXCUSED_ABSENCE.pdf, BRAIN/Attendance_Program.jpg, BRAIN/Attendance_Foundation.jpg"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e821c452-fdce-57c8-89c3-5506e5a6290d",
      "data": {
        "question": "طافني ميدتيرم / فاينل / اختبار اقدر اعيده",
        "answer": "تأجيل الاختبارات يكون للأعذار التالية فقط:\n- دخول المستشفى والبقاء فيه ليلة أو أكثر \n- حالة وفاة لقريب من الدرجة الأولى (لا قدر الله)\n \nويتم تقديم تقرير دخول مستشفى أو شهادة وفاة عن طريق تطبيقktech hub  خلال 3 أيام عمل من خلال الخطوات التالية",
        "category": "Student Services",
        "files": "BRAIN/HOW_TO_SUBMIT_EXCUSED_ABSENCE%201.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "a1f4e041-a293-53ca-b6fc-50966c47ab75",
      "data": {
        "question": "جم غياب باقي على الحرمان / جم غياب باقي على FA",
        "answer": "الغياب ينحسب بالساعات، وعدد الغيابات المتبقية على الحرمان يعتمد على عدد وحدات كل مادة\n\nمرفق سياسة الحضور والغياب في الكلية",
        "category": "Student Services",
        "files": "BRAIN/Attendance_Foundation%201.jpg, BRAIN/Attendance_Program%201.jpg"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "3adcc19a-b206-5705-86da-6fcd70917d24",
      "data": {
        "question": "لاي ساعة مداومين / لاي ساعة متواجدين",
        "answer": "متواجدين من الساعة 9 الصبح إلى 5 العصر حياك القسم نساعدك"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "1d47d0d1-87fc-51bd-be4a-1472f45c20a8",
      "data": {
        "question": "شلون أقدر اشيل غياباتي",
        "answer": "إذا عندك أي غياب بعذر تقدر تقدمه من خلال تطبيق ktech hub خلال 3 أيام عمل من تاريخ الغياب",
        "category": "Student Services",
        "files": "BRAIN/HOW_TO_SUBMIT_EXCUSED_ABSENCE%202.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f11e9de0-7ac6-5ce0-b821-96b768a9da4b",
      "data": {
        "question": "شنو الاوراق المطلوبة للتقديم على البكالوريوس",
        "answer": "الأوراق المطلوبة للتقديم على البكالوريوس هي: \n\n• كشف درجات الدبلوم الأصلي \n• ⁠معادلة مجلس الجامعات الخاصة الأصلية\n• شهادة الثانوية العامة الأصلية بالعربية\n• صورة البطاقة المدنية \n• صورة جواز السفر \n• صورة جنسية الطالب\n• صورة شهادة ميلاد الطالب\n• صورة جنسية كلا الوالدين \n•  ⁠صورة البطاقة المدنية لكلا الوالدين\n•  صورتين شخصية خلفية بيضاء قياس 4*4"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "91aa815d-5fe7-556b-baef-c4b06e3af6af",
      "data": {
        "question": "ابي اعرف جم انذار علي",
        "answer": "إنذارات الغياب توصلك أول بأول على الإيميل الجامعي من خلال تطبيق Outlook، وإذا تحتاج تعرف تفاصيل أكثر حياك قسم الشؤون الطلابية نساعدك",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "20b7817a-c6d2-5f7d-b844-aae3950bd771",
      "data": {
        "question": "متى مواعيد الاختبارات / متى بينزل جدول الاختبارات / الامتحانات / الفاينل / الميدتيرم / الإختبارات الفصلية (العملي)",
        "answer": "جدول الاختبارات النظرية يوصلك على الإيميل الجامعي من خلال تطبيق Outlook ، أما بالنسبة للاختبارات العملية تأكد من تواريخها من أساتذة المواد\nوللعلم، حسب سياسة الكلية ممنوع يتأخر أي طالب أكثر من 15 دقيقة على موعد الاختبار، وتأكد من وجود الهوية الجامعية الأصلية معاك للدخول إلى قاعة الاختبار\nموفقين!",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "b9ceb883-d75a-52e5-bb29-15571fc75874",
      "data": {
        "question": "شنو شروط التقديم على بعثة داخلية / البعثات",
        "answer": "للتقديم على البعثات الداخلية لمجلس الجامعات الخاصة فئة الضم – مرحلة الدبلوم:\n- التقديم للطلبة الكويتيين فقط \n- عمر الطالب يكون بين 17 و 23 سنة \n- ألا يكون الطالب موظف في القطاع الخاص أو يعمل لحسابه الخاص\n- على الطالب أن يجتاز 15 وحدة دراسية وألا يقل معدله التراكمي عن 2.5\n \n أما بالنسبة لمرحلة البكالوريوس: \n- التقديم للطلبة الكويتيين فقط \n- ألا يتجاوز عمر الطالب أكثر من 27 سنة \n- ألا يكون الطالب موظف في القطاع الخاص أو يعمل لحسابه الخاص\n- على الطالب أن يجتاز 15 وحدة دراسية وألا يقل معدله التراكمي عن 3.00",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "2d0311f6-d816-5b2b-a9f0-cdce0fe961d8",
      "data": {
        "question": "الباركود مايتشغل عندي",
        "answer": "ktech hub في حال واجهتكم أي مشكلة مع تسجيل الحضور على تطبيق\nجربوا تعديل إعدادات الجهاز الأساسي من خلال اتباع الخطوات المرفقة أو حياكم قسم الشؤون الطلابية نساعدكم",
        "category": "Student Services",
        "files": "BRAIN/Primary_Device_Guide.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "4e954411-9c26-5b2e-b921-f853c4186ca5",
      "data": {
        "question": "شلون اقدم طبية / ابي نموذج طبية / ابي ورقة الطبية",
        "answer": "من خلال الخطوات التالية، ktech hub تقديم الطبية يكون عن طريق تطبيق\nولا تنسى تسلمها خلال 5 أيام عمل من تاريخ الغياب!",
        "category": "Student Services",
        "files": "BRAIN/Medical_Leave_Form.pdf, BRAIN/HOW_TO_SUBMIT_EXCUSED_ABSENCE%203.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "23b71ae3-03b6-55f2-a9ea-e9e5e7324cd4",
      "data": {
        "question": "وين اقدم التفرغ الرياضي",
        "answer": "من خلال الخطوات التالية ktech hub تقديم كتاب التفرغ الرياضي يكون عن طريق تطبيق",
        "category": "Student Services",
        "files": "BRAIN/HOW_TO_SUBMIT_EXCUSED_ABSENCE%204.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "fe5ef7fc-4d2a-57b7-acce-593a97db1d7b",
      "data": {
        "question": "ضيعت هويتي الجامعية وين اقدر اطلع غيرها",
        "answer": "لاستخراج الهوية الجامعية ودفع رسوم بدل فاقد (5 دك)، راجعو قسم الدعم الفني في مبنى الكلية – الدور الأول",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "48861b3b-6b0b-5cc1-b131-3ae061557e83",
      "data": {
        "question": "متى مراجعة الدرجات",
        "answer": "موعد مراجعة الدرجات يوصلك على الإيميل الجامعي من خلال تطبيق Outlook مع جدول الساعات المكتبية لكل الأساتذة",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "b852516b-d50f-51fa-8da6-16460039b534",
      "data": {
        "question": "ابي اغير تخصصي / شلون اغير تخصصي / شنو شروط تغيير التخصص",
        "answer": "شروط تغيير التخصص لطلبة البعثات الداخلية هي:\n- أن يكون الطالب مجتاز مابين 12-30 وحدة دراسية (طلبة التمهيدي لازم يخلصون مرحلة التمهيدي ويخلصون كورس تخصص قبل التقديم على طلب تغيير تخصص)\n- ألا يقل معدل الطالب التراكمي عن 2.67 \n-  يتحمل الطالب رسوم المقررات الي لن يتم معادلتها على التخصص المحول إليه  \n \nبالنسبة للطلبة الي يدرسون على حسابهم الخاص، كل الي عليهم يسوونه هو استكمال نموذج طلب تغيير التخصص وتسليمه لقسم التسجيل في مبنى الكلية – الدور الأرضي (مكتب رقم 106) \n\nوللعلم، خريجين تخصص دبلوم صيانة وأمن نظم الشبكات يقدرون يكملون على بكالوريوس الأمن السيبراني بدون التقديم على تغيير تخصص!",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "962f3497-6a14-5fd6-ba29-84033cd46254",
      "data": {
        "question": "متى اقدر اغير تخصصي",
        "answer": "Outlook الإعلان عن فترة تقديم طلبات تغيير التخصص يكون عن طريق الإيميل الجامعي على تطبيق \nويفتح التقديم آخر أسبوعين من الفصل الدراسي الأول والثاني فقط",
        "category": "Student Services / Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c377109b-f8d9-5f6c-9236-28b9187e74d7",
      "data": {
        "question": "شلون اسجل مواد / شلون طريقة تسجيل المواد",
        "answer": "تسجيل المواد يكون عن طريق موقع https://mysis.ktech.edu.kw/ من خلال الخطوات المرفقة\nوإذا واجهتكم أي مشكلة خلال التسجيل أو عندكم أي استفسار حياكم قسم الشؤون الطلابية نساعدكم",
        "category": "Student Services",
        "files": "BRAIN/Online_Registration_Students_Manual.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c2d2a55c-9f4a-5bf6-8dc2-e1865e8aa067",
      "data": {
        "question": "شلون طريقة التحويل على البعثة / شلون اقدر احول على البعثة",
        "answer": "التقديم على البعثات الداخلية يكون عن طريق الموقع الإلكتروني للأمانة العامة لمجلس الجامعات الخاصة\nولازم تتأكد أنك مستوفي جميع الشروط وتسلم المستندات المطلوبة للتقديم على البعثة إلى قسم التسجيل في الكلية",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "1704c3cf-c307-56e4-8580-ccab2e735e8c",
      "data": {
        "question": "جم مادة اقدر اعيد / جم مرة اقدر اعيد المواد",
        "answer": "خلال دراسة الطالب سواء في مرحلة الدبلوم أو البكالوريوس يقدر يعيد مو أكثر من 6 مواد",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "527fc9f4-38ff-5f34-8229-1eb662fca6a4",
      "data": {
        "question": "متى تسجيل المواد",
        "answer": "Outlook الإعلان عن فترة تسجيل المواد يكون عن طريق الإيميل الجامعي على تطبيق\nتابع إيميلك الجامعي عشان تعرف أول بأول متى يفتح تسجيل المواد",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "9caec31a-a255-538a-9581-00911a9cb146",
      "data": {
        "question": "ابي اوقف قيدي / شلون اوقف قيدي",
        "answer": "لتقديم طلب إيقاف قيد يرجى مراجعة مكتب التسجيل في مبنى الكلية الدور الأرضي – مكتب رقم 106  \nوإذا تدرس على حساب البعثة الداخلية، لازم تنتظر موافقة مجلس الجامعات الخاصة",
        "category": "Student Services / Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "31eebbc0-94d8-5019-a0c8-24d2fc87cf6f",
      "data": {
        "question": "جم كورس اقدر اوقف قيدي /  جم مرة اقدر اوقف قيدي",
        "answer": "يقدر الطالب يوقف قيده لمدة كورسين كحد أقصى خلال دراسته في الكلية",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c16e5015-7aa3-5e35-a224-0d1d1c1fa582",
      "data": {
        "question": "وين ادفع رسوم",
        "answer": "لدفع الرسوم الدراسية راجعوا قسم المحاسبة في مبنى الكلية - الدور الأول",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "7a613784-bc80-5cc3-8ffa-89b1451bd5c3",
      "data": {
        "question": "من اي درجة اقدر اعيد المواد",
        "answer": "تقدر تعيد المواد الي درجتك فيها -C أو أقل، والطالب حده يعيد مو أكثر من 6 مواد خلال دراسته",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "50291577-9880-54ac-afbb-9f8c9d126a16",
      "data": {
        "question": "وين اسلم صورة الهوية",
        "answer": "تسيلم صورة الهوية الجامعية عند قسم التسجيل في مبنى الكلية - الدور الأرضي مكتب رقم 106",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "da43e2db-b8f5-559d-b39b-ac8f49f6fc49",
      "data": {
        "question": "شنو الاوراق المطلوبة من الطالب الموظف",
        "answer": "الطالب الموظف لازم يسلّم الإقرار المرفق إلى قسم الإرشاد الطلابي بعد توقيعه من جهة العمل",
        "category": "Student Services",
        "files": "BRAIN/Working_Student_Document_.pdf"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "registration": [
    {
      "id": "77f5c1d5-49cc-5af9-80f0-58fbc6b75ddd",
      "data": {
        "question": "وين استلم شهادة التخرج",
        "answer": "سوف يتم استلام شهادات التخرج من مقر الأمانة العام لمجلس الجامعات الخاصه PUC \nسوف يتم إرسال الموعد المحدد لاستلام الشهادات و باقي التفاصيل عن طريق الايميل و مواقع التواصل الاجتماعي."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "15fcd56c-f8c8-5ad8-a0d2-fbfdc9c4c728",
      "data": {
        "question": "متى نستلم شهادات التخرج",
        "answer": "يتم الإعلان عن موعد استلام الشهادة من خلال الإيميل الجامعي على تطبيق outlook و القنوات الرسمية للكلية"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "7563414f-e1d8-5fed-8269-9bb97241572b",
      "data": {
        "question": "شنو الأوراق المطلوبة للتقديم على البعثة",
        "answer": "المستندات المطلوبة للتقديم على البعثات الداخلية للطلبة المتفوقين (للكويتيين فقط): \n1.  صورة صالحة للبطاقة المدنية للطالب\n2.  صورة صالحة للبطاقة المدنية لولي أمر الطالب\n3.  شهادة لمن يهمه الأمر من التأمينات الاجتماعية (من تطبيق سهل Sahel)\n4.  دفع مبلغ 5 دنانير (لإصدار كشف درجات رسمي من الكلية) ومبلغ 10 دنانير (رسوم التسجيل بالبعثة) \n5.  تسليم شهادة الثانوية العامة الأصلية إلى قسم التسجيل في الكلية في حال لم يتم تسليمها من قبل \n \nتسليم المستندات المطلوبة كاملة إلى قسم التسجيل في مبنى الكلية – الدور الأرضي (مكتب رقم 106) .",
        "category": "Student Services"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "1ae72885-ffaf-56b3-92dc-911e4c05fc55",
      "data": {
        "question": "متى أقدر أقدم على المكافأة الاجتماعية / الإعانة",
        "answer": "التقديم على الإعانة يكون أول أسبوعين من الفصل الدراسي الأول والثاني فقط عند قسم التسجيل في مبنى الكلية - الدور الأرضي",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "b203bba6-41c9-52d8-8c97-9cdc2690c58a",
      "data": {
        "question": "أقدر أغير الحساب البنكي اللي تنزل عليه المكافأة الاجتماعية (الإعانة) / ابي اغير حسابي البنكي",
        "answer": "تقدر تقدم طلب تغيير الحساب البنكي خلال أول أسبوعين من الفصل الدراسي الأول والثاني فقط عند قسم التسجيل في مبنى الكلية - الدور الأرضي",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "1372d0e1-62f8-50c2-b9f2-98295af2c041",
      "data": {
        "question": "متى تنزل المكافأة الاجتماعية / الإعانة",
        "answer": "تقدر تتابع حالة صرف الإعانة على موقع الأمانة العامة لمجلس الجامعات الخاصة https://www.puc.edu.kw/",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "28aba934-f021-5741-8748-7d94a306300b",
      "data": {
        "question": "انا ادرس على حسابي وابي احول عالبعثة شلون",
        "answer": "فترة التقديم على البعثة الداخلية للطلبة الي يدرسون على حسابهم الخاص تكون خلال أول أسبوع من الفصل الدراسي الأول والثاني فقط \nوشروط التقديم موجودة على موقع مجلس الجامعات الخاصة: https://www.puc.edu.kw/",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "00dc4fa8-73c3-5fa8-9d95-e1cae9922df5",
      "data": {
        "question": "ابي ورقة استمرارية / كشف درجات / لمن يهمه الأمر",
        "answer": "تقدر تطلب ورقة لمن يهمه الأمر أو كشف درجات عن طريقة مراجعة قسم التسجيل في مبنى الكلية - الدور الأرضي (مكتب 106) \nوتكون جاهزة للاستلام خلال 3 أيام عمل، وإذا تحتاج تكون مصدّقة من مجلس الجامعات الخاصة تاخذ 10 أيام عمل",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "3f0cb80f-c7e1-54d0-8d8e-fce573be6a63",
      "data": {
        "question": "اقدر اقدم على الاعانة اذا ادرس على حسابي الخاص",
        "answer": "اي تقدر، التقديم يكون للكويتيين أو أبناء الكويتيات شرط أن يكون الطالب مو موظف حكومي وغير مسجل بدعم العمالة وما يتقاضى معاش من وزارة الشؤون الاجتماعية",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "07cba5c0-c246-5176-b506-d70dee411bd1",
      "data": {
        "question": "بتخرج هالكورس، شنو مطلوب مني",
        "answer": "يرجى الاطلاع على الايميلات المرسلة من قبل قسم التسجيل , حيث سوف يتم ارسال ايميل لجميع الطلبة المتوقع تخرجهم بالطلبات و طريقة التسجيل .",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "9ee987bc-7951-517d-a2e5-12e86e1f0e8f",
      "data": {
        "question": "تعادلون مواد من جامعة ثانية / تعادلون مواد من التطبيقي",
        "answer": "اي نعادل ولكن في شروط محددة، راجع قسم التسجيل في مبنى الكلية - الدور الأرضي (مكتب 106) للتفاصيل",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e20c5588-7989-5473-968b-d5134682726c",
      "data": {
        "question": "متى اقدر أقدم على تغيير التخصص ؟",
        "answer": "خلال اخر اسبوعين من الفصل الدراسي الاول ز الثاني فقط .",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "98904151-5899-5486-aa38-3fedb0a1cda6",
      "data": {
        "question": "أبي أوقف قيدي هالفصل ؟",
        "answer": "على الطالب  أو من ينوب عنه بمراجعة قسم التسجيل مكتب 106 لتقديم طلب وقف القيد .  اما اذا كان الطالب على حساب البعثة الداخلية يلزم موافقة مجلس الجامعات الخاصة .",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "fcc1653e-6191-5cc9-8214-33fac5177579",
      "data": {
        "question": "يقدر احد يستلم شهاة التخرج عني في حالة السفر ؟",
        "answer": "اي / بس لازم ارسال ايميل لقسم التسجيل باسم الشخص المفوض و رقمة المدني .",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "ff0db103-645d-5851-a661-ecc66c21d373",
      "data": {
        "question": "؟Ktech ID بغير صورة",
        "answer": "مراجعة قسم القبول و التسجيل مكتب رقم 106 .",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "91a5ee8e-1f19-58b5-92e9-0dc8413a26d9",
      "data": {
        "question": "أحتاج بمن يهمة الأمر  يتقاضى / لا يتقاضى ؟",
        "answer": "مراجعة قسم التسجيل لتعبئة النموذج المطلوب",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "8d6f9666-8a36-59c6-b50e-357d2eec6992",
      "data": {
        "question": "اذا بوقف الإعانة شلون ؟",
        "answer": "يجب مراجعة قسم القبول و التسجيل لتعبئة النموذج المطلوب .",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "cb3d2f22-3585-5fd6-ae2f-a0845b7027d5",
      "data": {
        "question": "اذا بسحب قيدي من الكلية ؟",
        "answer": "مراجعة قسم القبول و التسجيل .",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c4a14faf-384d-56a5-a819-60ddf6450aa5",
      "data": {
        "question": "متى ينزل بدل كتب ؟",
        "answer": "لايوجد تاريخ محدد / مجلس الجامعات الخصة هو المسؤول عن صرف بدل كتب . يمكنكم التواصل مع مجلس الجامعات الخاصه عن طريق الرابط https://www.puc.edu.kw/finance-contact.html",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "bfb348f8-8fe1-5b82-8b37-34ab2cf54c9e",
      "data": {
        "question": "انا طالب بدرس على حسابي , بنزلي بدل كتب ؟",
        "answer": "بدل كتب فقط لطلبة البعثات الداخلية  .",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "9dbfe355-cff4-5460-a20c-9e6f8dc17aa2",
      "data": {
        "question": "كنت ادرس بجامعة الكويت / التطبيقي / جامعة عبدالله السالم هل احتاج لمن يهمة الامر لصرف المكافاة الاجتماعية ( الإعانة ) ؟",
        "answer": "لا ما يحتاج",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "0e5d6074-3396-520d-9464-0db164ea9b6c",
      "data": {
        "question": "كنت ادرس بجامعة خاصة و كنت استلم الإعانة , احتاج لمن يهمة الأمر ؟",
        "answer": "نعم تحتاج",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "07e2705b-877a-5a8e-967e-225a53772c10",
      "data": {
        "question": "أنا خريج قديم و ضاعة اوراق التخرج , شلون ؟",
        "answer": "يرجى مراجعة قسم القبول و التسجيل مكتب رقم 106.",
        "category": "Registration"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "student-life": [
    {
      "id": "893a58a1-1c48-5382-81ea-460ce255f856",
      "data": {
        "question": "شنو قسم الحياة الطلابية",
        "answer": "قسم الحياة الطلابية يهتم بتنظيم الأنشطة ودعم النوادي الطلابية والإشراف على الفعاليات وإدارة الفرق الرياضية داخل\nالكلية",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "2428f026-1a7a-58ac-a3f0-3dbe65ab59d9",
      "data": {
        "question": "وين مكان قسم الحياة الطلابية",
        "answer": "قسم الحياة الطلابية موجود داخل الكلية في الدور الأرضي - مكتب رقم 172",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "06f211ac-94a6-57c1-b057-a6f2b7213441",
      "data": {
        "question": "شلون أقدر أتواصل مع قسم الحياة الطلابية",
        "answer": "تقدر تتواصل معنا عن طريق الإيميل mailto:studentlife@ktech.edu.kw",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "b95bf98e-4cb6-5119-922f-0afaa338eb5f",
      "data": {
        "question": "شنو النوادي الطلابية الي موجودة بالكلية",
        "answer": "النوادي الطلابية هي مجموعات يديرها الطلبة تحت إشراف الكلية، وتهدف لتطوير المهارات وتنمية المواهب والمشاركة\nبأنشطة خارج القاعات الدراسية ومنها: \n• Acting Club\n• Esports Club\n• Photography Club\n• Music Club\n• Art and Crafts Club\n• Community Club\n• Programming Club\n• Robotics Club\n• Cybersecurity Club\n• Debate Club\n• Book Club – Arabic\n• Book Club – English",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "036fdd49-ff84-565a-a174-aa25dc82a3d1",
      "data": {
        "question": "شلون أقدر انضم / اشارك في نادي طلابي",
        "answer": "تقدر تسجل بالنوادي الطلابية عن طريق إعلانات فتح التسجيل أو انك تتواصل مع قسم الحياة الطلابية",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "8d12a790-98a6-52df-9d6f-4ce3c9b779fc",
      "data": {
        "question": "أقدر أفتح نادي طلابي جديد",
        "answer": "اكيد تقدر، كل الي عليك تسويه انك تقدم طلب نادي طلابي جديد لقسم الحياة الطلابية ويتم النظر فيه حسب الشروط المعتمدة",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "a663d9ec-a1df-5aa0-a016-edfbd07eb903",
      "data": {
        "question": "شنو الفعاليات الي موجودة بالجامعة",
        "answer": "ينظم قسم الحياة الطلابية كثير من الأنشطة والفعاليات للطلبة مثل اليوم المفتوح، الحملات التوعوية، المعارض، والأنشطة الترفيهية",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "4bf5aba5-5489-5773-8019-f2cea66c5e5f",
      "data": {
        "question": "شلون أعرف مواعيد الفعاليات بالكلية",
        "answer": "الإعلان عن الفعاليات والأنشطة الطلابية يكون عن طريق مواقع التواصل الإجتماعي أو الإيميل الجامعي أو من خلال قسم الحياة الطلابية",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c6ea734a-0cbc-533f-9b53-4012f3cf5592",
      "data": {
        "question": "أقدر أشارك بتنظيم فعالية",
        "answer": "اكيد تقدر تشارك بالتعاون مع قسم الحياة الطلابية، راجعونا في مبنى الكلية - الدور الأرضي مكتب رقم 172",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "6c007832-b74f-5e42-9f6e-70a8a843808a",
      "data": {
        "question": "شنو الفرق الرياضية الموجودة بالكليه",
        "answer": "الفرق الرياضية الموجودة حاليا هي:\n• كرة قدم Futsal \n• كرة القدم \n• كرة السلة \n• البادل\nوجميعها تتكون من فرق حق الشباب وحق البنات!",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "118d51d3-9cf4-5441-b02b-f7061ea88c9e",
      "data": {
        "question": "شلون أسجل بفريق رياضي",
        "answer": "الإعلان عن فتح التسجيل يكون قبل البطولات أو بداية الموسم، والتسجيل يكون عن طريق قسم الحياة الطلابية",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "13e1372a-929a-5765-9ac2-c388377e5080",
      "data": {
        "question": "أقدر أشارك بأكثر من فريق",
        "answer": "يعتمد على مواعيد التدريبات والبطولات، ويتم التنسيق مع قسم الحياة الطلابية",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "4ed50ee5-7121-55fa-ad5e-1f744a43f341",
      "data": {
        "question": "في شروط المشاركة بالفرق الرياضية؟",
        "answer": "اكيد في شروط للمشاركة بالفرق الرياضية مثل الانتظام الأكاديمي والحضور والالتزام بالتدريبات",
        "category": "Student Life"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "finance": [
    {
      "id": "f3a2373a-252f-5158-8c49-33bfaf4987b1",
      "data": {
        "question": "بكم الرسوم الدراسية بنسبة للدبلوم؟ شكثر رسوم الدبلوم؟ الوحدة بجم في الدبلوم؟",
        "answer": "بالنسبة لرسوم الدبلوم، تكون محسوبة على عدد الوحدات اللي بتنزلها بكل كورس. سعر الوحدة\n  الواحدة هو ١٩٠ دينار بدون خصم، والسعر النهائي يعتمد على عدد الوحدات بالإضافة\n  إلى الخصم اللي يحدده لك قسم التسجيل أول ما تسجل بالكلية، فالرسوم تختلف من\n  طالب لثاني حسب خطته الدراسية والخصم المطبق عليه",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "cb150e9e-4e3f-5955-8bfa-dad36d31dae4",
      "data": {
        "question": "بكم الرسوم الدراسية بنسبة للبكالوريوس؟",
        "answer": "بالنسبة لرسوم للبكالوريوس، تكون محسوبة على عدد الوحدات اللي بتنزلها بكل كورس. سعر الوحدة الواحدة هو ٢٤٠ دينار بدون خصم، والسعر النهائي يعتمد على عدد الوحدات بالإضافة إلى الخصم اللي يحدده لك قسم التسجيل أول ما تسجل بالكلية، فالرسوم تختلف من طالب لثاني حسب خطته الدراسية والخصم المطبق عليه",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "bed38c57-5668-55b0-b7e9-fe6d738f261b",
      "data": {
        "question": "اقدر ادفع اقساط ؟ و كم قسط راح يكون ؟",
        "answer": "أي تقدر تدفع أقساط، وراح تكون على ٣ دفعات لمدة ٣ شهور",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c3a15770-c9ec-55f2-84ad-d5b7812b95e8",
      "data": {
        "question": "الحين المقدم اللي دفعته يتخصم من سعر الكورس ولا خلاص يروح علي؟",
        "answer": "المقدّم اللي دفعته ينخصم من رسوم الكورس، وما يروح عليك",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "577a043a-7397-528a-8cde-3493b3cc0474",
      "data": {
        "question": "كم سعر الكورس التمهيدي؟",
        "answer": "سعر الكورس التمهيدي ٣،٢٥٠ بدون خصم",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "abd8c841-538a-52f7-bc77-66b69eba12c1",
      "data": {
        "question": "اذا باخذ كورس بعدين بحول على حساب الحكومه كم بتكون تكلفه الكورس ؟",
        "answer": "تكلفة هالكورس تعتمد على عدد الوحدات اللي بتنزلها وكم خصمك ,ولازم تجتاز شروط البعثة",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "4e4bdc9a-9077-5b43-bd87-4dc8e5447174",
      "data": {
        "question": "اذا بعيد الماده كم يكون سعر الماده ؟",
        "answer": "راح تعيدها بسعرها كامل بدون أي خصم، وسعر المادة يعتمد على عدد وحداتها",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "7a4ba69e-d0e8-5045-bee2-e71c5e1962b3",
      "data": {
        "question": "كم المديونية علي ؟ كم المتبقي ؟ كم دفعه هذا الشهر ؟",
        "answer": "المبلغ اللي باقي عليك هو-------- دينار ، قسط هالشهر هو--------- دينار",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "83a8d3dc-dba4-52c8-9931-cfff28600092",
      "data": {
        "question": "اقدر اسجل من غير ما ادفع مقدم ؟  اقدر ادفع\n  بس ٢٠٠ و يتبطل معاي السيستم ؟",
        "answer": "للأسف ما يصير تسجل من غير ما تدفع المقدم، ولا ينفع تقسطه. لازم تدفع المبلغ كامل عشان السيستم يفتح ويقدر يسجل",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "16cec8bf-4775-5023-8f63-cb1acf6b71b4",
      "data": {
        "question": "كم المفروض ادفع علشان يتبطل علي السيستم ؟",
        "answer": "تعتمد على حالتك، إذا عليك فلوس من الفصل اللي فات لازم تسددها عشان السيستم يفتح لك وتشوف درجاتك. أما إذا تبي تسجل مواد جديدة، لازم تدفع المقدم. للبكلريوس المقدم 500، وللدبلوم 400",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "53cf6780-0eb1-54df-8883-c7a47e04074e",
      "data": {
        "question": "شلون اتواصل مع قسم المحاسبة / المالية / دفع اقساط / رسوم دراسية",
        "answer": "للتواصل مع قسم المحاسبة يرجى التواصل على رقم الواتساب 65145596 او الايميل mailto:finance@ktech.edu.kw"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "10688750-3dc8-54c4-99a6-fffd5f2dbe5c",
      "data": {
        "question": "ابي اسجل مواد بس ما اقدر يقول انه علي بلوك ليش ؟",
        "answer": "عشان تقدر تسجل المواد لازم تدفع المقدم، وإلا السيستم يحطلك بلوك",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1442711-c70a-5c39-8817-ed9239157dbb",
      "data": {
        "question": "اقدر اقسط رسوم الفصل الصيفي؟",
        "answer": "الصيفي يكون دفعه وحده بكامل المبلغ قبل تسجيل المواد",
        "category": "finance"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ]
};
