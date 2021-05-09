<template>
  <div class="home-header">
    <div class="site-info">
      <h1 class="site-name"><a href="/">javascript技术分享</a></h1>
      <div class="menu">
        <ul>
          <li v-for="(item, index) in menList" :key="index">
            <a :href="item.path">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menList: [
        { name: "首页", path: "/" },
        { name: "淘宝优乐购", path: "/tbk" },
        { name: "网站导航", path: "/navigation" },
      ],
    };
  },
};
</script>

<style lang="less">
.home-header {
  padding: 20px;
  box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
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
      ul>li{
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
}
</style>
