// CourseList 组件 - 课程列表容器，接收 courses 数组，删除和学习回调
const CourseList = ({ courses, onDeleteCourse, onLearnCourse }) => {
    // 空状态展示
    if (!courses || courses.length === 0) {
        return (
            <div style={styles.emptyContainer}>
                <i className="fas fa-folder-open" style={{fontSize: '4rem', color: '#cbd5e1', marginBottom: '1rem'}}></i>
                <p style={styles.emptyText}>暂无课程，请添加一门新课程吧~</p>
            </div>
        );
    }
    
    // 使用 map 列表渲染：遍历课程数组，为每个课程生成 CourseCard 组件
    return (
        <div style={styles.courseListGrid}>
            {courses.map(course => (
                <CourseCard 
                    key={course.id} 
                    course={course} 
                    onDelete={onDeleteCourse}
                    onLearn={onLearnCourse}
                />
            ))}
        </div>
    );
};
