<template>
  <div class="side-bar">
    <ul>
      <li>
        <div class="search">
          <el-input placeholder="请输入关键字" v-model="searchWords">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="search"
            ></el-button>
          </el-input>
        </div>
      </li>
      <li>
        <div class="_oi1z2s14bx"></div>
      </li>
      <div class="_clzacg58dkb"></div>
      <li>
        <div class="module category">
          <div class="cate">专题推荐</div>
          <el-carousel
            indicator-position="outside"
            height="140px"
            class="car-item"
          >
            <el-carousel-item v-for="(item, index) in topicList" :key="index">
              <div class="carousel-item-container">
                <a :href="'/topic/' + item.id" target="_blank"
                  ><img
                    src="https://source.dsiab.com/upload/cf172b78-9a2b-4ed3-8ae8-18ecaf612d98.jpg"
                    alt=""
                    style="height: 140px; width: 100%"
                /></a>
                <div class="carousel-item-desc">{{ item.name }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </li>
      <li>
        <div class="module">
          <div class="cate">推荐阅读</div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="最近30天" name="30"></el-tab-pane>
            <el-tab-pane label="本年度" name="365"></el-tab-pane>
            <el-tab-pane label="总排行" name="all"></el-tab-pane>
          </el-tabs>
          <ul>
            <li v-for="(item, index) in recommandList" :key="index">
              <div class="title">
                <a :href="'/post/' + (item.uid || item.id)" target="_blank">
                  <span class="list-index">{{ index + 1 }}</span
                  >{{ item.title }}
                </a>
              </div>
              <div class="excerpt">
                <span class="views el-icon-date"> {{ item.createDate }}</span>
                <span class="views el-icon-view"> 阅读({{ item.views }})</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div class="module category">
          <div class="cate">分类</div>
          <ul>
            <li v-for="(item, index) in cateList" :key="index">
              <a :href="'/post/category/' + item.id">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div class="module tags">
          <div class="cate">标签云</div>
          <ul>
            <li
              v-for="(item, index) in tagsList"
              :key="index"
              style="display: inline-block"
            >
              <a :href="'/post/tags/' + item.keyword"
                ><span
                  class="tag-item"
                  :style="{ background: randomRgbColor() }"
                  >{{ item.keyword }}</span
                ></a
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {
  getRecomListApi4Brower,
  getCateApi4Brower,
  getTagsApi4Brower,
  getTopicListApi,
} from "../../pages/post/index";
export default {
  props: {},
  data() {
    return {
      searchWords: "",
      activeName: "all",
      recommandList: [],
      cateList: [],
      tagsList: [],
      topicList: [],
    };
  },
  computed: {},
  methods: {
    async getTopicList() {
      let res = await getTopicListApi({});
      if (res) {
        this.topicList = res.data.result || [];
      }
    },
    async getRecomList(type) {
      let res = await getRecomListApi4Brower({ type });
      if (res) {
        this.recommandList = res.data;
      }
    },
    handleClick(tab, event) {
      this.getRecomList(tab.name);
    },
    search() {
      if (!this.searchWords) {
        this.$message.warning("请输入关键字");
        return;
      }
      window.open("/post/tags/" + this.searchWords);
    },
    randomRgbColor() {
      // 随机生成RGB颜色
      let colorList = ["#409eff", "#67c23a", "#e6a23c", "#f56c6c"];
      //随机生成5种颜色中的其中一种
      let max = 3;
      let min = 0;
      return colorList[Math.floor(Math.random() * (max - min + 1) + min)];
    },
    async getCate() {
      let res = await getCateApi4Brower({});
      if (res) {
        this.cateList = res.data.result.slice(0, 12);
      }
    },
    async getTags() {
      let res = await getTagsApi4Brower({});
      if (res) {
        this.tagsList = res.data.result;
      }
    },
  },
  mounted() {
    // 判断是否在服务端
    if (process.client) {
      // 在浏览器端调接口，需要服务端做反向代理
      // 查推荐
      this.getRecomList("all");
      // 查分类
      this.getCate();
      // 查标签
      this.getTags();
      // 查分类
      this.getTopicList();
    }
    // side 1
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324348",
      container: "_oi1z2s14bx",
      async: true,
    });
    // side 2
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324827",
      container: "_clzacg58dkb",
      async: true,
    });
    // 监听键盘enter键，回车就执行搜索
    window.addEventListener("keypress", (key) => {
      if (key.code === "Enter") {
        this.search();
      }
    });
  },
};
</script>

<style lang="less">
@media (max-width: 575.98px) {
  ._oi1z2s14bx {
    display: none;
  }
  ._clzacg58dkb {
    display: none;
  }
}
.side-bar {
  padding: 20px;
  margin-left: 10px;
  box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
  background: #fff;
  .el-tabs__nav-wrap::after {
    height: 0;
  }
}
.side-bar > ul > li {
  padding: 15px 0;
  .module {
    .carousel-item-container {
      position: relative;
      cursor: pointer;
      .carousel-item-desc {
        width: 100%;
        padding: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #000;
        color: #fff;
        opacity: 0.8;
        text-align: center;
      }
    }
    .cate {
      padding: 10px 0;
      border-bottom: 1px solid #eaeeef;
      font-weight: 600;
      font-size: 20px;
      color: #2c2e3b;
    }
  }
  .module > ul > li {
    padding: 5px 0;
    border-bottom: 1px solid #eaeeef;
    a:hover {
      color: #06c;
    }
    .title {
      font-size: 14px;
      padding: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .excerpt {
      color: #828a92;
      font-size: 12px;
    }
    .views {
      font-size: 12px;
      color: #999;
    }
    .list-index {
      color: #828a92;
      background: #e6f1fb;
      padding: 0 5px;
      margin-right: 10px;
      border-radius: 2px;
    }
  }
  .category > ul > li {
    display: inline-block;
    width: 50%;
    border-bottom: 1px dotted #f5f5f5;
  }
  .module.tags {
    .tag-item {
      display: inline-block;
      padding: 2px 10px;
      color: #fff;
      margin-right: 5px;
      border-radius: 2px;
      line-height: 20px;
      font-size: 14px;
    }
  }
}
</style>
