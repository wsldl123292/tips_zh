/**
 * @file description
 * @author email
 */

export const API_USER = [
    // 系统管理
    {
        name: 'userLogin',
        method: 'post',
        url: '/api/ams/auth/login',
        // url: '/api/passport/login',
        type: 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    {
        name: 'userLogout',
        method: 'post',
        url: '/api/ams/auth/logout'
        // url: '/api/passport/logout'
    },
    {
        name: 'userChangePassword',
        method: 'post',
        url: '/api/ams/changepwd'
    },
    {
        name: 'userResetPassword',
        method: 'post',
        url: '/api/ams/resetpwd'
    },
    {
        name: 'getUserInfo',
        method: 'post',
        url: '/api/ams/user/getcuruserinfo'
        // url: '/api/passport/logout'
    },
    {
        name: 'getDepartmentList',
        url: '/api/ams/depart/getdepartlist'
        // method: 'post',
        // url: '/thindApi/system/getDepartmentList'
    },
    {
        name: 'getDepartmentInfo',
        url: '/thindApi/system/getdepartmentInfo' // 'api/depart/getdepart?action=mydep',
        // method: 'post'
    },
    {
        name: 'getDepartmentGroup',
        url: '/api/ams/depart/getdepartgroup?action=mydep' // 'api/depart/getdepart?action=mydep',
        // url: '/thindApi/system/getdepartmentGroup' // 'api/depart/getdepart?action=mydep',
        // method: 'post'
    },
    {
        name: 'getDepartmentUser',
        url: '/api/ams/depart/getdepartuserlist'
    },
    {
        name: 'getNoDepartmentUser',
        url: '/api/ams/user/nodepartuser'
    },
    {
        name: 'deleteDepartment',
        url: '',
        method: 'post'
    },
    {
        name: 'createDepgetDepartmentListartment',
        url: '',
        method: 'post'
    },
    {
        name: 'getGroupList',
        method: 'post',
        url: 'api/account/workgroup/getworkgrouplist'
        // url: '/api/ams/group/getgrouplist'
    },
    {
        name: 'getMyGroupUsers',
        method: 'post',
        url: 'api/trunk/dawn/account/workgroup/getmyteaminfo'
        // url: '/api/ams/group/getgrouplist?'
    },
    {
        name: 'getUserList',
        method: 'post',
        type: 'json',
        url: 'api/ams/user/getuserlist'
        // url: 'api/account/user/getuserlist'
    },
    {
        name: 'getRoleList',
        url: 'api/ams/role/getrolelist'
        // url: '/api/account/user/getrolelist' // role/getrolelist
    },
    {
        name: 'getPermissionList',
        method: 'post',
        url: 'api/ams/perm/getpermlist'
    }
];
