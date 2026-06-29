// ─── DOM References ────────────────────────────────────────────────────────────
const form               = document.getElementById('cvForm');
const themeSelect        = document.getElementById('themeSelect');
const restoreBanner      = document.getElementById('restoreBanner');
const restoreBtn         = document.getElementById('restoreBtn');
const discardBtn         = document.getElementById('discardBtn');
const saveKeyBtn         = document.getElementById('saveKeyBtn');
const anthropicKeyInput  = document.getElementById('anthropicKey');
const keyFeedback        = document.getElementById('keyFeedback');
const countryCodeInput   = document.getElementById('countryCodeInput');
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

// ─── Constants ─────────────────────────────────────────────────────────────────
const STORAGE_KEY     = 'craftcv_form_state';
const API_KEY_STORAGE = 'craftcv_api_key';
const AVATAR_STORAGE  = 'craftcv_avatar';

// skill objects in memory: [{name, level}]
let skillsList = [];

// ─── Country Codes ─────────────────────────────────────────────────────────────
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

// ─── Init ──────────────────────────────────────────────────────────────────────
function init() {
    populateCountryOptions();
    restoreSavedApiKey();
    restoreSavedTheme();
    attachEventListeners();
    restoreAvatarFromStorage();

    if (hasStoredSession()) {
        restoreBanner.hidden = false;
    } else {
        initDefaultEntries();
    }

    updatePlaceholderForJobPreferences();
    updatePreview();
    updateProgress();
    applyTheme(themeSelect.value);
}

// ─── Event Listeners ───────────────────────────────────────────────────────────
function attachEventListeners() {
    form.addEventListener('input',  handleFormInput);
    form.addEventListener('change', handleFormInput);
    form.addEventListener('blur',   handleBlur, true);
    form.addEventListener('click',  handleFormClick);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) updatePreview();
    });

    themeSelect.addEventListener('change', function () { applyTheme(this.value); });

    saveKeyBtn.addEventListener('click',     saveApiKey);
    restoreBtn.addEventListener('click',     restoreSession);
    discardBtn.addEventListener('click',     discardSession);
    copyCvBtn.addEventListener('click',      copyCvAsText);
    gmailBtn.addEventListener('click',       shareViaGmail);
    printBtn.addEventListener('click',       exportPdf);

    // Clear form modal
    clearFormBtn.addEventListener('click',   () => { clearModal.hidden = false; });
    clearCancelBtn.addEventListener('click', () => { clearModal.hidden = true; });
    clearConfirmBtn.addEventListener('click', () => {
        clearModal.hidden = true;
        hardClearForm();
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

// ─── Form Input Handling ───────────────────────────────────────────────────────
function handleFormInput(event) {
    const t = event.target;
    if (!t.matches('input, textarea, select')) return;

    saveFormState();

    if (t.matches('input[type="checkbox"][name="descPreference"]')) {
        updatePlaceholderForJobPreferences();
    }

    if (t.matches('input, textarea') && t.id) {
        validateField(t);
        updateCharCounter(t);
    }

    updatePreview();
    updateProgress();
}

function handleBlur(event) {
    if (event.target.matches('input, textarea') && event.target.id) {
        validateField(event.target);
    }
}

function handleFormClick(event) {
    if (event.target.classList.contains('add-entry-btn')) {
        const type = event.target.dataset.type;
        if (type === 'experience') addExperienceEntry();
        else if (type === 'education') addEducationEntry();
        else if (type === 'project') addProjectEntry();
    }

    if (event.target.classList.contains('remove-entry-btn')) {
        const entry = event.target.closest('.entry-card');
        const isExperience = entry?.classList.contains('experience-entry');
        const isEducation  = entry?.classList.contains('education-entry');
        const container    = isExperience ? experienceContainer : isEducation ? educationContainer : projectContainer;
        const minCount     = isExperience || isEducation ? 1 : 0;

        if (container.querySelectorAll('.entry-card').length <= minCount) {
            showToast('You need at least one entry.');
            return;
        }
        if (entry) {
            entry.remove();
            saveFormState();
            updatePreview();
            updateProgress();
        }
    }

    if (event.target.classList.contains('ai-enhance-btn')) {
        const targetId = event.target.dataset.target;
        enhanceText(targetId, event.target);
    }
}

// ─── Theme ────────────────────────────────────────────────────────────────────
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('craftcv_theme', theme);
}

function restoreSavedTheme() {
    const saved = localStorage.getItem('craftcv_theme');
    if (saved) {
        themeSelect.value = saved;
        applyTheme(saved);
    }
}

// ─── API Key ──────────────────────────────────────────────────────────────────
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
    const saved = localStorage.getItem(API_KEY_STORAGE);
    if (saved) anthropicKeyInput.value = saved;
}

// ─── Country Codes ────────────────────────────────────────────────────────────
function populateCountryOptions() {
    const list = document.getElementById('countryCodes');
    if (!list) return;
    list.innerHTML = COUNTRY_OPTIONS.map(item =>
        `<option value="${item.flag} ${item.code} (${item.dial})"></option>`
    ).join('');
    if (!countryCodeInput.value.trim()) countryCodeInput.value = '🇪🇬 EG (+20)';
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collectFormData()));
}

function collectFormData() {
    const experienceEntries = Array.from(experienceContainer.querySelectorAll('.experience-entry')).map(entry => ({
        title:       entry.querySelector('.experience-title')?.value       || '',
        company:     entry.querySelector('.experience-company')?.value     || '',
        duration:    entry.querySelector('.experience-duration')?.value    || '',
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
        location:        document.getElementById('location').value,
        summary:         document.getElementById('summary').value,
        experiences:     experienceEntries,
        educations:      educationEntries,
        projects:        projectEntries,
        skills:          skillsList,
        certifications:  document.getElementById('certifications').value,
        languages:       document.getElementById('languages').value,
        theme:           themeSelect.value,
        descPreferences: Array.from(document.querySelectorAll('input[name="descPreference"]:checked')).map(i => i.value)
    };
}

function hydrateFromStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) { initDefaultEntries(); return; }

    try {
        const d = JSON.parse(raw);
        if (!d) { initDefaultEntries(); return; }

        document.getElementById('fullName').value     = d.fullName    || '';
        document.getElementById('email').value         = d.email       || '';
        document.getElementById('phone').value         = d.phone       || '';
        countryCodeInput.value                          = d.countryCode || '🇪🇬 EG (+20)';
        document.getElementById('location').value      = d.location    || '';
        document.getElementById('summary').value       = d.summary     || '';
        document.getElementById('certifications').value = d.certifications || '';
        document.getElementById('languages').value     = d.languages   || '';

        updateCharCounter(document.getElementById('summary'));

        const prefs = d.descPreferences || [];
        document.querySelectorAll('input[name="descPreference"]').forEach(input => {
            input.checked = prefs.includes(input.value);
        });

        educationContainer.innerHTML = '';
        if (Array.isArray(d.educations) && d.educations.length) {
            d.educations.forEach(item => addEducationEntry(item));
        } else {
            addEducationEntry();
        }

        experienceContainer.innerHTML = '';
        if (Array.isArray(d.experiences) && d.experiences.length) {
            d.experiences.forEach(item => addExperienceEntry(item));
        } else {
            addExperienceEntry();
        }

        projectContainer.innerHTML = '';
        if (Array.isArray(d.projects) && d.projects.length) {
            d.projects.forEach(item => addProjectEntry(item));
        }

        // Restore skills list
        skillsList = [];
        skillTagsContainer.innerHTML = '';
        if (Array.isArray(d.skills) && d.skills.length) {
            d.skills.forEach(s => {
                if (s && s.name) addSkillToList(s.name, s.level || 'Intermediate');
            });
        }
        syncSkillsHidden();

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
    updatePreview();
    updateProgress();
    showToast('Form cleared.');
}

// ─── Dynamic Entries ──────────────────────────────────────────────────────────
function addExperienceEntry(data = {}) {
    const idx   = experienceContainer.querySelectorAll('.experience-entry').length + 1;
    const entry = document.createElement('div');
    entry.className = 'entry-card experience-entry';
    entry.innerHTML = `
        <div class="entry-header">
            <h3>Experience ${idx}</h3>
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
            <input type="text" class="experience-duration" value="${escapeHtml(data.duration || '')}" placeholder="e.g., Jan 2022 – Present">
        </div>
        <div class="form-group">
            <label>Job Description</label>
            <textarea class="experience-description" placeholder="Describe your role and impact" maxlength="800">${escapeHtml(data.description || '')}</textarea>
            <div class="char-counter exp-char-counter">0 / 800 characters</div>
            <button type="button" class="ai-enhance-btn secondary-btn" data-target-class="experience-description" data-entry-index="${idx - 1}">✦ AI Enhance</button>
            <div class="ai-warning exp-ai-warning"></div>
        </div>
    `;
    // Wire up char counter for this textarea
    const ta = entry.querySelector('.experience-description');
    const counter = entry.querySelector('.exp-char-counter');
    ta.addEventListener('input', () => {
        counter.textContent = `${ta.value.length} / 800 characters`;
    });
    if (data.description) counter.textContent = `${data.description.length} / 800 characters`;

    // Wire up AI enhance for this specific entry
    const aiBtn = entry.querySelector('.ai-enhance-btn');
    aiBtn.addEventListener('click', () => enhanceText(null, aiBtn, ta, entry.querySelector('.exp-ai-warning')));

    experienceContainer.appendChild(entry);
    updatePreview();
}

function addEducationEntry(data = {}) {
    const idx   = educationContainer.querySelectorAll('.education-entry').length + 1;
    const entry = document.createElement('div');
    entry.className = 'entry-card education-entry';
    entry.innerHTML = `
        <div class="entry-header">
            <h3>Education ${idx}</h3>
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

function addProjectEntry(data = {}) {
    const idx   = projectContainer.querySelectorAll('.project-entry').length + 1;
    const entry = document.createElement('div');
    entry.className = 'entry-card project-entry';
    entry.innerHTML = `
        <div class="entry-header">
            <h3>Project ${idx}</h3>
            <button type="button" class="remove-entry-btn secondary-btn">Remove</button>
        </div>
        <div class="form-group">
            <label>Project Name</label>
            <input type="text" class="project-name" value="${escapeHtml(data.name || '')}" placeholder="e.g., E-commerce Dashboard">
        </div>
        <div class="form-group">
            <label>Technologies Used</label>
            <input type="text" class="project-tech" value="${escapeHtml(data.tech || '')}" placeholder="e.g., React, Node.js, PostgreSQL">
        </div>
        <div class="form-group">
            <label>Project URL <span class="optional-tag">optional</span></label>
            <input type="url" class="project-url" value="${escapeHtml(data.url || '')}" placeholder="https://github.com/you/project">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="project-description" placeholder="What it does, your role, and impact" maxlength="500">${escapeHtml(data.description || '')}</textarea>
            <div class="char-counter proj-char-counter">0 / 500 characters</div>
        </div>
    `;
    const ta      = entry.querySelector('.project-description');
    const counter = entry.querySelector('.proj-char-counter');
    ta.addEventListener('input', () => {
        counter.textContent = `${ta.value.length} / 500 characters`;
        saveFormState();
        updatePreview();
        updateProgress();
    });
    if (data.description) counter.textContent = `${data.description.length} / 500 characters`;

    projectContainer.appendChild(entry);
    updatePreview();
}

// ─── Skills Tag Input ─────────────────────────────────────────────────────────
function addSkillTag() {
    const name  = skillInput.value.trim();
    const level = skillLevel.value;
    if (!name) return;
    if (skillsList.some(s => s.name.toLowerCase() === name.toLowerCase())) {
        showToast('Skill already added.');
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
        <span class="skill-tag-level skill-level-${level.toLowerCase()}">${escapeHtml(level)}</span>
        <button type="button" class="skill-tag-remove" aria-label="Remove ${escapeHtml(name)}">×</button>
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
        localStorage.setItem(AVATAR_STORAGE, dataUrl);
    };
    reader.readAsDataURL(file);
}

function setAvatar(dataUrl) {
    avatarPreview.innerHTML = `<img src="${dataUrl}" alt="Profile photo" class="avatar-img">`;
    cvAvatar.src    = dataUrl;
    cvAvatar.hidden = false;
    removeAvatarBtn.hidden = false;
    updateProgress();
}

function removeAvatar() {
    avatarPreview.innerHTML = `<span class="avatar-placeholder">No photo</span>`;
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
    const max = field.getAttribute('maxlength') || 600;
    counter.textContent = `${field.value.length} / ${max} characters`;
    counter.classList.toggle('counter-warn', field.value.length > max * 0.9);
}

// ─── Job Description Preferences Placeholder ─────────────────────────────────
function updatePlaceholderForJobPreferences() {
    const checked = Array.from(document.querySelectorAll('input[name="descPreference"]:checked')).map(i => i.value);
    const placeholders = {
        achievements:     'Highlight measurable accomplishments and results.',
        responsibilities: 'Summarize your daily responsibilities and scope.',
        impact:           'Emphasize the impact and business outcomes of your work.',
        skills:           'Focus on the key skills you used in the role.'
    };
    const text = checked.map(k => placeholders[k]).filter(Boolean).join(' ') || 'Describe your role and impact';
    experienceContainer.querySelectorAll('.experience-description').forEach(ta => {
        ta.placeholder = text;
    });
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validateField(field) {
    if (!field.id) return true;
    const errorTarget = document.querySelector(`[data-error-for="${field.id}"]`);
    if (!errorTarget) return true;
    if (field.required && !field.value.trim()) {
        errorTarget.textContent = 'This field is required.';
        field.classList.add('is-invalid');
        return false;
    }
    errorTarget.textContent = '';
    field.classList.remove('is-invalid');
    return true;
}

function validateForm() {
    let valid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(field => {
        if (!validateField(field)) valid = false;
    });
    return valid;
}

// ─── Progress ─────────────────────────────────────────────────────────────────
function updateProgress() {
    const checks = [
        Boolean(document.getElementById('fullName').value.trim()),
        Boolean(document.getElementById('email').value.trim()),
        Boolean(document.getElementById('phone').value.trim()),
        Boolean(document.getElementById('location').value.trim()),
        Boolean(document.getElementById('summary').value.trim()),
        educationContainer.querySelectorAll('.education-degree').length > 0 &&
            Boolean(educationContainer.querySelector('.education-degree')?.value.trim()),
        experienceContainer.querySelectorAll('.experience-title').length > 0 &&
            Boolean(experienceContainer.querySelector('.experience-title')?.value.trim()),
        skillsList.length > 0,
        Boolean(cvAvatar.src && !cvAvatar.hidden),
        projectContainer.querySelectorAll('.project-entry').length > 0,
    ];

    const filled  = checks.filter(Boolean).length;
    const pct     = Math.round((filled / checks.length) * 100);
    progressBar.style.width = `${pct}%`;
    progressLabel.textContent = `${pct}% complete`;
    progressBar.classList.toggle('progress-done', pct === 100);
}

// ─── Live Preview ─────────────────────────────────────────────────────────────
function updatePreview() {
    const fullName     = document.getElementById('fullName').value.trim()   || 'Your Name';
    const email        = document.getElementById('email').value.trim();
    const phone        = document.getElementById('phone').value.trim();
    const countryCode  = countryCodeInput.value.trim();
    const location     = document.getElementById('location').value.trim();
    const summary      = document.getElementById('summary').value.trim()    || 'Add a concise summary of your professional background.';
    const certifications = document.getElementById('certifications').value.split(',').map(s => s.trim()).filter(Boolean);
    const languages      = document.getElementById('languages').value.split(',').map(s => s.trim()).filter(Boolean);

    // Experience
    const experienceMarkup = Array.from(experienceContainer.querySelectorAll('.experience-entry')).map(entry => {
        const title       = entry.querySelector('.experience-title')?.value       || '';
        const company     = entry.querySelector('.experience-company')?.value     || '';
        const duration    = entry.querySelector('.experience-duration')?.value    || '';
        const description = entry.querySelector('.experience-description')?.value || '';
        if (!title && !company) return '';
        return `
            <div class="cv-exp-block">
                <div class="cv-exp-header">
                    <strong>${escapeHtml(title || 'Role')}</strong>${company ? `<span> at ${escapeHtml(company)}</span>` : ''}
                    ${duration ? `<span class="cv-duration">${escapeHtml(duration)}</span>` : ''}
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
        return `<li><strong>${escapeHtml(degree || 'Degree')}</strong>${school ? ` • ${escapeHtml(school)}` : ''}${year ? ` • ${escapeHtml(year)}` : ''}</li>`;
    }).join('');

    // Projects
    const projectsMarkup = Array.from(projectContainer.querySelectorAll('.project-entry')).map(entry => {
        const name        = entry.querySelector('.project-name')?.value        || '';
        const tech        = entry.querySelector('.project-tech')?.value        || '';
        const url         = entry.querySelector('.project-url')?.value         || '';
        const description = entry.querySelector('.project-description')?.value || '';
        if (!name) return '';
        return `
            <div class="cv-exp-block">
                <div class="cv-exp-header">
                    <strong>${escapeHtml(name)}</strong>
                    ${tech ? `<span class="cv-duration">${escapeHtml(tech)}</span>` : ''}
                    ${url  ? `<a href="${escapeHtml(url)}" class="cv-project-link" target="_blank" rel="noopener">${escapeHtml(url)}</a>` : ''}
                </div>
                ${description ? `<p class="cv-exp-desc">${escapeHtml(description)}</p>` : ''}
            </div>
        `;
    }).join('');

    // Skills
    const skillsMarkup = skillsList.length
        ? `<ul class="skills-list">${skillsList.map(s =>
            `<li><span class="skill-name">${escapeHtml(s.name)}</span><span class="skill-badge skill-badge-${s.level.toLowerCase()}">${escapeHtml(s.level)}</span></li>`
          ).join('')}</ul>`
        : '<p>Add your most relevant skills.</p>';

    // Update DOM
    document.getElementById('cvName').textContent     = fullName;
    document.getElementById('cvContact').textContent  = [email, phone ? `${countryCode} ${phone}` : ''].filter(Boolean).join(' • ');
    document.getElementById('cvLocation').textContent = location;
    document.getElementById('cvSummary').textContent  = summary;
    document.getElementById('cvEducation').innerHTML  = `<ul class="bullet-list">${educationMarkup || '<li>Add your educational background.</li>'}</ul>`;
    document.getElementById('cvExperience').innerHTML = experienceMarkup || '<p>Add your professional experience.</p>';
    document.getElementById('cvSkills').innerHTML     = skillsMarkup;
    document.getElementById('cvCertifications').innerHTML = certifications.length
        ? `<ul class="bullet-list">${certifications.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
        : '<p>No certifications listed.</p>';
    document.getElementById('cvLanguages').innerHTML = languages.length
        ? `<ul class="bullet-list">${languages.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
        : '<p>No languages listed.</p>';

    // Projects section — hide if empty
    const cvProjectsSection = document.getElementById('cvProjectsSection');
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
        showToast('CV copied to clipboard!');
    }).catch(() => {
        showToast('Copy failed. Please try again.');
    });
}

function shareViaGmail() {
    const text    = buildCvText();
    const name    = document.getElementById('fullName').value.trim() || 'CraftCV User';
    const subject = `CV – ${name}`;
    const body    = encodeURIComponent(text);
    const gmail   = `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(subject)}&body=${body}`;
    const mailto  = `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;
    if (!window.open(gmail, '_blank')) window.location.href = mailto;
}

function exportPdf() {
    window.print();
}

// ─── Build CV Text ────────────────────────────────────────────────────────────
function buildCvText() {
    const fullName    = document.getElementById('fullName').value.trim()   || 'Your Name';
    const email       = document.getElementById('email').value.trim();
    const phone       = document.getElementById('phone').value.trim();
    const countryCode = countryCodeInput.value.trim();
    const location    = document.getElementById('location').value.trim();
    const summary     = document.getElementById('summary').value.trim();
    const certifications = document.getElementById('certifications').value.trim() || 'None';
    const languages      = document.getElementById('languages').value.trim()      || 'Not specified';

    const hr = '─'.repeat(50);

    const experiences = Array.from(experienceContainer.querySelectorAll('.experience-entry')).map(entry => {
        const title       = entry.querySelector('.experience-title')?.value       || '';
        const company     = entry.querySelector('.experience-company')?.value     || '';
        const duration    = entry.querySelector('.experience-duration')?.value    || '';
        const description = entry.querySelector('.experience-description')?.value || '';
        const header      = [title, company && `at ${company}`, duration && `(${duration})`].filter(Boolean).join(' ');
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
        const header      = [name, tech && `[${tech}]`, url].filter(Boolean).join('  ');
        return `  • ${header}${description ? `\n    ${description}` : ''}`;
    }).join('\n');

    const skillsText = skillsList.length
        ? skillsList.map(s => `  • ${s.name} — ${s.level}`).join('\n')
        : '  • Add your skills.';

    const lines = [
        fullName,
        [email, phone ? `${countryCode} ${phone}` : '', location].filter(Boolean).join('  |  '),
        '',
        hr,
        'PROFESSIONAL SUMMARY',
        hr,
        summary || 'Not provided.',
        '',
        hr,
        'EDUCATION',
        hr,
        educations || '  • Not provided.',
        '',
        hr,
        'PROFESSIONAL EXPERIENCE',
        hr,
        experiences || '  • Not provided.',
    ];

    if (projects) {
        lines.push('', hr, 'PROJECTS & PORTFOLIO', hr, projects);
    }

    lines.push(
        '',
        hr,
        'SKILLS',
        hr,
        skillsText,
        '',
        hr,
        'CERTIFICATIONS',
        hr,
        `  ${certifications}`,
        '',
        hr,
        'LANGUAGES',
        hr,
        `  ${languages}`
    );

    return lines.join('\n');
}

// ─── AI Enhancement ───────────────────────────────────────────────────────────
async function enhanceText(targetId, btn, directTextarea = null, directWarning = null) {
    const textarea     = directTextarea || (targetId ? document.getElementById(targetId) : null);
    const warningTarget = directWarning || (targetId ? document.querySelector(`[data-warning-for="${targetId}"]`) : null);
    if (!textarea) return;

    const text = textarea.value.trim();
    if (!text) {
        if (warningTarget) warningTarget.textContent = 'Add some text before enhancing.';
        return;
    }

    const savedKey = localStorage.getItem(API_KEY_STORAGE);
    if (!savedKey) {
        if (warningTarget) warningTarget.textContent = 'Please add your Anthropic API key above to use AI features.';
        return;
    }

    // Loading state
    if (btn) {
        btn.disabled     = true;
        btn.textContent  = '⏳ Enhancing…';
    }
    if (warningTarget) warningTarget.textContent = '';

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type':     'application/json',
                'x-api-key':        savedKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model:      'claude-sonnet-4-6',
                max_tokens: 1000,
                system:     'You are a professional CV writer for CraftCV. Rewrite the following text to sound polished, professional, and impactful. Keep it concise. Return only the improved text, no explanations.',
                messages:   [{ role: 'user', content: text }]
            })
        });

        if (response.status === 401 || response.status === 403) {
            if (warningTarget) warningTarget.textContent = 'Invalid API key. Please check and update it above.';
            return;
        }
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

        const data        = await response.json();
        const improved    = data.content?.[0]?.text?.trim() || '';
        if (improved) {
            textarea.value = improved;
            if (warningTarget) warningTarget.textContent = '';
            updateCharCounter(textarea);
            updatePreview();
            saveFormState();
            showToast('Text enhanced!');
        }
    } catch (err) {
        if (warningTarget) warningTarget.textContent = 'AI enhancement failed. Please try again.';
    } finally {
        if (btn) {
            btn.disabled    = false;
            btn.textContent = '✦ AI Enhance';
        }
    }
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function showToast(message) {
    const toast = document.createElement('div');
    toast.className   = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
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
