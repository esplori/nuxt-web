<template>
  <div class="pageListBody">
    <ul v-show="list.length">
      <li v-for="(item, index) in list" :key="index">
        <div class="post-item">
          <div class="img-box">
            <img
              :src="imgsList[index]"
              alt=""
              width="150px"
              height="115px"
              class="item-img"
            />
          </div>
          <div class="item-info">
            <div class="home-post-title">
              <a :href="'/post/' + (item.uid || item.id)" target="_blank">{{
                item.title
              }}</a>
            </div>
            <div class="home-post-excerpt">
              <a :href="'/post/' + item.id" target="_blank">{{
                deleteHtmlTag(item.content.slice(0, 220))
              }}</a>
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
      imgsList: [
        "http://source.dsiab.com/upload/7437e62a-1033-4a91-a357-10993de1a08f.jpg",
        "http://source.dsiab.com/upload/9a2bae64-f914-4678-a642-95972333e201.jpg",
        "https://source.dsiab.com/upload/fdf3eba1-5f16-4fdb-91c2-28c22fea7b74.jpg",
        "http://source.dsiab.com/upload/c0661416-31d9-4b57-9845-802ca01fa69c.jpg",
        "http://source.dsiab.com/upload/88a60855-9768-4a0b-b202-d4c2e06e6ac8.jpg",
        "http://source.dsiab.com/upload/08e52e67-b7c7-4de7-8c70-9a9f65d5ce65.jpg",
        "http://source.dsiab.com/upload/fdf3eba1-5f16-4fdb-91c2-28c22fea7b74.jpg",
        "http://source.dsiab.com/upload/0913ca3e-fb3c-4120-98fe-62bd86cf9b42.jpeg",
        "http://source.dsiab.com/upload/5d1c60a0-7194-4c14-b3fe-c7f88d958a78.jpg",
        "http://source.dsiab.com/upload/cd2a655e-0f6b-41d8-a424-b334dce6cb84.png",
      ],
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
      padding: 30px 20px;
      border-bottom: 1px solid #f5f5f5;
      .home-post-title {
        padding-bottom: 20px;
      }
      .home-post-title a {
        font-weight: bold;
        font-size: 20px;
        text-overflow: ellipsis;
      }
      .home-post-title a:hover {
        color: #06c;
      }
      .home-post-excerpt {
        line-height: 22px;
        font-size: 14px;
        color: #888;
        word-break: break-all;
      }
      .home-post-excerpt a {
        color: #888;
      }
      .home-post-info {
        padding-top: 10px;
        font-size: 12px;
        color: #828a92;
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
    li:hover {
      background: #f9fafb;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
    }
  }
}
</style>
