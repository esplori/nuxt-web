<template>
  <div class="container">
    <div class="home-body">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="left-body">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <div class="cateName">{{ item.cateName }}</div>
                <div class="child-cate">
                  <div
                    class="cate-item"
                    v-for="(it, ix) in item.children"
                    :key="ix"
                  >
                    <el-card shadow="always">
                      <div class="title">{{ it.title }}</div>
                      <div class="content"><a :href="it.content">{{ it.content }}</a></div>
                    </el-card>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <!-- <el-col :span="7"> -->
        <!-- <sideBar></sideBar> -->
        <!-- </el-col> -->
      </el-row>
    </div>
  </div>
</template>

<script>
import { getListApi } from "./navigation";

export default {
  head() {
    return {
      title: "网站导航",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "网站导航",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "网站导航",
        },
      ],
    };
  },
  components: {
    homeHeader: () => import("../../components/common/homeHeader.vue"),
    sideBar: () => import("../../components/sideBar/sideBar.vue"),
    homeFooter: () => import("../../components/common/homeFooter.vue"),
  },
  data() {
    return {
      activeName: "all",
    };
  },
  async asyncData({ query, store, $axios }) {
    let res = await getListApi({});
    return {
      list: res.data.result,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  .home-body {
    width: 100%;
    margin: 10px auto;
    .left-body {
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
      ul {
        li {
          padding: 20px;
          .cateName {
            font-size: 20px;
            padding: 10px 0;
          }
          .child-cate {
            width: 100%;
            .cate-item {
              display: inline-block;
              width: 31%;
              font-size: 18px;
              padding: 10px 10px;
              border-radius: 5px;
              margin-right: 10px;
              .title{
                font-size: 18px;
              }
              .content a{
                font-size: 14px;
                padding: 5px 0;
                color: #3273dc;
              }
            }
          }
          a {
            color: #666;
          }
        }
      }
    }
  }
}
</style>
