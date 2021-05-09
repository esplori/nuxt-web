<template>
  <div class="container">
    <homeHeader></homeHeader>
    <div class="home-body">
      <div class="left-body">
        <h1 class="detail-post-title">{{ detailData.title }}</h1>
        <div class="detail-post-info">{{ detailData.createDate }}</div>
        <div v-html="detailData.htmlContent" class="detail-post-content"></div>
      </div>
      <div class="right-sidebar">
        <sideBar :list="recommandList"></sideBar>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetailApi, getRecomListApi, getDetailApi2 } from "../api/index";
export default {
  components: {
    homeHeader: () => import("../../components/homeHeader.vue"),
    sideBar: () => import("../../components/sideBar.vue"),
  },
  data() {
    return {
      data: 0,
    };
  },
  head() {
    return {
      title: this.detailData.title + "-javasrcipt技术分享",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.detailData.title,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.detailData.keywords || this.detailData.title,
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    let [detail, recommandList] = await Promise.all([
      getDetailApi(route.params.id),
      getRecomListApi(),
    ]);
    return {
      detailData: detail.data.result,
      recommandList: recommandList.data,
    };
  },
  methods: {
    async search() {
      let [detail] = await Promise.all([getDetailApi2(this.$route.params.id)]);
      console.log("detail==" + detail);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  .home-body {
    max-width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    .left-body {
      width: 100%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
      padding: 20px;
      .detail-post-title {
        color: #141414;
        font-size: 26px;
      }
      .detail-post-info {
        padding: 10px 0;
        font-size: 14px;
        color: #a4a4a4;
      }
      .detail-post-content {
        padding: 10px 0;
        font-size: 16px;
        line-height: 32px;
        margin-bottom: 24px;
        text-align: justify;
        color: #4a4a4a;
        font-weight: 400;
        word-break: break-word;
      }
    }
    .right-sidebar{
      max-width: 400px;
    }
    @media screen and(max-width: 1024px) {
      .right-sidebar{
        display: none;
      }
    }
    .side-bar {
      padding: 20px;
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
    }
  }
}
</style>
