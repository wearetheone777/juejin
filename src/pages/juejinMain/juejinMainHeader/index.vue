<template>
  <div>
    <div class="juejinmainheader" style="line-height:50px;text-align:left;height:50px">
      <a href="#">
        <span>
          推荐
        </span>
      </a>
      <a href="#">
        <span>
          最新
        </span>
      </a>
      <a href="#">
        <span>
          热榜
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainHeader",
};
</script>

<style scoped>
/* 取消a的下划线 */
.juejinmainheader a {
  text-decoration: none;
  padding-left: 10px;
}
.juejinmainheader a:hover {
  color: blue;
}
</style>