<template>
  <div class="cate-id">
    <div class="home-body">
      <div class="left-body">
        <h1 class="result-title">关键字：{{ tag }}</h1>
        <p class="devide"></p>
        <listBody :list="homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination
            :pageSize="10"
            :total="homeList.total"
            :currentPage="page"
            :prePath="prePath"
          ></nuxtPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getListByTagsApi, getRecomListApi, getCateApi } from "../index";
export default {
  components: {
    listBody: () => import("../../../components/home/pageListBody.vue"),
    nuxtPagination: () =>
      import("../../../components/common/nuxtPagination.vue"),
  },
  head() {
    return {
      title: `${this.tags}-javascript技术分享`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.tags}`,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `${this.tags}`,
        },
      ],
    };
  },
  async asyncData({ route }) {
    let [homeList] = await Promise.all([
      getListByTagsApi({ tag: route.params.id, page: route.params.page || 1 }),
    ]);
    return {
      homeList: homeList.data,
      page: parseInt(route.params.page || 1),
      tag: route.params.id,
    };
  },
  computed: {
    prePath() {
      return "/post/tags/" + this.tag + "/";
    },
  },
};
</script>

<style lang="less" scoped>
.cate-id {
  .home-body {
    display: flex;
    justify-content: space-between;
    .left-body {
      width: 100%;
      background: #fff;
      box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
      .home-pagination {
        padding: 20px;
        background: #fff;
        text-align: center;
      }
    }
  }
}
</style>
