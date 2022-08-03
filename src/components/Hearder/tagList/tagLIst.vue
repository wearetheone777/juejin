<template>
  <div>
    <div class="tagsList">
      <el-popover v-for="popovers in popoverInfo" :key="popovers" placement="top-start" width="200" trigger="hover">
        <el-button round size="mini" type="info" v-for="(tags,index) in tagInfo" :key="tags">{{tags}}</el-button>
        <el-button slot="reference">{{popovers}}</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "tagList",
  data() {
    return {
      popoverInfo: [
        "前端",
        "后端",
        "安卓",
        "ios",
        "人工智能",
        "开发工具",
        "代码人生",
        "阅读",
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
    };
  },
};
</script>

<style scoped>
.tagsList {
  display: flex;
  align-items: center;
}
</style>