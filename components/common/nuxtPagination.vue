<template>
  <div class="nuxt-pagination">
      <ul>
        <li v-for="(item,index) in pageList" :key="index" @click="pageChange(item)" :class="{'actived': currentPage === item}">
          <a :href="'/page/' + item">{{item}}</a>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default() {
        return 0;
      }
    },
    currentPage: {
      type: Number,
      default() {
        return 1;
      }
    },
    pageSize: {
      type: Number,
      default() {
        return 10;
      }
    }
  },
  data() {
    return {
    };
  },
  computed: {
    pageList () {
      // let totalPage = Math.ceil(this.total / this.pageSize)
      let left1 = this.currentPage-1 <= 1? 1 : this.currentPage-1 
      let left2 = this.currentPage-2 <= 1? '' : this.currentPage-2
      let list = [left2,left1,this.currentPage,this.currentPage +1, this.currentPage +2]
      return list
    }
  },
  methods: {
    pageChange(item){
      this.$emit('pageChange', item)
    }
  }
};
</script>

<style lang="less">
.nuxt-pagination {
  ul {
    li{
      display: inline-block;
      margin-left: 10px;
      &.actived{
        a{
          color: #409EFF;
        }
      }
    }
  }
}
</style>
