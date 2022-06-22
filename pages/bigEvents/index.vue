<template>
  <div class="bigEvents">
    <el-timeline
      class="infinite-list"
      v-infinite-scroll="getList"
      style="overflow: auto"
      :style="'height:' + height"
    >
      <el-timeline-item
        :timestamp="item.createDate || ''"
        placement="top"
        v-for="(item, index) in list"
        :key="index"
      >
        <el-card>
          <div class="title">
            <a :href="'/post/' + (item.uid || item.id)" target="_blank">{{
              item.title
            }}</a>
          </div>

          <div class="content" v-html="item.content"></div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { getListByCateApi4Brower } from "../post/index.js";
import { delHtmlTag } from "@/plugins/utils.js";
export default {
  name: "index",

  data() {
    return {
      list: [],
      page: 0,
      height: "768px",
    };
  },

  components: {},

  created() {
    if (process.client) {
      this.height =
        document.getElementsByClassName("bigEvents")[0].offsetHeight -
        80 +
        "px";
      this.getList();
    }
  },
  computed: {
    deleteHtmlTag() {
      return delHtmlTag;
    },
  },
  methods: {
    async getList() {
      this.page = ++this.page;
      let res = await getListByCateApi4Brower({
        cate: 126,
        page: this.page || 1,
      });
      if (res && res.data && res.data.result.length) {
        res.data.result = res.data.result.map((item) => {
          item.content = this.deleteHtmlTag(item.content);
          return item;
        });

        this.list = this.list.concat(res.data.result);
      }
    },
  },
};
</script>



<style lang="less" scoped>
.bigEvents {
  .infinite-list {
    .title {
      font-weight: bold;
      padding-bottom: 15px;
      border-bottom: 1px solid #f5f5f5;
    }

    .content {
      padding: 20px 0;
    }
  }
}
</style>