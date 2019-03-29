<template>
    <div class="header">
        <ul class="header-ul">
            <li v-for="r in NavConfig" v-if="!r.hidden">
                <nuxt-link :to="r.path">{{r.name}}</nuxt-link>
            </li>
        </ul>
    </div>

</template>

<script>
import {NavConfig} from '../../assets/constants/ROUTES';

export default {
    name: 'app-header',
    data() {
        return {
            NavConfig
        };
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
    .header-ul {
        li {
            display: inline-block;
            margin: 0 10px;
        }
    }
    a {
        font-size: 15px;
        color: #fff;
    }
}
</style>
