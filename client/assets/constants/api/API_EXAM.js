/**
 * @file description
 * @author email
 */
// 考试系统
export const API_EXAM = [
    {
        name: 'examGetPlanList', // 获取计划列表
        url: '/api/trunk/dawn/plan/getplaninfo'
    },
    {
        name: 'examCreateQuestion', // 创建考题
        method: 'post',
        url: '/thindApi/exam/createQuestion'
        // url: '/api/exam/question/create'
    },
    {
        name: 'examGetQuestionList', // 获取考题（题库）列表
        url: '/thindApi/exam/getQuestionList'
    },
    {
        name: 'examGetQuestionDetail', // 获取考题详细信息
        url: ''
    },
    {
        name: 'examUpdateQuestion', // 编辑考题
        method: 'post',
        url: '/thindApi/exam/updateQuestion'
        // url: '/api/exam/question/update'
    },
    {
        name: 'examDeleteQuestion', // 删除考题
        method: 'post',
        url: '/thindApi/exam/deleteQuestion'
        // url: '/api/exam/question/delete'
    },
    {
        name: 'examGetExamList', // 获取考试列表
        url: '/thindApi/exam/getExamList'
    },
    {
        name: 'examCreateExam', // 创建考试
        url: '/thindApi/exam/createExam',
        // url: 'api/exam/create',
        method: 'post'
    },
    {
        name: 'examUpdateExam', // 更新考试
        url: '/thindApi/exam/updateExam',
        // url: 'api/exam/update',
        method: 'post'
    },
    {
        name: 'examDeleteExam', // 删除考试
        url: '/thindApi/exam/delete',
        method: 'post'
    },
    {
        name: 'examGetPaperList', // 获取试卷列表
        url: '/thindApi/exam/getPaperList'
    },
    {
        name: 'examAddPaper', // 添加考卷
        url: '/thindApi/exam/addPaper',
        // url: ' /api/exam/user/add',
        method: 'post',
        type: 'json'
    },
    {
        name: 'examDeletePaper', // 删除考卷
        url: '/thindApi/exam/deletePaper',
        // url: 'api/exam/deletePaper',
        method: 'post'
    },
    {
        name: 'examUpdatePaper', // 更新考卷
        url: '/thindApi/exam/updatePaper',
        type: 'json',
        // url: '/api/exam/user/update',
        method: 'post'
    },
    {
        name: 'examDownloadFile',
        url: '/thindApi/exam/downloadFile',
        type: 'json',
        method: 'post'
    }
];
