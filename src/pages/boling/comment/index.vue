<template>
  <div class="Comment">
    <el-row>
      <el-col :span="24">
        <el-input type="textarea" placeholder="提示"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'Comment',
};
</script>

<style scoped>
.Comment {
    background-color: #fff;
}
</style>