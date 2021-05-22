<template>
  <div class="home-header">
    <div class="site-info">
      <!-- <h1 class="site-name"><a href="/">javascript技术分享</a></h1> -->
      <div class="menu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
          <el-menu-item :index="item.path" v-for="(item,index) in menList" :key="index" v-if="!item.children">{{item.name}}</el-menu-item>
          <el-submenu index="2"  v-else>
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
      activeIndex: '/',
      menList: [
        { name: "javascript技术分享", path: "/" },
        { name: "淘宝优乐购", path: "/tbk" },
        { name: "网站导航", path: "/navigation" },
        {
          name: "前端教程",
          children: [
            { name: "w3school教程", path: "" },
            { name: "less教程", path: "" },
            { name: "reach教程", path: "" },
            { name: "typescript教程", path: "" },
          ],
        },
        {
          name: "后端教程",
          children: [
            { name: "java教程", path: "" },
            { name: "c语言教程", path: "" },
            { name: "mysql教程", path: "" },
          ],
        },
        // {name: '关于', path: '/about'}
      ],
    };
  },
  methods: {
    handleSelect(val){
      this.$router.push({path: val})
      this.activeIndex = val
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
