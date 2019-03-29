/**
 * @file description
 * @author email
 */
/* eslint-disable fecs-camelcase, fecs-min-vars-per-destructure */

import Vuex from 'vuex';

import user from './user';
import exam from './exam';
import stats from './stats';
import system from './system';

const state = Object.assign({},
    user.state,
    exam.state,
    stats.state,
    system.state
);

const mutations = Object.assign({},
    user.mutations,
    exam.mutations,
    stats.mutations,
    system.mutations
);
const getters = Object.assign({},
    user.getters,
    exam.getters,
    stats.getters,
    system.getters
);
const actions = Object.assign({
        nuxtServerInit({commit, dispatch}, {req}) {}
    },
    user.actions,
    exam.actions,
    stats.actions,
    system.actions
);

const createStore = () => {
    return new Vuex.Store({
        state,
        mutations,
        getters,
        actions
    });
};

export default createStore;
