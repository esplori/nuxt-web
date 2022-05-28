<template>
  <div id="post-id">
    <div class="home-body">
      <div class="left-body">
        <div>
          <h1 class="detail-post-title">{{ detailData.title }}</h1>
          <div class="post-info">
            <div class="avatar">
              <i class="profile-photo"></i>
            </div>
            <div class="head-info">
              <div class="title">
                <span class="userName"> {{ detailData.nickname || detailData.createBy}}</span>
              </div>
              <div class="other-info">
                <span class="createDate"> {{ detailData.createDate }}</span>
                <span>阅读: {{ detailData.views }} </span>
                <!-- <span>分类: {{ detailData.cateName }} </span> -->
              </div>
            </div>
          </div>
          <div v-html="detailData.content" class="detail-post-content"></div>
          <div class="getMore" v-show="showAll">
            <el-button @click="getMore" type="primary" class="getMoreBtn"
              >查看更多</el-button
            >
          </div>
          <!-- <div class="_utrtw8kq5so"></div> -->
          <div class="_cwvxpd9dl8s"></div>
        </div>
        <div>
          <div class="tags" v-if="detailData.keywords">
            标签：<a
              :href="'/post/tags/' + item"
              v-for="(item, index) in detailData.keywords.split(',')"
              :key="index"
              target="_blank"
              >{{ item }}</a
            >
          </div>
          <div class="copy-desc">
            <div>
              如若转载请注明原文及出处：https://www.dsiab.com/post/{{ postId }}
            </div>
            <div>
              本站文章由javascript技术分享原创和收集，内容如有问题，请联系站长删除。
            </div>
          </div>
        </div>
        <recommend-read :id="detailData.id"></recommend-read>
        <comments></comments>
      </div>
    </div>

    <el-dialog
      custom-class="custom-dialog-class"
      :visible.sync="dialogVisible"
      style="height: 80%"
      :show-close="false"
    >
      <img :src="imgUrl" alt="" id="bigImg" />
    </el-dialog>
  </div>
</template>

<script>
import { getDetailApi, getRecomListApi4Brower, getCateApi4Brower } from "./index";
import "highlight.js/styles/monokai-sublime.css";
export default {
  components: {
    homeHeader: () => import("@/components/common/homeHeader.vue"),
    comments: () => import("@/components/common/comments.vue"),
    RecommendRead:()=> import("@/components/common/recommendRead.vue")
  },
  data() {
    return {
      data: 0,
      recommandList: [],
      cateList: [],
      dialogVisible: false,
      imgUrl: "",
      showAll: false,
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
   * 请求接口，可同时请求多个接口，详情在服务端请求，分类跟推荐接口在浏览器调用
   */
  async asyncData({ $axios, route, error }) {
    let [detail] = await Promise.all([getDetailApi(route.params.id)]);

    if (detail.code === 1) {
      error({ statusCode: 500, message: "server page" });
      return false;
    }
    let result = {
      detailData: detail.data.result,
      postId: route.params.id,
      contentAll: detail.data.result.content,
    };
    if (result.detailData.content.length > 2000) {
      // 大于2000字符显示查看更多按钮
      // result.detailData.content = result.detailData.content.slice(0, 2500);
      // result.showAll = true;
    }
    return result;
  },
  methods: {
    getMore() {
      this.showAll = false;
      this.detailData.content = this.contentAll;
    },
    addImgEvent() {
      window.addEventListener("click", (e) => {
        let target = e.target;
        if (target.tagName === "IMG") {
          this.imgUrl = target.src;
          this.dialogVisible = true;
        }
      });
    },
    /**
     * 查询推荐
     */
    async getRecomList() {
      let res = await getRecomListApi4Brower({ type: "all" });
      if (res) {
        this.recommandList = res.data;
      }
    },
    /**
     * 获取分类
     */
    async getCate() {
      let res = await getCateApi4Brower({});
      if (res) {
        this.cateList = res.data.result;
      }
    },
    /**
     * 图片懒加载
     */
    lazyLoad() {
      let imgs = document.querySelectorAll("img");

      //用来判断bound.top<=clientHeight的函数，返回一个bool值

      function isIn(el) {
        let bound = el.getBoundingClientRect();

        let clientHeight = window.innerHeight;

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
          el.referrerPolicy = "no-referrer";
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
    if (process.client) {
      this.lazyLoad();
      // 在浏览器端调接口，需要服务端做反向代理
      // 查推荐
      this.getRecomList();
      // 查分类
      this.getCate();
      // 添加图片放大功能
      this.addImgEvent();
      // 底部
      (window.slotbydup = window.slotbydup || []).push({
        id: "u6324927",
        container: "_cwvxpd9dl8s",
        async: true,
      });
    }

    // 底部
    // (window.slotbydup = window.slotbydup || []).push({
    //   id: "u6324930",
    //   container: "_utrtw8kq5so",
    //   async: true,
    // });
  },
};
</script>

<style lang="less">
// 截图图片样式错乱问题
#post-id {
  .image-container-fill {
    padding-bottom: 0 !important;
  }
  // .detail-post-content img {
    // width: 70%;
  // }
  .detail-post-content p {
    // text-indent: 2rem;
    padding: 0 0 20px 0;
  }
  #bigImg {
    width: 100%;
  }
  .el-dialog.custom-dialog-class .el-dialog__body {
    padding: 0;
  }
  .el-dialog.custom-dialog-class .el-dialog__header {
    padding: 0;
  }
}
</style>
<style lang="less" scoped>
@media (max-width: 760px) {
  ._cwvxpd9dl8s {
    display: none;
  }
  ._utrtw8kq5so {
    display: none;
  }
}
#post-id {
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
      box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
      .detail-post-title {
        color: #141414;
        font-size: 18px;
        margin-bottom: 5px;
      }
      .post-info {
        // border-top: 1px dashed #ddd;
        // border-bottom: 1px dashed #ddd;
        margin: 10px 0;
        font-size: 14px;
        color: #020202;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          margin-right: 10px;
        }
        .avatar {
          display: flex;
        }
        .profile-photo {
          display: inline-block;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: url("https://source.dsiab.com/upload/bb4f38bd-160a-4e89-9697-2733231a8f84.jpg")
            no-repeat;
          background-size: cover;
        }
        .head-info {
          padding: 0 10px;
          .other-info {
            font-size: 14px;
            color: #969696;
          }
          .userName {
            font-size: 14px;
            font-weight: bold;
          }
          .createDate {
            font-size: 14px;
            color: #969696;
          }
        }
      }

      .detail-post-content {
        padding: 10px 0;
        font-size: 14px;
        // line-height: 32px;
        margin-bottom: 24px;
        margin-top: 15px;
        text-align: justify;
        color: #4a4a4a;
        font-weight: 400;
        word-break: break-word;
        white-space: normal;
        overflow-x: auto;
      }
      .getMore {
        margin-bottom:20px;
        .getMoreBtn {
          width: 100%;
        }
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
    // .right-sidebar {
    //   max-width: 385px;
    // }
    @media screen and(max-width: 1024px) {
      // .right-sidebar {
      //   display: none;
      // }
    }
    .side-bar {
      padding: 20px;
      background: #fff;
      // box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
    }
  }
}
</style>
