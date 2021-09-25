<template>
  <div class="container">
    <div class="home-body">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="left-body">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                 <div>{{item.cateName}}</div>
                 <div v-for="(it,ix) in item.children" :key="ix">
                   <a :href="it.content">{{it.title}}</a>
                 </div>
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

import {getListApi} from '../api/navigation'

export default {
  head() {
    return {
      title: "网站导航",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "网站导航",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "网站导航",
        },
      ],
    };
  },
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
    width: 100%;
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
