
// Hey! This is my CraftCV project.
// I built the main app myself and used a little help for repetitive data like translations
// and country names. I removed the AI feature so the project stays simple and privaTE and i del the api btw.
// Hope you enjoy checking it out!
const translations = {
    en: {
        switchDark: 'Switch to dark theme', switchLight: 'Switch to light theme', openSettingsAria: 'Open settings',
        settings: 'Settings', back: '← Back to Builder', language: 'Language', font: 'Font',
        fontNormal: 'Normal text', fontPixel: 'Pixel art text (Peaberry)',
        sectionOrder: 'CV section order', sectionOrderHelp: 'Change the order of sections in your CV preview, copy and PDF.',
        moveUp: 'Move up', moveDown: 'Move down',
        restartDemo: 'Restart Demo',
        restartConfirm: 'Restart the demo? This clears all saved data.',
        appTitle: 'CraftCV Builder', tagline: 'Build a polished CV with live preview and export tools.',
        progressAria: 'CV completion progress', percentComplete: '{n}% complete', missing: 'Missing: {list}',
        allComplete: 'All required fields complete',
        clearTitle: 'Clear the form?', clearBody: 'This will erase everything you entered. You can undo right after.',
        clearYes: 'Yes, clear everything', cancel: 'Cancel',
        personal: 'Personal Information', collapse: 'Collapse', fullName: 'Full Name', email: 'Email', phone: 'Phone',
        countryCode: 'Country code', location: 'Location', city: 'City', selectCountry: 'Select country', country: 'Country',
        photo: 'Profile Photo', optional: 'optional', uploadPhoto: 'Upload Photo', remove: 'Remove', noPhoto: 'No photo',
        summary: 'Professional Summary', sentences: '2–3 sentences', chars: '{n} / {max} characters',
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
        jobDesc: 'Job Description', describePh: 'Describe your role and impact',
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
        skillExists: 'Skill already added.',
        photoTooBig: 'Photo is too large to save. It will be lost on reload.',
        endBeforeStart: 'End date cannot be before the start date.',
        openSettings: 'Open Settings',
        // progress labels use fullName/email/phone/location/summary/education/expSection/skills
    },
    ar: {
        switchDark: 'التبديل إلى الوضع الداكن', switchLight: 'التبديل إلى الوضع الفاتح', openSettingsAria: 'فتح الإعدادات',
        settings: 'الإعدادات', back: '→ العودة إلى المنشئ', language: 'اللغة', font: 'الخط',
        fontNormal: 'نص عادي', fontPixel: 'نص بكسل (Peaberry)',
        sectionOrder: 'ترتيب أقسام السيرة الذاتية', sectionOrderHelp: 'غيّر ترتيب الأقسام في المعاينة والنسخ وملف PDF.',
        moveUp: 'نقل لأعلى', moveDown: 'نقل لأسفل',
        restartDemo: 'إعادة تشغيل العرض',
        restartConfirm: 'إعادة تشغيل العرض؟ سيتم مسح كل البيانات المحفوظة.',
        appTitle: 'منشئ CraftCV', tagline: 'أنشئ سيرة ذاتية أنيقة مع معاينة مباشرة وأدوات تصدير.',
        progressAria: 'تقدم اكتمال السيرة الذاتية', percentComplete: 'اكتمل {n}%', missing: 'ناقص: {list}',
        allComplete: 'كل الحقول المطلوبة مكتملة',
        clearTitle: 'مسح النموذج؟', clearBody: 'سيتم حذف كل ما أدخلته. يمكنك التراجع مباشرة بعد ذلك.',
        clearYes: 'نعم، امسح كل شيء', cancel: 'إلغاء',
        personal: 'المعلومات الشخصية', collapse: 'طي', fullName: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف',
        countryCode: 'رمز الدولة', location: 'الموقع', city: 'المدينة', selectCountry: 'اختر الدولة', country: 'الدولة',
        photo: 'الصورة الشخصية', optional: 'اختياري', uploadPhoto: 'رفع صورة', remove: 'حذف', noPhoto: 'لا توجد صورة',
        summary: 'الملخص المهني', sentences: '2–3 جمل', chars: '{n} / {max} حرف',
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
        jobDesc: 'وصف الوظيفة', describePh: 'صف دورك وأثره',
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
        skillExists: 'المهارة مضافة بالفعل.',
        photoTooBig: 'الصورة كبيرة جداً للحفظ. ستُفقد عند إعادة التحميل.',
        endBeforeStart: 'لا يمكن أن يكون تاريخ النهاية قبل البداية.',
        openSettings: 'فتح الإعدادات',
    }
};

// country list (used for the phone code and the location) ofc i used ai i will not write all this am not crazy

const COUNTRIES = [
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

// helpers

function byId(id) {
    return document.getElementById(id);
}

// localStorage can fail like private mode, storage ful so these never throw
function save(key, value) {
    try { localStorage.setItem(key, value); } catch (error) { /* ignore */ }
}

function load(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
}

// makes user text safe for html
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// small message at the bottom. Pass { label, onClick } to add a button (used for Undo) pretty bloated

function showToast(message, button) {
    const toast = document.createElement('div');
    toast.className = 'toast';

    const text = document.createElement('span');
    text.textContent = message;
    toast.append(text);

    if (button) {
        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.className = 'toast-action';
        buttonElement.textContent = button.label;
        buttonElement.addEventListener('click', () => {
            toast.remove();
            button.onClick();
        });
        toast.append(buttonElement);
    }

    document.body.append(toast);
    setTimeout(() => toast.remove(), button ? 8000 : 2000);
}



const form = byId('cvForm');
const themeButton = byId('themeToggle');
const settingsButton = byId('settingsMenuToggle');
const settingsPage = byId('settingsPage');
const settingsTitle = byId('settingsPageTitle');
const backButton = byId('backToBuilderBtn');
const languageSelect = byId('langSelect');
const fontSelect = byId('fontSelect');
const templateSelect = byId('templateSelect');
const orderList = byId('sectionOrderList');
const restartButton = byId('restartDemoBtn');

const fullNameInput = byId('fullName');
const emailInput = byId('email');
const phoneCodeSelect = byId('countryCodeInput');
const phoneInput = byId('phone');
const cityInput = byId('cityInput');
const countrySelect = byId('locationCountry');
const locationInput = byId('location');         // hidden: holds "City, Country"
const summaryInput = byId('summary');
const certificationsInput = byId('certifications');
const languagesInput = byId('languages');
const photoInput = byId('avatarUpload');
const photoPreview = byId('avatarPreview');
const removePhotoButton = byId('removeAvatarBtn');
const skillInput = byId('skillInput');
const skillLevelSelect = byId('skillLevel');
const skillTagsBox = byId('skillTags');

const educationBox = byId('educationEntries');
const experienceBox = byId('experienceEntries');
const projectBox = byId('projectEntries');

const cvPreview = byId('cvOutput');
const cvPhoto = byId('cvAvatar');
const progressBar = byId('cvProgressBar');
const progressLabel = byId('cvProgressLabel');
const missingLabel = byId('requiredFieldsLeft');

const clearDialog = byId('clearModal');
const importFileInput = byId('importJsonInput');


const KEYS = {
    form: 'craftcv_form_state',
    theme: 'craftcv_theme',
    font: 'craftcv_font',
    language: 'craftcv_lang',
    template: 'craftcv_template',
    order: 'craftcv_section_order',
    photo: 'craftcv_avatar'
};

const SECTIONS = ['summary', 'education', 'experience', 'projects', 'skills', 'certifications', 'languages'];
const TEMPLATES = ['classic', 'modern', 'minimal'];

// current state of the page
let language = 'en';
let theme = 'forest';
let sectionOrder = SECTIONS.slice();
let skills = [];                                // [{ name, level }], level is always English btw



function t(key, values = {}) {
    let text = (translations[language] && translations[language][key]) || translations.en[key] || key;
    for (const name in values) {
        text = text.split('{' + name + '}').join(values[name]);
    }
    return text;
}

// puts the right words into everything marked with data-i18n in the HTML used ai lil
function translatePage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = t('appTitle');

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
}

function changeLanguage(newLanguage) {
    language = newLanguage === 'ar' ? 'ar' : 'en';
    save(KEYS.language, language);

    const data = getFormData();       // entries are rebuilt below, so keep what was typed pls
    translatePage();
    fillPhoneCodes();
    fillCountryList();
    fillForm(data);
    showOrderList();
    setTheme(theme);
    showCount(summaryInput);
    updatePreview();
    updateProgress();
}


function setTheme(name) {
    theme = name === 'dark' ? 'dark' : 'forest';
    document.body.dataset.theme = theme;
    save(KEYS.theme, theme);
    themeButton.setAttribute('aria-checked', String(theme === 'dark'));
    themeButton.setAttribute('aria-label', t(theme === 'dark' ? 'switchLight' : 'switchDark'));
}

function setFont(name) {
    const font = name === 'pixel' ? 'pixel' : 'normal';
    document.body.dataset.font = font;
    fontSelect.value = font;
    save(KEYS.font, font);
}

function setTemplate(name) {
    const template = TEMPLATES.includes(name) ? name : 'classic';
    cvPreview.className = 'cv-output tpl-' + template;
    templateSelect.value = template;
    save(KEYS.template, template);
}


function openSettings() {
    settingsPage.hidden = false;
    document.body.dataset.page = 'settings';
    window.scrollTo(0, 0);
    settingsTitle.focus({ preventScroll: true });
}

function closeSettings() {
    settingsPage.hidden = true;
    delete document.body.dataset.page;
    settingsButton.focus();
}

function restartEverything() {
    if (!window.confirm(t('restartConfirm'))) return;
    localStorage.clear();
    window.location.reload();
}


function savedOrder() {
    try {
        const order = JSON.parse(load(KEYS.order));
        if (isGoodOrder(order)) return order;
    } catch (error) { /* use the default btw */ }
    return SECTIONS.slice();
}

// a good order has every section exactly once
function isGoodOrder(order) {
    return Array.isArray(order) && order.length === SECTIONS.length && SECTIONS.every(name => order.includes(name));
}

// shows the list in Settings and puts the CV sections in that order
function showOrderList() {
    orderList.innerHTML = '';
    sectionOrder.forEach((name, position) => {
        const item = document.createElement('li');
        item.className = 'order-item';
        item.innerHTML = `
            <span>${escapeHtml(t('sec.' + name))}</span>
            <span class="entry-actions">
                <button type="button" class="secondary-btn" data-name="${name}" data-move="up" aria-label="${escapeHtml(t('moveUp'))}" ${position === 0 ? 'disabled' : ''}>↑</button>
                <button type="button" class="secondary-btn" data-name="${name}" data-move="down" aria-label="${escapeHtml(t('moveDown'))}" ${position === sectionOrder.length - 1 ? 'disabled' : ''}>↓</button>
            </span>`;
        orderList.append(item);

        // the CV section ids look like cvSecSummary, cvSecEducation
        cvPreview.append(byId('cvSec' + name[0].toUpperCase() + name.slice(1)));
    });
}

function moveSection(button) {
    const from = sectionOrder.indexOf(button.dataset.name);
    const to = button.dataset.move === 'up' ? from - 1 : from + 1;
    if (to < 0 || to >= sectionOrder.length) return;

    [sectionOrder[from], sectionOrder[to]] = [sectionOrder[to], sectionOrder[from]];
    save(KEYS.order, JSON.stringify(sectionOrder));
    showOrderList();
    updatePreview();
}

// phone code dropdown: "🇪🇬 Egypt (+20)" used ai ofc its super hard
function fillPhoneCodes() {
    const names = new Intl.DisplayNames([language], { type: 'region' });
    const before = phoneCodeSelect.value || 'EG';

    const sorted = COUNTRIES
        .map(country => ({ ...country, name: names.of(country.code) || country.code }))
        .sort((a, b) => a.name.localeCompare(b.name, language));

    phoneCodeSelect.replaceChildren(...sorted.map(country =>
        new Option(`${country.flag} ${country.name} ‎(${country.dial})`, country.code)));
    phoneCodeSelect.value = before;
}

function getDialCode() {
    const country = COUNTRIES.find(c => c.code === phoneCodeSelect.value) || COUNTRIES.find(c => c.code === 'EG');
    return country.dial;
}

// location dropdown. The saved value is the English name, the shown name follows the language
function fillCountryList() {
    const english = new Intl.DisplayNames(['en'], { type: 'region' });
    const shown = new Intl.DisplayNames([language], { type: 'region' });
    const before = countrySelect.value;

    const sorted = COUNTRIES
        .map(country => ({ value: english.of(country.code) || country.code, label: shown.of(country.code) || country.code }))
        .sort((a, b) => a.label.localeCompare(b.label, language));

    countrySelect.replaceChildren(
        new Option(t('selectCountry'), ''),
        ...sorted.map(country => new Option(country.label, country.value)));
    countrySelect.value = before;
    if (countrySelect.value !== before) countrySelect.value = '';
}

// joins the city and country
function updateLocation() {
    const city = cityInput.value.trim();
    locationInput.value = city && countrySelect.value ? city + ', ' + countrySelect.value : '';
}

// it does the opposite
function setLocation(text) {
    text = String(text || '');
    const comma = text.lastIndexOf(',');
    const country = comma === -1 ? '' : text.slice(comma + 1).trim();

    cityInput.value = (comma === -1 ? text : text.slice(0, comma)).trim();
    countrySelect.value = country;
    if (countrySelect.value !== country) countrySelect.value = '';
    updateLocation();
}

// saving and loading

function saveForm() {
    save(KEYS.form, JSON.stringify(getFormData()));
}

function getFormData() {
    return {
        fullName: fullNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        countryCode: phoneCodeSelect.value,
        location: locationInput.value,
        summary: summaryInput.value,
        experiences: getJobs(),
        educations: getSchools(),
        projects: getProjects(),
        skills: skills,
        certifications: certificationsInput.value,
        languages: languagesInput.value,
        theme: theme,
        template: templateSelect.value,
        sectionOrder: sectionOrder.slice(),
        descPreferences: Array.from(document.querySelectorAll('input[name="descPreference"]:checked')).map(box => box.value)
    };
}

// fills the whole form from a data object for ex (used for restore, import, undo and language change) this was kinda 
// hard to do because of the many fields and the fact that some are arrays of objects, 
// so I had to make sure everything is filled correctly and also handle defaults and empty values. 
// I also added options to use the theme and layout from the data if desired.

function fillForm(data, { useTheme = false, useLayout = false } = {}) {
    fullNameInput.value = data.fullName || '';
    emailInput.value = data.email || '';
    phoneInput.value = data.phone || '';
    phoneCodeSelect.value = data.countryCode || 'EG';
    if (!phoneCodeSelect.value) phoneCodeSelect.value = 'EG';
    setLocation(data.location);
    summaryInput.value = data.summary || '';
    certificationsInput.value = data.certifications || '';
    languagesInput.value = data.languages || '';

    const preferences = data.descPreferences || [];
    document.querySelectorAll('input[name="descPreference"]').forEach(box => {
        box.checked = preferences.includes(box.value);
    });

    // at least one education and one job box, projects can be empty lil bit of ai here bec of the conds and strings
    educationBox.innerHTML = '';
    experienceBox.innerHTML = '';
    projectBox.innerHTML = '';
    (data.educations && data.educations.length ? data.educations : [{}]).forEach(addEducation);
    (data.experiences && data.experiences.length ? data.experiences : [{}]).forEach(addExperience);
    (data.projects || []).forEach(addProject);

    skills = (data.skills || []).filter(skill => skill && skill.name);
    showSkillTags();

    if (useTheme && data.theme) setTheme(data.theme);
    if (useLayout) {
        if (data.template) setTemplate(data.template);
        if (isGoodOrder(data.sectionOrder)) {
            sectionOrder = data.sectionOrder.slice();
            save(KEYS.order, JSON.stringify(sectionOrder));
            showOrderList();
        }
    }

    showCount(summaryInput);
    updateDescriptionHints();
    updatePreview();
    updateProgress();
}

function startWithDefaults() {
    fillForm({});
}


function clearForm() {
    const backup = { data: getFormData(), photo: load(KEYS.photo) };

    form.reset();
    phoneCodeSelect.value = 'EG';
    setLocation('');                       // form.reset() doesn't clear hidden inputs btw
    removePhoto();
    localStorage.removeItem(KEYS.form);
    fillForm({});
    document.querySelectorAll('.field-error, .ai-warning').forEach(el => { el.textContent = ''; });
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

    showToast(t('formCleared'), { label: t('undo'), onClick: () => undoClear(backup) });
}

function undoClear(backup) {
    fillForm(backup.data);
    if (backup.photo) {
        showPhoto(backup.photo);
        save(KEYS.photo, backup.photo);
    }
    saveForm();
    showToast(t('restored'));
}



// the top row of everything
function entryHeader(kind, number) {
    return `
        <div class="entry-header">
            <h3>${escapeHtml(t(kind + 'N', { n: number }))}</h3>
            <div class="entry-actions">
                <button type="button" class="move-entry-btn secondary-btn" data-move="up" aria-label="${escapeHtml(t('moveEntryUp'))}">↑</button>
                <button type="button" class="move-entry-btn secondary-btn" data-move="down" aria-label="${escapeHtml(t('moveEntryDown'))}">↓</button>
                <button type="button" class="remove-entry-btn secondary-btn">${escapeHtml(t('remove'))}</button>
            </div>
        </div>`;
}

// gives every entry its number again for ex "Experience 1", "Experience 2" and so on
function renumberEntries() {
    const groups = [['experience', experienceBox], ['education', educationBox], ['project', projectBox]];
    groups.forEach(([kind, box]) => {
        Array.from(box.children).forEach((entry, index) => {
            entry.querySelector('.entry-header h3').textContent = t(kind + 'N', { n: index + 1 });
        });
    });
}

function addEducation(data = {}) {
    const entry = document.createElement('div');
    entry.className = 'entry-card education-entry';
    entry.innerHTML = `
        ${entryHeader('education', educationBox.children.length + 1)}
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
        </div>`;
    educationBox.append(entry);
}

// used ai here

function addExperience(data = {}) {
    const entry = document.createElement('div');
    entry.className = 'entry-card experience-entry';
    entry.innerHTML = `
        ${entryHeader('experience', experienceBox.children.length + 1)}
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
                <input type="month" class="experience-start" dir="ltr" value="${escapeHtml(data.start || '')}">
            </div>
            <div class="form-group">
                <label>${escapeHtml(t('endDate'))} <span class="optional-tag">${escapeHtml(t('optional'))}</span></label>
                <input type="month" class="experience-end" dir="ltr" value="${escapeHtml(data.current ? '' : (data.end || ''))}">
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
            <div class="char-counter"></div>
        </div>`;
    experienceBox.append(entry);

    fixDates(entry.querySelector('.experience-start'));
    showCount(entry.querySelector('textarea'));
    updateDescriptionHints();
}

function addProject(data = {}) {
    const entry = document.createElement('div');
    entry.className = 'entry-card project-entry';
    entry.innerHTML = `
        ${entryHeader('project', projectBox.children.length + 1)}
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
            <div class="char-counter"></div>
        </div>`;
    projectBox.append(entry);

    showCount(entry.querySelector('textarea'));
}

function removeEntry(button) {
    const entry = button.closest('.entry-card');
    const box = entry.parentElement;
    const minimum = box === projectBox ? 0 : 1;      // projects are optional

    if (box.children.length <= minimum) {
        showToast(t('needOne'));
        return;
    }
    entry.remove();
    renumberEntries();
}

function moveEntry(button) {
    const entry = button.closest('.entry-card');
    const goingUp = button.dataset.move === 'up';
    const neighbour = goingUp ? entry.previousElementSibling : entry.nextElementSibling;
    if (!neighbour) return;

    if (goingUp) neighbour.before(entry);
    else neighbour.after(entry);
    renumberEntries();
    button.focus();
}

// reads the entries bec i always forget
function getJobs() {
    return Array.from(experienceBox.children).map(entry => ({
        title: entry.querySelector('.experience-title').value,
        company: entry.querySelector('.experience-company').value,
        start: entry.querySelector('.experience-start').value,
        end: entry.querySelector('.experience-current').checked ? '' : entry.querySelector('.experience-end').value,
        current: entry.querySelector('.experience-current').checked,
        description: entry.querySelector('.experience-description').value
    }));
}

function getSchools() {
    return Array.from(educationBox.children).map(entry => ({
        degree: entry.querySelector('.education-degree').value,
        school: entry.querySelector('.education-school').value,
        year: entry.querySelector('.education-year').value
    }));
}

function getProjects() {
    return Array.from(projectBox.children).map(entry => ({
        name: entry.querySelector('.project-name').value,
        tech: entry.querySelector('.project-tech').value,
        url: entry.querySelector('.project-url').value,
        description: entry.querySelector('.project-description').value
    }));
}

// made some restrsints for the dates
function fixDates(changed) {
    const entry = changed.closest('.experience-entry');
    const start = entry.querySelector('.experience-start');
    const end = entry.querySelector('.experience-end');
    const current = entry.querySelector('.experience-current');

    end.disabled = current.checked;
    if (current.checked) end.value = '';

    if (start.value) end.min = start.value;
    else end.removeAttribute('min');

    if (start.value && end.value && end.value < start.value) {
        end.value = '';
        showToast(t('endBeforeStart'));
    }
}


function updateDescriptionHints() {
    const hints = {
        achievements: 'prefPhAch',
        responsibilities: 'prefPhResp',
        impact: 'prefPhImpact',
        skills: 'prefPhSkills'
    };
    const checked = Array.from(document.querySelectorAll('input[name="descPreference"]:checked'));
    const text = checked.map(box => t(hints[box.value])).join(' ') || t('describePh');

    document.querySelectorAll('.experience-description').forEach(box => { box.placeholder = text; });
}

// made a limit here
function showCount(textarea) {
    const counter = textarea.parentElement.querySelector('.char-counter');
    if (!counter) return;

    const max = textarea.maxLength;
    counter.textContent = t('chars', { n: textarea.value.length, max: max });
    counter.classList.toggle('counter-warn', textarea.value.length > max * 0.9);
}


function addSkill() {
    const name = skillInput.value.trim();
    if (!name) return;

    if (skills.some(skill => skill.name.toLowerCase() === name.toLowerCase())) {
        showToast(t('skillExists'));
        return;
    }
    skills.push({ name: name, level: skillLevelSelect.value });
    skillInput.value = '';
    showSkillTags();
    saveForm();
    updatePreview();
    updateProgress();
}

function showSkillTags() {
    skillTagsBox.innerHTML = skills.map((skill, index) => `
        <span class="skill-tag">
            <span>${escapeHtml(skill.name)}</span>
            <span class="skill-tag-level skill-level-${skill.level.toLowerCase()}">${escapeHtml(t('lvl.' + skill.level))}</span>
            <button type="button" class="skill-tag-remove" data-index="${index}" aria-label="${escapeHtml(t('removeSkill', { name: skill.name }))}">×</button>
        </span>`).join('');
}

function removeSkill(index) {
    skills.splice(index, 1);
    showSkillTags();
    saveForm();
    updatePreview();
    updateProgress();
}

// photo part btw

function showPhoto(dataUrl) {
    photoPreview.innerHTML = `<img src="${dataUrl}" alt="" class="avatar-img">`;
    cvPhoto.src = dataUrl;
    cvPhoto.hidden = false;
    removePhotoButton.hidden = false;
}

function removePhoto() {
    photoPreview.innerHTML = `<span class="avatar-placeholder">${escapeHtml(t('noPhoto'))}</span>`;
    cvPhoto.src = '';
    cvPhoto.hidden = true;
    removePhotoButton.hidden = true;
    photoInput.value = '';
    localStorage.removeItem(KEYS.photo);
}

function choosePhoto() {
    const file = photoInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        showPhoto(reader.result);
        try {
            localStorage.setItem(KEYS.photo, reader.result);
        } catch (error) {
            showToast(t('photoTooBig'));
        }
    };
    reader.readAsDataURL(file);
}


const NOT_ALLOWED = {
    fullName: /[^\p{L}\p{M}\s'.-]/gu,      // letters, spaces, ' . -
    cityInput: /[^\p{L}\p{M}\s'.-]/gu,
    phone: /\D/g                          // digits only(kinda obvious)
};

function removeBadCharacters(field) {
    const bad = NOT_ALLOWED[field.id];
    if (!bad) return;

    let value = field.value.replace(bad, '');
    if (field.id !== 'phone') value = value.replace(/\s{2,}/g, ' ');
    if (value !== field.value) field.value = value;
}

function showFieldError(field, message) {
    const errorBox = document.querySelector(`[data-error-for="${field.id}"]`);
    if (errorBox) errorBox.textContent = message;
    field.classList.toggle('is-invalid', Boolean(message));
}

// returns true when the field is fine
function checkField(field) {
    // the location is two fields (city + country) that fill one hidden field(did myself am proud)
    if (field === locationInput) {
        const message = field.value ? '' : t('locationInvalid');
        showFieldError(field, message);
        cityInput.classList.toggle('is-invalid', Boolean(message));
        countrySelect.classList.toggle('is-invalid', Boolean(message));
        return !message;
    }

    let message = '';
    if (field.required && !field.value.trim()) {
        message = t('required');
    } else if (!field.validity.valid) {
        if (field.type === 'email') message = t('invalidEmail');
        else if (field.type === 'tel') message = field.validity.tooShort ? t('phoneShort') : t('phoneDigits');
        else if (field.id === 'fullName') message = t('nameInvalid');
        else message = field.validationMessage;
    }

    showFieldError(field, message);
    return !message;
}

function checkForm() {
    let allGood = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(field => {
        if (!checkField(field)) allGood = false;
    });

    const firstBad = form.querySelector('.is-invalid');
    if (firstBad) firstBad.focus();
    return allGood;
}


function updateProgress() {
    const required = [
        [t('fullName'), fullNameInput.value.trim()],
        [t('email'), emailInput.value.trim()],
        [t('phone'), phoneInput.value.trim()],
        [t('location'), locationInput.value.trim()],
        [t('summary'), summaryInput.value.trim()],
        [t('education'), (educationBox.querySelector('.education-degree') || {}).value],
        [t('expSection'), (experienceBox.querySelector('.experience-title') || {}).value],
        [t('skills'), skills.length ? 'yes' : '']
    ];
    const missing = required.filter(item => !item[1] || !item[1].trim()).map(item => item[0]);
    const percent = Math.round((required.length - missing.length) / required.length * 100);

    progressBar.style.width = percent + '%';
    progressBar.classList.toggle('progress-done', percent === 100);
    progressLabel.textContent = t('percentComplete', { n: percent });
    missingLabel.textContent = missing.length
        ? t('missing', { list: missing.join(language === 'ar' ? '، ' : ', ') })
        : t('allComplete');
}


function formatMonth(value) {
    const match = /^(\d{4})-(\d{2})$/.exec(value || '');
    if (!match) return value || '';

    const date = new Date(Number(match[1]), Number(match[2]) - 1, 1);
    const locale = language === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US';
    return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
}


function dateRange(job) {
    const from = formatMonth(job.start);
    const to = job.current ? t('present') : formatMonth(job.end);
    return from && to ? from + ' – ' + to : from || to;
}



function splitList(text) {
    return text.split(/[,،]/).map(item => item.trim()).filter(Boolean);
}

function bulletList(items) {
    return '<ul class="bullet-list">' + items.map(item => '<li>' + item + '</li>').join('') + '</ul>';
}

function updatePreview() {
    const contact = [emailInput.value.trim(), phoneInput.value.trim() ? getDialCode() + ' ' + phoneInput.value.trim() : ''];

    byId('cvName').textContent = fullNameInput.value.trim() || t('yourName');
    byId('cvContact').textContent = contact.filter(Boolean).join(' • ');
    byId('cvLocation').textContent = locationInput.value.trim();
    byId('cvSummary').textContent = summaryInput.value.trim() || t('phSummary');


    const schools = getSchools().filter(s => s.degree || s.school).map(s =>
        `<strong>${escapeHtml(s.degree || t('degreeWord'))}</strong>` +
        (s.school ? ' • ' + escapeHtml(s.school) : '') +
        (s.year ? ' • ' + escapeHtml(s.year) : ''));
    byId('cvEducation').innerHTML = bulletList(schools.length ? schools : [escapeHtml(t('phEducation'))]);


    const jobs = getJobs().filter(job => job.title || job.company).map(job => {
        const duration = dateRange(job);
        return `
        <div class="cv-exp-block">
            <div class="cv-exp-header">
                <strong>${escapeHtml(job.title || t('role'))}</strong>${job.company ? ' <span>' + escapeHtml(t('at')) + ' ' + escapeHtml(job.company) + '</span>' : ''}
                ${duration ? '<span class="cv-duration">' + escapeHtml(duration) + '</span>' : ''}
            </div>
            ${job.description ? '<p class="cv-exp-desc">' + escapeHtml(job.description) + '</p>' : ''}
        </div>`;
    });
    byId('cvExperience').innerHTML = jobs.length ? jobs.join('') : '<p>' + escapeHtml(t('phExperience')) + '</p>';

    const projects = getProjects().filter(p => p.name).map(p => {
        const link = /^https?:\/\//i.test(p.url) ? p.url : '';      // only real web links(used ai to write this)
        return `
        <div class="cv-exp-block">
            <div class="cv-exp-header">
                <strong>${escapeHtml(p.name)}</strong>
                ${p.tech ? '<span class="cv-duration">' + escapeHtml(p.tech) + '</span>' : ''}
                ${link ? '<a href="' + escapeHtml(link) + '" class="cv-project-link" dir="ltr" target="_blank" rel="noopener">' + escapeHtml(link) + '</a>' : ''}
            </div>
            ${p.description ? '<p class="cv-exp-desc">' + escapeHtml(p.description) + '</p>' : ''}
        </div>`;
    });
    byId('cvProjects').innerHTML = projects.join('');
    byId('cvSecProjects').hidden = projects.length === 0;

    byId('cvSkills').innerHTML = skills.length
        ? '<ul class="skills-list">' + skills.map(skill =>
            `<li><span class="skill-name">${escapeHtml(skill.name)}</span><span class="skill-badge skill-badge-${skill.level.toLowerCase()}">${escapeHtml(t('lvl.' + skill.level))}</span></li>`).join('') + '</ul>'
        : '<p>' + escapeHtml(t('phSkills')) + '</p>';


    const certs = splitList(certificationsInput.value);
    const langs = splitList(languagesInput.value);
    byId('cvCertifications').innerHTML = certs.length ? bulletList(certs.map(escapeHtml)) : '<p>' + escapeHtml(t('phCerts')) + '</p>';
    byId('cvLanguages').innerHTML = langs.length ? bulletList(langs.map(escapeHtml)) : '<p>' + escapeHtml(t('phLangs')) + '</p>';
}

function buildCvText() {
    const line = '─'.repeat(50);
    const block = (title, body) => [line, title.toUpperCase(), line, body].join('\n');
    const none = '  • ' + t('txtNotProvided');

    const jobs = getJobs().map(job => {
        const title = [job.title, job.company && t('at') + ' ' + job.company, dateRange(job) && '(' + dateRange(job) + ')'].filter(Boolean).join(' ');
        return '  • ' + title + (job.description ? '\n    ' + job.description : '');
    });
    const schools = getSchools().map(s => '  • ' + [s.degree, s.school, s.year].filter(Boolean).join(', '));
    const projects = getProjects().filter(p => p.name).map(p =>
        '  • ' + [p.name, p.tech && '[' + p.tech + ']', p.url].filter(Boolean).join('  ') + (p.description ? '\n    ' + p.description : ''));
    const skillLines = skills.map(skill => '  • ' + skill.name + ' — ' + t('lvl.' + skill.level));

    const blocks = {
        summary: block(t('summary'), summaryInput.value.trim() || t('txtNotProvided')),
        education: block(t('education'), schools.join('\n') || none),
        experience: block(t('cvExperience'), jobs.join('\n') || none),
        projects: projects.length ? block(t('projects'), projects.join('\n')) : '',
        skills: block(t('skills'), skillLines.join('\n') || '  • ' + t('txtAddSkills')),
        certifications: block(t('certs'), '  ' + (certificationsInput.value.trim() || t('txtNone'))),
        languages: block(t('langs'), '  ' + (languagesInput.value.trim() || t('txtNotSpecified')))
    };

    const phone = phoneInput.value.trim() ? getDialCode() + ' ' + phoneInput.value.trim() : '';
    const top = [
        fullNameInput.value.trim() || t('yourName'),
        [emailInput.value.trim(), phone, locationInput.value.trim()].filter(Boolean).join('  |  '),
        ''
    ].join('\n');

    return top + '\n' + sectionOrder.map(name => blocks[name]).filter(Boolean).join('\n\n');
}

function copyCvText() {
    navigator.clipboard.writeText(buildCvText())
        .then(() => showToast(t('cvCopied')))
        .catch(() => showToast(t('copyFailed')));
}

function copyJson() {
    navigator.clipboard.writeText(JSON.stringify(getFormData(), null, 2))
        .then(() => showToast(t('jsonCopied')))
        .catch(() => showToast(t('jsonCopyFailed')));
}

function importJson() {
    const file = importFileInput.files[0];
    importFileInput.value = '';
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const data = JSON.parse(reader.result);
            const needed = ['fullName', 'email', 'phone', 'location', 'summary', 'experiences', 'educations', 'projects', 'skills', 'theme', 'descPreferences'];
            const missing = needed.filter(name => !(name in data));
            if (missing.length) return showToast(t('importMissing', { list: missing.join(', ') }));

            fillForm(data, { useTheme: true, useLayout: true });
            saveForm();
            showToast(t('importOk'));
        } catch (error) {
            showToast(t('importBad'));
        }
    };
    reader.readAsText(file);
}

function shareViaGmail() {
    const subject = t('cvSubject', { name: fullNameInput.value.trim() || t('defaultUser') });
    const body = encodeURIComponent(buildCvText());
    const gmailLink = 'https://mail.google.com/mail/?view=cm&su=' + encodeURIComponent(subject) + '&body=' + body;
    const mailLink = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + body;

    if (!window.open(gmailLink, '_blank')) window.location.href = mailLink;
}

function exportPdf() {
    const oldTitle = document.title;
    document.title = (fullNameInput.value.trim() || 'CV') + ' - CV';
    window.addEventListener('afterprint', () => { document.title = oldTitle; }, { once: true });
    window.print();
}

function handleInput(event) {
    const field = event.target;
    if (!field.matches('input, textarea, select')) return;

    removeBadCharacters(field);

    if (field === cityInput || field === countrySelect) {
        updateLocation();
        if (locationInput.value) checkField(locationInput);
    }
    if (field.matches('.experience-start, .experience-end, .experience-current')) fixDates(field);
    if (field.matches('.education-year') && field.value.length > 4) field.value = field.value.slice(0, 4);
    if (field.matches('textarea')) showCount(field);
    if (field.matches('input[name="descPreference"]')) updateDescriptionHints();
    if (field.id && field.matches('input, textarea')) checkField(field);

    saveForm();
    updatePreview();
    updateProgress();
}

function handleBlur(event) {
    const field = event.target;
    if (field === countrySelect) checkField(locationInput);
    else if (field.id && field.matches('input, textarea')) checkField(field);
}

function handleClick(event) {
    const button = event.target.closest('button');
    if (!button) return;

    const classes = button.classList;
    let changedEntries = true;

    if (classes.contains('add-entry-btn')) {
        const adders = { experience: addExperience, education: addEducation, project: addProject };
        const addEntry = adders[button.dataset.type];
        if (!addEntry) return;
        addEntry();
        renumberEntries();
    } else if (classes.contains('remove-entry-btn')) {
        removeEntry(button);
    } else if (classes.contains('move-entry-btn')) {
        moveEntry(button);
    } else if (classes.contains('skill-tag-remove')) {
        removeSkill(Number(button.dataset.index));
        return;
    } else if (classes.contains('section-collapse-btn')) {
        const card = button.closest('.card');
        const collapsed = card.classList.toggle('collapsed');
        button.setAttribute('aria-expanded', String(!collapsed));
        return;
    } else {
        changedEntries = false;
    }

    if (changedEntries) {
        saveForm();
        updatePreview();
        updateProgress();
    }
}

function setUpButtons() {
    form.addEventListener('input', handleInput);
    form.addEventListener('change', handleInput);
    form.addEventListener('blur', handleBlur, true);
    form.addEventListener('click', handleClick);
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!checkForm()) return;
        updatePreview();
        showToast(t('previewOk'));
        cvPreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    themeButton.addEventListener('click', () => setTheme(theme === 'dark' ? 'forest' : 'dark'));
    settingsButton.addEventListener('click', openSettings);
    backButton.addEventListener('click', closeSettings);
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !settingsPage.hidden) closeSettings();
    });

    languageSelect.addEventListener('change', () => changeLanguage(languageSelect.value));
    fontSelect.addEventListener('change', () => setFont(fontSelect.value));
    templateSelect.addEventListener('change', () => setTemplate(templateSelect.value));
    orderList.addEventListener('click', event => {
        const button = event.target.closest('button[data-name]');
        if (button) moveSection(button);
    });

    restartButton.addEventListener('click', restartEverything);

    byId('copyCvBtn').addEventListener('click', copyCvText);
    byId('copyJsonBtn').addEventListener('click', copyJson);
    byId('importJsonBtn').addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', importJson);
    byId('gmailBtn').addEventListener('click', shareViaGmail);
    byId('printBtn').addEventListener('click', exportPdf);

    byId('clearFormBtn').addEventListener('click', () => { clearDialog.hidden = false; });
    byId('clearCancelBtn').addEventListener('click', () => { clearDialog.hidden = true; });
    byId('clearConfirmBtn').addEventListener('click', () => {
        clearDialog.hidden = true;
        clearForm();
    });
    clearDialog.addEventListener('click', event => {
        if (event.target === clearDialog) clearDialog.hidden = true;     // click outside the box
    });

    photoInput.addEventListener('change', choosePhoto);
    removePhotoButton.addEventListener('click', removePhoto);

    byId('addSkillBtn').addEventListener('click', addSkill);
    skillInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addSkill();
        }
    });
}

function start() {
    language = load(KEYS.language) === 'ar' ? 'ar' : 'en';
    languageSelect.value = language;
    sectionOrder = savedOrder();

    setTemplate(load(KEYS.template));
    setTheme(load(KEYS.theme));
    setFont(load(KEYS.font));
    translatePage();
    fillPhoneCodes();
    fillCountryList();
    setUpButtons();

    const photo = load(KEYS.photo);
    if (photo) showPhoto(photo);

    try {
        const saved = JSON.parse(load(KEYS.form));
        if (saved) fillForm(saved);
        else startWithDefaults();
    } catch (error) {
        startWithDefaults();
    }

    showOrderList();
    showCount(summaryInput);
    updatePreview();
    updateProgress();
}

start();
