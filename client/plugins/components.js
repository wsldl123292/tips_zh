/**
 * @file description
 * @author email
 */
import Vue from 'vue';
import Pager from '~/components/lib/Pager';
import Datagrid from '~/components/lib/Datagrid';
import Uploader from '~/components/lib/Uploader';
import DateRangePicker from '~/components/LIB/DateRangePicker';

export default () => {
    Vue.use({
        install(Vue) {
            ((Vue) => {
                Vue.component('Pager', Pager);
                Vue.component('Datagrid', Datagrid);
                Vue.component('ThindUploader', Uploader);
                Vue.component('DateRangePicker', DateRangePicker);
            })(Vue);
        }
    });
};
