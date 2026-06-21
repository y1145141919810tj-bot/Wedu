// main.js

/**
 * 通用组件注入函数
 * @param {string} id 目标容器ID
 * @param {string} url 组件HTML路径
 */
async function inject(id, url) {
    try {
        const res = await fetch(url);
        const html = await res.text();
        const target = document.getElementById(id);
        if (target) {
            target.innerHTML = html;
            return true;
        }
    } catch (err) {
        console.error(`注入组件失败: ${url}`, err);
    }
    return false;
}

/**
 * 导航栏状态同步函数
 * 根据当前文件名自动匹配并高亮导航链接
 */
function syncNavLinks() {
    const navLinks = document.querySelectorAll('#nav-placeholder a');
    // 获取当前文件名，例如 "library.html"
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    console.log("当前识别到的页面文件名:", currentPage); // 调试行

    navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // 使用 endsWith 更加稳健，它能匹配 "../pages/map.html" 和 "map.html"
    if (linkHref && (linkHref === currentPage || linkHref.endsWith('/' + currentPage))) {
        link.classList.add('border-b-4', 'border-[#00684f]', 'text-[#00684f]');
        link.classList.remove('text-[#2f6275]', 'hover:bg-[#89f0cb]');
    } else {
        link.classList.remove('border-b-4', 'border-[#00684f]', 'text-[#00684f]');
        link.classList.add('text-[#2f6275]');
    }
});
}

/**
 * 全局初始化函数
 */
async function initApp() {
    // 1. 注入公共组件
    await Promise.all([
        inject('nav-placeholder', '../components/nav.html'),
        inject('footer-placeholder', '../components/footer.html')
    ]);

    // 2. 组件加载完成后同步导航状态
    syncNavLinks();
    
    // 3. 全局通用的按钮样式微调（例如 Start Learning 按钮）
    const startBtn = document.querySelector('nav button[data-i18n="btn_start"]');
    if (startBtn) {
        startBtn.classList.add('pixel-shadow-active', 'rounded-none');
    }
}