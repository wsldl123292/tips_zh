<template>
    <div class="datagrid">
        <div class="datagrid-header" v-if="options.showHeader">
            <slot name="header"></slot>
        </div>
        <div class="datagrid-body" v-if="options.showBody">
            <slot name="body"></slot>
        </div>
        <div class="datagrid-footer" v-if="options.showFooter">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
let defaultOptions = {
    showHeader: true,
    showBody: true,
    showFooter: true
};
export default {
    name: 'datagrid',
    components: {},
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    watch: {
        options: {
            deep: true,
            handler(val) {
                this.getOptions(val);
            }
        }
    },
    methods: {
        getOptions(options) {
            options = options || this.options;
            for (let k in defaultOptions) {
                if (!(k in options)) {
                    options[k] = defaultOptions[k];
                }
            }
            this.$forceUpdate();
        }
    },
    mounted() {
        this.getOptions();
    }
};
</script>

<style lang="less" scoped>
.datagrid {
    height: 100%;
    &-header{
        padding: 5px;
        min-height: 40px;
        background: #fff;
        /*display: flex;*/
        /*align-items: center;*/
        border-bottom: 2px solid #ebebeb;
    }
    &-footer{
        height: 50px;
        display: flex;
        align-items: center;
        border-top: 2px solid #ebebeb;
    }
    &-body{
        height: ~'calc(100% - 90px)';
        overflow-y: scroll;
    }
}
</style>
