/**
 * @file description
 * @author email
 */

import Vue from 'vue';
import filters from '~/assets/js/filters/filters';

export default () => {
    Vue.use({install(Vue) {
        filters(Vue);
    }});
};
