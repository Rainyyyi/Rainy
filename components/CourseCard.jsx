// CourseCard 组件 - 单个课程卡片，接收课程数据，删除回调，学习回调
const CourseCard = ({ course, onDelete, onLearn }) => {
    // 删除按钮处理
    const handleDelete = () => {
        if (window.confirm(`确定要删除课程《${course.name}》吗？`)) {
            onDelete(course.id);
        }
    };
    
    // 学习按钮处理 (交互反馈)
    const handleLearn = () => {
        onLearn(course.name);
    };
    
    return (
        <div style={styles.card} className="card-enhanced">
            <div style={styles.cardHeader}>
                <h3 style={styles.courseName}>
                    <i className="fas fa-book-open" style={{fontSize: '1.2rem', color: '#3b82f6', marginRight: '10px'}}></i>
                    {course.name}
                </h3>
                <button onClick={handleDelete} style={styles.deleteBtn} className="enhanced-delete" aria-label="删除课程">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
            <p style={styles.description}>{course.description}</p>
            <div style={styles.cardActions}>
                <button onClick={handleLearn} style={styles.learnBtn} className="enhanced-learn">
                    <i className="fas fa-play" style={{marginRight: '8px', fontSize: '0.85rem'}}></i> 开始学习
                </button>
            </div>
        </div>
    );
};
