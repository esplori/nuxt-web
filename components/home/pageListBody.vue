<template>
  <div class="pageListBody">
    <ul v-show="list.length">
      <li v-for="(item, index) in list" :key="index">
        <div class="post-item">
          <div class="item-info">
            <div class="home-post-title">
              <a :href="'/post/' + (item.uid || item.id)" target="_blank">{{
                item.title
              }}</a>
            </div>
            
            <div class="home-post-excerpt">
              {{
                deleteHtmlTag(item.content.slice(0, 300))
              }}
            </div>
            <div class="home-post-info">
              <span class="create-date el-icon-date">
                {{ item.createDate }}
              </span>
              <span class="views el-icon-view"> 阅读({{ item.views }}) </span>
              <span class="cate-name el-icon-tickets" v-show="item.cateName">
                <a :href="'/post/category/' + item.cate">
                  {{ item.cateName || "" }}</a
                >
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-show="!list.length">
      <h2 class="no-data">暂无数据</h2>
    </div>
  </div>
</template>
<script>
import { delHtmlTag } from "@/plugins/utils.js";
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
    };
  },
  computed: {
    deleteHtmlTag() {
      return delHtmlTag;
    },
  },
  methods: {
    // deleteHtmlTag(str) {
    //   let str1 = str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "");
    //   return str1.replace(/ /g, "");
    // },
  },
};
</script>
<style lang="less">
@media (max-width: 575.98px) {
  .img-box {
    display: none;
  }
}
.pageListBody {
  .no-data {
    text-align: center;
  }
  ul {
    li {
      padding: 10px 20px;
      // border-bottom: 1px solid #f5f5f5;
      .home-post-title {
        padding: 5px 0;
      }
      .home-post-title a {
        color: #424242;
        font-weight: bold;
        font-size: 18px;
        text-overflow: ellipsis;
      }
      .home-post-title a:hover {
        color: #06c;
      }
      .home-post-excerpt {
        padding: 10px 0;
        line-height: 22px;
        font-size: 14px;
        color: #888;
        word-break: break-all;
      }
      .home-post-info {
        padding:5px 0;
        font-size: 12px;
        color: #828a92;
        // border-top: 1px dashed #ddd;
        border-bottom: 1px dashed #ddd;
        span {
          margin-right: 10px;
        }
        .cate-name a {
          font-weight: 400;
          line-height: 18px;
          color: #828a92;
        }
        .create-date {
          color: #828a92;
        }
        .views {
          color: #828a92;
        }
      }
      .post-item {
        display: flex;
        align-items: center;
        .item-info{
          width: 100%;
        }
        .img-box {
          width: 150px;
          height: 115px;
          margin-right: 20px;
          .item-img {
            border-radius: 5px;
          }
        }
      }
    }
    // li:hover {
    //   background: #f9fafb;
    //   box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
    // }
  }
}
</style>
