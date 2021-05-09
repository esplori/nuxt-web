<template>
  <div class="container">
    <homeHeader></homeHeader>
    <div class="home-body">
      <div class="tbk-item">
        <div>
          <a :href="item.pict_url"
            ><img :src="item.pict_url" alt="" width="197px" height="197px"
          /></a>
        </div>
      </div>
      <div class="item-info">
        <div>
          <a class="item-title">{{ item.title }}</a>
        </div>
        <div class="reserve_price">
          原价：<span class="rmbicon">¥</span>{{ item.reserve_price }}
        </div>
        <div class="zk_final_price">
          现价：<span class="rmbicon">¥</span>{{ item.zk_final_price }}
        </div>
        <div>
          <el-button type="danger" @click="order(item)">去下单</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTbkDetailApi } from "../../api/index";
export default {
  components: {
    homeHeader: () => import("../../../components/homeHeader.vue"),
  },
  data() {
    return {
      data: 0,
    };
  },
  head() {
    return {
      title: this.item.title || "淘宝优乐购",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "淘宝优乐购",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "淘宝优乐购",
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    let [res] = await Promise.all([getTbkDetailApi(route.params.id)]);
    console.log("res---------", res);
    let jp = res.data.result;
    return {
      item: res.data.result,
    };
  },
  methods: {
    order(item) {
      window.open(item.url);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background: #fff;
  min-height: 768px;
  .home-body {
    max-width: 1190px;
    margin: 10px auto;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    .tbk-item:hover {
      border: 1px solid #ff5000;
    }
    .tbk-item {
      display: inline-block;
      width: 235px;
      padding: 20px;
      border: 1px solid #f4f4f4;
    }
    .item-info {
      padding: 0 20px;
      .item-title {
        display: block;
        height: 40px;
        line-height: 20px;
        overflow: hidden;
        margin: 8px 0;
        color: #666;
        font-size: 22px;
      }
      .reserve_price {
        font-size: 20px;
        color: #999;
      }
      .zk_final_price {
        line-height: 100px;
        font-size: 50px;
        color: #ff5000;
      }
    }
  }
}
</style>
