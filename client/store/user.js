/**
 * @file description
 * @author email
 */
/* eslint-disable fecs-camelcase, fecs-min-vars-per-destructure */

import $cookie from 'js-cookie';

function setCookie(data) {
    let keyList = ['user_id', 'user_email', 'user_realname'];
    let expires = new Date();
    expires.setMonth(expires.getMonth() + 3);
    keyList.forEach(key => {
        $cookie.set(key, data[key], {
            expires: expires,
            path: '/'
        });
    });
}

function removeCookie() {
    let keyList = ['user_id', 'user_email', 'user_realname'];
    keyList.forEach(key => {
        $cookie.remove(key, {path: '/'});
    });
}
export default {
    state: {
        userInfo: {},
        userRoleList: [],
        userDepartmentList: [],
        userDepartmentGroupList: [],
        userMyDepartmentUserList: [],
    },
    getters: {},
    mutations: {
        USER_INIT(state, {user}) {
            state.userInfo = user;
            if (Object.keys(user).length) {
                setCookie(user);
            }
            else {
                removeCookie();
            }
        },
        USER_ROLE_INIT_LIST(state, {userRoleList}) {
            state.userRoleList = userRoleList;
        },
        USER_DEPARTMENT_INIT_LIST(state, {userDepartmentList}) {
            state.userDepartmentList = userDepartmentList;
        },
        MY_DEPARTMENT_USER_INIT_LIST(state, {userMyDepartmentUserList}) {
            state.userMyDepartmentUserList = userMyDepartmentUserList;
        },
        USER_DEPARTMENT_GROUP_INIT_LIST(state, {userDepartmentGroupList}) {
            state.userDepartmentGroupList = userDepartmentGroupList;
        }
    },
    actions: {
        userLogin({commit, dispatch}, {user_email, passwd}) {
            return this.$axios.userLogin({
                user_email,
                passwd
            }).then(() => {
                return dispatch('userInit', {user_email});
            }).catch(err => {

            });

        },
        userInit({commit, dispatch}, {user_email}) {
            return this.$axios.getUserInfo({
                user_email
            }).then(res => {
                commit('USER_INIT', {user: res.data});
                // return dispatch('systemGetMyDepartmentUser');
            }).then(() => {
                // return dispatch('systemGetDepartmentGroup');
            }).catch(err => {

            });
        },
        userLogout({commit}) {
            return this.$axios.userLogout()
                       .then(() => {
                           commit('USER_INIT', {user: {}});
                           return {};
                       })
                       .catch(err => {

                       });
        },
        userChangePassword({commit}) {
            return this.$axios.userChangePassword()
                       .then(() => {
                           commit('USER_INIT', {user: {}});
                           return {};
                       })
                       .catch(err => {

                       });
        },
        userResetPassword({state, commit}) {
            return this.$axios.userResetPassword({
                user_id: state.userInfo.user_id,
                passwd: 'pw123456'
            }).then(() => {
                commit('USER_INIT', {user: {}});
                return {};
            }).catch(err => {

            });
        },
        async userGetAllDepartment({commit}) {
            let {data} = await this.$axios.getDepartmentList({
                page: 1,
                rows: 1000
            }).catch(err => {

            });
            commit('USER_DEPARTMENT_INIT_LIST', {userDepartmentList: data.rows});
            return data.rows;
        },
        async userGetMyDepartmentUser({state, commit}) {
            let userInfo = state.userInfo;
            let {data} = await this.$axios.getDepartmentUser({
                action: 'mydep',
                like_email: userInfo.user_email
            }).catch(err => {

            });
            commit('MY_DEPARTMENT_USER_INIT_LIST', {userMyDepartmentUserList: data.rows});
            return data.rows;
        },
        async systemGetDepartmentGroup({commit}) {
            // TODO：目前后端接口未就绪
            // let {data} = await this.$axios.getDepartmentGroup();
            let data = {rows: []};
            commit('USER_DEPARTMENT_GROUP_INIT_LIST', {userDepartmentGroupList: data.rows});
            return data.rows;
        },
        async userInitRoleList({commit}) {
            let {data} = await this.$axios.getRoleList().catch(err => {});
            let ret = [];
            data.rows.forEach(role => {
                ret.push({
                    key: role.role_id,
                    value: role.role_name
                });
            });
            commit('USER_ROLE_INIT_LIST', {userRoleList: ret});
            return data.rows;
        }
    }
}

