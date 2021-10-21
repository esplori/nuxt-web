<template>
  <div class="home-footer">
    <div class="site-info">
      <div><a href="/">@2021 powered by javascript技术分享</a></div>
      <div><a href="https://beian.miit.gov.cn/">粤ICP备20013202号</a></div>
    </div>
    <el-backtop :bottom="100">
      
    </el-backtop>
  </div>
</template>
<script>
import FingerprintJS from "@fingerprintjs/fingerprintjs";
export default {
  head() {
    return {
      script: [
        { src: "https://cpro.baidustatic.com/cpro/ui/cm.js" },
        { src: "https://source.dsiab.com/compress-js/dist/js/WebStats.js" },
      ],
    };
  },
  mounted() {
    if (!process.server) {
      // 添加统计
       this.initFingerprint();
      window.addEventListener("click", (item) => {
        this.getWegStats();
      });
    }
  },
  methods: {
    getWegStats() {
      window.webStats.track("/bootService/stats/getStats.gif", {
        ...window.webStats.getDirectData(),
        ...{ visitorId: window.visitorId },
      });
    },
    initWebStat() {
      let webStats = new WebStats({
        baseUrl: "/bootService", // 基础接口地址url
        url: "/stats/getStats.gif", // 请求上报api的接口地址
        routeMode: "history", // 填写单页面应用中使用的路由模式。
        autoUpload: true, // 是否自动请求接口，在setUserId之后会以baseUrl+url形式在页面切换时自动请求上报PV/UV的接口
      });
      window.webStats = webStats;
      this.getWegStats();
    },
    initFingerprint() {
      let _this =this
      // Initialize an agent at application startup.
      const fpPromise = FingerprintJS.load();
      (async () => {
        // Get the visitor identifier when you need it.
        const fp = await fpPromise;
        const result = await fp.get();

        // This is the visitor identifier:
        const visitorId = result.visitorId;
        console.log(visitorId);
        window.visitorId = visitorId;
        setTimeout(() => {
          _this.initWebStat();
        }, 200);
      })();
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
