<template>
  <div class="pageListBody">
    <ul v-show="list.length">
      <li v-for="(item, index) in list" :key="index">
        <a :href="'/post/' + item.id" target="_blank" class="post-item">
          <img
            :src="imgsList[index]"
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
    <div v-show="!list.length">
        <h2 class="no-data">暂无数据</h2>
    </div>
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
  data() {
    return {
      imgsList: [
        'http://source.dsiab.com/upload/7437e62a-1033-4a91-a357-10993de1a08f.jpg',
        'http://source.dsiab.com/upload/9a2bae64-f914-4678-a642-95972333e201.jpg',
        'http://source.dsiab.com/upload/7aaba689-06ff-4621-a1d6-546d86239174.jpg',
        'http://source.dsiab.com/upload/c0661416-31d9-4b57-9845-802ca01fa69c.jpg',
        'http://source.dsiab.com/upload/88a60855-9768-4a0b-b202-d4c2e06e6ac8.jpg',
        'http://source.dsiab.com/upload/08e52e67-b7c7-4de7-8c70-9a9f65d5ce65.jpg',
        'http://source.dsiab.com/upload/fdf3eba1-5f16-4fdb-91c2-28c22fea7b74.jpg',
        'http://source.dsiab.com/upload/0913ca3e-fb3c-4120-98fe-62bd86cf9b42.jpeg',
        'http://source.dsiab.com/upload/5d1c60a0-7194-4c14-b3fe-c7f88d958a78.jpg',
        'http://source.dsiab.com/upload/cd2a655e-0f6b-41d8-a424-b334dce6cb84.png'
      ]
    }
  },
  computed: {
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
  .no-data{
    text-align: center;
  }
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
