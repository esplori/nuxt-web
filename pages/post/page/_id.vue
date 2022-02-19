<template>
  <div class="post-page">
    <div class="home-body">
      <div class="left-body">
        <listBody :list="homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination
            :pageSize="10"
            :total="homeList.total"
            :currentPage="page"
            @pageChange="handleCurrentChange"
          ></nuxtPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getListApi } from "../index";
export default {
  components: {
    listBody: () => import("../../../components/home/pageListBody.vue"),
    nuxtPagination: () =>
      import("../../../components/common/nuxtPagination.vue"),
  },
  async asyncData({ route }) {
    let [homeList] = await Promise.all([
      getListApi({ page: route.params.id || 1 }),
    ]);
    return {
      homeList: homeList.data,
      page: parseInt(route.params.id || 1),
    };
  },
  methods: {
    handleCurrentChange(page) {
      window.location.href = "/page/" + page;
    },
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
  }
}
</style>
