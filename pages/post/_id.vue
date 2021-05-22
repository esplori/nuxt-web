<template>
  <div class="container">
    <div class="home-body">
      <div class="left-body">
        <div>
          <h1 class="detail-post-title">{{ detailData.title }}</h1>
          <div class="post-info">
            <span class="create-date">{{ detailData.createDate }}</span>
            <span class="el-icon-view"> {{ detailData.views }}</span>
            <span class="cate-name">{{ detailData.cateName }}</span>
          </div>
          <div v-html="detailData.htmlContent" class="detail-post-content"></div>
        </div>
        <div>
          <div class="tags">标签：</div>
          <div class="copy-desc">
            本站文章由javascript技术分享原创和收集，内容如有问题，请联系站长删除，如若转载请注明原文及出处：https://www.dsiab.com/post/{{detailData.copyDesc}}
          </div>
        </div>
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
      ]
    };
  },
  async asyncData({ $axios, route }) {
    let [detail, recommandList] = await Promise.all([
      getDetailApi(route.params.id),
      getRecomListApi(),
    ]);
    detail.data.result.copyDesc = route.params.id
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
    display: flex;
    justify-content: space-between;
    .left-body {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #fff;
      padding: 20px;
      .detail-post-title {
        color: #141414;
        font-size: 26px;
      }
      .post-info{
        padding: 10px 0;
        font-size: 14px;
        color: #020202;
        span{
          margin-right: 10px;
        }
      }
      
      .detail-post-content {
        padding: 10px 0;
        font-size: 14px;
        line-height: 32px;
        margin-bottom: 24px;
        text-align: justify;
        color: #4a4a4a;
        font-weight: 400;
        word-break: break-word;
      }
      .copy-desc{
        padding: 20px 10px;
        font-size: 12px;
        background: #f5f5f5;
        word-break:break-all;
      }
      .tags{
        padding: 20px 0;
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
      // box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
    }
  }
}
</style>
