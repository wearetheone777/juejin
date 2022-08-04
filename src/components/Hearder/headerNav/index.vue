<template>
  <div>
    <el-row style="height:46px" type="flex" class="row-bg" justify="center">
      <el-col :span="16" style="height:46px">
        <div class="grid-content bg-purple" style="height:100%;width:100%;display:flex;justify-content:space-between;align-items: center">
          <tagList />
          <span>标签管理</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tagList from "../tagList/tagLIst.vue";
export default {
  name: "headerNav",
  components: { tagList },
};
</script>

<style lang="less" scoped>
// 分栏
.el-row {
  margin-bottom: 0px;
  justify-content: center; /*水平主轴居中*/
  align-items: center; /*垂直交叉轴居中*/
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