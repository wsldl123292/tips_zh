<template>
    <el-date-picker
        v-model="runDates"
        @change="setDate"
        :type="type"
        unlink-panels
        range-separator="至"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :picker-options="pickerOptions"
        value-format="yyyy-MM-dd HH:mm:ss"
    >
    </el-date-picker>
</template>

<script>
/* eslint-disable fecs-camelcase */
import moment from 'moment';
import getDateRangeByDay from '~/assets/js/utils/getDateRangeByDay';
moment.locale('zh-cn');

export default {
    name: 'date-range-picker',
    props: {
        startPlaceholder: {
            type: String,
            default: '开始日期'
        },
        endPlaceholder: {
            type: String,
            default: '结束日期'
        },
        dates: {
            type: Array,
            required: false,
            default() {
                return getDateRangeByDay(30);
            }
        },
        type: {
            type: String,
            default: 'datetimerange'
        }
    },
    data() {
        let dates = this.dates;
        return {
            runDates: dates.length ? [dates[0], dates[1]] : null,
            pickerOptions: {
                shortcuts: [{
                    text: '最近7天',
                    onClick(picker) {
                        picker.$emit('pick', getDateRangeByDay(7));
                    }
                }, {
                    text: '最近1个月',
                    onClick(picker) {
                        picker.$emit('pick', getDateRangeByDay(30));
                    }
                }, {
                    text: '最近3个月',
                    onClick(picker) {
                        picker.$emit('pick', getDateRangeByDay(90));
                    }
                }, {
                    text: '最近6个月',
                    onClick(picker) {
                        picker.$emit('pick', getDateRangeByDay(180));
                    }
                }, {
                    text: '最近9个月',
                    onClick(picker) {
                        picker.$emit('pick', getDateRangeByDay(270));
                    }
                }, {
                    text: '最近12个月',
                    onClick(picker) {
                        picker.$emit('pick', getDateRangeByDay(365));
                    }
                }]
            }
        };
    },
    computed: {
        startDate() {
            let dates = this.runDates;
            return dates ? moment(dates[0]).format('YYYY-MM-DD') : '';
        },
        endDate() {
            let dates = this.runDates;
            return dates ? moment(dates[1]).format('YYYY-MM-DD') : '';
        }
    },
    methods: {
        setDate(data) {
            if (data) {
                this.dates[0] = data[0];
                this.dates[1] = data[1];
            }
            else {
                this.dates[0] = '';
                this.dates[1] = '';
            }
            this.$emit('change', data);

        }
    }
};
</script>

<style lang="less">

</style>
