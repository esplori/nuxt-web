<template>
  <div class="container">
    <div class="home-body">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="left-body">
            <!-- <ul>
              <li v-for="(item, index) in list" :key="index"> -->
            <el-tabs :tab-position="tabPosition" style="height: 100%">
              <el-tab-pane
                :label="item.name"
                v-for="(item, index) in list"
                :key="index"
              >
                <div class="child-cate">
                  <div
                    class="cate-item"
                    v-for="(it, ix) in item.children"
                    :key="ix"
                  >
                    <el-card shadow="always">
                      <div class="title">
                        <a :href="it.url" target="_blank"> {{ it.title }}</a>
                      </div>
                      <div class="content">{{ it.content }}</div>
                    </el-card>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>

            <!-- <div class="cateName">{{ item.name }}</div> -->
            <!-- <div class="child-cate">
                  <div
                    class="cate-item"
                    v-for="(it, ix) in item.children"
                    :key="ix"
                  >
                    <el-card shadow="always">
                      <div class="title">
                        <a :href="it.url" target="_blank"> {{ it.title }}</a>
                      </div>
                      <div class="content">{{ it.content }}</div>
                    </el-card>
                  </div>
                </div> -->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getListApi } from "./api";

export default {
  layout: "noNav",
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
    homeHeader: () => import("@/components/common/homeHeader.vue"),
    homeFooter: () => import("@/components/common/homeFooter.vue"),
  },
  data() {
    return {
      activeName: "all",
      tabPosition: "left",
    };
  },
  async asyncData({ query, store, $axios }) {
    let res = await getListApi({});
    return {
      list: res.data,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  .home-body {
    width: 100%;
    .left-body {
      // min-height: 600px;
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
      .child-cate {
        width: 100%;
        padding: 10px 0;
        display: flex;
        flex-wrap: wrap;
        .cate-item {
          width: 24%;
          font-size: 16px;
          padding: 10px;
          border-radius: 5px;
          margin-right: 10px;
          margin-bottom: 10px;
          // border: 1px solid #f5f5f5;

          .title {
            font-size: 14px;
            a {
              color: #0366d6;
            }
          }

          .content {
            font-size: 12px;
            padding: 5px 0;
            height: 60px;
            display: flex;
            align-items: center;
          }
        }
      }
      a {
        color: #666;
      }
    }
  }
}
</style>
