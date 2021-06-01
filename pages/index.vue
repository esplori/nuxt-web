<template>
  <div class="container">
    <div class="home-body">
      <div class="left-body">
      <listBody :list="homeList.result"></listBody>
        <div class="home-pagination">
          <!-- <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-size="10"
            layout="pager"
            :total="homeList.total"
          >
          </el-pagination> -->
          <nuxtPagination :pageSize="10" :total="homeList.total" :currentPage="page" @pageChange="handleCurrentChange"></nuxtPagination>
        </div>
      </div>
      <div class="right-sidebar">
        <sideBar :list="recommandList" :cateList="cateList"></sideBar>
      </div>
    </div>
  </div>
</template>

<script>
import { getListApi, getRecomListApi,getCateApi } from "./api/index";
export default {
  components: {
    listBody: () => import("../components/home/pageListBody.vue"),
    sideBar: () => import("../components/sideBar.vue"),
    nuxtPagination: () => import("../components/common/nuxtPagination.vue")
  },
  data() {
    return {};
  },
  // watchQuery: ["page"],
  async asyncData({ query, store, $axios, route }) {
    // 将当前页页存到vuex
    // store.page = parseInt(query.page);

    let [homeList, recommandList, cateList] = await Promise.all([
      getListApi({ page: 1 }),
      getRecomListApi({}),
      getCateApi({})
    ]);
    return {
      homeList: homeList.data,
      recommandList: recommandList.data,
      cateList: cateList.data.result,
      page: parseInt(route.params.id ||1)
    };
  },
  computed: {
  },
  methods: {
    handleCurrentChange(page) {
      window.location.href = "/page/" + page;
    },
    deleteHtmlTag(str) {
      let str1 = str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "");
      return str1.replace(/ /g, ""); //dds为得到后的内容
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
      background: #fff;
      // box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
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
    .right-sidebar{
      max-width: 385px;
    }
    @media screen and (max-width: 1024px) {
      .right-sidebar{
        display: none;
      }
    }
  }
}
</style>
