<template>
  <div class="comments">
    <h4>评论：</h4>
    <el-form :model="form" label-width="40px">
      <el-form-item label="内容">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit" type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { insertCommentApi } from "../pages/api/index";
export default {
  data() {
    return {
      form: {
        content: "",
        username: ""
      },
    };
  },
  mounted() {
    if (!process.server) {
    }
  },
  methods: {
    async submit() {
      if (!this.form.content) {
        this.$message.warning("请输入内容")
        return
      }
      if (!this.form.username) {
        this.$message.warning("请输入邮箱")
        return
      }
      const res = await insertCommentApi(this.form);
      if (res) {
        this.$message.sussess("提交成功")
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
}
</style>
