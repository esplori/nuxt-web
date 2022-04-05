<template>
  <div class="tbk-container">
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
          原价：<span class="rmbicon">¥</span><span class="line-through">{{ item.reserve_price }}</span>
        </div>
        <div class="zk_final_price">
          现价：<span class="rmbicon">¥</span>{{ item.zk_final_price }}
        </div>
        <div>
          <div class="order-btn"><a class="order" :href="item.url" target="_blank">去下单</a></div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="more">更多推荐</h2>
      <goodsBody :list="list"></goodsBody>
    </div>
  </div>
</template>

<script>
import { getTbkDetailApi,getRecommendApi } from "../api";
export default {
  components: {
    homeHeader: () => import("@/components/common/homeHeader.vue"),
    goodsBody: () => import("@/components/tbk/goodsBody.vue"),
  },
  data() {
    return {
      data: 0,
    };
  },
  head() {
    return {
      title: this.item.title || "优乐购",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.item.title || "优乐购",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.item.title || "优乐购",
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    let [res,recommend] = await Promise.all([getTbkDetailApi(route.params.id),getRecommendApi({})]);
    return {
      list: recommend.data.result,
      item: res.data.result,
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.tbk-container {
  background: #fff;
  min-height: 768px;
  .home-body {
    display: flex;
    margin: 10px;
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
        // height: 40px;
        // line-height: 40px;
        // overflow: hidden;
        // margin: 8px 0;
        font-weight: bold;
        // color: #666;
        font-size: 22px;
      }
      .reserve_price {
        font-size: 20px;
        color: #999;
        .line-through{
          text-decoration: line-through;
        }
      }
      .zk_final_price {
        line-height: 80px;
        font-size: 28px;
        color: #ff5000;
      }
      .order-btn{
        background: #ff5000;
        padding: 5px 70px;
        border-radius: 2px;
        display: inline-block;
        .order{
        color: #fff
      }
      }
      
    }
  }
  .more{
    margin: 10px;
    border-bottom: 1px solid #f4f4f4;
  }
}
</style>
