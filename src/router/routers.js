import juejinMain from "@/pages/juejinMain";
import boiling from "@/pages/boling";
export default [
  {
    path: "/home",
    component: juejinMain,
    name: "Home",
  },
  {
    path: "/",
    redirect: "/home", //一上来就展示首页
  },
  {
    path: "/boiling",
    component: boiling,
    name: "Boiling",
  },
];
