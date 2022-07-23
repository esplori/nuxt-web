<template>
  <div class="home-footer">
    <div class="site-info">
      <div><a href="https://www.nuxtjs.cn/">© 基于nuxtjs</a></div>
      <div><a href="https://beian.miit.gov.cn/">粤ICP备20013202号</a></div>
      <div><a href="/">© 2020-2022 javascript技术分享</a></div>
    </div>
    <el-backtop :bottom="100"> </el-backtop>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [
        { src: "https://cpro.baidustatic.com/cpro/ui/cm.js" },
        { src: "https://source.dsiab.com/plugins/webstatistics.js" },
      ],
    };
  },
  mounted() {
    if (process.client) {
      // 添加统计
      this.initWebStat();
    }
  },
  computed:{
  },
  methods: {
    initWebStat() {
      let webStats = new webStatistics({
        baseUrl: "/bootService", // 基础接口地址url
        url: "/stats/getStats.gif", // 请求上报api的接口地址
        routeMode: "history", // 填写单页面应用中使用的路由模式。
        autoUpload: true, // 是否自动请求接口，在setUserId之后会以baseUrl+url形式在页面切换时自动请求上报PV/UV的接口
        prop: {
          //请求参数映射，参数名默认如下，可以自定义修改参数名。
          id: "visitorId",
        },
      });
      setTimeout(() => {
        webStats.setUserId();
      }, 1000);
    },
  },
};
</script>
<style lang="less">
.home-footer {
  padding: 40px 0 80px 0;
  color: #fff;
  background: #222c3c;
  .site-info {
    width: 400px;
    margin: 0 auto;
    text-align: center;
    color: #828a92;
    div {
      padding: 5px;
      a {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
