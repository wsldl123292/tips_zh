<template>
    <el-header class="header">
        <el-menu
            router
            mode="horizontal"
            background-color="#058b96"
            text-color="#fff"
            active-text-color="#2dfaff"
            :default-active="defaultPath"
        >

            <el-menu-item v-for="menu in NavConfig"
                          v-show="!menu.hidden"
                          :index="'/' + menu.path"
                          :key="menu.path"
                          :title="menu.name"
                          class="f14"
            >
                <!--<i :class="menu.icon" class="menu-icon"></i>-->
                <transition name="el-fade-in-linear" mode="out-in" :duration="100" slot="title">
                    <span>{{menu.name}}</span>
                </transition>
            </el-menu-item>
        </el-menu>
    </el-header>

</template>

<script>
import {NavConfig} from '../../assets/constants/ROUTES';

export default {
    name: 'app-header',
    head: {
        title: '投注推荐'
    },
    data() {
        return {
            NavConfig,
            collapse: true,
            defaultPath: '',
            base: 'football'
        };
    },
    computed: {
        activeIndex() {
            let menu = this.base;
            let index = NavConfig.findIndex(item => item.path === menu);
            return index === -1 ? 0 : index;
        }
    },
    methods: {
        toggleMenu() {
            this.collapse = !this.collapse;
        },
        getDefaultPath() {
            let p = document.location.pathname;
            if (process.env.NODE_ENV === 'production') {
                p = p.split('/thind')[1];
                if (p.slice(-1) === '/') {
                    p = p.slice(0, -1);
                }
            }
            this.defaultPath = p;
        }
    },
    mounted() {
        this.getDefaultPath();
    },
    watch: {
        $route() {
            this.getDefaultPath();
        }
    }
};
</script>

<style lang="less" scoped>
.header {
    background: #328487;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>
