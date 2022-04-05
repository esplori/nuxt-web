<template>
  <div class="container">
    <div class="home-body">
      <div class="tabList">
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            :label="item.name"
            :name="String(item.id)"
            v-for="(item, index) in tabList"
            :key="index"
          ></el-tab-pane>
        </el-tabs> -->
      </div>
      <goodsBody :list="list"></goodsBody>
    </div>
    <div style="text-align: center; background: #fff; padding: 20px 0">
      <nuxtPagination
        :pageSize="20"
        :total="total"
        :currentPage="page"
        :prePath="'/tbk/page/'"
      ></nuxtPagination>
    </div>
  </div>
</template>

<script>
import { getShopListApi, getCateApi } from "./api";
export default {
  layout: "default",
  components: {
    nuxtPagination: () => import("@/components/common/nuxtPagination.vue"),
    homeHeader: () => import("@/components/common/homeHeader.vue"),
    goodsBody: () => import("@/components/tbk/goodsBody.vue"),
  },
  data() {
    return {
      // tabList: [{ label: "女装",name: "女装" }, { label: "女装" }, { label: "女装" }],
      activeName: "",
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
    let [res, cateRes] = await Promise.all([
      getShopListApi({ page: 1 }),
      // getCateApi({ type: "" }),
    ]);
    return {
      list: res.data.result,
      total: res.data.total || 80,
      page: parseInt(route.params.id || 1),
      // tabList: cateRes.data,
    };
  },
  methods: {
    handleClick(type) {},
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
    .tabList {
      padding: 10px;
    }
  }
}
</style>
