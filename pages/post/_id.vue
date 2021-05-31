<template>
  <div id="post-id">
    <div class="home-body">
      <div class="left-body">
        <div>
          <h1 class="detail-post-title">{{ detailData.title }}</h1>
          <div class="post-info">
            <span class="create-date">{{ detailData.createDate }}</span>
            <span class="el-icon-view"> {{ detailData.views }}</span>
            <span class="cate-name">{{ detailData.cateName }}</span>
          </div>
          <div class="_1q7vpoyk4v9"></div>
          <div v-html="detailData.content" class="detail-post-content"></div>
          <div class="_qz8e2i307x"></div>
        </div>
        <div>
          <div class="tags" v-if="detailData.keywords">
            标签：<a
              :href="'/post/tags/' + item"
              v-for="(item, index) in detailData.keywords.split(',')"
              :key="index"
              >{{ item }}</a
            >
          </div>
          <div class="copy-desc">
            <div>
              如若转载请注明原文及出处：https://www.dsiab.com/post/{{
                currPage
              }}
            </div>
            <div>
              本站文章由javascript技术分享原创和收集，内容如有问题，请联系站长删除。
            </div>
          </div>
        </div>
      </div>
      <div class="right-sidebar">
        <sideBar :list="recommandList" :cateList="cateList"></sideBar>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDetailApi,
  getRecomListApi,
  getDetailApi2,
  getCateApi,
} from "../api/index";
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
    let [detail, recommandList, cateList] = await Promise.all([
      getDetailApi(route.params.id),
      getRecomListApi(),
      getCateApi({}),
    ]);
    return {
      detailData: detail.data.result,
      recommandList: recommandList.data,
      cateList: cateList.data.result,
      currPage: route.params.id,
    };
  },
  methods: {
    async search() {
      let [detail] = await Promise.all([getDetailApi2(this.$route.params.id)]);
    },
  },
  mounted() {
    // 顶部
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324927",
      container: "_1q7vpoyk4v9",
      async: true,
    });
    // 底部
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324930",
      container: "_qz8e2i307x",
      async: true,
    });
  },
};
</script>

<style lang="less" scoped>
._qz8e2i307x {
  overflow-x: auto;
}
@media (max-width: 575.98px) {
  ._qz8e2i307x {
    display: none;
  }
  ._1q7vpoyk4v9 {
    display: none;
  }
}
#post-id {
  .home-body {
    display: flex;
    justify-content: space-between;
    .left-body {
      width: 100%;
      max-width: 800px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #fff;
      padding: 20px;
      .detail-post-title {
        color: #141414;
        font-size: 26px;
      }
      .post-info {
        padding: 5px 0;
        font-size: 14px;
        color: #020202;
        span {
          margin-right: 10px;
        }
      }

      .detail-post-content {
        padding: 10px 0;
        font-size: 14px;
        line-height: 32px;
        margin-bottom: 24px;
        margin-top: 15px;
        text-align: justify;
        color: #4a4a4a;
        font-weight: 400;
        word-break: break-word;
        white-space: normal;
        overflow-x: auto;
      }
      .copy-desc {
        padding: 20px 10px;
        font-size: 12px;
        background: #f5f5f5;
        word-break: break-all;
        border-radius: 5px;
      }
      .tags {
        padding: 20px 0;
      }
      img {
        width: 100%;
      }
    }
    .right-sidebar {
      max-width: 385px;
    }
    @media screen and(max-width: 1024px) {
      .right-sidebar {
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
