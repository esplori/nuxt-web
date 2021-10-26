<template>
  <div class="comments">
    <div class="commentsList" v-show="commentsList.length">
      <h4>网友评论：</h4>
      <div
        v-for="(item, index) in commentsList"
        :key="index"
        class="comment-item"
      >
        {{ item.username }} : <span v-html="item.content"></span>
      </div>
    </div>
    <h4>评论：</h4>
    <el-form :model="form" label-width="40px">
      <el-form-item label="邮箱">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="5" v-model="form.content"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="submit" type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { insertCommentApi, getCommentApi } from "../../pages/api/index";
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
    if (!process.server) {
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
      if (!this.form.content) {
        this.$message.warning("请输入内容");
        return;
      }
      if (!this.form.username) {
        this.$message.warning("请输入邮箱");
        return;
      }
      const res = await insertCommentApi(this.form);
      if (res) {
        this.$message.success("提交成功");
        this.getComments(this.postId);
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
  border: 1px solid #f5f5f5;
  .commentsList {
    margin-top: 20px;
    // padding: 20px;
    // border: 1px solid #f5f5f5;
    .comment-item {
      padding: 10px;
      border: 1px solid #f5f5f5;
      margin-bottom: 10px;
      border-radius: 5px;
    }
  }
}
</style>
