<template>
    <div class="introduction">
        <el-card
            class="box-card"
            v-for="m in routeList"
            :key="m.path"
        >
            <div slot="header" class="box-header">
                <el-row>
                    <el-col :span="12" class="tl">
                        <span style="line-height: 28px">{{m.name}}</span>
                    </el-col>
                    <el-col :span="12" class="tr">
                        <nuxt-link tag="el-button" :to="getPath(m)">
                            进入
                        </nuxt-link>
                    </el-col>
                </el-row>

            </div>
            <div class="text item">
                {{m.desc}}
            </div>
        </el-card>
    </div>
</template>

<script>
import {NavConfig} from '~/assets/constants/ROUTES';
export default {
    name: 'introduction',
    components: {},
    props: {
        base: {
            type: String,
            default: 'system'
        }
    },
    computed: {
        routeList() {
            let menu = this.base;
            let index = NavConfig.findIndex(item => item.path === menu);
            return NavConfig[index].menu;
        }
    },
    methods: {
        getPath(menu) {
            let path = `/${this.base}/${menu.path}`;
            if (menu.menu) {
                path = `${path}/${menu.menu[0].path}`;
            }
            return path;
        }
    }
};
</script>

<style lang="less" scoped>
.introduction{
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    .box-card{
        padding: 2px;
        margin: 15px;
        display: inline-block;
        width: 230px;
        min-height: 180px;
        text-overflow: ellipsis;
        .box-header{
            font-weight: 800;
        }
        .text{
            color: #b4bccc;
            line-height: 20px;
            font-size: 14px;
        }
        img{
            width: 100%;
            height: auto;
        }
    }
}
</style>
