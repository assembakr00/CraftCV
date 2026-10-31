// ─── DOM References ────────────────────────────────────────────────────────────
const form               = document.getElementById('cvForm');
const themeToggle        = document.getElementById('themeToggle');
const settingsMenuToggle = document.getElementById('settingsMenuToggle');
const settingsDrawer     = document.getElementById('settingsDrawer');
const settingsBackdrop   = document.getElementById('settingsBackdrop');
const settingsClose      = document.getElementById('settingsClose');
const settingsPageNav    = document.getElementById('settingsPageNav');
const settingsPage       = document.getElementById('settingsPage');
const settingsPageTitle  = document.getElementById('settingsPageTitle');
const backToBuilderBtn   = document.getElementById('backToBuilderBtn');
const fontSelect         = document.getElementById('fontSelect');
const langSelect         = document.getElementById('langSelect');
const templateSelect     = document.getElementById('templateSelect');
const sectionOrderList   = document.getElementById('sectionOrderList');
const cvOutput           = document.getElementById('cvOutput');
const restartDemoBtn     = document.getElementById('restartDemoBtn');
const restoreBanner      = document.getElementById('restoreBanner');
const restoreBtn         = document.getElementById('restoreBtn');
const discardBtn         = document.getElementById('discardBtn');
const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
const testKeyBtn         = document.getElementById('testKeyBtn');
const demoModeCheckbox   = document.getElementById('demoModeCheckbox');
const saveKeyBtn         = document.getElementById('saveKeyBtn');
const anthropicKeyInput  = document.getElementById('anthropicKey');
const keyFeedback        = document.getElementById('keyFeedback');
const countryCodeInput   = document.getElementById('countryCodeInput');
const cityInput          = document.getElementById('cityInput');
const locationCountry    = document.getElementById('locationCountry');
const locationHidden     = document.getElementById('location');
const phoneInput         = document.getElementById('phone');
const experienceContainer = document.getElementById('experienceEntries');
const educationContainer  = document.getElementById('educationEntries');
const projectContainer    = document.getElementById('projectEntries');
const copyCvBtn          = document.getElementById('copyCvBtn');
const gmailBtn           = document.getElementById('gmailBtn');
const printBtn           = document.getElementById('printBtn');
const clearFormBtn       = document.getElementById('clearFormBtn');
const clearModal         = document.getElementById('clearModal');
const clearConfirmBtn    = document.getElementById('clearConfirmBtn');
const clearCancelBtn     = document.getElementById('clearCancelBtn');
const avatarUpload       = document.getElementById('avatarUpload');
const removeAvatarBtn    = document.getElementById('removeAvatarBtn');
const avatarPreview      = document.getElementById('avatarPreview');
const cvAvatar           = document.getElementById('cvAvatar');
const skillInput         = document.getElementById('skillInput');
const skillLevel         = document.getElementById('skillLevel');
const addSkillBtn        = document.getElementById('addSkillBtn');
const skillTagsContainer = document.getElementById('skillTags');
const skillsHidden       = document.getElementById('skills');
const progressBar        = document.getElementById('cvProgressBar');
const progressLabel      = document.getElementById('cvProgressLabel');
const requiredFieldsLeft  = document.getElementById('requiredFieldsLeft');
const copyJsonBtn        = document.getElementById('copyJsonBtn');
const importJsonBtn      = document.getElementById('importJsonBtn');
const importJsonInput    = document.getElementById('importJsonInput');

// ─── Constants ─────────────────────────────────────────────────────────────────
const DEMO_MODE_STORAGE  = 'craftcv_demo_mode';
const FONT_STORAGE       = 'craftcv_font';
const LANG_STORAGE       = 'craftcv_lang';
const TEMPLATE_STORAGE   = 'craftcv_template';
const ORDER_STORAGE      = 'craftcv_section_order';
const STORAGE_KEY        = 'craftcv_form_state';
const API_KEY_STORAGE    = 'craftcv_api_key';
const AVATAR_STORAGE     = 'craftcv_avatar';
const SECTION_COLLAPSE_STORAGE = 'craftcv_section_collapse';

const DEFAULT_SECTION_ORDER = ['summary', 'education', 'experience', 'projects', 'skills', 'certifications', 'languages'];
const SECTION_ELEMENT_IDS = {
    summary: 'cvSecSummary', education: 'cvSecEducation', experience: 'cvSecExperience',
    projects: 'cvSecProjects', skills: 'cvSecSkills', certifications: 'cvSecCertifications',
    languages: 'cvSecLanguages'
};
const TEMPLATES = ['classic', 'modern', 'minimal'];

// state
let skillsList = [];                 // [{name, level}] (level is always the English key)
let lang = 'en';
let sectionOrder = DEFAULT_SECTION_ORDER.slice();
let selectedTheme = 'forest';

// ─── Translations ──────────────────────────────────────────────────────────────
const I18N = {
    en: {
        openMenu: 'Open settings menu', closeMenu: 'Close settings menu', close: 'Close settings',
        settings: 'Settings', back: '← Back to Builder', language: 'Language', font: 'Font',
        fontNormal: 'Normal text', fontPixel: 'Pixel art text (Peaberry)',
        apiKey: 'AI API Key', toggleKey: 'Toggle Key Visibility', saveKey: 'Save Key', updateKey: 'Update Key',
        testConn: 'Test Connection', demoMode: 'Enable Demo Mode (No API key required)',
        keyNote: 'Using your own key keeps this app free. Your key is saved locally on your device only.',
        sectionOrder: 'CV section order', sectionOrderHelp: 'Change the order of sections in your CV preview, copy and PDF.',
        moveUp: 'Move up', moveDown: 'Move down',
        restorePrompt: 'Restore your last session?', restore: 'Restore', discard: 'Discard', restartDemo: 'Restart Demo',
        restartConfirm: 'Restart the demo? This clears all saved data, including your API key.',
        appTitle: 'CraftCV Builder', tagline: 'Build a polished CV with live preview, smart enhancements, and export tools, and more',
        progressAria: 'CV completion progress', percentComplete: '{n}% complete', missing: 'Missing: {list}',
        allComplete: 'All required fields complete', checking: 'Checking required fields…',
        clearTitle: 'Clear the form?', clearBody: 'This will erase everything you entered. You can undo right after.',
        clearYes: 'Yes, clear everything', cancel: 'Cancel',
        personal: 'Personal Information', collapse: 'Collapse', fullName: 'Full Name', email: 'Email', phone: 'Phone',
        countryCode: 'Country code', location: 'Location', city: 'City', selectCountry: 'Select country', country: 'Country',
        photo: 'Profile Photo', optional: 'optional', uploadPhoto: 'Upload Photo', remove: 'Remove', noPhoto: 'No photo',
        summary: 'Professional Summary', sentences: '2–3 sentences', chars: '{n} / {max} characters',
        aiEnhance: '✦ AI Enhance', enhancing: '⏳ Enhancing…',
        education: 'Education', addEducation: '+ Add Another Education',
        expSection: 'Experience', expHelp: 'Add your current or previous jobs. Each entry appears in your CV with the job title, company, dates, and description of your work and impact.',
        descPrefs: 'Job Description Preferences', prefAch: 'Focus on Achievements', prefResp: 'Focus on Responsibilities',
        prefImpact: 'Focus on Impact & Results', prefSkills: 'Focus on Skills Used', addExp: '+ Add Another Experience',
        projects: 'Projects & Portfolio', addProject: '+ Add Project',
        skills: 'Skills', addSkills: 'Add Skills', skillPh: 'e.g., Python', add: 'Add',
        'lvl.Beginner': 'Beginner', 'lvl.Intermediate': 'Intermediate', 'lvl.Advanced': 'Advanced', 'lvl.Expert': 'Expert',
        certsLangs: 'Certifications & Languages', certs: 'Certifications', langs: 'Languages', commaSep: 'comma-separated',
        certsPh: 'PMP, AWS Certified, etc...', langsPh: 'English (Native), Spanish (Fluent), etc...',
        checkPreview: 'Check & Preview', clearForm: 'Clear Form',
        copyText: 'Copy CV as Text', copyJson: 'Copy as JSON', importJson: 'Import JSON', gmail: 'Share via Gmail', exportPdf: 'Export PDF',
        template: 'Template', tplClassic: 'Classic', tplModern: 'Modern', tplMinimal: 'Minimal',
        cvExperience: 'Professional Experience', rights: '© 2025 CraftCV. All rights reserved.', madeBy: 'Made By Assem Bakr',
        // sections (settings order list)
        'sec.summary': 'Professional Summary', 'sec.education': 'Education', 'sec.experience': 'Professional Experience',
        'sec.projects': 'Projects & Portfolio', 'sec.skills': 'Skills', 'sec.certifications': 'Certifications', 'sec.languages': 'Languages',
        // entries
        experienceN: 'Experience {n}', educationN: 'Education {n}', projectN: 'Project {n}',
        moveEntryUp: 'Move up', moveEntryDown: 'Move down',
        jobTitle: 'Job Title', jobTitlePh: 'e.g., Product Manager', company: 'Company', companyPh: 'e.g., Insight Labs',
        startDate: 'Start date', endDate: 'End date', currentJob: 'I currently work here', present: 'Present',
        monthPh: 'YYYY-MM', jobDesc: 'Job Description', describePh: 'Describe your role and impact',
        degree: 'Degree', degreePh: 'e.g., BSc Computer Science', school: 'School or University', schoolPh: 'e.g., Cairo University',
        gradYear: 'Graduation Year', gradYearPh: 'e.g., 2024',
        projectName: 'Project Name', projectNamePh: 'e.g., E-commerce Dashboard', tech: 'Technologies Used', techPh: 'e.g., React, Node.js, PostgreSQL',
        projectUrl: 'Project URL', projectDesc: 'Description', projectDescPh: 'What it does, your role, and impact',
        prefPhAch: 'Highlight measurable accomplishments and results.', prefPhResp: 'Summarize your daily responsibilities and scope.',
        prefPhImpact: 'Emphasize the impact and business outcomes of your work.', prefPhSkills: 'Focus on the key skills you used in the role.',
        removeSkill: 'Remove {name}',
        // preview placeholders
        yourName: 'Your Name', phSummary: 'Add a concise summary of your professional background.',
        phEducation: 'Add your educational background.', phExperience: 'Add your professional experience.',
        phSkills: 'Add your most relevant skills.', phCerts: 'No certifications listed.', phLangs: 'No languages listed.',
        role: 'Role', degreeWord: 'Degree', at: 'at',
        // text export
        txtNone: 'None', txtNotSpecified: 'Not specified', txtNotProvided: 'Not provided.', txtAddSkills: 'Add your skills.',
        cvSubject: 'CV – {name}', defaultUser: 'CraftCV User',
        // validation
        required: 'This field is required.', invalidEmail: 'Enter a valid email like name@example.com.',
        phoneShort: 'Phone number looks too short.', phoneDigits: 'Use numbers only for the phone number.',
        nameInvalid: 'Use at least 2 letters (letters, spaces, - and . only).', locationInvalid: 'Enter your city and choose a country.',
        // toasts & messages
        previewOk: 'All required fields look good.', formCleared: 'Form cleared.', undo: 'Undo', restored: 'Form restored.',
        needOne: 'You need at least one entry.', cvCopied: 'CV copied to clipboard!', copyFailed: 'Copy failed. Please try again.',
        jsonCopied: 'Form state copied as JSON!', jsonCopyFailed: 'JSON copy failed. Please try again.',
        importMissing: 'Import failed. Missing: {list}', importOk: 'JSON imported successfully!', importBad: 'Import failed. Please use valid CraftCV JSON.',
        skillExists: 'Skill already added.', resolveFirst: 'Resolve validation issues before collapsing this section.',
        photoTooBig: 'Photo is too large to save. It will be lost on reload.',
        endBeforeStart: 'End date cannot be before the start date.',
        keySaved: 'Key saved securely!', keyEmpty: 'Please enter an API key first.', keyTestEmpty: 'Enter a key to test.',
        keyTesting: 'Testing connection...⏳', keyOk: 'Connection Verified Successfully!', keyBad: 'Invalid key — verify your credentials.',
        demoActive: 'Demo Mode active. No API key required.',
        enhanceEmpty: 'Add some text before enhancing.',
        noKeyHelp: 'No API key yet. Open the menu (☰) → Settings → AI API Key to add yours, or turn on Demo Mode.',
        badKeyHelp: 'Your API key was rejected. Open the menu (☰) → Settings → AI API Key and check it.',
        rateLimit: 'Rate limit or usage limit reached. Wait a moment and try again.',
        enhanceFail: 'AI enhancement failed. Check your internet connection and API key (menu ☰ → Settings), then try again.',
        openSettings: 'Open Settings', demoDone: 'Demo Mode enhancement applied.', enhanced: 'Text enhanced!',
        // progress labels use fullName/email/phone/location/summary/education/expSection/skills
        sectionsMax: 'characters'
    },
    ar: {
        openMenu: 'فتح قائمة الإعدادات', closeMenu: 'إغلاق قائمة الإعدادات', close: 'إغلاق الإعدادات',
        settings: 'الإعدادات', back: '→ العودة إلى المنشئ', language: 'اللغة', font: 'الخط',
        fontNormal: 'نص عادي', fontPixel: 'نص بكسل (Peaberry)',
        apiKey: 'مفتاح API للذكاء الاصطناعي', toggleKey: 'إظهار/إخفاء المفتاح', saveKey: 'حفظ المفتاح', updateKey: 'تحديث المفتاح',
        testConn: 'اختبار الاتصال', demoMode: 'تفعيل الوضع التجريبي (بدون مفتاح API)',
        keyNote: 'استخدام مفتاحك الخاص يُبقي التطبيق مجانياً. يُحفظ المفتاح على جهازك فقط.',
        sectionOrder: 'ترتيب أقسام السيرة الذاتية', sectionOrderHelp: 'غيّر ترتيب الأقسام في المعاينة والنسخ وملف PDF.',
        moveUp: 'نقل لأعلى', moveDown: 'نقل لأسفل',
        restorePrompt: 'هل تريد استعادة جلستك الأخيرة؟', restore: 'استعادة', discard: 'تجاهل', restartDemo: 'إعادة تشغيل العرض',
        restartConfirm: 'إعادة تشغيل العرض؟ سيتم مسح كل البيانات المحفوظة بما فيها مفتاح API.',
        appTitle: 'منشئ CraftCV', tagline: 'أنشئ سيرة ذاتية أنيقة مع معاينة مباشرة وتحسينات ذكية وأدوات تصدير والمزيد',
        progressAria: 'تقدم اكتمال السيرة الذاتية', percentComplete: 'اكتمل {n}%', missing: 'ناقص: {list}',
        allComplete: 'كل الحقول المطلوبة مكتملة', checking: 'جارٍ فحص الحقول المطلوبة…',
        clearTitle: 'مسح النموذج؟', clearBody: 'سيتم حذف كل ما أدخلته. يمكنك التراجع مباشرة بعد ذلك.',
        clearYes: 'نعم، امسح كل شيء', cancel: 'إلغاء',
        personal: 'المعلومات الشخصية', collapse: 'طي', fullName: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف',
        countryCode: 'رمز الدولة', location: 'الموقع', city: 'المدينة', selectCountry: 'اختر الدولة', country: 'الدولة',
        photo: 'الصورة الشخصية', optional: 'اختياري', uploadPhoto: 'رفع صورة', remove: 'حذف', noPhoto: 'لا توجد صورة',
        summary: 'الملخص المهني', sentences: '2–3 جمل', chars: '{n} / {max} حرف',
        aiEnhance: '✦ تحسين بالذكاء الاصطناعي', enhancing: '⏳ جارٍ التحسين…',
        education: 'التعليم', addEducation: '+ إضافة مؤهل آخر',
        expSection: 'الخبرات', expHelp: 'أضف وظائفك الحالية أو السابقة. تظهر كل خبرة في سيرتك مع المسمى الوظيفي والشركة والتواريخ ووصف عملك وأثره.',
        descPrefs: 'تفضيلات وصف الوظيفة', prefAch: 'التركيز على الإنجازات', prefResp: 'التركيز على المسؤوليات',
        prefImpact: 'التركيز على الأثر والنتائج', prefSkills: 'التركيز على المهارات المستخدمة', addExp: '+ إضافة خبرة أخرى',
        projects: 'المشاريع والأعمال', addProject: '+ إضافة مشروع',
        skills: 'المهارات', addSkills: 'إضافة مهارات', skillPh: 'مثال: Python', add: 'إضافة',
        'lvl.Beginner': 'مبتدئ', 'lvl.Intermediate': 'متوسط', 'lvl.Advanced': 'متقدم', 'lvl.Expert': 'خبير',
        certsLangs: 'الشهادات واللغات', certs: 'الشهادات', langs: 'اللغات', commaSep: 'مفصولة بفاصلة',
        certsPh: 'PMP، AWS Certified، إلخ...', langsPh: 'العربية (لغة أم)، الإنجليزية (طلاقة)، إلخ...',
        checkPreview: 'فحص ومعاينة', clearForm: 'مسح النموذج',
        copyText: 'نسخ السيرة كنص', copyJson: 'نسخ كـ JSON', importJson: 'استيراد JSON', gmail: 'مشاركة عبر Gmail', exportPdf: 'تصدير PDF',
        template: 'القالب', tplClassic: 'كلاسيكي', tplModern: 'عصري', tplMinimal: 'بسيط',
        cvExperience: 'الخبرات المهنية', rights: '© 2025 CraftCV. جميع الحقوق محفوظة.', madeBy: 'من تطوير عاصم بكر',
        'sec.summary': 'الملخص المهني', 'sec.education': 'التعليم', 'sec.experience': 'الخبرات المهنية',
        'sec.projects': 'المشاريع والأعمال', 'sec.skills': 'المهارات', 'sec.certifications': 'الشهادات', 'sec.languages': 'اللغات',
        experienceN: 'الخبرة {n}', educationN: 'المؤهل {n}', projectN: 'المشروع {n}',
        moveEntryUp: 'نقل لأعلى', moveEntryDown: 'نقل لأسفل',
        jobTitle: 'المسمى الوظيفي', jobTitlePh: 'مثال: مدير منتج', company: 'الشركة', companyPh: 'مثال: شركة الأفق',
        startDate: 'تاريخ البداية', endDate: 'تاريخ النهاية', currentJob: 'أعمل هنا حالياً', present: 'حتى الآن',
        monthPh: 'YYYY-MM', jobDesc: 'وصف الوظيفة', describePh: 'صف دورك وأثره',
        degree: 'الدرجة العلمية', degreePh: 'مثال: بكالوريوس علوم الحاسب', school: 'المدرسة أو الجامعة', schoolPh: 'مثال: جامعة القاهرة',
        gradYear: 'سنة التخرج', gradYearPh: 'مثال: 2024',
        projectName: 'اسم المشروع', projectNamePh: 'مثال: لوحة تحكم لمتجر إلكتروني', tech: 'التقنيات المستخدمة', techPh: 'مثال: React, Node.js, PostgreSQL',
        projectUrl: 'رابط المشروع', projectDesc: 'الوصف', projectDescPh: 'ماذا يفعل، ودورك فيه، وأثره',
        prefPhAch: 'أبرز الإنجازات والنتائج القابلة للقياس.', prefPhResp: 'لخّص مسؤولياتك اليومية ونطاق عملك.',
        prefPhImpact: 'ركّز على أثر عملك ونتائجه على الأعمال.', prefPhSkills: 'ركّز على المهارات الأساسية التي استخدمتها في الوظيفة.',
        removeSkill: 'حذف {name}',
        yourName: 'اسمك', phSummary: 'أضف ملخصاً موجزاً عن خلفيتك المهنية.',
        phEducation: 'أضف خلفيتك التعليمية.', phExperience: 'أضف خبراتك المهنية.',
        phSkills: 'أضف أهم مهاراتك.', phCerts: 'لا توجد شهادات.', phLangs: 'لا توجد لغات.',
        role: 'الوظيفة', degreeWord: 'الدرجة', at: 'في',
        txtNone: 'لا يوجد', txtNotSpecified: 'غير محدد', txtNotProvided: 'غير مذكور.', txtAddSkills: 'أضف مهاراتك.',
        cvSubject: 'السيرة الذاتية – {name}', defaultUser: 'مستخدم CraftCV',
        required: 'هذا الحقل مطلوب.', invalidEmail: 'أدخل بريداً صحيحاً مثل name@example.com.',
        phoneShort: 'رقم الهاتف قصير جداً.', phoneDigits: 'استخدم الأرقام فقط في رقم الهاتف.',
        nameInvalid: 'استخدم حرفين على الأقل (حروف ومسافات و - و . فقط).', locationInvalid: 'أدخل المدينة واختر الدولة.',
        previewOk: 'كل الحقول المطلوبة سليمة.', formCleared: 'تم مسح النموذج.', undo: 'تراجع', restored: 'تمت استعادة النموذج.',
        needOne: 'يجب أن يبقى إدخال واحد على الأقل.', cvCopied: 'تم نسخ السيرة الذاتية!', copyFailed: 'فشل النسخ. حاول مرة أخرى.',
        jsonCopied: 'تم نسخ البيانات كـ JSON!', jsonCopyFailed: 'فشل نسخ JSON. حاول مرة أخرى.',
        importMissing: 'فشل الاستيراد. حقول ناقصة: {list}', importOk: 'تم استيراد JSON بنجاح!', importBad: 'فشل الاستيراد. استخدم ملف JSON صالحاً من CraftCV.',
        skillExists: 'المهارة مضافة بالفعل.', resolveFirst: 'عالج أخطاء الإدخال قبل طي هذا القسم.',
        photoTooBig: 'الصورة كبيرة جداً للحفظ. ستُفقد عند إعادة التحميل.',
        endBeforeStart: 'لا يمكن أن يكون تاريخ النهاية قبل البداية.',
        keySaved: 'تم حفظ المفتاح!', keyEmpty: 'أدخل مفتاح API أولاً.', keyTestEmpty: 'أدخل مفتاحاً لاختباره.',
        keyTesting: 'جارٍ اختبار الاتصال...⏳', keyOk: 'تم التحقق من الاتصال بنجاح!', keyBad: 'المفتاح غير صالح — تحقق من بياناتك.',
        demoActive: 'الوضع التجريبي مفعّل. لا حاجة لمفتاح API.',
        enhanceEmpty: 'اكتب نصاً قبل التحسين.',
        noKeyHelp: 'لا يوجد مفتاح API بعد. افتح القائمة (☰) ← الإعدادات ← مفتاح API لإضافته، أو فعّل الوضع التجريبي.',
        badKeyHelp: 'تم رفض مفتاح API. افتح القائمة (☰) ← الإعدادات ← مفتاح API وتحقق منه.',
        rateLimit: 'تم بلوغ حد الاستخدام. انتظر قليلاً وحاول مرة أخرى.',
        enhanceFail: 'فشل التحسين بالذكاء الاصطناعي. تحقق من الإنترنت ومن مفتاح API (القائمة ☰ ← الإعدادات) ثم حاول مرة أخرى.',
        openSettings: 'فتح الإعدادات', demoDone: 'تم تطبيق التحسين في الوضع التجريبي.', enhanced: 'تم تحسين النص!',
        sectionsMax: 'حرف'
    }
};

function t(key, vars) {
    let text = (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
    if (vars) {
        Object.keys(vars).forEach(k => { text = text.split(`{${k}}`).join(vars[k]); });
    }
    return text;
}

function applyStaticTranslations() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.title = t('appTitle');
}

// ─── Country Codes (data) ─────────────────────────────────────────────────────
const COUNTRY_OPTIONS = [
    { code: 'AF', dial: '+93',   flag: '🇦🇫' }, { code: 'AL', dial: '+355',  flag: '🇦🇱' },
    { code: 'DZ', dial: '+213',  flag: '🇩🇿' }, { code: 'AD', dial: '+376',  flag: '🇦🇩' },
    { code: 'AO', dial: '+244',  flag: '🇦🇴' }, { code: 'AG', dial: '+1268', flag: '🇦🇬' },
    { code: 'AR', dial: '+54',   flag: '🇦🇷' }, { code: 'AM', dial: '+374',  flag: '🇦🇲' },
    { code: 'AU', dial: '+61',   flag: '🇦🇺' }, { code: 'AT', dial: '+43',   flag: '🇦🇹' },
    { code: 'AZ', dial: '+994',  flag: '🇦🇿' }, { code: 'BS', dial: '+1242', flag: '🇧🇸' },
    { code: 'BH', dial: '+973',  flag: '🇧🇭' }, { code: 'BD', dial: '+880',  flag: '🇧🇩' },
    { code: 'BY', dial: '+375',  flag: '🇧🇾' }, { code: 'BE', dial: '+32',   flag: '🇧🇪' },
    { code: 'BZ', dial: '+501',  flag: '🇧🇿' }, { code: 'BJ', dial: '+229',  flag: '🇧🇯' },
    { code: 'BT', dial: '+975',  flag: '🇧🇹' }, { code: 'BO', dial: '+591',  flag: '🇧🇴' },
    { code: 'BA', dial: '+387',  flag: '🇧🇦' }, { code: 'BW', dial: '+267',  flag: '🇧🇼' },
    { code: 'BR', dial: '+55',   flag: '🇧🇷' }, { code: 'BN', dial: '+673',  flag: '🇧🇳' },
    { code: 'BG', dial: '+359',  flag: '🇧🇬' }, { code: 'BF', dial: '+226',  flag: '🇧🇫' },
    { code: 'BI', dial: '+257',  flag: '🇧🇮' }, { code: 'CV', dial: '+238',  flag: '🇨🇻' },
    { code: 'KH', dial: '+855',  flag: '🇰🇭' }, { code: 'CM', dial: '+237',  flag: '🇨🇲' },
    { code: 'CA', dial: '+1',    flag: '🇨🇦' }, { code: 'CF', dial: '+236',  flag: '🇨🇫' },
    { code: 'TD', dial: '+235',  flag: '🇹🇩' }, { code: 'CL', dial: '+56',   flag: '🇨🇱' },
    { code: 'CN', dial: '+86',   flag: '🇨🇳' }, { code: 'CO', dial: '+57',   flag: '🇨🇴' },
    { code: 'CG', dial: '+242',  flag: '🇨🇬' }, { code: 'CD', dial: '+243',  flag: '🇨🇩' },
    { code: 'CR', dial: '+506',  flag: '🇨🇷' }, { code: 'HR', dial: '+385',  flag: '🇭🇷' },
    { code: 'CU', dial: '+53',   flag: '🇨🇺' }, { code: 'CY', dial: '+357',  flag: '🇨🇾' },
    { code: 'CZ', dial: '+420',  flag: '🇨🇿' }, { code: 'DK', dial: '+45',   flag: '🇩🇰' },
    { code: 'DJ', dial: '+253',  flag: '🇩🇯' }, { code: 'DO', dial: '+1849', flag: '🇩🇴' },
    { code: 'EC', dial: '+593',  flag: '🇪🇨' }, { code: 'EG', dial: '+20',   flag: '🇪🇬' },
    { code: 'SV', dial: '+503',  flag: '🇸🇻' }, { code: 'ER', dial: '+291',  flag: '🇪🇷' },
    { code: 'EE', dial: '+372',  flag: '🇪🇪' }, { code: 'ET', dial: '+251',  flag: '🇪🇹' },
    { code: 'FJ', dial: '+679',  flag: '🇫🇯' }, { code: 'FI', dial: '+358',  flag: '🇫🇮' },
    { code: 'FR', dial: '+33',   flag: '🇫🇷' }, { code: 'GA', dial: '+241',  flag: '🇬🇦' },
    { code: 'GM', dial: '+220',  flag: '🇬🇲' }, { code: 'GE', dial: '+995',  flag: '🇬🇪' },
    { code: 'DE', dial: '+49',   flag: '🇩🇪' }, { code: 'GH', dial: '+233',  flag: '🇬🇭' },
    { code: 'GR', dial: '+30',   flag: '🇬🇷' }, { code: 'GT', dial: '+502',  flag: '🇬🇹' },
    { code: 'GN', dial: '+224',  flag: '🇬🇳' }, { code: 'GY', dial: '+592',  flag: '🇬🇾' },
    { code: 'HT', dial: '+509',  flag: '🇭🇹' }, { code: 'HN', dial: '+504',  flag: '🇭🇳' },
    { code: 'HK', dial: '+852',  flag: '🇭🇰' }, { code: 'HU', dial: '+36',   flag: '🇭🇺' },
    { code: 'IS', dial: '+354',  flag: '🇮🇸' }, { code: 'IN', dial: '+91',   flag: '🇮🇳' },
    { code: 'ID', dial: '+62',   flag: '🇮🇩' }, { code: 'IR', dial: '+98',   flag: '🇮🇷' },
    { code: 'IQ', dial: '+964',  flag: '🇮🇶' }, { code: 'IE', dial: '+353',  flag: '🇮🇪' },
    { code: 'IL', dial: '+972',  flag: '🇮🇱' }, { code: 'IT', dial: '+39',   flag: '🇮🇹' },
    { code: 'JM', dial: '+1876', flag: '🇯🇲' }, { code: 'JP', dial: '+81',   flag: '🇯🇵' },
    { code: 'JO', dial: '+962',  flag: '🇯🇴' }, { code: 'KZ', dial: '+7',    flag: '🇰🇿' },
    { code: 'KE', dial: '+254',  flag: '🇰🇪' }, { code: 'KR', dial: '+82',   flag: '🇰🇷' },
    { code: 'KW', dial: '+965',  flag: '🇰🇼' }, { code: 'LV', dial: '+371',  flag: '🇱🇻' },
    { code: 'LB', dial: '+961',  flag: '🇱🇧' }, { code: 'LY', dial: '+218',  flag: '🇱🇾' },
    { code: 'LT', dial: '+370',  flag: '🇱🇹' }, { code: 'LU', dial: '+352',  flag: '🇱🇺' },
    { code: 'MY', dial: '+60',   flag: '🇲🇾' }, { code: 'MV', dial: '+960',  flag: '🇲🇻' },
    { code: 'ML', dial: '+223',  flag: '🇲🇱' }, { code: 'MT', dial: '+356',  flag: '🇲🇹' },
    { code: 'MX', dial: '+52',   flag: '🇲🇽' }, { code: 'MD', dial: '+373',  flag: '🇲🇩' },
    { code: 'MC', dial: '+377',  flag: '🇲🇨' }, { code: 'MN', dial: '+976',  flag: '🇲🇳' },
    { code: 'MA', dial: '+212',  flag: '🇲🇦' }, { code: 'MZ', dial: '+258',  flag: '🇲🇿' },
    { code: 'MM', dial: '+95',   flag: '🇲🇲' }, { code: 'NA', dial: '+264',  flag: '🇳🇦' },
    { code: 'NP', dial: '+977',  flag: '🇳🇵' }, { code: 'NL', dial: '+31',   flag: '🇳🇱' },
    { code: 'NZ', dial: '+64',   flag: '🇳🇿' }, { code: 'NE', dial: '+227',  flag: '🇳🇪' },
    { code: 'NG', dial: '+234',  flag: '🇳🇬' }, { code: 'NO', dial: '+47',   flag: '🇳🇴' },
    { code: 'OM', dial: '+968',  flag: '🇴🇲' }, { code: 'PK', dial: '+92',   flag: '🇵🇰' },
    { code: 'PA', dial: '+507',  flag: '🇵🇦' }, { code: 'PY', dial: '+595',  flag: '🇵🇾' },
    { code: 'PE', dial: '+51',   flag: '🇵🇪' }, { code: 'PH', dial: '+63',   flag: '🇵🇭' },
    { code: 'PL', dial: '+48',   flag: '🇵🇱' }, { code: 'PT', dial: '+351',  flag: '🇵🇹' },
    { code: 'QA', dial: '+974',  flag: '🇶🇦' }, { code: 'RO', dial: '+40',   flag: '🇷🇴' },
    { code: 'RU', dial: '+7',    flag: '🇷🇺' }, { code: 'RW', dial: '+250',  flag: '🇷🇼' },
    { code: 'SA', dial: '+966',  flag: '🇸🇦' }, { code: 'SN', dial: '+221',  flag: '🇸🇳' },
    { code: 'RS', dial: '+381',  flag: '🇷🇸' }, { code: 'SG', dial: '+65',   flag: '🇸🇬' },
    { code: 'SK', dial: '+421',  flag: '🇸🇰' }, { code: 'SI', dial: '+386',  flag: '🇸🇮' },
    { code: 'SO', dial: '+252',  flag: '🇸🇴' }, { code: 'ZA', dial: '+27',   flag: '🇿🇦' },
    { code: 'ES', dial: '+34',   flag: '🇪🇸' }, { code: 'LK', dial: '+94',   flag: '🇱🇰' },
    { code: 'SD', dial: '+249',  flag: '🇸🇩' }, { code: 'SE', dial: '+46',   flag: '🇸🇪' },
    { code: 'CH', dial: '+41',   flag: '🇨🇭' }, { code: 'SY', dial: '+963',  flag: '🇸🇾' },
    { code: 'TW', dial: '+886',  flag: '🇹🇼' }, { code: 'TH', dial: '+66',   flag: '🇹🇭' },
    { code: 'TG', dial: '+228',  flag: '🇹🇬' }, { code: 'TT', dial: '+1868', flag: '🇹🇹' },
    { code: 'TN', dial: '+216',  flag: '🇹🇳' }, { code: 'TR', dial: '+90',   flag: '🇹🇷' },
    { code: 'UG', dial: '+256',  flag: '🇺🇬' }, { code: 'UA', dial: '+380',  flag: '🇺🇦' },
    { code: 'AE', dial: '+971',  flag: '🇦🇪' }, { code: 'GB', dial: '+44',   flag: '🇬🇧' },
    { code: 'US', dial: '+1',    flag: '🇺🇸' }, { code: 'UY', dial: '+598',  flag: '🇺🇾' },
    { code: 'UZ', dial: '+998',  flag: '🇺🇿' }, { code: 'VE', dial: '+58',   flag: '🇻🇪' },
    { code: 'VN', dial: '+84',   flag: '🇻🇳' }, { code: 'YE', dial: '+967',  flag: '🇾🇪' },
    { code: 'ZM', dial: '+260',  flag: '🇿🇲' }, { code: 'ZW', dial: '+263',  flag: '🇿🇼' },
    { code: 'PS', dial: '+970',  flag: '🇵🇸' }, { code: 'TZ', dial: '+255',  flag: '🇹🇿' },
];

// A few extra strings that are only used by small helpers
Object.assign(I18N.en, { switchDark: 'Switch to dark theme', switchLight: 'Switch to light theme' });
Object.assign(I18N.ar, { switchDark: 'التبديل إلى الوضع الداكن', switchLight: 'التبديل إلى الوضع الفاتح' });

// ─── Init ──────────────────────────────────────────────────────────────────────
function init() {
    lang = localStorage.getItem(LANG_STORAGE) === 'ar' ? 'ar' : 'en';
    langSelect.value = lang;
    sectionOrder = readSectionOrder();
    setTemplate(readTemplate());
    applyStaticTranslations();
    populateCountryOptions();
    populateLocationCountries();
    restoreSavedApiKey();
    restoreSavedTheme();
    restoreSavedFont();
    attachEventListeners();
    restoreAvatarFromStorage();

    if (hasStoredSession()) {
        restoreBanner.hidden = false;
    } else {
        initDefaultEntries();
    }

    refreshKeyUi();
    renderSectionOrder();
    updatePlaceholderForJobPreferences();
    restoreSectionCollapseState();
    updateCharCounter(document.getElementById('summary'));
    updatePreview();
    updateProgress();
}

// ─── Language ─────────────────────────────────────────────────────────────────
function setLanguage(newLang) {
    lang = newLang === 'ar' ? 'ar' : 'en';
    try { localStorage.setItem(LANG_STORAGE, lang); } catch (err) { /* ignore */ }
    langSelect.value = lang;

    const data = collectFormData();
    applyStaticTranslations();
    populateCountryOptions();
    populateLocationCountries();
    // Rebuild entries and skill tags so their labels use the new language.
    // Do not overwrite a saved session that has not been restored yet.
    loadFormData(data, { save: restoreBanner.hidden });
    renderSectionOrder();
    applyTheme(selectedTheme);
    refreshKeyUi();
    updateCharCounter(document.getElementById('summary'));
    updatePreview();
    updateProgress();
}

function refreshKeyUi() {
    if (localStorage.getItem(API_KEY_STORAGE)) saveKeyBtn.textContent = t('updateKey');
    if (localStorage.getItem(DEMO_MODE_STORAGE) === 'true') {
        keyFeedback.textContent = t('demoActive');
    }
}

// ─── Event Listeners ───────────────────────────────────────────────────────────
function attachEventListeners() {
    form.addEventListener('input', handleFormInput);
    setDemoMode(localStorage.getItem(DEMO_MODE_STORAGE) === 'true');
    phoneInput.addEventListener('input', function () {
        const digitsOnly = phoneInput.value.replace(/\D/g, '');
        if (phoneInput.value !== digitsOnly) phoneInput.value = digitsOnly;
    });

    form.addEventListener('change', handleFormInput);
    form.addEventListener('blur',   handleBlur, true);
    form.addEventListener('click',  handleFormClick);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateForm()) return;
        updatePreview();
        showToast(t('previewOk'));
        cvOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    themeToggle.addEventListener('click', function () {
        applyTheme(selectedTheme === 'dark' ? 'forest' : 'dark');
    });
    settingsMenuToggle.addEventListener('click', function () {
        setSettingsDrawerOpen(settingsMenuToggle.getAttribute('aria-expanded') !== 'true');
    });
    settingsClose.addEventListener('click', function () { setSettingsDrawerOpen(false); });
    settingsBackdrop.addEventListener('click', function () { setSettingsDrawerOpen(false); });
    settingsPageNav.addEventListener('click', showSettingsPage);
    backToBuilderBtn.addEventListener('click', showBuilderPage);
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && settingsDrawer.getAttribute('aria-hidden') === 'false') {
            setSettingsDrawerOpen(false);
        }
    });
    fontSelect.addEventListener('change', function () { applyFont(fontSelect.value); });
    langSelect.addEventListener('change', function () { setLanguage(langSelect.value); });
    templateSelect.addEventListener('change', function () { setTemplate(templateSelect.value); });
    sectionOrderList.addEventListener('click', handleSectionOrderClick);
    restartDemoBtn.addEventListener('click', restartDemo);

    saveKeyBtn.addEventListener('click',     saveApiKey);
    restoreBtn.addEventListener('click',     restoreSession);
    toggleVisibilityBtn.addEventListener('click', toggleKeyVisibility);
    demoModeCheckbox.addEventListener('change', function () { setDemoMode(demoModeCheckbox.checked); });
    testKeyBtn.addEventListener('click', testApiKeyConnection);

    discardBtn.addEventListener('click',     discardSession);
    copyCvBtn.addEventListener('click',      copyCvAsText);
    copyJsonBtn.addEventListener('click',     copyFormAsJson);
    importJsonBtn.addEventListener('click',   () => importJsonInput.click());
    importJsonInput.addEventListener('change', handleJsonImport);
    gmailBtn.addEventListener('click',       shareViaGmail);
    printBtn.addEventListener('click',       exportPdf);

    // Clear form modal (with undo)
    clearFormBtn.addEventListener('click',   () => { clearModal.hidden = false; });
    clearCancelBtn.addEventListener('click', () => { clearModal.hidden = true; });
    clearConfirmBtn.addEventListener('click', () => {
        clearModal.hidden = true;
        clearFormWithUndo();
    });
    clearModal.addEventListener('click', (e) => {
        if (e.target === clearModal) clearModal.hidden = true;
    });

    // Avatar
    avatarUpload.addEventListener('change',  handleAvatarUpload);
    removeAvatarBtn.addEventListener('click', removeAvatar);

    // Skills tag input
    addSkillBtn.addEventListener('click', addSkillTag);
    skillInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); addSkillTag(); }
    });
}

// ─── API key help (points the user to Settings) ──────────────────────────────
function showApiKeyHelp(target, message) {
    if (!target) return;
    target.textContent = message + ' ';
    const link = document.createElement('button');
    link.type = 'button';
    link.className = 'link-btn';
    link.textContent = t('openSettings');
    link.addEventListener('click', showSettingsPage);
    target.appendChild(link);
}

// ─── Input restrictions ───────────────────────────────────────────────────────
const INPUT_FILTERS = {
    fullName: /[^\p{L}\p{M}\s'.-]/gu,         // letters, spaces, ' . -
    cityInput: /[^\p{L}\p{M}\s'.-]/gu         // letters, spaces, ' . -
};

function applyInputFilter(field) {
    const filter = INPUT_FILTERS[field.id];
    if (!filter) return;
    const cleaned = field.value.replace(filter, '').replace(/\s{2,}/g, ' ');
    if (cleaned !== field.value) field.value = cleaned;
}

// ─── Form Input Handling ───────────────────────────────────────────────────────
function handleFormInput(event) {
    const el = event.target;
    if (!el.matches('input, textarea, select')) return;

    applyInputFilter(el);
    if (el === cityInput || el === locationCountry) {
        syncLocation();
        if (locationHidden.value) validateField(locationHidden);
    }
    if (el.classList.contains('education-year') && el.value.length > 4) {
        el.value = el.value.slice(0, 4);
    }
    if (el.closest('.experience-entry') && el.matches('.experience-start, .experience-end, .experience-current')) {
        handleDateFields(el);
    }

    saveFormState();

    if (el.matches('input[type="checkbox"][name="descPreference"]')) {
        updatePlaceholderForJobPreferences();
    }

    if (el.matches('input, textarea') && el.id) {
        validateField(el);
        updateCharCounter(el);
    }

    updatePreview();
    updateProgress();
}

function handleBlur(event) {
    if (event.target === locationCountry) {
        validateField(locationHidden);
        return;
    }
    if (event.target.matches('input, textarea') && event.target.id) {
        validateField(event.target);
    }
}

function handleFormClick(event) {
    const btn = event.target.closest('button');
    if (!btn) return;

    if (btn.classList.contains('add-entry-btn')) {
        const type = btn.dataset.type;
        if (type === 'experience') addExperienceEntry();
        else if (type === 'education') addEducationEntry();
        else if (type === 'project') addProjectEntry();
    }

    if (btn.classList.contains('remove-entry-btn')) {
        const entry = btn.closest('.entry-card');
        const isExperience = entry?.classList.contains('experience-entry');
        const isEducation  = entry?.classList.contains('education-entry');
        const container    = isExperience ? experienceContainer : isEducation ? educationContainer : projectContainer;
        const minCount     = isExperience || isEducation ? 1 : 0;

        if (container.querySelectorAll(':scope > .entry-card').length <= minCount) {
            showToast(t('needOne'));
            return;
        }
        if (entry) {
            entry.remove();
            renumberEntries();
            saveFormState();
            updatePreview();
            updateProgress();
        }
    }

    if (btn.classList.contains('move-entry-btn')) {
        moveEntry(btn);
    }

    if (btn.classList.contains('ai-enhance-btn') && btn.dataset.target) {
        enhanceText(btn.dataset.target, btn);
    }

    if (btn.classList.contains('section-collapse-btn')) {
        toggleSectionCollapse(btn.dataset.section);
    }
}

// ─── Theme / Font / Template ──────────────────────────────────────────────────
function applyTheme(theme) {
    selectedTheme = theme === 'dark' ? 'dark' : 'forest';
    document.body.setAttribute('data-theme', selectedTheme);
    try { localStorage.setItem('craftcv_theme', selectedTheme); } catch (err) { /* ignore */ }
    themeToggle.setAttribute('aria-checked', String(selectedTheme === 'dark'));
    themeToggle.setAttribute('aria-label', selectedTheme === 'dark' ? t('switchLight') : t('switchDark'));
}

function restoreSavedTheme() {
    const saved = localStorage.getItem('craftcv_theme');
    applyTheme(saved || 'forest');
}

function restoreSavedFont() {
    applyFont(localStorage.getItem(FONT_STORAGE) || 'normal');
}

function applyFont(font) {
    const selectedFont = font === 'pixel' ? 'pixel' : 'normal';
    document.body.dataset.font = selectedFont;
    fontSelect.value = selectedFont;
    try { localStorage.setItem(FONT_STORAGE, selectedFont); } catch (err) { /* ignore */ }
}

function readTemplate() {
    const saved = localStorage.getItem(TEMPLATE_STORAGE);
    return TEMPLATES.includes(saved) ? saved : 'classic';
}

function setTemplate(value) {
    const template = TEMPLATES.includes(value) ? value : 'classic';
    templateSelect.value = template;
    cvOutput.className = 'cv-output tpl-' + template;
    try { localStorage.setItem(TEMPLATE_STORAGE, template); } catch (err) { /* ignore */ }
}

function setSettingsDrawerOpen(isOpen) {
    settingsDrawer.setAttribute('aria-hidden', String(!isOpen));
    settingsMenuToggle.setAttribute('aria-expanded', String(isOpen));
    settingsMenuToggle.setAttribute('aria-label', isOpen ? t('closeMenu') : t('openMenu'));
    settingsBackdrop.hidden = !isOpen;
    document.body.classList.toggle('settings-open', isOpen);

    if (isOpen) langSelect.focus();
    else settingsMenuToggle.focus();
}

function showSettingsPage() {
    setSettingsDrawerOpen(false);
    settingsPage.hidden = false;
    document.body.dataset.page = 'settings';
    settingsPageTitle.focus();
}

function showBuilderPage() {
    settingsPage.hidden = true;
    delete document.body.dataset.page;
    settingsMenuToggle.focus();
}

function restartDemo() {
    if (!window.confirm(t('restartConfirm'))) return;
    localStorage.clear();
    window.location.reload();
}

// ─── Section order (CV preview / copy / PDF) ─────────────────────────────────
function isValidOrder(order) {
    return Array.isArray(order)
        && order.length === DEFAULT_SECTION_ORDER.length
        && DEFAULT_SECTION_ORDER.every(key => order.includes(key));
}

function readSectionOrder() {
    try {
        const saved = JSON.parse(localStorage.getItem(ORDER_STORAGE));
        if (isValidOrder(saved)) return saved;
    } catch (err) { /* ignore */ }
    return DEFAULT_SECTION_ORDER.slice();
}

function saveSectionOrder() {
    try { localStorage.setItem(ORDER_STORAGE, JSON.stringify(sectionOrder)); } catch (err) { /* ignore */ }
}

function applySectionOrder() {
    sectionOrder.forEach(key => {
        const el = document.getElementById(SECTION_ELEMENT_IDS[key]);
        if (el) cvOutput.appendChild(el);
    });
}

function renderSectionOrder() {
    sectionOrderList.innerHTML = '';
    sectionOrder.forEach((key, index) => {
        const item = document.createElement('li');
        item.className = 'order-item';
        item.innerHTML = `
            <span class="order-name">${escapeHtml(t('sec.' + key))}</span>
            <span class="entry-actions">
                <button type="button" class="secondary-btn" data-key="${key}" data-dir="up" aria-label="${escapeHtml(t('moveUp'))}" ${index === 0 ? 'disabled' : ''}>↑</button>
                <button type="button" class="secondary-btn" data-key="${key}" data-dir="down" aria-label="${escapeHtml(t('moveDown'))}" ${index === sectionOrder.length - 1 ? 'disabled' : ''}>↓</button>
            </span>`;
        sectionOrderList.appendChild(item);
    });
    applySectionOrder();
}

function handleSectionOrderClick(event) {
    const btn = event.target.closest('button[data-key]');
    if (!btn) return;
    const from = sectionOrder.indexOf(btn.dataset.key);
    const to = btn.dataset.dir === 'up' ? from - 1 : from + 1;
    if (from < 0 || to < 0 || to >= sectionOrder.length) return;
    [sectionOrder[from], sectionOrder[to]] = [sectionOrder[to], sectionOrder[from]];
    saveSectionOrder();
    renderSectionOrder();
    const again = sectionOrderList.querySelector(`button[data-key="${btn.dataset.key}"][data-dir="${btn.dataset.dir}"]:not([disabled])`)
        || sectionOrderList.querySelector(`button[data-key="${btn.dataset.key}"]:not([disabled])`);
    if (again) again.focus();
}

// ─── API Key ──────────────────────────────────────────────────────────────────
function saveApiKey() {
    const key = anthropicKeyInput.value.trim();
    if (!key) {
        keyFeedback.textContent = t('keyEmpty');
        keyFeedback.className = 'key-feedback error';
        return;
    }
    localStorage.setItem(API_KEY_STORAGE, key);
    keyFeedback.textContent = t('keySaved');
    keyFeedback.className = 'key-feedback success';
    saveKeyBtn.textContent = t('updateKey');
}

function restoreSavedApiKey() {
    const saved = localStorage.getItem(API_KEY_STORAGE);
    if (saved) {
        anthropicKeyInput.value = saved;
        saveKeyBtn.textContent = t('updateKey');
    }
}

function toggleKeyVisibility() {
    const isPassword = anthropicKeyInput.type === 'password';
    anthropicKeyInput.type = isPassword ? 'text' : 'password';
    toggleVisibilityBtn.textContent = isPassword ? '🙈' : '👁️';
}

function setDemoMode(isActive) {
    localStorage.setItem(DEMO_MODE_STORAGE, isActive);
    demoModeCheckbox.checked = isActive;
    anthropicKeyInput.disabled = isActive;
    saveKeyBtn.disabled = isActive;
    testKeyBtn.disabled = isActive;
    keyFeedback.textContent = isActive ? t('demoActive') : '';
    keyFeedback.className = isActive ? 'key-feedback info' : 'key-feedback';
}

async function testApiKeyConnection() {
    const key = anthropicKeyInput.value.trim();
    if (!key) {
        keyFeedback.textContent = t('keyTestEmpty');
        keyFeedback.className = 'key-feedback error';
        return;
    }

    keyFeedback.textContent = t('keyTesting');
    keyFeedback.className = 'key-feedback info';
    testKeyBtn.disabled = true;

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': key,
                'anthropic-version': '2023-06-01',
                // This header is required for direct browser calls until a secure backend proxy is available.
                'anthropic-dangerous-direct-browser-access': 'true'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-6',
                max_tokens: 1,
                system: 'You are a test helper, only respond with a single token or short acknowledgement.',
                messages: [{ role: 'user', content: 'Ping' }]
            })
        });

        if (!response.ok) {
            throw new Error(`Anthropic responded with status ${response.status}`);
        }

        keyFeedback.textContent = t('keyOk');
        keyFeedback.className = 'key-feedback success';
    } catch (err) {
        keyFeedback.textContent = t('keyBad');
        keyFeedback.className = 'key-feedback error';
    } finally {
        testKeyBtn.disabled = false;
    }
}

function getResumeAIPrediction(jobTitle, section) {
    if (lang === 'ar') {
        return section === 'summary'
            ? 'محترف مجتهد ودقيق يتمتع بمهارات تقنية قوية وروح تعاونية والتزام بتحقيق أهداف تشغيلية قابلة للقياس.'
            : 'عملتُ ضمن فريق متعدد المهام لتحقيق أهداف التسليم الأساسية، وساهمتُ في تبسيط التوثيق وأتمتة تتبع العمل.';
    }
    const cleanTitle = jobTitle.trim().toLowerCase() || 'professional';
    const mockData = {
        summary: {
            engineer: "Result-driven Software Engineer with architecture experience. Proven ability to build accessible scalable modern web tools, optimize databases, and collaborate within cross-functional agile sprints.",
            designer: "Creative UI/UX Designer dedicated to crafting functional intuitive user journeys. Experienced in wireframing, high-fidelity responsive design systems, and rapid prototyping workflows.",
            manager: "Strategic Project Manager with a history of delivering complex milestones on time and under budget. Highly skilled in risk management, resource allocation, and team leadership.",
            default: "Motivated and detail-oriented professional offering strong technical foundational skills, a collaborative mindset, and a commitment to driving measurable operational goals."
        },
        description: {
            engineer: "Developed and optimized scalable web software architectures using standard framework tooling. Mentored team components, refactored backend logic arrays, and reduced pipeline latency speeds by 14%.",
            designer: "Led complete visual redesign overhauls matching high accessibility metrics. Built robust cross-functional design system libraries reducing engineering delivery speed requirements significantly.",
            manager: "Managed dynamic cross-functional team sprints through predictable sprint roadmaps. Spearheaded strategic client communications pipelines and minimized critical bottleneck slippages.",
            default: "Collaborated in high-intensity operational ecosystems achieving core pipeline delivery milestones. Streamlined documentation pipelines and automated tracking layouts."
        }
    };
    let matchedCategory = 'default';
    if (cleanTitle.includes('engineer') || cleanTitle.includes('developer') || cleanTitle.includes('tech')) matchedCategory = 'engineer';
    else if (cleanTitle.includes('design') || cleanTitle.includes('ui') || cleanTitle.includes('ux')) matchedCategory = 'designer';
    else if (cleanTitle.includes('manag') || cleanTitle.includes('lead')) matchedCategory = 'manager';

    return mockData[section]?.[matchedCategory] || mockData[section]?.['default'];
}

// ─── Country Codes (phone) ────────────────────────────────────────────────────
function populateCountryOptions() {
    const previous = countryCodeInput.value || 'EG';
    const countryNames = new Intl.DisplayNames([lang], { type: 'region' });
    const options = COUNTRY_OPTIONS.map(item => ({
        ...item,
        name: countryNames.of(item.code) || item.code
    })).sort((a, b) => a.name.localeCompare(b.name, lang));

    countryCodeInput.replaceChildren(...options.map(item => {
        const option = document.createElement('option');
        option.value = item.code;
        option.textContent = `${item.flag} ${item.name} ‎(${item.dial})`;
        return option;
    }));
    setCountrySelection(previous);
}

function getCountryOption(value = countryCodeInput.value) {
    return COUNTRY_OPTIONS.find(item => item.code === value)
        || COUNTRY_OPTIONS.find(item => item.code === 'EG');
}

function setCountrySelection(value) {
    const country = getCountryOption(value);
    countryCodeInput.value = country.code;
}

// ─── Location (city + country list → "City, Country") ────────────────────────
function populateLocationCountries() {
    const previous = locationCountry.value;
    const en  = new Intl.DisplayNames(['en'], { type: 'region' });
    const loc = new Intl.DisplayNames([lang], { type: 'region' });
    const items = COUNTRY_OPTIONS
        .map(c => ({ value: en.of(c.code) || c.code, label: loc.of(c.code) || c.code }))
        .sort((a, b) => a.label.localeCompare(b.label, lang));
    locationCountry.replaceChildren(
        new Option(t('selectCountry'), ''),
        ...items.map(i => new Option(i.label, i.value))
    );
    locationCountry.value = previous;
    if (locationCountry.value !== previous) locationCountry.value = '';
}

function syncLocation() {
    const city = cityInput.value.trim();
    const country = locationCountry.value;
    locationHidden.value = city && country ? `${city}, ${country}` : '';
}

function setLocation(value) {
    const text = String(value || '');
    const cut = text.lastIndexOf(',');
    const city = (cut === -1 ? text : text.slice(0, cut)).trim();
    const country = cut === -1 ? '' : text.slice(cut + 1).trim();
    cityInput.value = city;
    locationCountry.value = Array.from(locationCountry.options).some(o => o.value === country) ? country : '';
    syncLocation();
}

// ─── Session Storage ──────────────────────────────────────────────────────────
function hasStoredSession() {
    return Boolean(localStorage.getItem(STORAGE_KEY));
}

function initDefaultEntries() {
    educationContainer.innerHTML  = '';
    experienceContainer.innerHTML = '';
    projectContainer.innerHTML    = '';
    addEducationEntry();
    addExperienceEntry();
}

function saveFormState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(collectFormData())); } catch (err) { /* ignore */ }
}

function saveSectionCollapseState() {
    const state = {};
    document.querySelectorAll('section.card[data-section]').forEach(section => {
        state[section.dataset.section] = section.classList.contains('collapsed');
    });
    localStorage.setItem(SECTION_COLLAPSE_STORAGE, JSON.stringify(state));
}

function restoreSectionCollapseState() {
    const raw = localStorage.getItem(SECTION_COLLAPSE_STORAGE);
    if (!raw) return;

    try {
        const state = JSON.parse(raw);
        document.querySelectorAll('section.card[data-section]').forEach(section => {
            const collapsed = Boolean(state[section.dataset.section]);
            section.classList.toggle('collapsed', collapsed);
            const button = section.querySelector('.section-collapse-btn');
            if (button) button.setAttribute('aria-expanded', String(!collapsed));
        });
    } catch (err) {
        console.error('Unable to restore section collapse state', err);
    }
}

function toggleSectionCollapse(sectionName) {
    const section = document.querySelector(`section.card[data-section="${sectionName}"]`);
    if (!section) return;

    const hasValidationErrors = Array.from(section.querySelectorAll('input[required], textarea[required]')).some(field => field.classList.contains('is-invalid'));
    if (hasValidationErrors) {
        showToast(t('resolveFirst'));
        return;
    }

    const collapsed = section.classList.toggle('collapsed');
    const button = section.querySelector('.section-collapse-btn');
    if (button) button.setAttribute('aria-expanded', String(!collapsed));
    saveSectionCollapseState();
}

function collectFormData() {
    const experienceEntries = Array.from(experienceContainer.querySelectorAll('.experience-entry')).map(entry => ({
        title:       entry.querySelector('.experience-title')?.value       || '',
        company:     entry.querySelector('.experience-company')?.value     || '',
        start:       entry.querySelector('.experience-start')?.value       || '',
        end:         entry.querySelector('.experience-current')?.checked ? '' : (entry.querySelector('.experience-end')?.value || ''),
        current:     Boolean(entry.querySelector('.experience-current')?.checked),
        duration:    entry.dataset.legacyDuration || '',
        description: entry.querySelector('.experience-description')?.value || ''
    }));

    const educationEntries = Array.from(educationContainer.querySelectorAll('.education-entry')).map(entry => ({
        degree: entry.querySelector('.education-degree')?.value || '',
        school: entry.querySelector('.education-school')?.value || '',
        year:   entry.querySelector('.education-year')?.value   || ''
    }));

    const projectEntries = Array.from(projectContainer.querySelectorAll('.project-entry')).map(entry => ({
        name:        entry.querySelector('.project-name')?.value        || '',
        tech:        entry.querySelector('.project-tech')?.value        || '',
        url:         entry.querySelector('.project-url')?.value         || '',
        description: entry.querySelector('.project-description')?.value || ''
    }));

    return {
        fullName:        document.getElementById('fullName').value,
        email:           document.getElementById('email').value,
        phone:           document.getElementById('phone').value,
        countryCode:     countryCodeInput.value,
        location:        locationHidden.value,
        summary:         document.getElementById('summary').value,
        experiences:     experienceEntries,
        educations:      educationEntries,
        projects:        projectEntries,
        skills:          skillsList,
        certifications:  document.getElementById('certifications').value,
        languages:       document.getElementById('languages').value,
        theme:           selectedTheme,
        template:        templateSelect.value,
        sectionOrder:    sectionOrder.slice(),
        descPreferences: Array.from(document.querySelectorAll('input[name="descPreference"]:checked')).map(i => i.value)
    };
}

// Fill the whole form from a data object (restore, import, undo, language change).
// layout: also apply the saved template + section order (only for JSON imports).
function loadFormData(d, { theme = false, layout = false, save = true } = {}) {
    document.getElementById('fullName').value       = d.fullName    || '';
    document.getElementById('email').value          = d.email       || '';
    document.getElementById('phone').value          = d.phone       || '';
    setCountrySelection(d.countryCode || 'EG');
    setLocation(d.location);
    document.getElementById('summary').value        = d.summary     || '';
    document.getElementById('certifications').value = d.certifications || '';
    document.getElementById('languages').value      = d.languages   || '';

    const prefs = Array.isArray(d.descPreferences) ? d.descPreferences : [];
    document.querySelectorAll('input[name="descPreference"]').forEach(input => {
        input.checked = prefs.includes(input.value);
    });

    educationContainer.innerHTML = '';
    (Array.isArray(d.educations) && d.educations.length ? d.educations : [{}]).forEach(item => addEducationEntry(item));

    experienceContainer.innerHTML = '';
    (Array.isArray(d.experiences) && d.experiences.length ? d.experiences : [{}]).forEach(item => addExperienceEntry(item));

    projectContainer.innerHTML = '';
    if (Array.isArray(d.projects)) d.projects.forEach(item => addProjectEntry(item));

    skillsList = [];
    skillTagsContainer.innerHTML = '';
    if (Array.isArray(d.skills)) {
        d.skills.forEach(s => {
            if (s && s.name) addSkillToList(s.name, s.level || 'Intermediate');
        });
    }
    syncSkillsHidden();

    if (layout) {
        if (TEMPLATES.includes(d.template)) setTemplate(d.template);
        if (isValidOrder(d.sectionOrder)) {
            sectionOrder = d.sectionOrder.slice();
            saveSectionOrder();
            renderSectionOrder();
        }
    }
    if (theme && d.theme) applyTheme(d.theme);

    updateCharCounter(document.getElementById('summary'));
    updatePlaceholderForJobPreferences();
    renumberEntries();
    if (save) saveFormState();
    updatePreview();
    updateProgress();
}

function hydrateFromStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) { initDefaultEntries(); return; }

    try {
        const d = JSON.parse(raw);
        if (!d) { initDefaultEntries(); return; }
        loadFormData(d);
    } catch (err) {
        console.error('Unable to restore saved CV data', err);
    }
}

function restoreSession() {
    hydrateFromStorage();
    restoreBanner.hidden = true;
    updatePreview();
    updateProgress();
}

function discardSession() {
    localStorage.removeItem(STORAGE_KEY);
    restoreBanner.hidden = true;
    skillsList = [];
    skillTagsContainer.innerHTML = '';
    syncSkillsHidden();
    initDefaultEntries();
    updatePreview();
    updateProgress();
}

function hardClearForm() {
    form.reset();
    setCountrySelection('EG');
    setLocation('');   // hidden inputs keep their value through form.reset()
    localStorage.removeItem(STORAGE_KEY);
    skillsList = [];
    skillTagsContainer.innerHTML = '';
    syncSkillsHidden();
    educationContainer.innerHTML  = '';
    experienceContainer.innerHTML = '';
    projectContainer.innerHTML    = '';
    addEducationEntry();
    addExperienceEntry();
    removeAvatar();
    document.querySelectorAll('.field-error, .ai-warning').forEach(el => { el.textContent = ''; });
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    updateCharCounter(document.getElementById('summary'));
    updatePreview();
    updateProgress();
}

function clearFormWithUndo() {
    const snapshot = {
        data: collectFormData(),
        avatar: localStorage.getItem(AVATAR_STORAGE)
    };
    hardClearForm();
    showToast(t('formCleared'), {
        actionLabel: t('undo'),
        duration: 8000,
        onAction: () => undoClear(snapshot)
    });
}

function undoClear(snapshot) {
    loadFormData(snapshot.data);
    if (snapshot.avatar) {
        setAvatar(snapshot.avatar);
        try { localStorage.setItem(AVATAR_STORAGE, snapshot.avatar); } catch (err) { /* ignore */ }
    }
    showToast(t('restored'));
}

// ─── Dynamic Entries ──────────────────────────────────────────────────────────
function entryHeaderHtml(kind, n) {
    return `
        <div class="entry-header">
            <h3>${escapeHtml(t(kind + 'N', { n }))}</h3>
            <div class="entry-actions">
                <button type="button" class="move-entry-btn secondary-btn" data-dir="up" aria-label="${escapeHtml(t('moveEntryUp'))}">↑</button>
                <button type="button" class="move-entry-btn secondary-btn" data-dir="down" aria-label="${escapeHtml(t('moveEntryDown'))}">↓</button>
                <button type="button" class="remove-entry-btn secondary-btn">${escapeHtml(t('remove'))}</button>
            </div>
        </div>`;
}

function renumberEntries() {
    [['experience', experienceContainer], ['education', educationContainer], ['project', projectContainer]].forEach(([kind, container]) => {
        container.querySelectorAll(':scope > .entry-card').forEach((entry, i) => {
            const heading = entry.querySelector('.entry-header h3');
            if (heading) heading.textContent = t(kind + 'N', { n: i + 1 });
        });
    });
}

function moveEntry(btn) {
    const entry = btn.closest('.entry-card');
    if (!entry) return;
    const goingUp = btn.dataset.dir === 'up';
    const sibling = goingUp ? entry.previousElementSibling : entry.nextElementSibling;
    if (!sibling) return;
    if (goingUp) entry.parentElement.insertBefore(entry, sibling);
    else entry.parentElement.insertBefore(sibling, entry);
    renumberEntries();
    saveFormState();
    updatePreview();
    btn.focus();
}

function addExperienceEntry(data = {}) {
    const idx   = experienceContainer.querySelectorAll(':scope > .experience-entry').length + 1;
    const entry = document.createElement('div');
    entry.className = 'entry-card experience-entry';
    if (data.duration && !data.start && !data.end && !data.current) {
        entry.dataset.legacyDuration = data.duration;   // old free-text dates, kept until new dates are set
    }
    entry.innerHTML = `
        ${entryHeaderHtml('experience', idx)}
        <div class="form-group">
            <label>${escapeHtml(t('jobTitle'))}</label>
            <input type="text" class="experience-title" maxlength="80" value="${escapeHtml(data.title || '')}" placeholder="${escapeHtml(t('jobTitlePh'))}">
        </div>
        <div class="form-group">
            <label>${escapeHtml(t('company'))}</label>
            <input type="text" class="experience-company" maxlength="80" value="${escapeHtml(data.company || '')}" placeholder="${escapeHtml(t('companyPh'))}">
        </div>
        <div class="date-row">
            <div class="form-group">
                <label>${escapeHtml(t('startDate'))}</label>
                <input type="month" class="experience-start" dir="ltr" value="${escapeHtml(data.start || '')}" placeholder="YYYY-MM" pattern="\\d{4}-\\d{2}">
            </div>
            <div class="form-group">
                <label>${escapeHtml(t('endDate'))} <span class="optional-tag">${escapeHtml(t('optional'))}</span></label>
                <input type="month" class="experience-end" dir="ltr" value="${escapeHtml(data.current ? '' : (data.end || ''))}" placeholder="YYYY-MM" pattern="\\d{4}-\\d{2}">
            </div>
        </div>
        <div class="form-group">
            <label class="switch-label">
                <input type="checkbox" class="experience-current" ${data.current ? 'checked' : ''}>
                <span>${escapeHtml(t('currentJob'))}</span>
            </label>
        </div>
        <div class="form-group">
            <label>${escapeHtml(t('jobDesc'))}</label>
            <textarea class="experience-description" placeholder="${escapeHtml(t('describePh'))}" maxlength="800">${escapeHtml(data.description || '')}</textarea>
            <div class="char-counter exp-char-counter"></div>
            <button type="button" class="ai-enhance-btn secondary-btn">${escapeHtml(t('aiEnhance'))}</button>
            <div class="ai-warning exp-ai-warning"></div>
        </div>
    `;

    const start   = entry.querySelector('.experience-start');
    const end     = entry.querySelector('.experience-end');
    const current = entry.querySelector('.experience-current');
    end.disabled = current.checked;
    if (start.value) end.min = start.value;

    // char counter for this textarea
    const ta = entry.querySelector('.experience-description');
    const counter = entry.querySelector('.exp-char-counter');
    const updateCounter = () => { counter.textContent = t('chars', { n: ta.value.length, max: 800 }); };
    ta.addEventListener('input', updateCounter);
    updateCounter();

    // AI enhance for this specific entry
    const aiBtn = entry.querySelector('.ai-enhance-btn');
    aiBtn.addEventListener('click', () => enhanceText(null, aiBtn, ta, entry.querySelector('.exp-ai-warning')));

    experienceContainer.appendChild(entry);
    renumberEntries();
    updatePlaceholderForJobPreferences();
    updatePreview();
}

function handleDateFields(el) {
    const entry   = el.closest('.experience-entry');
    const start   = entry.querySelector('.experience-start');
    const end     = entry.querySelector('.experience-end');
    const current = entry.querySelector('.experience-current');
    const monthRe = /^\d{4}-\d{2}$/;

    if (el === current) {
        end.disabled = current.checked;
        if (current.checked) end.value = '';
    }
    if (start.value || end.value || current.checked) delete entry.dataset.legacyDuration;

    if (start.value) end.min = start.value; else end.removeAttribute('min');
    if (monthRe.test(start.value) && monthRe.test(end.value) && end.value < start.value) {
        end.value = '';
        showToast(t('endBeforeStart'));
    }
}

function addEducationEntry(data = {}) {
    const idx   = educationContainer.querySelectorAll(':scope > .education-entry').length + 1;
    const entry = document.createElement('div');
    entry.className = 'entry-card education-entry';
    entry.innerHTML = `
        ${entryHeaderHtml('education', idx)}
        <div class="form-group">
            <label>${escapeHtml(t('degree'))}</label>
            <input type="text" class="education-degree" maxlength="80" value="${escapeHtml(data.degree || '')}" placeholder="${escapeHtml(t('degreePh'))}">
        </div>
        <div class="form-group">
            <label>${escapeHtml(t('school'))}</label>
            <input type="text" class="education-school" maxlength="80" value="${escapeHtml(data.school || '')}" placeholder="${escapeHtml(t('schoolPh'))}">
        </div>
        <div class="form-group">
            <label>${escapeHtml(t('gradYear'))}</label>
            <input type="number" class="education-year" dir="ltr" value="${escapeHtml(data.year || '')}" placeholder="${escapeHtml(t('gradYearPh'))}" min="1950" max="2100" step="1" inputmode="numeric">
        </div>
    `;
    educationContainer.appendChild(entry);
    renumberEntries();
    updatePreview();
}

function addProjectEntry(data = {}) {
    const idx   = projectContainer.querySelectorAll(':scope > .project-entry').length + 1;
    const entry = document.createElement('div');
    entry.className = 'entry-card project-entry';
    entry.innerHTML = `
        ${entryHeaderHtml('project', idx)}
        <div class="form-group">
            <label>${escapeHtml(t('projectName'))}</label>
            <input type="text" class="project-name" maxlength="80" value="${escapeHtml(data.name || '')}" placeholder="${escapeHtml(t('projectNamePh'))}">
        </div>
        <div class="form-group">
            <label>${escapeHtml(t('tech'))}</label>
            <input type="text" class="project-tech" maxlength="100" value="${escapeHtml(data.tech || '')}" placeholder="${escapeHtml(t('techPh'))}">
        </div>
        <div class="form-group">
            <label>${escapeHtml(t('projectUrl'))} <span class="optional-tag">${escapeHtml(t('optional'))}</span></label>
            <input type="url" class="project-url" dir="ltr" maxlength="200" value="${escapeHtml(data.url || '')}" placeholder="https://github.com/you/project">
        </div>
        <div class="form-group">
            <label>${escapeHtml(t('projectDesc'))}</label>
            <textarea class="project-description" placeholder="${escapeHtml(t('projectDescPh'))}" maxlength="500">${escapeHtml(data.description || '')}</textarea>
            <div class="char-counter proj-char-counter"></div>
        </div>
    `;
    const ta      = entry.querySelector('.project-description');
    const counter = entry.querySelector('.proj-char-counter');
    const updateCounter = () => { counter.textContent = t('chars', { n: ta.value.length, max: 500 }); };
    ta.addEventListener('input', updateCounter);
    updateCounter();

    projectContainer.appendChild(entry);
    renumberEntries();
    updatePreview();
}

// ─── Skills Tag Input ─────────────────────────────────────────────────────────
function addSkillTag() {
    const name  = skillInput.value.trim();
    const level = skillLevel.value;
    if (!name) return;
    if (skillsList.some(s => s.name.toLowerCase() === name.toLowerCase())) {
        showToast(t('skillExists'));
        return;
    }
    addSkillToList(name, level);
    skillInput.value = '';
    syncSkillsHidden();
    saveFormState();
    updatePreview();
    updateProgress();
}

function addSkillToList(name, level) {
    skillsList.push({ name, level });
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.dataset.name = name;
    tag.innerHTML = `
        <span class="skill-tag-name">${escapeHtml(name)}</span>
        <span class="skill-tag-level skill-level-${level.toLowerCase()}">${escapeHtml(t('lvl.' + level))}</span>
        <button type="button" class="skill-tag-remove" aria-label="${escapeHtml(t('removeSkill', { name }))}">×</button>
    `;
    tag.querySelector('.skill-tag-remove').addEventListener('click', () => {
        skillsList = skillsList.filter(s => s.name !== name);
        tag.remove();
        syncSkillsHidden();
        saveFormState();
        updatePreview();
        updateProgress();
    });
    skillTagsContainer.appendChild(tag);
}

function syncSkillsHidden() {
    skillsHidden.value = skillsList.map(s => `${s.name} (${s.level})`).join(', ');
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        const dataUrl = e.target.result;
        setAvatar(dataUrl);
        try {
            localStorage.setItem(AVATAR_STORAGE, dataUrl);
        } catch (err) {
            showToast(t('photoTooBig'));
        }
    };
    reader.readAsDataURL(file);
}

function setAvatar(dataUrl) {
    avatarPreview.innerHTML = `<img src="${dataUrl}" alt="" class="avatar-img">`;
    cvAvatar.src    = dataUrl;
    cvAvatar.hidden = false;
    removeAvatarBtn.hidden = false;
    updateProgress();
}

function removeAvatar() {
    avatarPreview.innerHTML = `<span class="avatar-placeholder">${escapeHtml(t('noPhoto'))}</span>`;
    cvAvatar.src    = '';
    cvAvatar.hidden = true;
    removeAvatarBtn.hidden = true;
    avatarUpload.value = '';
    localStorage.removeItem(AVATAR_STORAGE);
    updateProgress();
}

function restoreAvatarFromStorage() {
    const saved = localStorage.getItem(AVATAR_STORAGE);
    if (saved) setAvatar(saved);
}

// ─── Char Counter ─────────────────────────────────────────────────────────────
function updateCharCounter(field) {
    if (!field || !field.id) return;
    const counter = document.querySelector(`[data-counter-for="${field.id}"]`);
    if (!counter) return;
    const max = Number(field.getAttribute('maxlength')) || 600;
    counter.textContent = t('chars', { n: field.value.length, max });
    counter.classList.toggle('counter-warn', field.value.length > max * 0.9);
}

// ─── Job Description Preferences Placeholder ─────────────────────────────────
function updatePlaceholderForJobPreferences() {
    const checked = Array.from(document.querySelectorAll('input[name="descPreference"]:checked')).map(i => i.value);
    const keys = {
        achievements:     'prefPhAch',
        responsibilities: 'prefPhResp',
        impact:           'prefPhImpact',
        skills:           'prefPhSkills'
    };
    const text = checked.map(k => keys[k] && t(keys[k])).filter(Boolean).join(' ') || t('describePh');
    experienceContainer.querySelectorAll('.experience-description').forEach(ta => {
        ta.placeholder = text;
    });
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validateField(field) {
    if (field === locationHidden) {
        const ok = Boolean(field.value);
        const err = document.querySelector('[data-error-for="location"]');
        if (err) err.textContent = ok ? '' : t('locationInvalid');
        [cityInput, locationCountry, field].forEach(el => el.classList.toggle('is-invalid', !ok));
        return ok;
    }

    const errorTarget = field.id ? document.querySelector(`[data-error-for="${field.id}"]`) : null;
    if (field.required && !field.value.trim()) {
        if (errorTarget) errorTarget.textContent = t('required');
        field.classList.add('is-invalid');
        return false;
    }

    if (!field.validity.valid) {
        if (errorTarget) {
            errorTarget.textContent = field.type === 'email'
                ? t('invalidEmail')
                : field.type === 'tel'
                    ? (field.validity.tooShort ? t('phoneShort') : t('phoneDigits'))
                    : field.id === 'fullName'
                        ? t('nameInvalid')
                        : field.validationMessage;
        }
        field.classList.add('is-invalid');
        return false;
    }

    if (errorTarget) errorTarget.textContent = '';
    field.classList.remove('is-invalid');
    return true;
}

function validateForm() {
    let valid = true;
    form.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
        if (!validateField(field)) valid = false;
    });
    const firstInvalid = form.querySelector('.is-invalid');
    if (firstInvalid) firstInvalid.focus();
    return valid;
}

// ─── Progress ─────────────────────────────────────────────────────────────────
function getProgressState() {
    const requiredFields = [
        { label: t('fullName'), value: document.getElementById('fullName').value.trim() },
        { label: t('email'), value: document.getElementById('email').value.trim() },
        { label: t('phone'), value: document.getElementById('phone').value.trim() },
        { label: t('location'), value: locationHidden.value.trim() },
        { label: t('summary'), value: document.getElementById('summary').value.trim() },
        { label: t('education'), value: educationContainer.querySelector('.education-degree')?.value.trim() || '' },
        { label: t('expSection'), value: experienceContainer.querySelector('.experience-title')?.value.trim() || '' },
        { label: t('skills'), value: skillsList.length > 0 ? 'ok' : '' }
    ];

    const missingRequiredFields = requiredFields.filter(field => !field.value).map(field => field.label);
    const filled  = requiredFields.length - missingRequiredFields.length;
    const pct     = Math.round((filled / requiredFields.length) * 100);

    return { requiredFields, missingRequiredFields, filled, pct };
}

function updateProgress() {
    const { missingRequiredFields, pct } = getProgressState();
    progressBar.style.width = `${pct}%`;
    progressLabel.textContent = t('percentComplete', { n: pct });
    progressBar.classList.toggle('progress-done', pct === 100);
    requiredFieldsLeft.textContent = missingRequiredFields.length
        ? t('missing', { list: missingRequiredFields.join(lang === 'ar' ? '، ' : ', ') })
        : t('allComplete');
}

// ─── Dates ────────────────────────────────────────────────────────────────────
function formatMonth(value) {
    const match = /^(\d{4})-(\d{2})$/.exec(value || '');
    if (!match) return value || '';
    const date = new Date(Number(match[1]), Number(match[2]) - 1, 1);
    const locale = lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US';
    return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
}

function formatRange(start, end, current, legacy) {
    const from = formatMonth(start);
    const to = current ? t('present') : formatMonth(end);
    if (from && to) return `${from} – ${to}`;
    return from || to || legacy || '';
}

function readExperienceEntry(entry) {
    return {
        title:       entry.querySelector('.experience-title')?.value       || '',
        company:     entry.querySelector('.experience-company')?.value     || '',
        range:       formatRange(
                        entry.querySelector('.experience-start')?.value || '',
                        entry.querySelector('.experience-end')?.value || '',
                        Boolean(entry.querySelector('.experience-current')?.checked),
                        entry.dataset.legacyDuration || ''),
        description: entry.querySelector('.experience-description')?.value || ''
    };
}

// ─── Live Preview ─────────────────────────────────────────────────────────────
function updatePreview() {
    const fullName     = document.getElementById('fullName').value.trim()   || t('yourName');
    const email        = document.getElementById('email').value.trim();
    const phone        = document.getElementById('phone').value.trim();
    const countryCode  = getCountryOption().dial;
    const location     = locationHidden.value.trim();
    const summary      = document.getElementById('summary').value.trim()    || t('phSummary');
    const certifications = document.getElementById('certifications').value.split(/[,،]/).map(s => s.trim()).filter(Boolean);
    const languages      = document.getElementById('languages').value.split(/[,،]/).map(s => s.trim()).filter(Boolean);

    // Experience
    const experienceMarkup = Array.from(experienceContainer.querySelectorAll('.experience-entry')).map(entry => {
        const { title, company, range, description } = readExperienceEntry(entry);
        if (!title && !company) return '';
        return `
            <div class="cv-exp-block">
                <div class="cv-exp-header">
                    <strong>${escapeHtml(title || t('role'))}</strong>${company ? `<span> ${escapeHtml(t('at'))} ${escapeHtml(company)}</span>` : ''}
                    ${range ? `<span class="cv-duration">${escapeHtml(range)}</span>` : ''}
                </div>
                ${description ? `<p class="cv-exp-desc">${escapeHtml(description)}</p>` : ''}
            </div>
        `;
    }).join('');

    // Education
    const educationMarkup = Array.from(educationContainer.querySelectorAll('.education-entry')).map(entry => {
        const degree = entry.querySelector('.education-degree')?.value || '';
        const school = entry.querySelector('.education-school')?.value || '';
        const year   = entry.querySelector('.education-year')?.value   || '';
        if (!degree && !school) return '';
        return `<li><strong>${escapeHtml(degree || t('degreeWord'))}</strong>${school ? ` • ${escapeHtml(school)}` : ''}${year ? ` • ${escapeHtml(year)}` : ''}</li>`;
    }).join('');

    // Projects
    const projectsMarkup = Array.from(projectContainer.querySelectorAll('.project-entry')).map(entry => {
        const name        = entry.querySelector('.project-name')?.value        || '';
        const tech        = entry.querySelector('.project-tech')?.value        || '';
        const url         = entry.querySelector('.project-url')?.value         || '';
        const description = entry.querySelector('.project-description')?.value || '';
        if (!name) return '';
        const safeUrl = /^https?:\/\//i.test(url) ? url : '';
        return `
            <div class="cv-exp-block">
                <div class="cv-exp-header">
                    <strong>${escapeHtml(name)}</strong>
                    ${tech ? `<span class="cv-duration">${escapeHtml(tech)}</span>` : ''}
                    ${safeUrl ? `<a href="${escapeHtml(safeUrl)}" class="cv-project-link" dir="ltr" target="_blank" rel="noopener">${escapeHtml(safeUrl)}</a>` : ''}
                </div>
                ${description ? `<p class="cv-exp-desc">${escapeHtml(description)}</p>` : ''}
            </div>
        `;
    }).join('');

    // Skills
    const skillsMarkup = skillsList.length
        ? `<ul class="skills-list">${skillsList.map(s =>
            `<li><span class="skill-name">${escapeHtml(s.name)}</span><span class="skill-badge skill-badge-${s.level.toLowerCase()}">${escapeHtml(t('lvl.' + s.level))}</span></li>`
          ).join('')}</ul>`
        : `<p>${escapeHtml(t('phSkills'))}</p>`;

    // Update DOM
    document.getElementById('cvName').textContent     = fullName;
    document.getElementById('cvContact').textContent  = [email, phone ? `${countryCode} ${phone}` : ''].filter(Boolean).join(' • ');
    document.getElementById('cvLocation').textContent = location;
    document.getElementById('cvSummary').textContent  = summary;
    document.getElementById('cvEducation').innerHTML  = `<ul class="bullet-list">${educationMarkup || `<li>${escapeHtml(t('phEducation'))}</li>`}</ul>`;
    document.getElementById('cvExperience').innerHTML = experienceMarkup || `<p>${escapeHtml(t('phExperience'))}</p>`;
    document.getElementById('cvSkills').innerHTML     = skillsMarkup;
    document.getElementById('cvCertifications').innerHTML = certifications.length
        ? `<ul class="bullet-list">${certifications.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
        : `<p>${escapeHtml(t('phCerts'))}</p>`;
    document.getElementById('cvLanguages').innerHTML = languages.length
        ? `<ul class="bullet-list">${languages.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
        : `<p>${escapeHtml(t('phLangs'))}</p>`;

    // Projects section — hide if empty
    const cvProjectsSection = document.getElementById('cvSecProjects');
    if (projectsMarkup.trim()) {
        document.getElementById('cvProjects').innerHTML = projectsMarkup;
        cvProjectsSection.hidden = false;
    } else {
        cvProjectsSection.hidden = true;
    }
}

// ─── Copy / Share / Export ────────────────────────────────────────────────────
function copyCvAsText() {
    const text = buildCvText();
    navigator.clipboard.writeText(text).then(() => {
        showToast(t('cvCopied'));
    }).catch(() => {
        showToast(t('copyFailed'));
    });
}

function copyTextToClipboard(text) {
    const copyWithNavigator = () => navigator.clipboard.writeText(text);

    return copyWithNavigator().catch(() => {
        const temp = document.createElement('textarea');
        temp.value = text;
        temp.setAttribute('readonly', '');
        temp.style.position = 'fixed';
        temp.style.left = '-9999px';
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
    });
}

function copyFormAsJson() {
    const data = collectFormData();
    copyTextToClipboard(JSON.stringify(data, null, 2)).then(() => {
        showToast(t('jsonCopied'));
    }).catch(() => {
        showToast(t('jsonCopyFailed'));
    });
}

function handleJsonImport(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const parsed = JSON.parse(e.target.result);
            if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON');
            const requiredKeys = ['fullName', 'email', 'phone', 'location', 'summary', 'experiences', 'educations', 'projects', 'skills', 'theme', 'descPreferences'];
            const missing = requiredKeys.filter(key => !(key in parsed));
            if (missing.length) {
                showToast(t('importMissing', { list: missing.join(', ') }));
                return;
            }
            loadFormData(parsed, { theme: true, layout: true });
            showToast(t('importOk'));
        } catch (err) {
            showToast(t('importBad'));
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function shareViaGmail() {
    const text    = buildCvText();
    const name    = document.getElementById('fullName').value.trim() || t('defaultUser');
    const subject = t('cvSubject', { name });
    const body    = encodeURIComponent(text);
    const gmail   = `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(subject)}&body=${body}`;
    const mailto  = `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;
    if (!window.open(gmail, '_blank')) window.location.href = mailto;
}

function exportPdf() {
    const previousTitle = document.title;
    const fullName = document.getElementById('fullName').value.trim();
    document.title = fullName ? `${fullName} - CV` : 'CV';
    window.addEventListener('afterprint', function restoreTitle() {
        document.title = previousTitle;
    }, { once: true });
    window.print();
}

// ─── Build CV Text ────────────────────────────────────────────────────────────
function buildCvText() {
    const fullName    = document.getElementById('fullName').value.trim()   || t('yourName');
    const email       = document.getElementById('email').value.trim();
    const phone       = document.getElementById('phone').value.trim();
    const countryCode = getCountryOption().dial;
    const location    = locationHidden.value.trim();
    const summary     = document.getElementById('summary').value.trim();
    const certifications = document.getElementById('certifications').value.trim() || t('txtNone');
    const languages      = document.getElementById('languages').value.trim()      || t('txtNotSpecified');

    const hr = '─'.repeat(50);
    const section = (title, body) => [hr, title.toUpperCase(), hr, body].join('\n');

    const experiences = Array.from(experienceContainer.querySelectorAll('.experience-entry')).map(entry => {
        const { title, company, range, description } = readExperienceEntry(entry);
        const header = [title, company && `${t('at')} ${company}`, range && `(${range})`].filter(Boolean).join(' ');
        return `  • ${header}${description ? `\n    ${description}` : ''}`;
    }).join('\n');

    const educations = Array.from(educationContainer.querySelectorAll('.education-entry')).map(entry => {
        const degree = entry.querySelector('.education-degree')?.value || '';
        const school = entry.querySelector('.education-school')?.value || '';
        const year   = entry.querySelector('.education-year')?.value   || '';
        return `  • ${[degree, school, year].filter(Boolean).join(', ')}`;
    }).join('\n');

    const projects = Array.from(projectContainer.querySelectorAll('.project-entry')).map(entry => {
        const name        = entry.querySelector('.project-name')?.value        || '';
        const tech        = entry.querySelector('.project-tech')?.value        || '';
        const url         = entry.querySelector('.project-url')?.value         || '';
        const description = entry.querySelector('.project-description')?.value || '';
        if (!name) return '';
        const header      = [name, tech && `[${tech}]`, url].filter(Boolean).join('  ');
        return `  • ${header}${description ? `\n    ${description}` : ''}`;
    }).filter(Boolean).join('\n');

    const skillsText = skillsList.length
        ? skillsList.map(s => `  • ${s.name} — ${t('lvl.' + s.level)}`).join('\n')
        : `  • ${t('txtAddSkills')}`;

    const blocks = {
        summary:        section(t('summary'), summary || t('txtNotProvided')),
        education:      section(t('education'), educations || `  • ${t('txtNotProvided')}`),
        experience:     section(t('cvExperience'), experiences || `  • ${t('txtNotProvided')}`),
        projects:       projects ? section(t('projects'), projects) : '',
        skills:         section(t('skills'), skillsText),
        certifications: section(t('certs'), `  ${certifications}`),
        languages:      section(t('langs'), `  ${languages}`)
    };

    const head = [
        fullName,
        [email, phone ? `${countryCode} ${phone}` : '', location].filter(Boolean).join('  |  '),
        ''
    ].join('\n');

    return head + '\n' + sectionOrder.map(key => blocks[key]).filter(Boolean).join('\n\n');
}

// ─── AI Enhancement ───────────────────────────────────────────────────────────
async function enhanceText(targetId, btn, directTextarea = null, directWarning = null) {
    const textarea     = directTextarea || (targetId ? document.getElementById(targetId) : null);
    const warningTarget = directWarning || (targetId ? document.querySelector(`[data-warning-for="${targetId}"]`) : null);
    if (!textarea) return;

    const text = textarea.value.trim();
    if (!text) {
        if (warningTarget) warningTarget.textContent = t('enhanceEmpty');
        return;
    }

    const isDemoActive = localStorage.getItem(DEMO_MODE_STORAGE) === 'true';
    const savedKey = localStorage.getItem(API_KEY_STORAGE);
    if (!savedKey && !isDemoActive) {
        showApiKeyHelp(warningTarget, t('noKeyHelp'));
        return;
    }

    // Loading state
    if (btn) {
        btn.disabled     = true;
        btn.textContent  = t('enhancing');
    }
    if (warningTarget) warningTarget.textContent = '';
    const skeleton = showSkeletonOverlay(textarea);

    if (isDemoActive) {
        const section = targetId === 'summary' ? 'summary' : 'description';
        const jobTitle = targetId === 'summary'
            ? (document.getElementById('fullName')?.value || 'professional')
            : textarea.closest('.experience-entry')?.querySelector('.experience-title')?.value || 'professional';
        const improved = getResumeAIPrediction(jobTitle, section);

        textarea.value = improved;
        updateCharCounter(textarea);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        showToast(t('demoDone'));

        if (btn) {
            btn.disabled    = false;
            btn.textContent = t('aiEnhance');
        }
        hideSkeletonOverlay(skeleton, textarea);
        return;
    }

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type':     'application/json',
                'x-api-key':        savedKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true'
            },
            body: JSON.stringify({
                model:      'claude-sonnet-4-6',
                max_tokens: 1000,
                system:     'You are a professional CV writer for CraftCV. Rewrite the following text to sound polished, professional, and impactful. Keep it concise. Reply in the same language as the input text (for example Arabic stays Arabic). Return only the improved text, no explanations.',
                messages:   [{ role: 'user', content: text }]
            })
        });

        if (response.status === 401 || response.status === 403) {
            showApiKeyHelp(warningTarget, t('badKeyHelp'));
            return;
        }
        if (response.status === 429) {
            if (warningTarget) warningTarget.textContent = t('rateLimit');
            return;
        }
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

        const data        = await response.json();
        const improved    = data.content?.[0]?.text?.trim() || '';
        if (improved) {
            textarea.value = improved;
            if (warningTarget) warningTarget.textContent = '';
            updateCharCounter(textarea);
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            showToast(t('enhanced'));
        }
    } catch (err) {
        if (warningTarget) warningTarget.textContent = t('enhanceFail');
    } finally {
        if (btn) {
            btn.disabled    = false;
            btn.textContent = t('aiEnhance');
        }
        hideSkeletonOverlay(skeleton, textarea);
    }
}

// ─── Skeleton Loader ────────────────────────────────────────────────────────
function showSkeletonOverlay(textarea) {
    const parent = textarea.parentElement;
    if (getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
    }
    const overlay = document.createElement('div');
    overlay.className = 'skeleton-overlay';
    overlay.style.top    = textarea.offsetTop + 'px';
    overlay.style.left   = textarea.offsetLeft + 'px';
    overlay.style.width  = textarea.offsetWidth + 'px';
    overlay.style.height = textarea.offsetHeight + 'px';
    overlay.innerHTML =
        '<div class="skeleton-line"></div>' +
        '<div class="skeleton-line"></div>' +
        '<div class="skeleton-line short"></div>';
    parent.appendChild(overlay);
    textarea.style.visibility = 'hidden';
    return overlay;
}

function hideSkeletonOverlay(overlay, textarea) {
    if (overlay) overlay.remove();
    textarea.style.visibility = 'visible';
}

// ─── Toast (optionally with an action button such as Undo) ───────────────────
function showToast(message, options = {}) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');

    const text = document.createElement('span');
    text.textContent = message;
    toast.appendChild(text);

    if (options.actionLabel && options.onAction) {
        const action = document.createElement('button');
        action.type = 'button';
        action.className = 'toast-action';
        action.textContent = options.actionLabel;
        action.addEventListener('click', () => {
            toast.remove();
            options.onAction();
        });
        toast.appendChild(action);
    }

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), options.duration || 2000);
}

// ─── Escape ───────────────────────────────────────────────────────────────────
function escapeHtml(value) {
    return String(value)
        .replace(/&/g,  '&amp;')
        .replace(/</g,  '&lt;')
        .replace(/>/g,  '&gt;')
        .replace(/"/g,  '&quot;')
        .replace(/'/g,  '&#39;');
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
init();
