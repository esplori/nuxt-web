<template>
  <div class="container">
    <div class="home-body">
      <h2>专题</h2>
      <div v-for="(item,index) in list" :key="index">
        <a :href="'/post/' + (item.postId)" target="_blank" class="post-item">{{item.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getToppicListApi } from "./api";
export default {
  layout: "noNav",
  components: {
    homeHeader: () => import("../../components/common/homeHeader.vue"),
    listBody: () => import("@/components/home/pageListBody.vue"),
  },
  data() {
    return {
      data: 0,
    };
  },
  head() {
    return {
      title: "优乐购",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "优乐购",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "优乐购",
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    debugger
    console.log(route);
    let [res] = await Promise.all([getToppicListApi({ topicId: route.params.id})]);
    debugger
    console.log(res);
    return {
      list: res.data.result
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.container {
  background: #fff;
  padding: 20px;
  .home-body {
    .post-item{
      text-decoration: underline;
      color: #409EFF;
    }
  }
}
</style>
