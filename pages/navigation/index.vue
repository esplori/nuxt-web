<template>
  <div class="container">
    <homeHeader></homeHeader>
    <div class="home-body">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="left-body">
            <div class="nav-tabs">
              <el-tabs v-model="activeName">
                <el-tab-pane label="所有" name="all"></el-tab-pane>
                <el-tab-pane label="开发" name="first"></el-tab-pane>
                <el-tab-pane label="资讯" name="second"></el-tab-pane>
                <el-tab-pane label="导航" name="third"></el-tab-pane>
              </el-tabs>
            </div>
            <ul>
              <li v-for="(item, index) in list" :key="index">
                 <div><a :href="item.content" target="_blank">{{item.title}}</a></div>
                 <!-- <div>{{item.title}}</div> -->
              </li>
            </ul>
          </div>
        </el-col>
        <!-- <el-col :span="7"> -->
          <!-- <sideBar></sideBar> -->
        <!-- </el-col> -->
      </el-row>
    </div>
  </div>
</template>

<script>
// import {mapState,mapMutations}from 'vuex'
import {getListApi} from '../api/navigation'

export default {
  components: {
    homeHeader: () => import('../../components/homeHeader.vue'),
    sideBar: () => import('../../components/sideBar.vue'),
    homeFooter: () => import('../../components/homeFooter.vue')
  },
  data() {
    return {
      activeName: 'all'
    };
  },
  async asyncData({query,store,$axios}) {
    let res = await getListApi({})
    return {
      list: res.data.result
    }
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
      .nav-tabs{
        padding: 20px 20px;
      }
      ul {
        li {
          padding: 20px;
          .item-list{
            display: flex;
          }
          a{
            color: #0474c8;
          }
        }
      }
    }
  }
}

</style>
