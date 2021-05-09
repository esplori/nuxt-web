<template>
  <div class="container">
    <homeHeader></homeHeader>
    <div class="home-body">
      <el-row :gutter="10">
        <el-col :span="17">
          <div class="left-body">
            <ul>
              <li v-for="(item, index) in homeList.result" :key="index">
                <a :href="'/detail/' + item.id" target="_blank">
                  <h1 class="home-post-title">{{ item.title }}</h1>
                  <div class="home-post-excerpt">{{ item.content.slice(0, 120)}}...</div>
                  <div class="home-post-info">
                    <span>{{item.cate}} </span>
                    <span>{{item.createDate}} </span>
                    <span>{{item.views}} </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="home-pagination">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="$store.page"
              :page-size="20"
              layout="total, pager"
              :total="homeList.total">
            </el-pagination>
          </div>
        </el-col>
        <el-col :span="7">
          <sideBar :list="recommandList"></sideBar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations}from 'vuex'

export default {
  components: {
    homeHeader: () => import('../../components/homeHeader.vue'),
    sideBar: () => import('../../components/sideBar.vue'),
    homeFooter: () => import('../../components/homeFooter.vue')
  },
  data() {
    return {};
  },
  watchQuery: ['page'],
  async asyncData({query,store,$axios}) {
    // 将当前页页存到vuex
    store.page = parseInt(query.page)

    let [homeList, recommandList] = await Promise.all([
      $axios.post("/pages/getList",{page: query.page || 1, pageSize:20}),
      $axios.post("/pages/getRecomList")
    ])
    return {
      homeList: homeList.data.data,
      recommandList: recommandList.data.data
    }

  },
  computed: {
    ...mapState(['page'])
  },
  methods: {
    handleCurrentChange(page) {
      // 更新选择的页码到vuex
      this.changePage(page)
      window.location.href="/?page=" + this.$store.state.page
    },
    ...mapMutations(['changePage'])
  }
};
</script>

<style lang="less" scoped>
.container {
  .home-body{
    width: 80%;
    margin: 10px auto;
    .left-body{
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, .1);
      ul {
        li {
          padding: 20px;
          border-bottom: 1px solid #f5f5f5;
          .home-post-title {
            font-size: 20px;
            text-overflow: ellipsis;
          }
          .home-post-title:hover{
            color: #06c;
          }
          .home-post-excerpt {
            padding-top: 10px;
            font-size: 14px;
            color: #828a92;
          }
          .home-post-info{
            padding-top: 10px;
            font-size: 12px;
            color: #828a92;
          }
        }
        li:hover{
          background: #f9fafb;
        }
      }
    }
    .home-pagination{
      padding: 20px;
      background: #fff;
      text-align: center;
    }
  }
}

</style>
