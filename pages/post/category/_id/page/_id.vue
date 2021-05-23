<template>
  <div class="container">
    <div class="home-body">
      <div class="left-body">
        <listBody :list="homeList.result"></listBody>
        <div class="home-pagination">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-size="10"
            layout="total, pager"
            :total="homeList.total"
          >
          </el-pagination>
        </div>
      </div>
      <div class="right-sidebar">
        <sideBar :list="recommandList"></sideBar>
      </div>
    </div>
  </div>
</template>

<script>
import { getListApi, getRecomListApi } from "../../../../api/index";
export default {
  components: {
    listBody: () => import("../../../../../components/home/pageListBody.vue"),
    sideBar: () => import("../../../../../components/sideBar.vue"),
  },
  data() {
    return {};
  },
  // watchQuery: ["page"],
  async asyncData({ query, store, $axios, route }) {
    // 将当前页页存到vuex
    // store.page = parseInt(query.page);

    let [homeList, recommandList] = await Promise.all([
      getListApi({ page: route.params.id || 1 }),
      getRecomListApi({}),
    ]);
    return {
      homeList: homeList.data,
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
.container {
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
    @media screen and (max-width: 1024px) {
      .right-sidebar{
        display: none;
      }
    }
  }
}
</style>
