(function () {
    const userLang = navigator.language || navigator.userLanguage;
    const langPrefix = userLang.startsWith('zh') ? '/zh' : '/en';

    // 对应语言跳转
    const currentPath = window.location.pathname.replace('.html', '');
    if (!(currentPath.startsWith('/zh') || currentPath.startsWith('/en'))) {
        window.location.href = langPrefix + currentPath;
    }
})();