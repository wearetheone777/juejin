<template>
  <div class="List">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style scoped>
.List {
  background-color: #fff;
  margin-top: 20px;
}
.List div {
  background-color: red;
  margin-top: 20px;
}
</style>