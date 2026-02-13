(function () {
    const userLang = navigator.language || navigator.userLanguage;
    const langPrefix = userLang.startsWith('zh') ? '/zh' : '/en';

    // 对应语言跳转
    const { pathname, search, hash } = window.location;
    const cleanPath = pathname.replace('.html', '');
    if (!(cleanPath.startsWith('/zh') || cleanPath.startsWith('/en'))) {
        window.location.href = langPrefix + cleanPath + search + hash;
    }
})();