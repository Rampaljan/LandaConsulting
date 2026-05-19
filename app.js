let currentLanguage = localStorage.getItem('language') || 'pl';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePage();
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (let k of keys) {
        value = value[k];
        if (!value) return key;
    }
    
    return value;
}

function updatePage() {
    // Highlight active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active-lang');
        } else {
            btn.classList.remove('active-lang');
        }
    });

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = getTranslation(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        el.placeholder = getTranslation(key);
    });

    // Dynamically render services
    const servicesContainer = document.getElementById('servicesGrid');
    servicesContainer.innerHTML = '';
    getTranslation('services.items').forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
        servicesContainer.appendChild(card);
    });

    // Dynamically render projects
    const projectsContainer = document.getElementById('projectsGrid');
    projectsContainer.innerHTML = '';
    getTranslation('projects.items').forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(card);
    });

    // Dynamically render blog
    const blogContainer = document.getElementById('blogGrid');
    blogContainer.innerHTML = '';
    getTranslation('blog.items').forEach(article => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
        blogContainer.appendChild(card);
    });
}

// Initialize
setLanguage(currentLanguage);

// Event Listeners
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const langToggle = document.getElementById('langToggle');
const langOptions = document.getElementById('langOptions');
const langBtns = document.querySelectorAll('.lang-btn');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

langToggle.addEventListener('click', () => {
    langOptions.classList.toggle('active');
});

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        langOptions.classList.remove('active');
    });
});
