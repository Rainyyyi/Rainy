// Header 组件 - 展示头部信息
const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.headerContainer}>
                <div style={styles.logoArea}>
                    <i className="fas fa-graduation-cap" style={styles.logoIcon}></i>
                    <h1 style={styles.title}>智学课程中心</h1>
                </div>
                <p style={styles.subtitle}>探索 · 成长 · 卓越</p>
            </div>
        </header>
    );
};
