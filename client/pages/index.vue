<template>
    <div>
    <h2>欢迎来到此处，这里有各种推荐，会陆续开放，欢迎添加微信：足球预测tips</h2>

    <h3>网球统计</h3>
    <table class="el-table tips-table" border="1">
            <thead>
            <tr>
                <th>月份</th>
                <th>金额</th>
                <th>盈利</th>
                <th>利润率</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>2019-03</td>
                <td>1700</td>
                <td>460</td>
                <td>27.06%</td>
            </tr>
            </tbody>
    </table>

    <h3>足球统计</h3>
    <table class="el-table tips-table" border="1">
            <thead>
            <tr>
                <th>月份</th>
                <th>金额</th>
                <th>盈利</th>
                <th>利润率</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>2019-03</td>
                <td>1800</td>
                <td>803</td>
                <td>44.61%</td>
            </tr>
            </tbody>
    </table>
    </div>
    
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'index',
    head: {
        title: '投注推荐'
    },
    layout: 'default',
    computed: {
        ...mapGetters([
            'visits'
        ])
    }
};
</script>

<style lang="less">
    h2{
        font-size: 40px;
        margin: 80px auto;
        text-align: center;
    }
</style>
