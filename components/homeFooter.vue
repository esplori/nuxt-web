<template>
  <div class="home-footer">
    <div class="site-info">
      <h4><a href="/">@2021 powered by javascript技术分享</a></h4>
      <h4><a href="https://beian.miit.gov.cn/">粤ICP备20013202号</a></h4>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [
        { src: "https://cpro.baidustatic.com/cpro/ui/cm.js" },
        { src: "http://admin.dsiab.com/static/js/WebStats.js" },
      ],
    };
  },
  mounted() {
    if (!process.server) {
      // 添加统计
      this.initWebStat();
      window.addEventListener("click", (item) => {
        // this.getWegStats();
      });
      this.getWegStats();
    }
  },
  methods: {
    getWegStats() {
      console.log(window.hunter.getDirectData());
      window.hunter.track("/bootService/stats/getStats.gif", {
        ...window.hunter.getDirectData(),
      });
    },
    initWebStat() {
      var hunter = new WebStats({
        baseUrl: "/bootService", // 基础接口地址url
        url: "/stats/getStats.gif", // 请求上报api的接口地址
        routeMode: "history", // 填写单页面应用中使用的路由模式。
        autoUpload: true, // 是否自动请求接口，在setUserId之后会以baseUrl+url形式在页面切换时自动请求上报PV/UV的接口
        prop: {
          // 请求参数映射，参数名默认如下，可以自定义修改参数名。
          uv: "uv",
          pv: "pv",
          id: "id",
          mVisits: "mVisits",
          domain: "domain",
          title: "title",
          referrer: "referrer",
          screen: "screen",
          lang: "lang",
          userAgent: "userAgent",
          os: "os",
          browse: "browse",
          device: "device",
        },
      });
      window.hunter = hunter;
    },
  },
};
</script>
<style lang="less">
.home-footer {
  margin-top: 40px;
  padding: 20px;
  margin: 0 auto;
  .site-info {
    text-align: center;
    color: #828a92;
    a {
      color: #828a92;
    }
  }
}
</style>
