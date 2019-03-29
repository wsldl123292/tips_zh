/**
 * @file description
 * @author email
 */
import {downloadExcel} from '../utils/downloadFile';

export default {
    components: {},
    data() {
        return  {
            count: 50,
            rows: [],
            total: 0,
            pager: {
                page: 1,
                count: 50
            },
            currentTab: '0',
            isBatchable: false,
            isAutoLoad: true
        };
    },
    methods: {
        selectRows(data) {
            this.isBatchable = !!data.rows.length;
        },
        exportExcel(fileName, table) {
            let reqParams = this.parseParams(this.pager);
            delete reqParams.start;
            delete reqParams.offset;
            reqParams.table = table;
            this.$axios.examDownloadFile(reqParams).then(data => {
                downloadExcel(fileName, data.data);
            });
        },
        filter(data) {
            Object.assign(this.params, data);
        },
        sortChange({column, prop, order}) {
            this.params.sort = prop || 'create_time';
            this.params.order = order ? order.includes('asc') ? 'asc' : 'desc' : 'desc';
        },
        setPage({data, pager}) {
            this.rows = data.rows || [];
            this.total = data.total || [];
            this.pager.count = this.count = pager.count;
            this.pager.page = pager.page;
            this.$forceUpdate();
        }
    },
    created() {
        this.isAutoLoad && this.fetch();
    },
    watch: {
        params: {
            deep: true,
            handler() {
                this.fetch();
            }
        },
        currentTab() {
            this.fetch();
        }
    }
};

