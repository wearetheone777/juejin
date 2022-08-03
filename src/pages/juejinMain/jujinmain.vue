<template>
  <div class="Juejinmain">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16">
        <div class="grid-content bg-purple Tags">
          <el-tag type="success" v-for="(tags,index) in tag" :key="index">{{tags}}</el-tag>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" :gutter="20">
      <el-col :span="4" :offset="0">
        <div class="grid-content bg-purple">我们</div>
      </el-col>

      <el-col :span="12">
        <div class="grid-content bg-purple" style="flex-direction: column;">
          <mainHeader />
          <mainTable />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" style="flex-direction:column;justify-content:flex-start">
          <mainCard />
          <About />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import About from "@/components/About.vue";
import mainHeader from "@/pages/juejinMain/juejinMainHeader/juejinHeader.vue";
import mainCard from "@/pages/juejinMain/mainCard/mainCard.vue";
import mainTable from "@/pages/juejinMain/mainTable/mainTable.vue";
export default {
  name: "Juejinmain",
  components: { About, mainHeader, mainCard, mainTable },
  data() {
    return {
      tag: [],
    };
  },
  methods: {
    // 获取tags
    getTags(tags) {
      //   console.log(tags);
      this.tag = tags;
    },
  },
  mounted() {
    this.$bus.$on("pubsubTags", this.getTags);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* tag的设置 */
.Juejinmain .el-col {
  display: flex;
}
.Juejinmain .el-col .bg-purple {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.Juejinmain .el-col .Tags {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
}
.Juejinmain .el-col .Tags .el-tag {
  border-radius: 20px;
  margin-left: 10px;
}
/* 取消a的下划线 */
.juejinmainheader a {
  text-decoration: none;
  padding-left: 10px;
}
.juejinmainheader a:hover {
  color: blue;
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