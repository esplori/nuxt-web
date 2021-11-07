<template>
  <div class="container">
    <div class="home-body">
      <div class="left-body">
        <div class="recommand">
          <div class="carousel">
            <div class="carousel-item">
              <el-carousel indicator-position="outside">
                <el-carousel-item
                  v-for="(item, index) in carouselList"
                  :key="index"
                >
                  <img :src="item.imgUrl" alt="" style="width: 100%" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <h2 class="big-title">推荐图文</h2>
            <div class="card">
              <el-row :gutter="20">
                <el-col
                  :span="6"
                  v-for="(item, index) in recommandList.slice(0, 4)"
                  :key="index"
                >
                  <el-card
                    style="border: none"
                    shadow="never"
                    :body-style="{
                      padding: '0px',
                      width: '100%',
                      height: '200px',
                    }"
                  >
                    <img
                      style="width: 100%; height: 130px"
                      :src="carouselList[index].imgUrl"
                      class="image"
                    />
                    <div class="card-title">
                      <span
                        ><a :href="'/post/' + item.id"
                          >{{ item.title }}}</a
                        ></span
                      >
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="_yiashlj3sgk"></div>
        <h2 class="big-title common-big-title">综合资讯</h2>
        <listBody :list="homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination
            :pageSize="10"
            :total="homeList.total"
            :currentPage="page"
            :prePath="'/post/page/'"
          ></nuxtPagination>
        </div>
      </div>
      <!-- <div class="right-sidebar">
        <sideBar></sideBar>
      </div> -->
    </div>
  </div>
</template>

<script>
import {
  getListApi,
  getRecomListApi,
  getRecomListApi2,
  getCateApi,
  getCateApi2,
  getTagsApi,
  getTagsApi2,
  getSiteInfoApi
} from "./api/index";
export default {
  components: {
    listBody: () => import("../components/home/pageListBody.vue"),
    // sideBar: () => import("../components/sideBar/sideBar.vue"),
    nuxtPagination: () => import("../components/common/nuxtPagination.vue"),
  },
  data() {
    return {
      carouselList: [
        {
          imgUrl:
            "http://source.dsiab.com/upload/0913ca3e-fb3c-4120-98fe-62bd86cf9b42.jpeg",
          desc: "",
          url: "",
        },
        {
          imgUrl:
            "http://source.dsiab.com/upload/5b3e8856-d0aa-4130-8150-fface4bf3c3b.jpeg",
          desc: "",
          url: "",
        },
        {
          imgUrl:
            "http://source.dsiab.com/upload/aa7f6f40-a451-4cb8-9a79-408d33488c84.jpeg",
          desc: "",
          url: "",
        },
        {
          imgUrl:
            "http://source.dsiab.com/upload/7af643d9-8640-4dd1-8987-188012209bcb.jpeg",
          desc: "",
          url: "",
        },
      ],
      recommandList: [],
    };
  },
  // 所有接口通过服务端调用渲染

  // async asyncData({ query, store, $axios, route }) {
  //   let [homeList, recommandList, cateList,tagsList] = await Promise.all([
  //     getListApi({ page: 1 }),
  //     getRecomListApi({ type: "all" }),
  //     getCateApi({}),
  //     getTagsApi({})
  //   ]);
  //   return {
  //     homeList: homeList.data,
  //     recommandList: recommandList.data,
  //     cateList: cateList.data.result,
  //     page: parseInt(route.params.id || 1),
  //     tagsList: tagsList.data.result
  //   };
  // },

  // 只要列表通过服务端调用渲染，分类跟推荐接口在浏览器调用
  async asyncData({ query, store, $axios, route }) {
    let [homeList] = await Promise.all([getListApi({ page: 1 })]);
    return {
      homeList: homeList.data,
      page: parseInt(route.params.id || 1),
    };
  },
  computed: {},
  mounted() {
    // 判断是否在服务端
    if (!process.server) {
      // 在浏览器端调接口，需要服务端做反向代理
      // 查推荐
      this.getRecomList();
      this.getSiteInfo()
    }
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6611132",
      container: "_yiashlj3sgk",
      async: true,
    });
  },
  methods: {
    async getRecomList() {
      let res = await getRecomListApi2({ type: "all" });
      if (res) {
        this.recommandList = res.data;
      }
    },
    async getSiteInfo() {
      let res = await getSiteInfoApi({});
      if (res) {
        this.carouselList = JSON.parse(res.data.carouselUrl);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  .home-body {
    display: flex;
    justify-content: space-between;
    .big-title {
      padding: 5px 0;
      border-bottom: 1px solid #f5f5f5;
    }
    .common-big-title {
      padding: 5px 20px;
    }
    .left-body {
      width: 100%;
      background: #fff;
      box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
      .recommand {
        display: flex;
        justify-content: space-between;
        // border: 1px solid #aaa;
        padding: 20px;
        width: 100%;
        .carousel {
          width: 100%;
          background: #fff;
          padding-bottom: 20px;
          border-bottom: 1px solid #f5f5f5;
          .carousel-item {
            margin-bottom: 10px;
          }
          .card {
            .card-title {
              padding: 5px 0;
              font-size: 14px;
            }
          }
        }
      }
      ul {
        li {
          padding: 30px 20px;
          border-bottom: 1px solid #f5f5f5;
          .home-post-title {
            font-size: 22px;
            text-overflow: ellipsis;
          }
          .home-post-title:hover {
            color: #06c;
          }
          .home-post-excerpt {
            line-height: 30px;
            padding: 15px 0;
            font-size: 16px;
            color: #828a92;
            word-break: break-all;
          }
          .home-post-info {
            padding-top: 10px;
            font-size: 12px;
            color: #828a92;
            span {
              margin-right: 10px;
            }
            .cate-name {
              // background: #e6f1fb;
              color: #828a92;
              font-weight: 400;
              line-height: 18px;
            }
            .create-date {
              color: #828a92;
            }
            .views {
              color: #828a92;
            }
          }
        }
        li:hover {
          background: #f9fafb;
        }
      }
      .home-pagination {
        padding: 20px;
        background: #fff;
        text-align: center;
      }
    }
    // .right-sidebar {
    //   max-width: 385px;
    // }
    @media screen and (max-width: 1024px) {
      // .right-sidebar,
      ._yiashlj3sgk {
        display: none;
      }
    }
    @media (max-width: 575.98px) {
      .big-title,
      .card,
      .carousel {
        display: none;
      }
    }
  }
}
</style>
