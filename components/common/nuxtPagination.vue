<template>
  <div class="nuxt-pagination">
      <ul>
        <li v-for="(item,index) in pageList" :key="index" :class="{'actived': currentPage === item}">
          <a :href="prePath + item">{{item}}</a>
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
    },
    prePath: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
    };
  },
  computed: {
    pageList () {
      let totalPage = Math.ceil(this.total / this.pageSize)
      
      if(totalPage > 5) {
        let left1 = this.currentPage-1 <= 0 ? '' : this.currentPage-1 
        let left2 = this.currentPage-2 <= 0? '' : this.currentPage-2
        let list = [left2,left1,this.currentPage,this.currentPage +1, this.currentPage +2]
        return list
      } else {
        let list = []
        for (let index = 0; index < totalPage; index++) {
          list.push(index + 1)
        }
        return list
      }
      
    }
  },
  methods: {
  }
};
</script>

<style lang="less">
.nuxt-pagination {
  ul {
    li{
      display: inline-block;
      margin-left: 20px;
      &.actived{
        a{
          color: #409EFF;
        }
      }
    }
  }
}
</style>
