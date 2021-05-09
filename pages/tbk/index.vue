<template>
  <div class="container">
    <homeHeader></homeHeader>
    <div class="home-body">
      <goodsBody :list="list"></goodsBody>
    </div>
    <div style="text-align: center">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="10"
        layout="total, pager"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getShopListApi } from "../api/index";
export default {
  components: {
    homeHeader: () => import("../../components/homeHeader.vue"),
    goodsBody: () => import("../../components/tbk/goodsBody.vue"),
  },
  data() {
    return {
      data: 0
    };
  },
  head() {
    return {
      title: "淘宝优乐购",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "淘宝优乐购",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "淘宝优乐购",
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    // this.page = route.params.id || 1
    let [res] = await Promise.all([getShopListApi({page: 1})]);
    // console.log("res.data---------", res.data);
    return {
      list: res.data.result,
      total: res.data.total || 80,
      page: parseInt(route.params.id || 1)
    };
  },
  methods: {
    handleCurrentChange(page) {
      window.location.href = "/tbk/page/" + page;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background: #fff;
  .home-body {
    max-width: 1190px;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
