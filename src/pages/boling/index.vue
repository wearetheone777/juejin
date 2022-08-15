<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center" :gutter="20">
      <el-col :span="4" :offset="0">
        <div class="grid-content bg-purple">
          <LeftNav />
        </div>
      </el-col>

      <el-col :span="12">
        <div class="grid-content bg-purple boilingCenter">
          <Comment />
          <List/>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <RightSlideBar />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftNav from "./leftNav/index.vue";
import Comment from "./comment/index";
import List from "./list/index";
import RightSlideBar from "./rightSlideBar/index.vue";
export default {
  name: "boiling",
  components: { LeftNav, Comment, List, RightSlideBar },
  mounted() {},
};
</script>
<style scoped>
.el-row .el-col > .boilingCenter {
  margin-bottom: 10px;
}
</style>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>