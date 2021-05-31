<template>
  <div class="post-page">
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
import { getListApi, getRecomListApi, getCateApi } from "../api/index";
export default {
  components: {
    listBody: () => import("../../components/home/pageListBody.vue"),
    sideBar: () => import("../../components/sideBar.vue"),
    nuxtPagination: () => import("../../components/common/nuxtPagination.vue")
  },
  data() {
    return {};
  },
  // watchQuery: ["page"],
  async asyncData({ query, store, $axios, route }) {
    // 将当前页页存到vuex
    // store.page = parseInt(query.page);

    let [homeList, recommandList, cateList] = await Promise.all([
      getListApi({ page: route.params.id || 1 }),
      getRecomListApi({}),
      getCateApi({})
    ]);
    return {
      homeList: homeList.data,
      cateList: cateList.data.result,
      recommandList: recommandList.data,
      page: parseInt(route.params.id ||1)
    };
  },
  computed: {
    // ...mapState(["page"]),
  },
  methods: {
    handleCurrentChange(page) {
      // 更新选择的页码到vuex
      // this.changePage(page);
      // window.location.href = "/?page=" + this.$store.state.page;
      window.location.href = "/page/" + page;
    },
    // ...mapMutations(["changePage"]),
  },
};
</script>

<style lang="less" scoped>
.post-page {
  .home-body {
    display: flex;
    justify-content: space-between;
    .left-body {
      width: 100%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
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
