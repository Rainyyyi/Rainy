// Footer 组件 - 展示版权或额外信息
const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.footerText}>
                <i className="far fa-copyright" style={{marginRight: '6px'}}></i> 
                {new Date().getFullYear()} 智学课程平台 | 知识赋能未来
            </p>
        </footer>
    );
};
