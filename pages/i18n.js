const translations = {
    "en": {
        "btn_start": "Start Learning",
        "topnav1": "PATHWAYS",
        "topnav3": "Sandbox",
        "topnav4": "Library",
        "hero_title_flex": 'Introduction to <span class="text-primary underline decoration-4 underline-offset-8 decoration-primary-container">CSS Flexbox</span>',
        "heroheader": "Master the art of one-dimensional layouts. Learn how to align items, distribute space, and build responsive structures without the float-headaches of the past.",
        "flex_container_title": "The Flex Container",
        // 修复点：外部改用单引号，避免与内部 HTML class 的双引号冲突
        "flex_container_text": 'Everything begins with <code class="bg-primary-container px-2 font-bold text-on-primary-container">display: flex</code>. By applying this property to a parent element, all of its direct children automatically become "flex items," granting you granular control over their behavior along the primary and cross axes.',
        "flex_justify_text": "<b>justify-content</b>: Defines how space is distributed between and around items along the main axis.<br><br>• <b>flex-start</b>: Items packed toward the start.<br>• <b>flex-end</b>: Items packed toward the end.<br>• <b>center</b>: Items centered along the line.<br>• <b>space-between</b>: Even spacing; first item at start, last at end.<br>• <b>space-around</b>: Equal space on each side of items.<br>• <b>space-evenly</b>: Absolute equal spacing between all items.",
        "subtitle1": "Main Axis Alignment",
        "subtitle2": "Cross Axis Control",
        "flex_align_text": "<b>align-items</b>: Defines the default behavior for how items are laid out along the cross axis.<br><br>• <b>stretch</b>: Fill the container (default).<br>• <b>flex-start</b>: Align to the top/start.<br>• <b>flex-end</b>: Align to the bottom/end.<br>• <b>center</b>: Perfect vertical centering.<br>• <b>baseline</b>: Align according to text baselines.",
        "description1": "Experiment with the buttons above to see how flexbox distributes space in real-time.",
        "next_steps_title": "Next Steps",
        "next_steps_tag1": "Advanced Lesson",
        "next_steps_h1": "Mastering Flex-Grow & Basis",
        "next_steps_tag2": "Interactive Quiz",
        "next_steps_h2": "Flexbox Layout Challenge",
        "topnav4-1": "The Library",
        "explain library": "A curated collection of tools, assets, and documentation to accelerate your development journey. Curated by the community, for the community.",
        "search1": "Search Resources",
        "search_placeholder": "Filter by name or tag...",
        "button1": "ALL",
        "button2": "EDITORS",
        "button3": "ICONS",
        "button4": "INSPIRATION",
        "button5": "COMMUNITY"
    },
    "zh": {
        "btn_start": "开始学习",
        "topnav1": "学习路径",
        "topnav3": "沙盒",
        "topnav4": "库",
        "hero_title_flex": '<span class="text-primary underline decoration-4 underline-offset-8 decoration-primary-container">CSS Flexbox</span> 详解与入门',
        "heroheader": "掌握一维布局的艺术。学会如何对齐元素、分配空间，并构建响应式结构。",
        "flex_container_title": "Flex容器",
        "flex_container_text": '一切始于 <code class="bg-primary-container px-2 font-bold text-on-primary-container">display: flex</code>。通过将此属性应用于父元素，其所有的直接子元素便会自动成为 "flex items," 从而赋予你对它们在主轴和交叉轴上的行为进行精细控制的能力。',
        "flex_justify_text": "<b>justify-content:</b> 定义子元素在主轴（默认水平方向）上的排列与间距分配。<br><br>• <b>flex-start</b>：起点对齐，元素向左靠拢。<br>• <b>flex-end</b>：终点对齐，元素向右靠拢。<br>• <b>center</b>：居中对齐，元素水平居中。<br>• <b>space-between</b>：两端对齐，首尾贴边，中间等距。<br>• <b>space-around</b>：环绕分布，各元素两侧间距相等。<br>• <b>space-evenly</b>：绝对等距，所有空隙大小完全一致。",
        "flex_align_text": "<b>align-items:</b> 定义子元素在交叉轴（默认垂直方向）上的对齐规则。<br><br>• <b>stretch</b>：高度拉伸，填满容器（默认）。<br>• <b>flex-start</b>：顶部对齐，元素靠向上方。<br>• <b>flex-end</b>：底部对齐，元素靠向下方。<br>• <b>center</b>：垂直居中，实现完美的纵向居中。<br>• <b>baseline</b>：基线对齐，依照文字底边对齐。",
        "description1": "操作上方的按钮，以实时观察flexbox如何管理排布方式。",
        "next_steps_title": "下一步学习",
        "next_steps_tag1": "进阶课程",
        "next_steps_h1": "精通 Flex-Grow 与 Basis 属性",
        "next_steps_tag2": "互动测试",
        "next_steps_h2": "Flexbox 布局挑战赛",
        "topnav4-1": "关于库",
        "explain library": "一套经过精心筛选的工具、资源和文档集合，旨在加速您的开发进程。由社区精心筛选，并服务于社区。",
        "search1": "搜索资源",
        "search_placeholder": "按名称或标签搜索项目...",
        "button1": "全部",
        "button2": "编辑",
        "button3": "图标",
        "button4": "灵感",
        "button5": "社区"
    }
};

// --- 多语言切换逻辑 ---
function updateLanguage(lang) {
    const langData = translations[lang];
    if (!langData) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = langData[key];
        if (translation) {
            if (el.tagName === 'INPUT' || el.getAttribute('data-i18n-type') === 'placeholder') {
                el.placeholder = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });
}

function switchLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    updateLanguage(lang);
}

// --- 资源过滤逻辑 ---
function initFiltering() {
    const filterButtons = document.querySelectorAll('[data-category]');
    const sections = document.querySelectorAll('main section');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // 1. 按钮高亮切换
            filterButtons.forEach(btn => {
                if (btn === button) {
                    btn.classList.add('bg-primary', 'text-on-primary', 'pixel-shadow');
                    btn.classList.remove('bg-surface-container-lowest', 'text-outline');
                } else {
                    btn.classList.remove('bg-primary', 'text-on-primary', 'pixel-shadow');
                    btn.classList.add('bg-surface-container-lowest', 'text-outline');
                }
            });

            // 2. 区块显示隐藏
            sections.forEach(section => {
                if (category === 'all') {
                    section.classList.remove('hidden');
                } else {
                    if (section.id === `section-${category}`) {
                        section.classList.remove('hidden');
                    } else if (section.id && section.id.startsWith('section-')) {
                        section.classList.add('hidden');
                    }
                }
            });
        });
    });
}

// 统一初始化
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    updateLanguage(savedLang);
    initFiltering();
});