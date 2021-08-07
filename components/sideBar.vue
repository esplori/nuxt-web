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
        <div class="module">
          <div class="cate">推荐阅读</div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="最近30天" name="30"></el-tab-pane>
            <el-tab-pane label="本年度" name="365"></el-tab-pane>
            <el-tab-pane label="总排行" name="all"></el-tab-pane>
          </el-tabs>
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <div class="title">
                <a :href="'/post/' + item.id" target="_blank">
                  {{ item.title}}
                </a>
                <span class="views el-icon-view"> {{ item.views }}</span>
              </div>
              <!-- <div class="excerpt">{{ (item.content.slice(0, 40))}}</div> -->
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
              <!-- {{item.name}} -->
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div class="module category">
          <div class="cate">友情链接</div>
          <ul>
            <li v-for="(item, index) in linkList" :key="index">
              <a :href="item.path" target="_blank">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getRecomListApi2 } from "../pages/api/index";
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    cateList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      searchWords: "",
      linkList: [{ name: "qhy的个人空间", path: "https://quhuanyu.dsiab.com" }],
      activeName:'all',
      recommandList: []
    };
  },
  methods: {
    async getRecomList() {
      let res = await getRecomListApi2({})
      if (res) {
        this.recommandList = res.data
      }
    },
    handleClick(tab, event){
      this.getRecomList(tab.name)
    },
    search() {
      if (!this.searchWords) {
        this.$message.warning("请输入关键字");
        return;
      }
      window.open("/post/tags/" + this.searchWords);
    },
  },
  mounted() {
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
  // box-shadow: 0 1px 3px rgba(27, 95, 160, .1);
  background: #fff;
}
.side-bar > ul > li {
  padding: 15px 0;
  .module {
    .cate {
      padding: 10px 0;
      border-bottom: 1px solid #eaeeef;
      font-weight: 600;
    }
  }
  .module > ul > li {
    padding: 10px 0;
    border-bottom: 1px solid #eaeeef;
    a:hover {
      color: #06c;
    }
    .title {
      font-size: 14px;
      padding: 10px 0;
      font-weight: 400;
      word-break: break-all;
    }
    .excerpt {
      color: #828a92;
      font-size: 12px;
    }
    .views {
      font-size: 12px;
      color: #999;
    }
  }
  .category > ul > li {
    display: inline-block;
    width: 50%;
  }
}
</style>
