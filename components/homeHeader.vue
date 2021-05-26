<template>
  <div class="home-header">
    <div class="site-info">
      <!-- <h1 class="site-name"><a href="/">javascript技术分享</a></h1> -->
      <div class="menu">
        <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect" >
            <el-menu-item :index="item.path" v-for="(item,index) in noChildren" :key="index">{{item.name}}</el-menu-item>
            <el-submenu :index="item.path"  v-for="(item,index) in hasChildren" :key="index">
              <template slot="title">{{item.name}}</template>
              <el-menu-item :index="it.path"  v-for="(it,idx) in item.children" :key="idx">{{it.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '',
      menList: [
        { name: "javascript技术分享", path: "/" },
        { name: "淘宝优乐购", path: "/tbk"},
        { name: "网站导航", path: "/navigation" },
        {
          name: "前端教程",
          path: '/qd',
          children: [
            { name: "w3school教程", path: "/w3c/" , },
            { name: "less教程", path: "/less/less.bootcss.com/index.html" },
            { name: "react教程", path: "/react/react.docschina.org/index.html" },
            { name: "typescript教程", path: "/course/tslang/www.tslang.cn/index.html" },
            { name: "bootstrap中文教程", path: "/BootStrap/v3.bootcss.com/migration.html" },
          ],
        },
        {
          name: "后端教程",
          path: '/hd',
          children: [
            { name: "java教程", path: "/how2j/default.html" },
            { name: "c语言教程", path: "/C/" },
            { name: "mysql教程", path: "/mysql/" },
          ],
        },
        // {name: '关于', path: '/about'}
      ],
    };
  },
  async asyncData({ query, store, $axios, route }) {
    // return {
    //   activeIndex: route.path
    // }
  },
  computed: {
    noChildren () {
      return this.menList.filter( (item)=> {
        return !item.children
      })
    },
    hasChildren () {
      return this.menList.filter( (item)=> {
        return item.children
      })
    }
  },
  methods: {
    handleSelect(val){
      // this.$router.push({path: val})
      window.open(val)
      // this.activeIndex = val
    }
  }
};
</script>

<style lang="less">
.home-header {
  padding: 20px 0 0 0;
  // box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
  background: #fff;
  .site-info {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .site-name {
      font-size: 22px;
      cursor: pointer;
    }
    .menu {
      padding-left: 20px;
      width: 100%;
    }
  }
}
</style>
