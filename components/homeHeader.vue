<template>
  <div class="home-header">
    <div class="site-info">
      <!-- <h1 class="site-name"><a href="/">javascript技术分享</a></h1> -->
      <div class="menu">
        <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect" >
            <el-menu-item :index="item.path" v-if="!item.children" v-for="(item,index) in menList" :key="index">{{item.name}}</el-menu-item>
            <el-submenu :index="item.path"  v-if="item.children" v-for="(item,index) in menList" :key="index">
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
            { name: "w3school教程", path: "/w3c" , },
            { name: "less教程", path: "/less" },
            { name: "react教程", path: "/react" },
            { name: "typescript教程", path: "/typescript" },
          ],
        },
        {
          name: "后端教程",
          path: '/hd',
          children: [
            { name: "java教程", path: "/java" },
            { name: "c语言教程", path: "/c" },
            { name: "mysql教程", path: "/mysql" },
          ],
        },
        // {name: '关于', path: '/about'}
      ],
    };
  },
  async asyncData({ query, store, $axios, route }) {
    console.log('route',route)
    // return {
    //   activeIndex: route.path
    // }
  },
  methods: {
    handleSelect(val){
      // this.$router.push({path: val})
      location.href = val
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
