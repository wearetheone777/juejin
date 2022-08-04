<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%;overflow:auto" :show-header="false" size="medium">
        <el-table-column style="height:100%;width:100%">
          <template slot-scope="scope">
            <div class="tableItemHeader">
              <el-popover placement="top" width="" trigger="hover">
                <div class="cardheader" style="display:flex">
                  <div style="width:30%;height:48px;">
                    <img style="width:100%;height:100%;border-radius:50%;" src="https://p6-passport.byteacctimg.com/img/user-avatar/75e47e118bbc3ff51aa2731f74953c35~300x300.image" alt="">
                  </div>
                  <div class="" style="width:70%;height:48px">
                    <span style="font-size:18px;">字节跳动</span>
                    <img style="width:35px;height:16px;" src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png" alt="">
                    <br><span>前端开发@ 华润</span>
                  </div>
                </div>
                <el-button type="primary" size="default" style="width:100%;height:30px;margin-top:10px">关注</el-button>
                <ul class="cardUl">
                  <li>
                    <span>67</span><br>
                    <i>关注</i>
                  </li>
                  <li>
                    <span>32</span><br>
                    <i>粉丝</i>
                  </li>
                </ul>
                <el-button slot="reference" size="mini">大前端</el-button>
              </el-popover>
              <div class="tableItemHeader">
                <span style="margin-left:20px">1小时前</span>
                <span style="margin-left:20px">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">前端</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">vue.js</a></el-breadcrumb-item>
                    <el-breadcrumb-item>面试</el-breadcrumb-item>
                  </el-breadcrumb>
                </span>
              </div>
            </div>
            <div class="tableItemMain">
              <div class="tableItemMainLeft">
                <span> {{scope.row.top}}</span>
                <div class="tableItemMainLeftText">
                  <div class="tableItemMainLeftTextOverFlow">
                    {{scope.row.main}}
                  </div>
                </div>
                <span style="width:100%;flex:1">
                  <ul class="comment_point">
                    <li>
                      <i class="el-icon-view"></i>
                      <span>45</span>
                    </li>
                    <li>
                      <i>
                        <svg t="1659274187763" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1449" width="14" height="14">
                          <path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="1450" fill="#1afa29"></path>
                        </svg>
                      </i>
                      <span>点赞</span>
                    </li>
                    <li>
                      <i class="el-icon-chat-dot-round"></i>
                      <span>评论</span>
                    </li>
                  </ul>
                </span>
              </div>
              <div class="tableItemMainRight">
                <img style="width:203px;height:135px" :src="scope.row.url" alt="出错">
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  name: "mainTable",
  data() {
    return {
        tableData: [
        {
          top: "vue深入浅出-computed的缓存和响应式原理",
          main: "computed 是 vue 中的计算属性, 根据依赖关系进行计算并缓存, 只有当依赖被改变的时候才会更新 computed 一般用于一些复杂的场景, 如受多个数据共同影响的场景",
          url: " https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03b6396b090442089a554182f099cdcb~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp? ",
        },
        {
          top: "深入浅出，动手写个useMount玩玩",
          main: "今天的目标 自己实现个hook，useMount，一眼就能看出来，如果对应到Class Component组件的话，那就是componentDidMount，顺便我们扫个盲，从理论基础上一一剖析下。但",
          url: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fb6ea68a0e74d6cafa3ae91463c66b5~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },
        {
          top: "移动端布局(基础) ",
          main: "一共有三种分别是 布局视口:iOS, Android基本都将这个视口分辨率设置为980px。默认都是手机出厂自带的 视觉视口:字面意思就是眼睛可以看见屏幕上显示的区域 理想视口",
          url: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/212ea99c27bf495b95ab20eeac214be3~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?",
        },
        {
          top: "给自己写的前端初学docker文档 ",
          main: "docker镜像类似一个模板，可以通过这个模板来创建容器服务。如： node镜像run node001容器（用来提供服务）",
          url: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ed9146756ff4a4e98a5cf46f2e52510~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?",
        },
        {
          top: "「LeetCode」123-买卖股票的最佳时机|||⚡️",
          main: "前言🌧️ 算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。 因为开发的过程就是把实际问题转换成计算机可识别的指令，",
          url: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d73bcddad66c4c5ea2c40933f9dbccf9~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },
        {
          top: "不能手写Vue3模板编译的你，再强大也是假的！",
          main: "手写 Vue3 编译原理 一.Vue中模板编译原理 二.模板编译步骤 三.生成AST语法树 1.解析文本",
          url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c02975f6e58147e991fcf7531eb30eb8~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },
        {
          top: "🍻我用CSS做出了JUEJIN牌口罩",
          main: "我尝试用CSS做出了JUEJIN牌口罩，大家也可以尝试用CSS制作一些小东西，平时可以看一看codepen，很多精彩的创意。",
          url: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18de552a861f46678f3f0116eabd30ee~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },
        {
          top: "仿vue-cli从零搭建一个前端脚手架",
          main: "前言 工作中，我们可能经常碰到下面这些问题： 公司需要开发一个新项目，项目的权限，菜单，登录等功能在别的项目已经存在。 项目需要配置例如eslint等代码规范，需要和原先的一些项目保持一致（可能所有的",
          url: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da9e29269163458caf711c4fb4f8329f~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },
      ],
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 取消contain布局的行高影响了表格的高度 */
::v-deep .el-table--small th,
.el-table--small td {
  padding: 0px 0px 0px 0px;
  height: 20px;
}
/* 鼠标经过弹框的样式 */
.cardUl {
  border-top: 1px solid #f3f4f6;
  width: 100%;
  height: 100%;
}
.cardUl li {
  list-style: none;
  /* 取消li的小点 */
  width: 50%;
  float: left;
  height: 100%;
}
.cardUl li span {
  font-size: 18px;
}
/* 对于table表格每一行的设置 */
.el-table >>> .cell {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.el-table >>> .cell .tableItemMain {
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
.el-table td.el-table__cell div {
  display: flex;
  justify-content: left;
  align-items: center;
}
.el-table >>> .cell .tableItemMain .tableItemMainLeft {
  /* background-color: red; */
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.el-table >>> .cell .tableItemMain .tableItemMainRight {
  /* background-color: blue; */
  flex: 2;
}
.el-table >>> .cell .tableItemMain .tableItemMainLeft span:first-child {
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑";
  font-size: 20px;
  font-weight: 700;
  flex: 1;
  margin-top: 20px;
}
/* 多行文本溢出 */
.el-table >>> .cell .tableItemMain .tableItemMainLeft .tableItemMainLeftText {
  flex: 1;
}
.el-table
  >>> .cell
  .tableItemMain
  .tableItemMainLeft
  .tableItemMainLeftText
  .tableItemMainLeftTextOverFlow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 499px;
}
/* 点赞评论区域 */
.comment_point {
  width: 100%;
}
.comment_point li {
  float: left;
  list-style: none;
  padding-right: 20px;
  text-align: left;
}
</style>