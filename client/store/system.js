/**
 * @file description
 * @author email
 */
/* eslint-disable fecs-camelcase, fecs-min-vars-per-destructure */

export default {
    state: {
        systemPlanTypeList: [],
        systemElementTypeList: [],
        systemMaterialTypeList: []
    },
    getters: {},
    mutations: {
        SYSTEM_INIT_PLANTYPE_LIST(state, {systemPlanTypeList}) {
            state.systemPlanTypeList = systemPlanTypeList;
        },
        SYSTEM_INIT_ELEMENTTYPE_LIST(state, {systemElementTypeList}) {
            state.systemElementTypeList = systemElementTypeList;
        },
        SYSTEM_INIT_MATERIALTYPE_LIST(state, {systemMaterialTypeList}) {
            state.systemMaterialTypeList = systemMaterialTypeList;
        }
    },
    actions: {
        async systemInitPlanTypeList({commit}) {
            let {data} = await this.$axios.getPlanTypeList().catch(err => {});
            let systemPlanTypeList = [];
            data.rows.forEach(row => {
                systemPlanTypeList.push({
                    key: row.id,
                    value: row.plan_type_name,
                    info: row
                });
            });
            commit('SYSTEM_INIT_PLANTYPE_LIST', {systemPlanTypeList});
        },
        async systemInitElementTypeList({commit}) {
            let {data} = await this.$axios.getElementTypeList().catch(err => {});
            let systemElementTypeMap = {};
            let systemElementTypeList = [];
            let important = data.important;
            let common = data.common;
            important.forEach(i => {
                systemElementTypeMap[i.map_ident] = {
                    key: i.map_ident,
                    value: i.element_name
                };
            });

            common.forEach(cat => {
                cat.class_list.forEach(i => {
                    systemElementTypeMap[i.map_ident] = {
                        key: i.map_ident,
                        value: i.element_name
                    };
                });
            });

            for (let e in systemElementTypeMap) {
                systemElementTypeList.push(systemElementTypeMap[e]);
            }

            commit('SYSTEM_INIT_ELEMENTTYPE_LIST', {systemElementTypeList});
        },
        async systemInitMaterialTypeList({commit}) {
            let {data} = await this.$axios.getMaterialTypeList();
            console.log('data: ', data);
            commit('SYSTEM_INIT_MATERIALTYPE_LIST', {systemMaterialTypeList: data});
        }
    }
};
