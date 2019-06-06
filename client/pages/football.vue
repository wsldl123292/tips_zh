<template>
  <div class="football pr">
    <table class="el-table tips-table" border="1">
      <thead>
        <tr>
          <th>日期</th>
          <th>比赛</th>
          <th>选项</th>
          <th>赔率</th>
          <th>金额</th>
          <th>盈利</th>
          <th>结果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">2019-06-04</td>
          <td>OC萨菲 vs 马拉肯查</td>
          <td>OC萨菲</td>
          <td rowspan="2">2.63</td>
          <td rowspan="2">100</td>
          <td rowspan="2">163</td>
          <td rowspan="2" class="w">胜</td>
        </tr>
        <tr>
          <td>夏卡 vs EIF</td>
          <td>夏卡</td>
        </tr>
        <tr>
          <td rowspan="2">2019-06-05</td>
          <td>于韦斯屈莱 vs 河波</td>
          <td>于韦斯屈莱</td>
          <td rowspan="2">2.19</td>
          <td rowspan="2">100</td>
          <td rowspan="2">-100</td>
          <td rowspan="2" class="l">负</td>
        </tr>
        <tr>
          <td>FK利托梅日采 vs Sokol Zivanice</td>
          <td>FK利托梅日采</td>
        </tr>
        <tr>
          <td rowspan="2">2019-06-06</td>
          <td>卡诺支柱 vs 俺耶巴</td>
          <td>卡诺支柱</td>
          <td rowspan="2">4.3</td>
          <td rowspan="2">100</td>
          <td rowspan="2">?</td>
          <td rowspan="2">?</td>
        </tr>
        <tr>
          <td>埃努古流浪者 vs 洛比之星</td>
          <td>埃努古流浪者</td>
        </tr>
        <tr>
          <td colspan="7">
            <a href="https://pan.wps.cn/l/sadz5s8" target="_blank">更多请查看</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "football-page",
  head: {
    title: "足球推荐"
  },
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="less">
.tips-table {
  font-size: 12px;
  th,
  td {
    text-align: center;
  }
}
h2 {
  font-size: 40px;
  margin: 80px auto;
  text-align: center;
}
.w {
  background-color: green;
  font-weight: 900;
  color: black;
}
.l {
  background-color: red;
  font-weight: 900;
  color: black;
}
</style>
