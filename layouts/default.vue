<template>
  <div class="nuxt-router">
    <HomeHeader></HomeHeader>
    <div class="router">
      <Nuxt />
    </div>
    <commonFooter></commonFooter>
  </div>
</template>
<script>
export default {
  components: {
    commonFooter: () => import("../components/common/homeFooter.vue"),
    HomeHeader: () => import("../components/common/homeHeader.vue"),
  },
};
</script>
<style lang="less" scoped>
.nuxt-router {
  .router {
    max-width: 1280px;
    margin: 10px auto;
  }
}
</style>
