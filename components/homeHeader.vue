<template>
  <div class="home-header">
    <div class="site-info">
      <div class="menu">
        <el-menu mode="horizontal">
            <el-menu-item v-for="(item,index) in noChildren" :key="index" :index="String(index)">
              <a :href="item.path">{{item.name}}</a>
            </el-menu-item>
            <el-submenu  v-for="(item,id) in hasChildren" :key="id" :index="String(id)">
              <template slot="title">
                {{item.name}}
                </template>
              <el-menu-item v-for="(it,idx) in item.children" :key="String(idx)">
                <a :href="it.path">{{it.name}}</a>
              </el-menu-item>
            </el-submenu>
            <el-menu-item>
              <a href="/post/13">关于</a>
            </el-menu-item>
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
        { name: "优乐购", path: "/tbk"},
        { name: "网站导航", path: "/navigation" },
        {
          name: "前端教程",
          path: '',
          children: [
            { name: "w3school教程", path: "http://source.dsiab.com/course/w3c/" , },
            { name: "less教程", path: "http://source.dsiab.com/course/less/less.bootcss.com/index.html" },
            { name: "react教程", path: "http://source.dsiab.com/course//react/react.docschina.org/index.html" },
            { name: "typescript教程", path: "http://source.dsiab.com/course/tslang/www.tslang.cn/index.html" },
            { name: "bootstrap中文教程", path: "http://source.dsiab.com/course//bootstrap/v3.bootcss.com/migration.html" },
          ],
        },
        {
          name: "后端教程",
          path: '',
          children: [
            { name: "java教程", path: "http://source.dsiab.com/course/how2j/default.html" },
            { name: "c语言教程", path: "http://source.dsiab.com/course/C/" },
            { name: "mysql教程", path: "http://source.dsiab.com/course/mysql/" },
          ],
        }
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
      // window.open(val)
      // this.activeIndex = val
    }
  }
};
</script>

<style lang="less">
.home-header {
  padding: 20px 0 0 0;
  background: #fff;
  .el-menu--horizontal.el-menu{
    border-bottom: none
  }
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
