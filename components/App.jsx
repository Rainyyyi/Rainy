// App 主组件 - 状态管理 + 新增课程 + 输入校验
const App = () => {
    // 状态管理: 存储课程列表
    const [courses, setCourses] = useState(initialCourses);
    // 新增表单字段: 课程名称，课程简介
    const [newCourseName, setNewCourseName] = useState('');
    const [newCourseDesc, setNewCourseDesc] = useState('');
    // 表单校验错误信息
    const [nameError, setNameError] = useState('');
    
    // 处理课程名称输入变化
    const handleNameChange = (e) => {
        setNewCourseName(e.target.value);
        // 实时清除错误提示 (当用户重新输入时)
        if (nameError) setNameError('');
    };
    
    const handleDescChange = (e) => {
        setNewCourseDesc(e.target.value);
    };
    
    // 新增课程逻辑 (包含输入校验: 课程名称不能为空)
    const handleAddCourse = () => {
        // 校验: 课程名称不能为空 (去除前后空格)
        const trimmedName = newCourseName.trim();
        if (!trimmedName) {
            setNameError('课程名称不能为空，请填写课程名称');
            return;
        }
        // 可选: 简介可以为空，但如果空可给默认文案
        const finalDesc = newCourseDesc.trim() === '' ? '暂无简介，讲师即将补充精彩内容。' : newCourseDesc.trim();
        
        // 构造新课程对象 (id 基于时间戳 + 随机数，确保唯一)
        const newId = Date.now() + Math.floor(Math.random() * 10000);
        const newCourse = {
            id: newId,
            name: trimmedName,
            description: finalDesc,
        };
        
        // 更新状态: 将新课程添加到现有列表头部（让新课程展示靠前）
        setCourses(prevCourses => [newCourse, ...prevCourses]);
        // 清空表单字段
        setNewCourseName('');
        setNewCourseDesc('');
        setNameError('');
        // 可选: 轻提示（使用 alert 简单反馈，体验良好）
        alert(`✅ 课程"${trimmedName}"已成功添加！`);
    };
    
    // 删除课程: 根据课程id过滤
    const handleDeleteCourse = (courseId) => {
        setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
    };
    
    // "学习"按钮交互: 弹出友好提示，展示用户正在学习哪个课程 (模拟开始学习)
    const handleLearnCourse = (courseName) => {
        alert(`🎓 正在进入课程：《${courseName}》\n祝您学习愉快，收获满满！`);
    };
    
    return (
        <div style={styles.appContainer}>
            <Header />
            <main style={styles.mainContent}>
                {/* 新增课程表单区域 */}
                <div style={styles.formCard}>
                    <h2 style={styles.formTitle}>
                        <i className="fas fa-plus-circle" style={{marginRight: '10px', color: '#2c7da0'}}></i>
                        创建新课程
                    </h2>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            课程名称 <span style={{color: '#e53e3e'}}>*</span>
                        </label>
                        <input 
                            type="text"
                            style={{...styles.input, borderColor: nameError ? '#f56565' : '#e2e8f0'}}
                            placeholder="例如：Python 数据分析实战"
                            value={newCourseName}
                            onChange={handleNameChange}
                        />
                        {nameError && <p style={styles.errorMsg}>{nameError}</p>}
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>课程简介</label>
                        <textarea 
                            style={styles.textarea}
                            rows="3"
                            placeholder="简要介绍课程内容、学习目标或亮点..."
                            value={newCourseDesc}
                            onChange={handleDescChange}
                        ></textarea>
                        <div style={styles.charHint}>{newCourseDesc.length}/200</div>
                    </div>
                    <button onClick={handleAddCourse} style={styles.submitBtn} className="enhanced-submit">
                        <i className="fas fa-save" style={{marginRight: '8px'}}></i> 发布课程
                    </button>
                </div>
                
                {/* 课程列表展示区域 */}
                <div style={styles.coursesSection}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>
                            <i className="fas fa-list-ul" style={{marginRight: '12px'}}></i>
                            全部课程 
                            <span style={styles.courseCount}>({courses.length})</span>
                        </h2>
                        <div style={styles.divider}></div>
                    </div>
                    {/* CourseList 组件: 传递课程列表，删除回调，学习回调 (组件之间数据传递) */}
                    <CourseList 
                        courses={courses} 
                        onDeleteCourse={handleDeleteCourse}
                        onLearnCourse={handleLearnCourse}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};
