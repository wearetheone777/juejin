<template>
  <div>
    <el-card class="box-card cardFirst">
      <div class="text item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-68373e0a="">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8 1.72386 7.77614 1.5 7.5 1.5H6.5C6.22386 1.5 6 1.72386 6 2L5.9995 3H3C2.44772 3 2 3.47259 2 4.05556V7H22V4.05556C22 3.47259 21.5523 3 21 3H18V2C18 1.72386 17.7761 1.5 17.5 1.5H16.5C16.2239 1.5 16 1.72386 16 2V3H8V2ZM22 8.5H2V20.9444C2 21.5274 2.44772 22 3 22H21C21.5523 22 22 21.5274 22 20.9444V8.5Z" fill="#FFCF8B" data-v-68373e0a=""></path>
          <rect x="5" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
          <rect x="10.5" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
          <rect x="5" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
          <rect x="10.5" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
          <rect x="16" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
          <rect x="16" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect>
        </svg>
        <span>上午好!</span>
        <el-button plain style="width:72px;height:32px" round type="primary" size="mini">去签到</el-button>
      </div>
      <span style="color: #4e5969;font-size: 14px;font-weight: 400;">点亮你在社区的每一天</span>
    </el-card>
    <el-card class="box-card cardSecond">
      <div class="text item">
        <a href="JavaScript:void(0)"><img style="width: 100%;height: 100%;" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d76f050f2f6d48f8890e4036ac4fdfb2~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt="出错了"></a>
      </div>
    </el-card>
    <el-card class="box-card cardSecond cardThree">
      <div class="text item">
        <a href="JavaScript:void(0)"><img style="width: 100%;height: 100%;" src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/367585655bb74cdf934df73428b27589~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt="出错了"></a>
      </div>
    </el-card>
    <el-card class="box-card cardFour">
      <div class="text item">
        <div class="left cardFourLeft"><img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt="出错了" width="50px" height="50px" style="padding-top:12px;padding-left:10px"></div>
        <div class="right cardFourRight">
          <div class="top" style="color: #4e5969;font-size: 14px;font-weight: 400;">下载稀土掘金APP</div>
          <div class="bottom">一个帮助开发者成长的APP</div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card cardFive">
      <div class="text item">
        <div class="cardFiveTop">
          🎖️作者榜
        </div>
        <div class="authorList" v-for="(List,index) in cardAuthor" :key="index">
          <div class="left authorListLeft"><img style="border-radius:50%" :src="List.urlProfile" alt="出错了" width="48px" height="48px"></div>
          <div class="right authorListRight">
            <div>
              <span>{{List.author}}</span>
              <img :src="List.urlIcon" alt="出错了" style="width: 35px ;height 16px;">
            </div>
            <div>{{List.introduce}}</div>
          </div>
        </div>
        <div class="authorHot">完整榜单 ></div>
      </div>
    </el-card>
    <el-card class="box-card carSix">
      <div class="text item">
        <ul>
          <li>
            <a href="JavaScript:void(0)">
              <img width="36px" height="36px" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png" alt="">
              <span>稀土掘金漫游指南</span>
            </a>
          </li>
          <li><a href="JavaScript:void(0)"><img width="36px" height="36px" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png" alt=""><span>安装掘金浏览器插件</span></a></li>
          <li><a href="JavaScript:void(0)"><img width="36px" height="36px" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png" alt=""><span>前往掘金翻译计划</span></a></li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "mainCard",
  data() {
    return {
      cardAuthor: [
        {
          urlProfile:
            "https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/8/24/1656a772f5e2653b~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp",
          author: "DebugUsery",
          urlIcon:
            "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png",
          introduce: " 嚯！y @ 哈！",
        },
        {
          urlProfile:
            "https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/mirror-assets/168e0858b6ccfd57fe5~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp",
          author: "掘金酱",
          urlIcon:
            "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png",
          introduce: "❤首席客服君 @ 掘金",
        },
        {
          urlProfile:
            "https://p6-passport.byteacctimg.com/img/user-avatar/71175455eb2ef6f4f67065569e6304dc~300x300.image",
          author: "程序员小鹿",
          urlIcon:
            "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png",
          introduce: "🏆 掘金签约作者",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* el卡片的样式 */
.text {
  font-size: 14px;
}

.item {
  padding: 0px;
}

.box-card {
  display: flex;
  margin-bottom: 16px;
}
/* 第一个卡片 */
.grid-content .cardFirst {
  /* background-color: blue; */
  height: 96px;
  display: flex;
}
.grid-content .cardFirst >>> .el-card__body {
  /* background-color: red; */
  height: 96px;
  overflow: hidden;
  padding: 0px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.grid-content .cardFirst .item {
  /* background-color: green; */
  height: 50%;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.grid-content .cardFirst .item > span {
  line-height: 48px;
  color: #1d2129;
  font-size: 18px;
  font-weight: 500;
}
.grid-content .cardFirst >>> .el-card__body > span {
  height: 50%;
  line-height: 48px;
}
/* 第二个卡片 */
.cardSecond {
  height: 200px;
  padding: 0px;
}
.cardSecond .item {
  height: 200px;
  padding: 0px;
  width: 100%;
}
.grid-content .cardSecond >>> .el-card__body {
  padding: 0;
}
/* 第四个卡片 */
.cardFour {
  height: 74px;
  width: 240px;
}
.cardFour >>> .el-card__body {
  height: 74px;
  width: 240px;
  padding: 0px;
}
.cardFour .item {
  height: 74px;
  width: 240px;
  padding: 0px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.cardFourLeft {
  width: 50px;
  height: 74px;
  line-height: 74px;
}
.cardFourRight {
  width: 190x;
  height: 74px;
}
.cardFourRight .top {
  font-weight: 700;
  font-size: 14px;
  color: #1d2129;
  height: 50%;
  width: 100%;
  line-height: 37px;
  text-align: left;
}
.cardFourRight .bottom {
  height: 50%;
  width: 100%;
  line-height: 37px;
  font-size: 12px;
  text-align: left;
}
/* 第五个卡片 */
.cardFive >>> .el-card__body {
  padding: 0px;
}
.cardFiveTop {
  width: 240px;
  height: 43px;
  line-height: 43px;
  text-align: left;
}
.authorList {
  height: 70px;
}
.authorList .authorListLeft {
  width: 20%;
  height: 70px;
  line-height: 48px;
}
.authorList .authorListRight {
  width: 80%;
  height: 70px;
  line-height: 1.29px;
}
.authorListRight > div {
  height: 50%;
  text-align: left;
  padding-left: 10px;
}
.authorListRight > div > img {
  padding-left: 10px;
}
.authorHot {
  width: 240px;
  height: 43px;
  line-height: 43px;
  border-top: 1px solid #f3f4f4;
  color: #1e80ff;
}
/* 第六个卡片 */
.carSix {
  width: 240px;
  height: 180px;
  padding: 0px;
  line-height: 60px;
  text-align: left;
}
.carSix .item {
  width: 240px;
  height: 180px;
  padding: 0px;
}
.carSix .item ul {
  height: 180px;
}
.carSix .item ul > li {
  list-style: none;
  position: relative;
}
.carSix .item ul > li > a {
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
}
.carSix .item ul > li > a > img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 36px;
  width: 36px;
}
.carSix .item ul > li > a > span {
  position: relative;
  margin-left: 45px;
  height: 100%;
  width: 100%;
}
</style>