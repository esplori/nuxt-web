<template>
  <div class="container">
    <homeHeader></homeHeader>
    <div class="home-body">
      <div class="left-body">
        <ul>
          <li v-for="(item, index) in homeList.result" :key="index">
            <a :href="'/post/' + item.id" target="_blank">
              <h1 class="home-post-title">{{ item.title }}</h1>
              <div class="home-post-excerpt">
                {{ deleteHtmlTag(item.content.slice(0, 120)) }} ...
              </div>
              <div class="home-post-info">
                <span class="cate-name">{{ item.cateName || "未分类" }} </span>
                <span class="create-date el-icon-date">
                  {{ item.createDate }}
                </span>
                <span class="views el-icon-view"> {{ item.views }} </span>
              </div>
            </a>
          </li>
        </ul>
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
import { mapState, mapMutations } from "vuex";
import { getListApi, getRecomListApi } from "./api/index";
export default {
  components: {
    homeHeader: () => import("../components/homeHeader.vue"),
    sideBar: () => import("../components/sideBar.vue"),
  },
  data() {
    return {};
  },
  // watchQuery: ["page"],
  async asyncData({ query, store, $axios, route }) {
    // 将当前页页存到vuex
    // store.page = parseInt(query.page);

    let [homeList, recommandList] = await Promise.all([
      getListApi({ page: 1 }),
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
    ...mapMutations(["changePage"]),
    deleteHtmlTag(str) {
      let str1 = str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "");
      return str1.replace(/ /g, ""); //dds为得到后的内容
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  .home-body {
    max-width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    .left-body {
      width: 100%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
      ul {
        li {
          padding: 30px 20px;
          border-bottom: 1px solid #f5f5f5;
          .home-post-title {
            font-size: 22px;
            text-overflow: ellipsis;
          }
          .home-post-title:hover {
            color: #06c;
          }
          .home-post-excerpt {
            line-height: 30px;
            padding: 15px 0;
            font-size: 16px;
            color: #828a92;
            word-break: break-all;
          }
          .home-post-info {
            padding-top: 10px;
            font-size: 12px;
            color: #828a92;
            span {
              margin-right: 10px;
            }
            .cate-name {
              background: #e6f1fb;
              color: #06c;
              font-weight: 400;
              line-height: 18px;
            }
            .create-date {
              color: #828a92;
            }
            .views {
              color: #828a92;
            }
          }
        }
        li:hover {
          background: #f9fafb;
        }
      }
      .home-pagination {
        padding: 20px;
        background: #fff;
        text-align: center;
      }
    }
    .right-sidebar{
      max-width: 400px;
    }
    @media screen and (max-width: 1024px) {
      .right-sidebar{
        display: none;
      }
    }
  }
}
</style>
