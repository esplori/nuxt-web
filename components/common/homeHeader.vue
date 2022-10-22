<template>
  <div class="home-header">
    <div class="site-info">
      <div class="menu">
        <el-menu mode="horizontal">
          <el-menu-item
            v-for="(item, index) in noChildren"
            :key="index"
            :index="String(index)"
          >
            <a :href="item.path" target="_blank">{{ item.name }}</a>
          </el-menu-item>
          <el-submenu
            v-for="(item, id) in hasChildren"
            :key="id"
            :index="String(id)"
          >
            <template slot="title">
              {{ item.name }}
            </template>
            <el-menu-item v-for="(it, idx) in item.children" :key="String(idx)">
              <a :href="it.path" target="_blank">{{ it.name }}</a>
            </el-menu-item>
          </el-submenu>
          <el-menu-item>
            <a href="/tbk" target="_blank">优乐购</a>
          </el-menu-item>
          <el-menu-item>
            <a href="https://source.dsiab.com/games/index.html" target="_blank">在线游戏</a>
          </el-menu-item>
          <el-menu-item>
            <a href="/post/13">关于</a>
          </el-menu-item>
          <el-menu-item>
            <a href="https://gitee.com/wilkwo/nuxt-web/releases" target="_blank"
              >更新日志</a
            >
          </el-menu-item>
          <el-menu-item>
            <a href="http://admin.dsiab.com/#/login" target="_blank"
              >登录</a
            >
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
      activeIndex: "",
      menList: [
        { name: "首页", path: "/" },
        { name: "网站导航", path: "/navigation" },
        {
          name: "前端教程",
          path: "",
          children: [
            {
              name: "w3school教程",
              path: "http://source.dsiab.com/course/w3c/",
            },
            {
              name: "less教程",
              path: "http://source.dsiab.com/course/less/less.bootcss.com/index.html",
            },
            {
              name: "react教程",
              path: "http://source.dsiab.com/course/react/react.docschina.org/index.html",
            },
          ],
        },
        {
          name: "后端教程",
          path: "",
          children: [
            { name: "c语言教程", path: "http://source.dsiab.com/course/C/" },
            { name: "mysql教程", path: "http://source.dsiab.com/course/mysql/" },
          ],
        },
        {
          name: "文学鉴赏",
          path: "",
          children: [
            { name: "诗词鉴赏", path: "https://www.dsiab.com/post/category/137" },
            { name: "网络文学", path: "https://www.dsiab.com/post/category/160" },
          ],
        },
        { name: "大事记", path: "/bigEvents" },
      ],
    };
  },
  computed: {
    noChildren() {
      return this.menList.filter((item) => {
        return !item.children;
      });
    },
    hasChildren() {
      return this.menList.filter((item) => {
        return item.children;
      });
    },
  },
};
</script>

<style lang="less">
.home-header {
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
  .el-menu--horizontal.el-menu {
    border-bottom: none;
  }
  .site-info {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .menu{
      width: 100%;
      display: flex;
      align-items: center;
      .el-menu-item{
        font-size: 1.2rem;
      }
      .el-submenu__title{
        font-size: 1.2rem;
      }
      .el-menu--horizontal>.el-submenu .el-submenu__title{
        line-height: 65px;
      }
    }
  }
}
</style>
