<template>
    <el-pagination
        @size-change="fetch(1)"
        @current-change="fetch"
        @prev-click="fetch"
        @next-click="fetch"
        :current-page.sync="page"
        :page-sizes="pageSizes"
        :page-size.sync="count"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
</template>

<script>
export default {
    name: 'pager',
    components: {},
    props: {
        total: {
            type: Number,
            default: 0
        },
        page: {
            type: Number,
            default: 1
        },
        count: {
            type: Number,
            default: 100
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 50, 100, 200, 300, 400, 500, 1000];
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        fetch(page) {
            this.page = page || this.page;
            this.$emit('change', {
                page: this.page,
                count: this.count
            });
            this.$forceUpdate();
        }
    }
};
</script>

<style lang="less" scoped>
.pager {

}
</style>
