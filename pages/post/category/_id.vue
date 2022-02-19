<template>
  <div class="cate-id">
    <div class="home-body">
      <div class="left-body">
        <h1 class="result-title">
          分类：{{ this.title.length ? this.title[0].name : "" }}
        </h1>
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
import { getListByCateApi, getCateApi } from "../index";
export default {
  components: {
    listBody: () => import("../../../components/home/pageListBody.vue"),
    nuxtPagination: () =>
      import("../../../components/common/nuxtPagination.vue"),
  },
  head() {
    return {
      title: `${
        this.title.length ? this.title[0].name : ""
      }-javascript技术分享`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.title.length ? this.title[0].name : ""}`,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `${this.title.length ? this.title[0].name : ""}`,
        },
      ],
    };
  },
  async asyncData({ route }) {
    let [homeList, cateList] = await Promise.all([
      getListByCateApi({ cate: route.params.id, page: route.params.page || 1 }),
      getCateApi({}),
    ]);
    return {
      homeList: homeList.data,
      cate: parseInt(route.params.id || 1),
      page: parseInt(route.params.page || 1),
      cateList: cateList.data.result,
      title: cateList.data.result.filter((item) => {
        return item.id == route.params.id;
      }),
    };
  },
  computed: {
    prePath() {
      return "/post/category/" + this.cate + "/";
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
