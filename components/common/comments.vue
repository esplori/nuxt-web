<template>
  <div class="comments">
    <h4>评论：</h4>
    <el-form :model="form" label-width="40px">
      <el-form-item label="邮箱">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="5" v-model="form.content"></el-input>
      </el-form-item>

      <el-form-item>
        <div style="text-align:right">
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
      <div>{{ item.username }}: </div>
       <div v-html="item.content"></div>
      </div>
    </div>
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
  // border: 1px solid #f5f5f5;
  .commentsList {
    margin-top: 40px;
    // padding: 20px;
    border-top: 1px solid #f5f5f5;
    .comment-item {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      div{
        padding: 10px 0;
      }
    }
  }
}
</style>
