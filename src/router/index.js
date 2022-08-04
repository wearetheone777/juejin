import VueRouter from "vue-router";
import routers from "./routers";
// 重写push和replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
//创建并暴露一个路由器
let router = new VueRouter({
  routes: routers,
});
export default router;
