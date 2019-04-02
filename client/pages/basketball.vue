<template>
  <div class="basketball pr">
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
          <td>2019-04-02</td>
          <td>波特兰开拓者 vs 明尼苏达森林狼</td>
          <td>明尼苏达森林狼</td>
          <td>2.4</td>
          <td>30</td>
          <td>-30</td>
          <td class="l">错误</td>
        </tr>

        <tr>
          <td>2019-04-02</td>
          <td>波特兰开拓者 vs 明尼苏达森林狼</td>
          <td>明尼苏达森林狼 +3</td>
          <td>1.95</td>
          <td>60</td>
          <td>-60</td>
          <td class="l">错误</td>
        </tr>
        <tr>
          <td colspan="7">
            <a href="https://pan.wps.cn/l/sx0jvew" target="_blank">更多请查看</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "basketball-page",
  head: {
    title: "篮球推荐"
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
