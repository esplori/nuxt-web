<template>
  <div class="container">
    <div class="home-body">
      <div class="left-body">
        <div class="recommand">
          <div class="carousel">
            <div class="carousel-item" v-if="siteInfo.carouselEnable==='Y'">
              <el-carousel 
                indicator-position="outside"
                height="330px"
                class="car-item"
              >
                <el-carousel-item
                  v-for="(item, index) in carouselList.slice(
                    0,
                    carouselList.length - 2
                  )"
                  :key="index"
                >
                  <div class="carousel-item-container">
                    <a :href="item.url" target="_blank"
                      ><img
                        :src="item.imgUrl"
                        alt=""
                        style="height: 330px; width: 100%"
                    /></a>
                    <div class="carousel-item-desc">{{ item.desc }}</div>
                  </div>
                </el-carousel-item>
              </el-carousel>
              <div class="small-carousel">
                <div class="small-carousel-item">
                  <img
                    :src="carouselList[carouselList.length - 2].imgUrl"
                    alt=""
                    class="small-carousel-img"
                  />
                  <div class="sml-car-title">
                    <a
                      target="_blank"
                      :href="carouselList[carouselList.length - 2].url"
                      >{{ carouselList[carouselList.length - 2].desc }}</a
                    >
                  </div>
                </div>
                <div class="small-carousel-item">
                  <img
                    :src="carouselList[carouselList.length - 1].imgUrl"
                    alt=""
                    class="small-carousel-img"
                  />
                  <div class="sml-car-title">
                    <a
                      target="_blank"
                      :href="carouselList[carouselList.length - 1].url"
                      >{{ carouselList[carouselList.length - 1].desc }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="_lrzdvi6yazm"></div>
            <a href="https://curl.qcloud.com/tcHI6pAl"><img src="../assets/img/tencent_tg.jpg" width="100%" alt=""></a>
          </div>
        </div>

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
    </div>
  </div>
</template>

<script>
import { getListApi, getSiteInfoApi, getCateApi4Brower } from "./post/index";
export default {
  components: {
    listBody: () => import("@/components/home/pageListBody.vue"),
    nuxtPagination: () => import("@/components/common/nuxtPagination.vue"),
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
      cateList: [],
      siteInfo:{
        beianNo: '',
        carouselEnable: 'N',
        carouselUrl: "",
        siteDesc: '',
        siteName: '',
        siteUrl: ''
      }
    };
  },
  // 所有接口通过服务端调用渲染
  // 只有列表通过服务端调用渲染，分类跟推荐接口在浏览器调用
  async asyncData({ route }) {
    let [homeList] = await Promise.all([getListApi({ page: 1 })]);
    return {
      homeList: homeList.data,
      page: parseInt(route.params.id || 1),
    };
  },
  computed: {},
  mounted() {
    // 判断是否在服务端
    if (process.client) {
      // 在浏览器端调接口，需要服务端做反向代理
      // 查推荐
      this.getCate();
      this.getSiteInfo();
      // 广告代码
      (window.slotbydup = window.slotbydup || []).push({
        id: "u6611132",
        container: "_lrzdvi6yazm",
        async: true,
      });
    }
  },
  methods: {
    /**
     * 查询分类
     */
    async getCate() {
      let res = await getCateApi4Brower({});
      if (res) {
        this.cateList = res.data.result.slice(0, 8);
      }
    },
    /**
     * 查询轮播图
     */
    async getSiteInfo() {
      let res = await getSiteInfoApi({});
      if (res) {
        this.siteInfo = res.data
        this.carouselList = JSON.parse(res.data.carouselUrl);
        localStorage.setItem("siteInfo",JSON.stringify(this.siteInfo))
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
      font-size: 20px;
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
            display: flex;
            justify-content: space-between;
            .car-item {
              width: 100%;
            }
            .carousel-item-container {
              position: relative;
              cursor: pointer;
              .carousel-item-desc {
                width: 100%;
                padding: 20px;
                position: absolute;
                bottom: 0;
                left: 0;
                background: #000;
                color: #fff;
                opacity: 0.8;
                text-align: center;
              }
            }
            .small-carousel {
              margin-left: 10px;
              width: 365px;
              padding: 0 0 20px 10px;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              .small-carousel-item {
                height: 160px;
                margin-bottom: 10px;
                background: #828a92;
                position: relative;

                .small-carousel-img {
                  width: 245px;
                  height: 160px;
                }
                .sml-car-title {
                  width: 100%;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  color: #fff;
                  background: #000;
                  text-align: center;
                  opacity: 0.8;
                  padding: 10px 0;
                  font-size: 14px;
                  a {
                    color: #fff;
                  }
                }
              }
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
      ._lrzdvi6yazm {
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
