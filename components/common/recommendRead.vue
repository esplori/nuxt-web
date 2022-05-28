<template>
  <div class="postRecommend" v-if="list.length">
    <h3>推荐阅读：</h3>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <a :href="'/post/' + (item.uid || item.id)" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { getRecommendBySameTagsApi } from "../../pages/post/index";
export default {
  props: {
    id: {
      type: Number || String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    if (process.client) {
      this.getList();
    }
  },
  methods: {
    async getList() {
      let res = await getRecommendBySameTagsApi({
        id: this.$router.app.context.params.id || this.id,
      });
      if (res) {
        this.list = res.data || [];
      }
    },
  },
};
</script>
<style lang="less">
  .postRecommend{
    padding: 0 20px;
    ul{
      li{
        list-style-type: disc;
        padding: 2px 0;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
</style>
