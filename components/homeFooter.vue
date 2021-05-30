<template>
  <div class="home-footer">
    <div class="site-info">
      <h5><a href="/">@2020  Powered by javascript技术分享</a></h5>
      <h5><a href="https://beian.miit.gov.cn/">粤ICP备20013202号</a></h5>
    </div>
  </div>

</template>
<script>
export default {
  head() {
    return {
      script: [
        {src: 'https://cpro.baidustatic.com/cpro/ui/cm.js'}
      ]
    }
  }
};
</script>
<style lang="less">
  .home-footer{
    margin-top: 40px;
    padding: 20px;
    margin: 0 auto;
    .site-info{
      text-align: center;
      color: #828a92;
      a{
        color: #828a92;
      }
    }
  }
</style>
