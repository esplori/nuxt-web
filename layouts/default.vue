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
    commonFooter: () => import("..//components/homeFooter.vue"),
    HomeHeader: () => import("../components/homeHeader.vue"),
  },
};
</script>
<style lang="less" scoped>
.nuxt-router {
  .router {
    max-width: 1200px;
    margin: 10px auto;
  }
}
</style>
