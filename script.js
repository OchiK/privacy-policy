document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Elements
  const themeToggle = document.getElementById('theme-toggle');
  const body = bodyElement();

  // Language Toggle Elements
  const langToggle = document.getElementById('lang-toggle');
  const langJaBtn = document.getElementById('lang-ja-btn');
  const langEnBtn = document.getElementById('lang-en-btn');
  const contentJa = document.getElementById('content-ja');
  const contentEn = document.getElementById('content-en');
  const heroTitleMain = document.getElementById('hero-title-main');
  const heroSubtitleText = document.getElementById('hero-subtitle-text');
  const badgeUpdateText = document.getElementById('badge-update-text');

  // --- Theme Toggle Logic ---
  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    if (theme === 'light') {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }

  function bodyElement() {
    return document.body;
  }

  // --- Language Switcher Logic ---
  // Default to Japanese (or saved preference)
  let currentLang = localStorage.getItem('lang') || 'ja';
  setLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    setLanguage(currentLang);
  });

  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    if (lang === 'ja') {
      // Toggle button highlights
      langJaBtn.classList.add('label-active');
      langEnBtn.classList.remove('label-active');

      // Swap contents with smooth transitions
      contentEn.classList.remove('active-section');
      setTimeout(() => {
        contentEn.style.display = 'none';
        contentJa.style.display = 'block';
        setTimeout(() => {
          contentJa.classList.add('active-section');
        }, 50);
      }, 300);

      // Hero Texts
      heroTitleMain.textContent = 'プライバシーポリシー';
      heroSubtitleText.textContent = 'くらべっ子はプライバシーファーストの設計です。データは100%端末内で処理され、外部への送信は一切ありません。';
      badgeUpdateText.textContent = '最終更新日:';
      document.title = 'プライバシーポリシー — くらべっ子';

    } else {
      // Toggle button highlights
      langEnBtn.classList.add('label-active');
      langJaBtn.classList.remove('label-active');

      // Swap contents with smooth transitions
      contentJa.classList.remove('active-section');
      setTimeout(() => {
        contentJa.style.display = 'none';
        contentEn.style.display = 'block';
        setTimeout(() => {
          contentEn.classList.add('active-section');
        }, 50);
      }, 300);

      // Hero Texts
      heroTitleMain.textContent = 'Privacy Policy';
      heroSubtitleText.textContent = 'Kurabekko is designed from the ground up to respect your privacy. All processing is done 100% on your device.';
      badgeUpdateText.textContent = 'Last Updated:';
      document.title = 'Privacy Policy — Kurabekko';
    }
  }
});
