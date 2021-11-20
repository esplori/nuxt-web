<template>
  <div class="container">
    <div class="home-body">
      <goodsBody :list="list"></goodsBody>
    </div>
    <div style="text-align: center;background:#fff;padding: 20px 0">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="20"
        layout="pager"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getShopListApi } from "../api/index";
export default {
  layout: 'noNav',
  components: {
    homeHeader: () => import("../../components/common/homeHeader.vue"),
    goodsBody: () => import("../../components/tbk/goodsBody.vue"),
  },
  data() {
    return {
      data: 0
    };
  },
  head() {
    return {
      title: "优乐购",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "优乐购",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "优乐购",
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    let [res] = await Promise.all([getShopListApi({page: 1})]);
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
  // background: #fff;
  .home-body {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }
}
</style>
