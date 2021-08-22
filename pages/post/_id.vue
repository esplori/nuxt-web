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
          <div class="_11ehbqqorbp"></div>
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
  getCateApi,
  getRecomListApi2,
  getCateApi2,
} from "../api/index";
export default {
  components: {
    homeHeader: () => import("../../components/homeHeader.vue"),
    sideBar: () => import("../../components/sideBar.vue"),
  },
  data() {
    return {
      data: 0,
      recommandList:[],
      cateList: []
    };
  },
  /**
   * 设置标题及页面关键字
   */
  head() {
    return {
      title: this.detailData.title + "-javascript技术分享",
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
  /**
   * 请求接口，可同时请求多个接口,所有请求在服务端完成
   */
  // async asyncData({ $axios, route }) {
  //   let [detail, recommandList, cateList] = await Promise.all([
  //     getDetailApi(route.params.id),
  //     getRecomListApi({type: 'all'}),
  //     getCateApi({}),
  //   ]);
  //   return {
  //     detailData: detail.data.result,
  //     recommandList: recommandList.data,
  //     cateList: cateList.data.result,
  //     currPage: route.params.id,
  //   };
  // },
  /**
   * 请求接口，可同时请求多个接口，详情在服务端请求，分类跟推荐接口在浏览器调用
   */
  async asyncData({ $axios, route }) {
    let [detail] = await Promise.all([
      getDetailApi(route.params.id)
    ]);
    return {
      detailData: detail.data.result,
      currPage: route.params.id,
    };
  },
  methods: {
    async getRecomList() {
      let res = await getRecomListApi2({type: 'all'})
      if (res) {
        this.recommandList = res.data
      }
    },
    async getCate() {
      let res = await getCateApi2({})
      if (res) {
        this.cateList = res.data.result
      }
    },
    /**
     * 图片懒加载
     */
    lazyLoad() {
      var imgs = document.querySelectorAll("img");

      //用来判断bound.top<=clientHeight的函数，返回一个bool值

      function isIn(el) {
        var bound = el.getBoundingClientRect();

        var clientHeight = window.innerHeight;

        return bound.top <= clientHeight;
      }

      //检查图片是否在可视区内，如果不在，则加载

      function check() {
        Array.from(imgs).forEach(function (el) {
          if (isIn(el)) {
            loadImg(el);
          }
        });
      }

      function loadImg(el) {
        if (!el.src) {
          var source = el.dataset.originalSrc;
          el.src = source;
           // 解决其他开启网站防盗链功能
          el.referrerPolicy = 'no-referrer'
        }
      }

      window.onload = window.onscroll = function () {
        //onscroll()在滚动条滚动的时候触发
        check();
      };
    },
  },
  mounted() {
    // 判断是否在服务端
    if (!process.server) {
      this.lazyLoad();
      // 在浏览器端调接口，需要服务端做反向代理
      // 查推荐
      this.getRecomList()
      // 查分类
      this.getCate()
    }
    // 顶部
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324927",
      container: "_1q7vpoyk4v9",
      async: true,
    });
    // 底部
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324930",
      container: "_11ehbqqorbp",
      async: true,
    });
  },
};
</script>

<style lang="less">
// 截图图片样式错乱问题
#post-id{
  .image-container-fill {
    padding-bottom: 0!important;
  }
}
</style>
<style lang="less" scoped>
@media (max-width: 760px) {
  ._11ehbqqorbp {
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
      max-width: 815px;
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
        padding: 10px 0;
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
        a {
          margin-right: 10px;
          text-decoration: underline;
        }
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
