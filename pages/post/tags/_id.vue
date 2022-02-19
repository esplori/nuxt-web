<template>
  <div class="cate-id">
    <div class="home-body">
      <div class="left-body">
        <h2 class="result-title">查询内容：{{tags}}</h2>
        <p class="devide"></p>
        <listBody :list="homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination :pageSize="10" :total="homeList.total" :currentPage="page" :prePath="prePath"></nuxtPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getListByTagsApi, getRecomListApi,getCateApi } from "../index";
export default {
  components: {
    listBody: () => import("../../../components/home/pageListBody.vue"),
    // sideBar: () => import("../../../components/sideBar/sideBar.vue"),
    nuxtPagination: () => import("../../../components/common/nuxtPagination.vue")
  },
  head() {
    return {
      title:  `${this.tags}-javascript技术分享`,
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
  async asyncData({ query, store, $axios, route }) {
    let [homeList] = await Promise.all([
      getListByTagsApi({ cate: route.params.id, page: route.params.page || 1 }),
      getRecomListApi({type: 'all'}),
      getCateApi({})
    ]);
    return {
      homeList: homeList.data,
      cate: route.params.id || 1,
      page: parseInt(route.params.page || 1),
      tags: route.params.id
    };
  },
  computed: {
    prePath() {
      return "/post/tags/" + this.cate + "/";
    }
  }
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
      box-shadow:0 0 20px rgba(210,211,216,.3);
      .result-title{
        padding: 0 20px;
      }
      .devide{
        background: #f9f9f9;
        height: 10px;
      }
      .home-pagination {
        padding: 20px;
        background: #fff;
        text-align: center;
      }
    }
    // .right-sidebar{
    //   max-width: 385px;
    // }
    // @media screen and (max-width: 1024px) {
    //   .right-sidebar {
    //     display: none;
    //   }
    // }
  }
}
</style>
