<template>
  <div class="hockey pr">
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
          <td>纽约游骑兵 vs 新泽西魔鬼</td>
          <td>纽约游骑兵</td>
          <td>2.8</td>
          <td>100</td>
          <td>-100</td>
          <td class="l">错误</td>
        </tr>

        <tr>
          <td>2019-04-02</td>
          <td>华盛顿首都 vs 佛罗里达美洲豹</td>
          <td>佛罗里达美洲豹</td>
          <td>2.9</td>
          <td>100</td>
          <td>190</td>
          <td class="w">正确</td>
        </tr>
        <tr>
          <td colspan="7">
            <a href="https://pan.wps.cn/l/syp38c1" target="_blank">更多请查看</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "hockey-page",
  head: {
    title: "冰球推荐"
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
