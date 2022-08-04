<template>
  <div>
    <el-container>
      <el-header>
        <Headers :showNav.sync="showNav"></Headers>
      </el-header>
      <headerNav v-if="showNav.show"></headerNav>
      <el-main>
        <router-view>
          <Juejinmain />
        </router-view>
      </el-main>
    </el-container>
    <div class="backTop">
      <el-backtop :right="40" :bottom="40" :visibility-height="10">
        <svg data-v-574aa814="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
          <path data-v-574aa814="" fill-rule="evenodd" clip-rule="evenodd" d="M2.75 1C2.33579 1 2 1.33579 2 1.75C2 2.16421 2.33579 2.5 2.75 2.5H13.25C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H2.75ZM7.24407 3.87287C7.64284 3.41241 8.35716 3.41241 8.75593 3.87287L13.0622 8.84535C13.6231 9.49299 13.163 10.5 12.3063 10.5H10V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V10.5H3.69371C2.83696 10.5 2.37691 9.49299 2.93778 8.84535L7.24407 3.87287Z" fill="#8A919F"></path>
        </svg>
      </el-backtop>
    </div>

  </div>
</template>

<script>
import Headers from "@/components/Hearder/index.vue";
import Juejinmain from "@/pages/juejinMain/index.vue";
import headerNav from "@/components/Hearder/headerNav/index.vue";
export default {
  name: "App",
  components: { Headers, headerNav, Juejinmain },
  data() {
    return {
      showNav: {
        show: true, //
      },
    };
  },
};
</script>
<style scoped>
.backTop {
  height: 1px;
  overflow-x: hidden;
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
