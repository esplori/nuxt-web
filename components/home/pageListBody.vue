<template>
  <div class="pageListBody">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a :href="'/post/' + item.id" target="_blank" class="post-item">
          <img
            src="http://source.dsiab.com/upload/0913ca3e-fb3c-4120-98fe-62bd86cf9b42.jpeg"
            alt=""
            width="150px"
            height="115px"
            class="item-img"
          />
          <div class="item-info">
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
@media (max-width:575.98px) {
    .item-img {
        display: none
    }
}
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
      .post-item {
        display: flex;
        align-items: center;
        .item-img{
          margin-right: 20px;
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
