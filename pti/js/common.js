function getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'en';
}

function getCurrentPath() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
}

function updateLanguageButtons(currentLang) {
    const buttons = document.querySelectorAll('.language-switcher a');
    const currentPath = getCurrentPath();
    
    buttons.forEach(button => {
        const lang = button.getAttribute('data-lang');
        button.classList.toggle('active', lang === currentLang);
        button.href = `${currentPath}?lang=${lang}`;
    });
}

function updateLinks(lang) {
    const guideLink = document.getElementById('guideLink');
    const privacyLink = document.getElementById('privacyLink');
    
    if (guideLink) {
        const baseHref = guideLink.getAttribute('href').split('?')[0];
        guideLink.href = `${baseHref}?lang=${lang}`;
    }
    
    if (privacyLink) {
        const baseHref = privacyLink.getAttribute('href').split('?')[0];
        privacyLink.href = `${baseHref}?lang=${lang}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const lang = getLanguageFromURL();
    updateLanguageButtons(lang);
    updateLinks(lang);
}); 