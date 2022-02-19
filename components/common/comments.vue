<template>
  <div class="comments">
    <h4>评论：</h4>
    <el-form :model="form" label-width="60px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="5" v-model="form.content"></el-input>
      </el-form-item>

      <el-form-item>
        <div style="text-align: right">
          <el-button @click="submit" type="primary">发表评论</el-button>
        </div>
      </el-form-item>
    </el-form>

    <div class="commentsList" v-show="commentsList.length">
      <h4>文章评论：</h4>
      <div
        v-for="(item, index) in commentsList"
        :key="index"
        class="comment-item"
      >
        <div>
          <i class="avatar"></i>
        </div>
        <div class="info">
          <div class="name">{{ item.username }}</div>
          <div class="createDate">{{ item.createDate }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { insertCommentApi, getCommentApi } from "../../pages/post/index";
export default {
  data() {
    return {
      form: {
        content: "",
        username: "",
        postId: this.$router.app.context.params.id, // 获取当前文章id
      },
      commentsList: [],
    };
  },
  mounted() {
    if (process.client) {
      this.getComments();
    }
  },
  methods: {
    async getComments() {
      let res = await getCommentApi({
        id: this.$router.app.context.params.id || "",
      });
      if (res) {
        this.commentsList = res.data.result || [];
      }
    },
    async submit() {
      if (!this.form.username) {
        this.$message.warning("请输入用户名");
        return;
      }
      if (!this.form.content) {
        this.$message.warning("请输入内容");
        return;
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      const res = await insertCommentApi(this.form);
      if (res) {
        this.$message.success("提交成功");
        this.getComments(this.postId);
        this.$nuxt.$loading.finish();
      }
    },
  },
};
</script>
<style lang="less">
.comments {
  width: 100%;
  margin-top: 40px;
  padding: 20px;
  .commentsList {
    margin-top: 40px;
    background: #fff;
    border-top: 1px solid #f5f5f5;
    .comment-item {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .info {
        margin-left: 10px;
        .name {
          font-size: 16px;
          padding-bottom: 5px;
          font-weight: 600;
        }
        .createDate {
          font-size: 12px;
        }
        .content {
          padding: 10px 0;
          font-size: 14px;
        }
      }

      .avatar {
        display: inline-block;
        width: 36px;
        height: 36px;
        background: url("@/assets/img/avatar.png") no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
