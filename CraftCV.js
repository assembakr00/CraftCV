const form = document.getElementById('cvForm');
const themeSelect = document.getElementById('themeSelect');
const restoreBanner = document.getElementById('restoreBanner');
const restoreBtn = document.getElementById('restoreBtn');
const discardBtn = document.getElementById('discardBtn');
const saveKeyBtn = document.getElementById('saveKeyBtn');
const anthropicKeyInput = document.getElementById('anthropicKey');
const keyFeedback = document.getElementById('keyFeedback');
const countryCodeInput = document.getElementById('countryCodeInput');
const phoneInput = document.getElementById('phone');
const experienceContainer = document.getElementById('experienceEntries');
const educationContainer = document.getElementById('educationEntries');
const copyCvBtn = document.getElementById('copyCvBtn');
const gmailBtn = document.getElementById('gmailBtn');
const printBtn = document.getElementById('printBtn');

const STORAGE_KEY = 'craftcv_form_state';
const API_KEY_STORAGE = 'craftcv_api_key';
const COUNTRY_OPTIONS = [
    { code: 'AF', dial: '+93', flag: '🇦🇫' },
    { code: 'AL', dial: '+355', flag: '🇦🇱' },
    { code: 'DZ', dial: '+213', flag: '🇩🇿' },
    { code: 'AS', dial: '+1684', flag: '🇦🇸' },
    { code: 'AD', dial: '+376', flag: '🇦🇩' },
    { code: 'AO', dial: '+244', flag: '🇦🇴' },
    { code: 'AI', dial: '+1264', flag: '🇦🇮' },
    { code: 'AG', dial: '+1268', flag: '🇦🇬' },
    { code: 'AR', dial: '+54', flag: '🇦🇷' },
    { code: 'AM', dial: '+374', flag: '🇦🇲' },
    { code: 'AW', dial: '+297', flag: '🇦🇼' },
    { code: 'AU', dial: '+61', flag: '🇦🇺' },
    { code: 'AT', dial: '+43', flag: '🇦🇹' },
    { code: 'AZ', dial: '+994', flag: '🇦🇿' },
    { code: 'BS', dial: '+1242', flag: '🇧🇸' },
    { code: 'BH', dial: '+973', flag: '🇧🇭' },
    { code: 'BD', dial: '+880', flag: '🇧🇩' },
    { code: 'BB', dial: '+1246', flag: '🇧🇧' },
    { code: 'BY', dial: '+375', flag: '🇧🇾' },
    { code: 'BE', dial: '+32', flag: '🇧🇪' },
    { code: 'BZ', dial: '+501', flag: '🇧🇿' },
    { code: 'BJ', dial: '+229', flag: '🇧🇯' },
    { code: 'BM', dial: '+1441', flag: '🇧🇲' },
    { code: 'BT', dial: '+975', flag: '🇧🇹' },
    { code: 'BO', dial: '+591', flag: '🇧🇴' },
    { code: 'BA', dial: '+387', flag: '🇧🇦' },
    { code: 'BW', dial: '+267', flag: '🇧🇼' },
    { code: 'BR', dial: '+55', flag: '🇧🇷' },
    { code: 'BN', dial: '+673', flag: '🇧🇳' },
    { code: 'BG', dial: '+359', flag: '🇧🇬' },
    { code: 'BF', dial: '+226', flag: '🇧🇫' },
    { code: 'BI', dial: '+257', flag: '🇧🇮' },
    { code: 'CV', dial: '+238', flag: '🇨🇻' },
    { code: 'KH', dial: '+855', flag: '🇰🇭' },
    { code: 'CM', dial: '+237', flag: '🇨🇲' },
    { code: 'CA', dial: '+1', flag: '🇨🇦' },
    { code: 'KY', dial: '+1345', flag: '🇰🇾' },
    { code: 'CF', dial: '+236', flag: '🇨🇫' },
    { code: 'TD', dial: '+235', flag: '🇹🇩' },
    { code: 'CL', dial: '+56', flag: '🇨🇱' },
    { code: 'CN', dial: '+86', flag: '🇨🇳' },
    { code: 'CO', dial: '+57', flag: '🇨🇴' },
    { code: 'KM', dial: '+269', flag: '🇰🇲' },
    { code: 'CG', dial: '+242', flag: '🇨🇬' },
    { code: 'CD', dial: '+243', flag: '🇨🇩' },
    { code: 'CR', dial: '+506', flag: '🇨🇷' },
    { code: 'HR', dial: '+385', flag: '🇭🇷' },
    { code: 'CU', dial: '+53', flag: '🇨🇺' },
    { code: 'CW', dial: '+599', flag: '🇨🇼' },
    { code: 'CY', dial: '+357', flag: '🇨🇾' },
    { code: 'CZ', dial: '+420', flag: '🇨🇿' },
    { code: 'DK', dial: '+45', flag: '🇩🇰' },
    { code: 'DJ', dial: '+253', flag: '🇩🇯' },
    { code: 'DM', dial: '+1767', flag: '🇩🇲' },
    { code: 'DO', dial: '+1849', flag: '🇩🇴' },
    { code: 'EC', dial: '+593', flag: '🇪🇨' },
    { code: 'EG', dial: '+20', flag: '🇪🇬' },
    { code: 'SV', dial: '+503', flag: '🇸🇻' },
    { code: 'GQ', dial: '+240', flag: '🇬🇶' },
    { code: 'ER', dial: '+291', flag: '🇪🇷' },
    { code: 'EE', dial: '+372', flag: '🇪🇪' },
    { code: 'SZ', dial: '+268', flag: '🇸🇿' },
    { code: 'ET', dial: '+251', flag: '🇪🇹' },
    { code: 'FJ', dial: '+679', flag: '🇫🇯' },
    { code: 'FI', dial: '+358', flag: '🇫🇮' },
    { code: 'FR', dial: '+33', flag: '🇫🇷' },
    { code: 'GA', dial: '+241', flag: '🇬🇦' },
    { code: 'GM', dial: '+220', flag: '🇬🇲' },
    { code: 'GE', dial: '+995', flag: '🇬🇪' },
    { code: 'DE', dial: '+49', flag: '🇩🇪' },
    { code: 'GH', dial: '+233', flag: '🇬🇭' },
    { code: 'GR', dial: '+30', flag: '🇬🇷' },
    { code: 'GD', dial: '+1473', flag: '🇬🇩' },
    { code: 'GT', dial: '+502', flag: '🇬🇹' },
    { code: 'GN', dial: '+224', flag: '🇬🇳' },
    { code: 'GW', dial: '+245', flag: '🇬🇼' },
    { code: 'GY', dial: '+592', flag: '🇬🇾' },
    { code: 'HT', dial: '+509', flag: '🇭🇹' },
    { code: 'HN', dial: '+504', flag: '🇭🇳' },
    { code: 'HK', dial: '+852', flag: '🇭🇰' },
    { code: 'HU', dial: '+36', flag: '🇭🇺' },
    { code: 'IS', dial: '+354', flag: '🇮🇸' },
    { code: 'IN', dial: '+91', flag: '🇮🇳' },
    { code: 'ID', dial: '+62', flag: '🇮🇩' },
    { code: 'IR', dial: '+98', flag: '🇮🇷' },
    { code: 'IQ', dial: '+964', flag: '🇮🇶' },
    { code: 'IE', dial: '+353', flag: '🇮🇪' },
    { code: 'IL', dial: '+972', flag: '🇮🇱' },
    { code: 'IT', dial: '+39', flag: '🇮🇹' },
    { code: 'JM', dial: '+1876', flag: '🇯🇲' },
    { code: 'JP', dial: '+81', flag: '🇯🇵' },
    { code: 'JO', dial: '+962', flag: '🇯🇴' },
    { code: 'KZ', dial: '+7', flag: '🇰🇿' },
    { code: 'KE', dial: '+254', flag: '🇰🇪' },
    { code: 'KI', dial: '+686', flag: '🇰🇮' },
    { code: 'KP', dial: '+850', flag: '🇰🇵' },
    { code: 'KR', dial: '+82', flag: '🇰🇷' },
    { code: 'KW', dial: '+965', flag: '🇰🇼' },
    { code: 'KG', dial: '+996', flag: '🇰🇬' },
    { code: 'LA', dial: '+856', flag: '🇱🇦' },
    { code: 'LV', dial: '+371', flag: '🇱🇻' },
    { code: 'LB', dial: '+961', flag: '🇱🇧' },
    { code: 'LS', dial: '+266', flag: '🇱🇸' },
    { code: 'LR', dial: '+231', flag: '🇱🇷' },
    { code: 'LY', dial: '+218', flag: '🇱🇾' },
    { code: 'LI', dial: '+423', flag: '🇱🇮' },
    { code: 'LT', dial: '+370', flag: '🇱🇹' },
    { code: 'LU', dial: '+352', flag: '🇱🇺' },
    { code: 'MO', dial: '+853', flag: '🇲🇴' },
    { code: 'MG', dial: '+261', flag: '🇲🇬' },
    { code: 'MW', dial: '+265', flag: '🇲🇼' },
    { code: 'MY', dial: '+60', flag: '🇲🇾' },
    { code: 'MV', dial: '+960', flag: '🇲🇻' },
    { code: 'ML', dial: '+223', flag: '🇲🇱' },
    { code: 'MT', dial: '+356', flag: '🇲🇹' },
    { code: 'MH', dial: '+692', flag: '🇲🇭' },
    { code: 'MR', dial: '+222', flag: '🇲🇷' },
    { code: 'MU', dial: '+230', flag: '🇲🇺' },
    { code: 'MX', dial: '+52', flag: '🇲🇽' },
    { code: 'FM', dial: '+691', flag: '🇫🇲' },
    { code: 'MD', dial: '+373', flag: '🇲🇩' },
    { code: 'MC', dial: '+377', flag: '🇲🇨' },
    { code: 'MN', dial: '+976', flag: '🇲🇳' },
    { code: 'ME', dial: '+382', flag: '🇲🇪' },
    { code: 'MA', dial: '+212', flag: '🇲🇦' },
    { code: 'MZ', dial: '+258', flag: '🇲🇿' },
    { code: 'MM', dial: '+95', flag: '🇲🇲' },
    { code: 'NA', dial: '+264', flag: '🇳🇦' },
    { code: 'NR', dial: '+674', flag: '🇳🇷' },
    { code: 'NP', dial: '+977', flag: '🇳🇵' },
    { code: 'NL', dial: '+31', flag: '🇳🇱' },
    { code: 'NZ', dial: '+64', flag: '🇳🇿' },
    { code: 'NI', dial: '+505', flag: '🇳🇮' },
    { code: 'NE', dial: '+227', flag: '🇳🇪' },
    { code: 'NG', dial: '+234', flag: '🇳🇬' },
    { code: 'MK', dial: '+389', flag: '🇲🇰' },
    { code: 'NO', dial: '+47', flag: '🇳🇴' },
    { code: 'OM', dial: '+968', flag: '🇴🇲' },
    { code: 'PK', dial: '+92', flag: '🇵🇰' },
    { code: 'PW', dial: '+680', flag: '🇵🇼' },
    { code: 'PA', dial: '+507', flag: '🇵🇦' },
    { code: 'PG', dial: '+675', flag: '🇵🇬' },
    { code: 'PY', dial: '+595', flag: '🇵🇾' },
    { code: 'PE', dial: '+51', flag: '🇵🇪' },
    { code: 'PH', dial: '+63', flag: '🇵🇭' },
    { code: 'PL', dial: '+48', flag: '🇵🇱' },
    { code: 'PT', dial: '+351', flag: '🇵🇹' },
    { code: 'PR', dial: '+1939', flag: '🇵🇷' },
    { code: 'QA', dial: '+974', flag: '🇶🇦' },
    { code: 'RO', dial: '+40', flag: '🇷🇴' },
    { code: 'RU', dial: '+7', flag: '🇷🇺' },
    { code: 'RW', dial: '+250', flag: '🇷🇼' },
    { code: 'KN', dial: '+1869', flag: '🇰🇳' },
    { code: 'LC', dial: '+1758', flag: '🇱🇨' },
    { code: 'VC', dial: '+1784', flag: '🇻🇨' },
    { code: 'WS', dial: '+685', flag: '🇼🇸' },
    { code: 'SM', dial: '+378', flag: '🇸🇲' },
    { code: 'ST', dial: '+239', flag: '🇸🇹' },
    { code: 'SA', dial: '+966', flag: '🇸🇦' },
    { code: 'SN', dial: '+221', flag: '🇸🇳' },
    { code: 'RS', dial: '+381', flag: '🇷🇸' },
    { code: 'SC', dial: '+248', flag: '🇸🇨' },
    { code: 'SL', dial: '+232', flag: '🇸🇱' },
    { code: 'SG', dial: '+65', flag: '🇸🇬' },
    { code: 'SK', dial: '+421', flag: '🇸🇰' },
    { code: 'SI', dial: '+386', flag: '🇸🇮' },
    { code: 'SB', dial: '+677', flag: '🇸🇧' },
    { code: 'SO', dial: '+252', flag: '🇸🇴' },
    { code: 'ZA', dial: '+27', flag: '🇿🇦' },
    { code: 'SS', dial: '+211', flag: '🇸🇸' },
    { code: 'ES', dial: '+34', flag: '🇪🇸' },
    { code: 'LK', dial: '+94', flag: '🇱🇰' },
    { code: 'SD', dial: '+249', flag: '🇸🇩' },
    { code: 'SR', dial: '+597', flag: '🇸🇷' },
    { code: 'SE', dial: '+46', flag: '🇸🇪' },
    { code: 'CH', dial: '+41', flag: '🇨🇭' },
    { code: 'SY', dial: '+963', flag: '🇸🇾' },
    { code: 'TW', dial: '+886', flag: '🇹🇼' },
    { code: 'TJ', dial: '+992', flag: '🇹🇯' },
    { code: 'TH', dial: '+66', flag: '🇹🇭' },
    { code: 'TL', dial: '+670', flag: '🇹🇱' },
    { code: 'TG', dial: '+228', flag: '🇹🇬' },
    { code: 'TO', dial: '+676', flag: '🇹🇴' },
    { code: 'TT', dial: '+1868', flag: '🇹🇹' },
    { code: 'TN', dial: '+216', flag: '🇹🇳' },
    { code: 'TR', dial: '+90', flag: '🇹🇷' },
    { code: 'TM', dial: '+993', flag: '🇹🇲' },
    { code: 'TV', dial: '+688', flag: '🇹🇻' },
    { code: 'UG', dial: '+256', flag: '🇺🇬' },
    { code: 'UA', dial: '+380', flag: '🇺🇦' },
    { code: 'AE', dial: '+971', flag: '🇦🇪' },
    { code: 'GB', dial: '+44', flag: '🇬🇧' },
    { code: 'US', dial: '+1', flag: '🇺🇸' },
    { code: 'UY', dial: '+598', flag: '🇺🇾' },
    { code: 'UZ', dial: '+998', flag: '🇺🇿' },
    { code: 'VU', dial: '+678', flag: '🇻🇺' },
    { code: 'VE', dial: '+58', flag: '🇻🇪' },
    { code: 'VN', dial: '+84', flag: '🇻🇳' },
    { code: 'YE', dial: '+967', flag: '🇾🇪' },
    { code: 'ZM', dial: '+260', flag: '🇿🇲' },
    { code: 'ZW', dial: '+263', flag: '🇿🇼' },
    { code: 'PS', dial: '+970', flag: '🇵🇸' },
    { code: 'CI', dial: '+225', flag: '🇨🇮' },
    { code: 'TZ', dial: '+255', flag: '🇹🇿' },
];
    

function init() {
    populateCountryOptions();
    restoreSavedApiKey();
    attachEventListeners();
    restoreSavedTheme();

    if (hasStoredSession()) {
        restoreBanner.hidden = false;
    } else {
        initDefaultEntries();
    }

    updatePlaceholderForJobPreferences();
    updatePreview();
    applyTheme(themeSelect.value);
}

function attachEventListeners() {
    form.addEventListener('input', handleFormInput);
    form.addEventListener('change', handleFormInput);
    form.addEventListener('blur', handleBlur, true);
    form.addEventListener('click', handleFormClick);
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            updatePreview();
        }
    });

    themeSelect.addEventListener('change', function () {
        applyTheme(this.value);
    });

    saveKeyBtn.addEventListener('click', saveApiKey);
    restoreBtn.addEventListener('click', restoreSession);
    discardBtn.addEventListener('click', discardSession);
    copyCvBtn.addEventListener('click', copyCvAsText);
    gmailBtn.addEventListener('click', shareViaGmail);
    printBtn.addEventListener('click', exportPdf);
}

function handleFormInput(event) {
    if (event.target.matches('input, textarea, select')) {
        saveFormState();
        if (event.target.matches('input[type="checkbox"][name="descPreference"]')) {
            updatePlaceholderForJobPreferences();
        }
        if (event.target.matches('input, textarea')) {
            validateField(event.target);
        }
        updatePreview();
    }
}

function handleBlur(event) {
    if (event.target.matches('input, textarea')) {
        validateField(event.target);
    }
}

function handleFormClick(event) {
    if (event.target.classList.contains('add-entry-btn')) {
        const type = event.target.dataset.type;
        if (type === 'experience') {
            addExperienceEntry();
        } else if (type === 'education') {
            addEducationEntry();
        }
    }

    if (event.target.classList.contains('remove-entry-btn')) {
        const entry = event.target.closest('.entry-card');
        const isExperience = entry?.classList.contains('experience-entry');
        const container = isExperience ? experienceContainer : educationContainer;
        if (container.querySelectorAll('.entry-card').length <= 1) {
            showToast('You need at least one entry.');
            return;
        }
        if (entry) {
            entry.remove();
            saveFormState();
            updatePreview();
        }
    }

    if (event.target.classList.contains('ai-enhance-btn')) {
        enhanceText(event.target.dataset.target);
    }
}

function populateCountryOptions() {
    const list = document.getElementById('countryCodes');
    if (!list) return;

    list.innerHTML = COUNTRY_OPTIONS.map(item => `
        <option value="${item.flag} ${item.code} (${item.dial})"></option>
    `).join('');

    if (!countryCodeInput.value.trim()) {
        countryCodeInput.value = '🇪🇬 EG (+20)';
    }
}

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('craftcv_theme', theme);
}

function saveApiKey() {
    const key = anthropicKeyInput.value.trim();
    if (!key) {
        keyFeedback.textContent = 'Please enter an API key first.';
        keyFeedback.style.color = 'var(--danger)';
        return;
    }

    localStorage.setItem(API_KEY_STORAGE, key);
    keyFeedback.textContent = 'Key saved!';
    keyFeedback.style.color = 'var(--success)';
}

function restoreSavedApiKey() {
    const savedKey = localStorage.getItem(API_KEY_STORAGE);
    if (savedKey) {
        anthropicKeyInput.value = savedKey;
    }
}

function restoreSavedTheme() {
    const savedTheme = localStorage.getItem('craftcv_theme');
    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }
}

function hasStoredSession() {
    return Boolean(localStorage.getItem(STORAGE_KEY));
}

function initDefaultEntries() {
    educationContainer.innerHTML = '';
    experienceContainer.innerHTML = '';
    addEducationEntry();
    addExperienceEntry();
}

function saveFormState() {
    const data = collectFormData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function collectFormData() {
    const experienceEntries = Array.from(experienceContainer.querySelectorAll('.experience-entry')).map((entry) => ({
        title: entry.querySelector('.experience-title')?.value || '',
        company: entry.querySelector('.experience-company')?.value || '',
        duration: entry.querySelector('.experience-duration')?.value || '',
        description: entry.querySelector('.experience-description')?.value || ''
    }));

    const educationEntries = Array.from(educationContainer.querySelectorAll('.education-entry')).map((entry) => ({
        degree: entry.querySelector('.education-degree')?.value || '',
        school: entry.querySelector('.education-school')?.value || '',
        year: entry.querySelector('.education-year')?.value || ''
    }));

    return {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        countryCode: countryCodeInput.value,
        location: document.getElementById('location').value,
        summary: document.getElementById('summary').value,
        jobDesc: document.getElementById('jobDesc').value,
        experiences: experienceEntries,
        educations: educationEntries,
        skills: document.getElementById('skills').value,
        certifications: document.getElementById('certifications').value,
        languages: document.getElementById('languages').value,
        theme: themeSelect.value,
        descPreferences: Array.from(document.querySelectorAll('input[name="descPreference"]:checked')).map(item => item.value)
    };
}

function hydrateFromStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) {
        initDefaultEntries();
        return;
    }

    try {
        const parsed = JSON.parse(savedData);
        if (!parsed) {
            initDefaultEntries();
            return;
        }

        document.getElementById('fullName').value = parsed.fullName || '';
        document.getElementById('email').value = parsed.email || '';
        document.getElementById('phone').value = parsed.phone || '';
        countryCodeInput.value = parsed.countryCode || '🇪🇬 EG (+20)';
        document.getElementById('location').value = parsed.location || '';
        document.getElementById('summary').value = parsed.summary || '';
        document.getElementById('jobDesc').value = parsed.jobDesc || '';
        document.getElementById('skills').value = parsed.skills || '';
        document.getElementById('certifications').value = parsed.certifications || '';
        document.getElementById('languages').value = parsed.languages || '';

        const descPreferences = parsed.descPreferences || [];
        document.querySelectorAll('input[name="descPreference"]').forEach(input => {
            input.checked = descPreferences.includes(input.value);
        });

        educationContainer.innerHTML = '';
        if (Array.isArray(parsed.educations) && parsed.educations.length) {
            parsed.educations.forEach((item) => addEducationEntry(item));
        } else {
            addEducationEntry();
        }

        experienceContainer.innerHTML = '';
        if (Array.isArray(parsed.experiences) && parsed.experiences.length) {
            parsed.experiences.forEach((item) => addExperienceEntry(item));
        } else {
            addExperienceEntry();
        }
    } catch (error) {
        console.error('Unable to restore saved CV data', error);
    }
}

function restoreSession() {
    hydrateFromStorage();
    restoreBanner.hidden = true;
    updatePreview();
}

function discardSession() {
    localStorage.removeItem(STORAGE_KEY);
    restoreBanner.hidden = true;
    initDefaultEntries();
    updatePreview();
}

function addExperienceEntry(data = {}) {
    const entry = document.createElement('div');
    entry.className = 'entry-card experience-entry';
    entry.innerHTML = `
        <div class="entry-header">
            <h3>Experience ${experienceContainer.querySelectorAll('.experience-entry').length + 1}</h3>
            <button type="button" class="remove-entry-btn secondary-btn">Remove</button>
        </div>
        <div class="form-group">
            <label>Job Title</label>
            <input type="text" class="experience-title" value="${escapeHtml(data.title || '')}" placeholder="e.g., Product Manager">
        </div>
        <div class="form-group">
            <label>Company</label>
            <input type="text" class="experience-company" value="${escapeHtml(data.company || '')}" placeholder="e.g., Insight Labs">
        </div>
        <div class="form-group">
            <label>Duration</label>
            <input type="text" class="experience-duration" value="${escapeHtml(data.duration || '')}" placeholder="e.g., Jan 2022 - Present">
        </div>
        <div class="form-group">
            <label>Job Description</label>
            <textarea class="experience-description" placeholder="Describe your role and impact">${escapeHtml(data.description || '')}</textarea>
        </div>
    `;
    experienceContainer.appendChild(entry);
    updatePreview();
}

function addEducationEntry(data = {}) {
    const entry = document.createElement('div');
    entry.className = 'entry-card education-entry';
    entry.innerHTML = `
        <div class="entry-header">
            <h3>Education ${educationContainer.querySelectorAll('.education-entry').length + 1}</h3>
            <button type="button" class="remove-entry-btn secondary-btn">Remove</button>
        </div>
        <div class="form-group">
            <label>Degree</label>
            <input type="text" class="education-degree" value="${escapeHtml(data.degree || '')}" placeholder="e.g., BSc Computer Science">
        </div>
        <div class="form-group">
            <label>School or University</label>
            <input type="text" class="education-school" value="${escapeHtml(data.school || '')}" placeholder="e.g., Cairo University">
        </div>
        <div class="form-group">
            <label>Graduation Year</label>
            <input type="text" class="education-year" value="${escapeHtml(data.year || '')}" placeholder="e.g., 2024">
        </div>
    `;
    educationContainer.appendChild(entry);
    updatePreview();
}

function updatePlaceholderForJobPreferences() {
    const checked = Array.from(document.querySelectorAll('input[name="descPreference"]:checked')).map(item => item.value);
    const textarea = document.getElementById('jobDesc');
    if (!textarea) return;

    const placeholders = {
        achievements: 'Highlight measurable accomplishments and results.',
        responsibilities: 'Summarize your daily responsibilities and scope.',
        impact: 'Emphasize the impact and business outcomes of your work.',
        skills: 'Focus on the key skills you used in the role.'
    };

    const selected = checked.map(key => placeholders[key]).filter(Boolean);
    textarea.placeholder = selected.length ? selected.join(' ') : 'Based on selected preferences, describe your role...';
}

function validateField(field) {
    const errorTarget = document.querySelector(`[data-error-for="${field.id}"]`);
    if (!errorTarget) return true;

    if (!field.value.trim()) {
        errorTarget.textContent = 'This field is required.';
        field.classList.add('is-invalid');
        return false;
    }

    errorTarget.textContent = '';
    field.classList.remove('is-invalid');
    return true;
}

function validateForm() {
    const fields = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;
    fields.forEach(field => {
        if (!validateField(field)) {
            valid = false;
        }
    });
    return valid;
}

function updatePreview() {
    const fullName = document.getElementById('fullName').value.trim() || 'Your Name';
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const countryCode = countryCodeInput.value.trim();
    const location = document.getElementById('location').value.trim();
    const summary = document.getElementById('summary').value.trim() || 'Add a concise summary of your professional background.';
    const jobDescription = document.getElementById('jobDesc').value.trim();
    const skills = document.getElementById('skills').value.split(',').map(item => item.trim()).filter(Boolean);
    const certifications = document.getElementById('certifications').value.split(',').map(item => item.trim()).filter(Boolean);
    const languages = document.getElementById('languages').value.split(',').map(item => item.trim()).filter(Boolean);

    const experienceEntries = Array.from(experienceContainer.querySelectorAll('.experience-entry'));
    const experienceMarkup = experienceEntries.map(entry => {
        const title = entry.querySelector('.experience-title')?.value || '';
        const company = entry.querySelector('.experience-company')?.value || '';
        const duration = entry.querySelector('.experience-duration')?.value || '';
        const description = entry.querySelector('.experience-description')?.value || '';
        return `
            <li>
                <strong>${escapeHtml(title || 'Your role')}</strong>${company ? ` at ${escapeHtml(company)}` : ''}${duration ? ` • ${escapeHtml(duration)}` : ''}
                ${description ? `<div>${escapeHtml(description)}</div>` : ''}
            </li>
        `;
    }).join('');

    const educationMarkup = Array.from(educationContainer.querySelectorAll('.education-entry')).map(entry => {
        const degree = entry.querySelector('.education-degree')?.value || '';
        const school = entry.querySelector('.education-school')?.value || '';
        const year = entry.querySelector('.education-year')?.value || '';
        return `
            <li>
                <strong>${escapeHtml(degree || 'Degree')}</strong>${school ? ` • ${escapeHtml(school)}` : ''}${year ? ` • ${escapeHtml(year)}` : ''}
            </li>
        `;
    }).join('');

    const experienceList = experienceMarkup || (jobDescription ? `<li><strong>Role</strong><div>${escapeHtml(jobDescription)}</div></li>` : '<li>Add your professional experience.</li>');

    document.getElementById('cvName').textContent = fullName;
    document.getElementById('cvContact').textContent = [email, phone ? `${countryCode} ${phone}` : '', location].filter(Boolean).join(' • ');
    document.getElementById('cvSummary').textContent = summary;
    document.getElementById('cvEducation').innerHTML = `<ul class="bullet-list">${educationMarkup || '<li>Add your educational background.</li>'}</ul>`;
    document.getElementById('cvExperience').innerHTML = `<ul class="bullet-list">${experienceList}</ul>`;
    document.getElementById('cvSkills').innerHTML = skills.length ? `<ul class="skills-list">${skills.map(skill => `<li>${escapeHtml(skill)}</li>`).join('')}</ul>` : '<p>Add your most relevant skills.</p>';
    document.getElementById('cvCertifications').innerHTML = certifications.length ? `<ul class="bullet-list">${certifications.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '<p>No certifications listed.</p>';
    document.getElementById('cvLanguages').innerHTML = languages.length ? `<ul class="bullet-list">${languages.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '<p>No languages listed.</p>';
}

function copyCvAsText() {
    const text = buildCvText();
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied!');
    }).catch(() => {
        showToast('Copy failed. Please try again.');
    });
}

function shareViaGmail() {
    const text = buildCvText();
    const subject = `CV - ${document.getElementById('fullName').value.trim() || 'CraftCV User'}`;
    const body = encodeURIComponent(text);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(subject)}&body=${body}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;

    const newWindow = window.open(gmailUrl, '_blank');
    if (!newWindow) {
        window.location.href = mailtoUrl;
    }
}

function exportPdf() {
    window.print();
}

async function enhanceText(targetId) {
    const textarea = document.getElementById(targetId);
    const warningTarget = document.querySelector(`[data-warning-for="${targetId}"]`);
    if (!textarea) return;

    const text = textarea.value.trim();
    if (!text) {
        if (warningTarget) {
            warningTarget.textContent = 'Add some text before enhancing.';
        }
        return;
    }

    const savedKey = localStorage.getItem(API_KEY_STORAGE);
    if (!savedKey) {
        if (warningTarget) {
            warningTarget.textContent = 'Please add your Anthropic API key above to use AI features';
        }
        return;
    }

    if (warningTarget) {
        warningTarget.textContent = 'Improving your text...';
    }

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': savedKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-6',
                max_tokens: 1000,
                system: 'You are a professional CV writer for CraftCV. Rewrite the following text to sound polished, professional, and impactful. Keep it concise. Return only the improved text, no explanations.',
                messages: [{ role: 'user', content: text }]
            })
        });

        if (response.status === 401 || response.status === 403) {
            if (warningTarget) {
                warningTarget.textContent = 'Invalid API key. Please check and update it above.';
            }
            return;
        }

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        const improvedText = data.content?.[0]?.text?.trim() || '';
        if (improvedText) {
            textarea.value = improvedText;
            if (warningTarget) {
                warningTarget.textContent = '';
            }
            updatePreview();
            saveFormState();
        }
    } catch (error) {
        if (warningTarget) {
            warningTarget.textContent = 'AI enhancement failed. Please try again.';
        }
    }
}

function buildCvText() {
    const fullName = document.getElementById('fullName').value.trim() || 'Your Name';
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const countryCode = countryCodeInput.value.trim();
    const location = document.getElementById('location').value.trim();
    const summary = document.getElementById('summary').value.trim();
    const jobDescription = document.getElementById('jobDesc').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const certifications = document.getElementById('certifications').value.trim() || 'None';
    const languages = document.getElementById('languages').value.trim() || 'Not specified';

    const experiences = Array.from(experienceContainer.querySelectorAll('.experience-entry')).map(entry => {
        const title = entry.querySelector('.experience-title')?.value || '';
        const company = entry.querySelector('.experience-company')?.value || '';
        const duration = entry.querySelector('.experience-duration')?.value || '';
        const description = entry.querySelector('.experience-description')?.value || '';
        return `- ${title}${company ? ` at ${company}` : ''}${duration ? ` (${duration})` : ''}\n  ${description}`;
    }).join('\n');

    const educations = Array.from(educationContainer.querySelectorAll('.education-entry')).map(entry => {
        const degree = entry.querySelector('.education-degree')?.value || '';
        const school = entry.querySelector('.education-school')?.value || '';
        const year = entry.querySelector('.education-year')?.value || '';
        return `- ${degree}${school ? `, ${school}` : ''}${year ? `, ${year}` : ''}`;
    }).join('\n');

    return [
        fullName,
        email,
        phone ? `${countryCode} ${phone}` : '',
        location,
        '',
        'Professional Summary',
        summary,
        '',
        'Education',
        educations || '- Add your education.',
        '',
        'Experience',
        experiences || (jobDescription ? `- ${jobDescription}` : '- Add your experience.'),
        '',
        'Skills',
        skills || '- Add your skills.',
        '',
        'Certifications',
        certifications,
        '',
        'Languages',
        languages
    ].filter(Boolean).join('\n');
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1800);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

init();
