/**
 * @file description
 * @author email
 */
/* eslint-disable fecs-camelcase */
import moment from 'moment';

export default {
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        autoSetHeight: {
            type: Boolean,
            default: true
        },
        height: {
            type: Number | String,
            default: '100%'
        }
    },
    data() {
        return {};
    },
    methods: {
        formatTime(row, column) {
            let key = column.property;
            return this._formatTime(row[key]);
        },
        _formatTime(time) {
            if (time) {
                return moment(time).format('YYYY-MM-DD HH:mm:ss');
            }
            return '-';
        },
        changeParams({column, prop, order}) {
            this.$emit('sortChange', {column, prop, order});
        },
        clearSelection(refName) {
            this.$refs[refName].clearSelection();
            this.$refs[refName].setCurrentRow();
        },
        toggleSelection(refName, rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs[refName].toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        selectRow(row, cmd) {
            this.$emit('selectRow', {row, cmd});
        },
        selectRows(refName) {
            refName = refName || this.refName;
            this.$emit('selectionChange', {rows: this.getSelectedRows(refName)});
        },
        getSelectedRows(refName) {
            if (!refName) {
                return false;
            }
            return this.$refs[refName].selection;
        }
    },
    watch: {
        options: {
            deep: true,
            handler(val) {
                this.$emit('filterChange', val);
            }
        }
    }
};
