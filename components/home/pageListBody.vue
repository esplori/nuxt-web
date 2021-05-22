<template>
  <div class="pageListBody">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a :href="'/post/' + item.id" target="_blank">
          <h1 class="home-post-title">{{ item.title }}</h1>
          <div class="home-post-excerpt">
            {{ deleteHtmlTag(item.content.slice(0, 120)) }} ...
          </div>
          <div class="home-post-info">
            <span class="create-date el-icon-date">
              {{ item.createDate }}
            </span>
            <span class="views el-icon-view"> {{ item.views }} </span>
            <span class="cate-name">{{ item.cateName || "" }} </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteHtmlTag(str) {
      let str1 = str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "");
      return str1.replace(/ /g, ""); //dds为得到后的内容
    },
  },
};
</script>
<style lang="less">
.pageListBody {
  ul {
    li {
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;
      .home-post-title {
        font-size: 20px;
        text-overflow: ellipsis;
      }
      .home-post-title:hover {
        color: #06c;
      }
      .home-post-excerpt {
        line-height: 24px;
        padding-top: 10px;
        font-size: 14px;
        color: #828a92;
        word-break: break-all;
      }
      .home-post-info {
        padding-top: 10px;
        font-size: 12px;
        color: #828a92;
        span {
          margin-right: 10px;
        }
        .cate-name {
          background: #e6f1fb;
          color: #06c;
          font-weight: 400;
          line-height: 18px;
        }
        .create-date {
          color: #828a92;
        }
        .views {
          color: #828a92;
        }
      }
    }
    li:hover {
      background: #f9fafb;
    }
  }
}
</style>
