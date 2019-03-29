<template>
    <el-container>
        <el-aside width="200px" class="tc"></el-aside>
        <el-container>
            <Header />
            <el-main>
                <nuxt/>
            </el-main>
            <el-footer></el-footer>
        </el-container>
        <el-aside width="200px" class="tc"></el-aside>
    </el-container>
</template>

<script>
import Header from '~/components/common/TipHeader';

export default {
        head: {
            title: '投注推荐'
        },
        components: {
            Header
        }
    };
</script>

<style scoped>
</style>
