<template>
  <div>
    <div class="header">
      <el-row type="flex" style="height:60px">
        <el-col :span="2" :offset="0" style="height:100%;display:flex;justify-content:left;padding-left:10px">
          <a href="#" style="height:60px;">
            <img style="width:107px;height:60px;line-height:60px" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金">
          </a>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple-dark">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
              <el-menu-item index="1"><a href="#">首页</a></el-menu-item>
              <el-menu-item index="2"><a href="#">沸点</a></el-menu-item>
              <el-menu-item index="3"><a href="#">课程</a></el-menu-item>
              <el-menu-item index="4"><a href="#">直播</a></el-menu-item>
              <el-menu-item index="5"><a href="#">活动</a></el-menu-item>
              <el-menu-item index="6"><a href="#">商城</a></el-menu-item>
              <el-menu-item index="7"><a href="#">APP</a></el-menu-item>
              <el-menu-item index="8"><a href="#">插件</a></el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="搜索稀土掘金" size="normal" clearable @change="" style="height:100%;width:70%;padding-right:10px" suffix-icon="el-icon-search" autofocus></el-input>
          <el-select v-model="value" placeholder="创作者中心" clearable filterable @change="" style="height:100%;width:25%">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              <template>
                <div class="iconfather">
                  <img style="float: left" :src="item.url">
                  <span style="float: left; color: #8492a6; font-size: 13px">{{ item.label }}</span>
                </div>
              </template>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <div class="nav">
            <div class="navicon">
              <img src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="出错">
              <span>会员</span>
            </div>
            <i class="el-icon-bell"></i>
            <img style="height:36px;width:36px;border-radius:50%" src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~300x300.image">
          </div>
        </el-col>
      </el-row>
      <el-row style="height:46px" type="flex" class="row-bg" justify="center">
        <el-col :span="16" style="height:46px">
          <div class="grid-content bg-purple" style="height:100%;width:100%;display:flex;justify-content:space-between;align-items: center">
            <tagList />
            <span>标签管理</span>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import tagList from "@/components/Hearder/tagList/tagLIst.vue";
export default {
  name: "Headers",
  components: { tagList },
  data() {
    return {
      activeIndex: "1",
      options: [
        {
          value: "选项1",
          label: "写文章",
          url: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a0c8073862f04c2925249fd397763fd3.svg",
        },
        {
          value: "选项2",
          label: "发沸点",
          url: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e5381c85b5939d984a4b0c0edf102122.svg",
        },
        {
          value: "选项3",
          label: "写代码",
          url: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/01c75d281edffa91cacfb93189c940b4.svg",
        },
      ],
      tagInfo: [
        "前端",
        "javascript",
        "vue.js",
        "react.js",
        "css",
        "html",
        "typescript",
        "面试",
        "算法",
        "书籍",
      ],
      value: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.$bus.$emit("pubsubTags", this.tagInfo); //发送数据给掘金main
    });
  },
};
</script>

<style scoped>
/* 布局 */
.header .grid-content {
  width: 100%;
  height: 100%;
}
.header .grid-content a {
  text-decoration: none;
  width: 52px;
  display: inline-block;
}
.header .grid-content .el-menu {
  display: flex;
  width: 100%;
}
.header .grid-content .el-menu-item {
  padding: 0;
}
.el-row a {
  display: inline-block;
}
/* 修改选择器的背景色 */
.el-select >>> .el-input__inner {
  background-color: rgba(17, 113, 238, 1);
  color: rgba(255, 255, 255, 1) !important;
}
/* 修改选择器选项 */
.iconfather {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconfather img {
  padding-right: 20px;
}
/* 导航栏图标 */
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navicon {
  display: flex;
  align-items: center;
}
</style>

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