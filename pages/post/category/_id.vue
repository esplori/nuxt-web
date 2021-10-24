<template>
  <div class="cate-id">
    <div class="home-body">
      <div class="left-body">
        <listBody :list="homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination :pageSize="10" :total="homeList.total" :currentPage="page" :prePath="prePath"></nuxtPagination>
        </div>
      </div>
      <div class="right-sidebar">
        <sideBar :list="recommandList" :cateList="cateList"></sideBar>
      </div>
    </div>
  </div>
</template>

<script>
import { getListByCateApi, getRecomListApi,getCateApi } from "../../api/index";
export default {
  components: {
    listBody: () => import("../../../components/home/pageListBody.vue"),
    sideBar: () => import("../../../components/sideBar/sideBar.vue"),
    nuxtPagination: () => import("../../../components/common/nuxtPagination.vue")
  },
  head() {
    return {
      title:  `${this.title.length?this.title[0].name:''}-javascript技术分享`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.title.length?this.title[0].name:''}`,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `${this.title.length?this.title[0].name:''}`,
        },
      ],
    };
  },
  async asyncData({ query, store, $axios, route }) {
    let [homeList, recommandList, cateList] = await Promise.all([
      getListByCateApi({ cate: route.params.id, page: route.params.page || 1 }),
      getRecomListApi({type: 'all'}),
      getCateApi({})
    ]);
    return {
      homeList: homeList.data,
      recommandList: recommandList.data,
      cate: parseInt(route.params.id || 1),
      page: parseInt(route.params.page || 1),
      cateList: cateList.data.result,
      title: cateList.data.result.filter((item) =>{
        return item.id == route.params.id
      })
    };
  },
  computed: {
    prePath() {
      return "/post/category/" + this.cate + "/page/";
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
      .right-sidebar {
        display: none;
      }
    }
  }
}
</style>
