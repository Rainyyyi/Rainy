// ======================== 课程管理页面 ========================
// 使用 React 函数组件 + useState + props + 列表渲染 + 事件绑定
// 包含组件: App, Header, CourseList, CourseCard, Footer
// 功能: 展示课程列表(名称+简介)，新增课程，删除课程，"学习"按钮交互，输入校验(课程名称不能为空)

// ---------- 初始模拟课程数据 ----------
const initialCourses = [
    { id: 1, name: 'React 从入门到精通', description: '全面掌握 React 核心概念，构建现代化前端应用。包含 Hooks、状态管理、路由等实战项目。' },
    { id: 2, name: 'JavaScript 设计模式', description: '深入浅出讲解常见设计模式，提升代码架构能力，写出优雅健壮的 JS 代码。' },
    { id: 3, name: 'CSS 网格与弹性盒布局', description: '系统学习 Flex 和 Grid 布局，轻松实现复杂响应式界面，告别传统浮动布局。' }
];

// 鼠标悬浮效果增强 (由于样式对象不支持伪类，但可以通过内联 style 不具备 hover，但我们可以用额外的 style 标签实现全局 hover)
// 为了使体验更好，动态添加全局 hover 样式
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    /* 按钮与卡片悬浮效果 */
    .submit-btn-hover-style:hover {
        background-color: #1f5e7a !important;
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .learn-btn-hover-style:hover {
        background-color: #d9e6ff !important;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    }
    .delete-btn-hover-style:hover {
        background-color: #fecaca !important;
        transform: scale(1.02);
    }
    .card-hover-style:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 30px -12px rgba(0,0,0,0.12);
        border-color: #cbdff2;
    }
    input:focus, textarea:focus {
        border-color: #2c7da0 !important;
        box-shadow: 0 0 0 3px rgba(44,125,160,0.2);
    }
`;
document.head.appendChild(styleSheet);

// 增强悬浮效果样式
const extraStyle = document.createElement("style");
extraStyle.textContent = `
    .enhanced-submit {
        transition: all 0.2s ease;
    }
    .enhanced-submit:hover {
        background-color: #1f5e7a !important;
        transform: translateY(-2px);
        box-shadow: 0 12px 20px rgba(0,0,0,0.15);
    }
    .enhanced-learn:hover {
        background-color: #d4e2fc !important;
        transform: scale(1.02);
    }
    .enhanced-delete:hover {
        background-color: #f8b4b4 !important;
        transform: scale(1.05);
    }
    .card-enhanced:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 30px -12px rgba(0,0,0,0.15);
        border-color: #bdd9f0;
    }
`;
document.head.appendChild(extraStyle);

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
