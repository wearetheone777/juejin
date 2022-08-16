import juejinMain from "@/pages/juejinMain";
import boiling from "@/pages/boling";
import news from "@/pages/boling/list/new";
import hots from "@/pages/boling/list/hots";
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
    redirect: "boiling/news",
    children: [
      {
        path: "news",
        name: "News",
        component: news,
      },
      {
        path: "hots",
        name: "Hots",
        component: hots,
      },
    ],
  },
];
