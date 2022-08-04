<template>
  <div class="about">
    <div class="aboutTop">
      <ul>
        <li><a href="#">用户协议</a></li>
        <li><a href="#">营业执照</a></li>
        <li><a href="#">隐私政策</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </div>
    <div class="aboutTop">
      <ul>
        <li><a href="#">站点地图</a></li>
        <li><a href="#">使用指南</a></li>
        <li><a href="#">友情链接</a></li>
        <li><a href="#">更多文章</a></li>
      </ul>
    </div>
    <div class="aboutThree">
      <a href="#">
        京ICP备18012699号-3
      </a>
    </div>
    <div class="aboutFour">
      <a href="#">
        <img width="20px" height="20px" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png" alt="">
        <span>
          京公网安备11010802026719号
        </span>
      </a>
    </div>
    <div class="aboutFive">
      <span>版权所有：北京北比信息技术有限公司</span>
    </div>
    <div class="aboutSix">
      <span>公司地址:北京市海定区信息路甲28号13层B</span>
    </div>
    <div class="aboutSeven">
      <span>公司座机:010-834344395</span><br>
      <span>举报邮箱</span><br>
      <span>©2022 稀土掘金</span>
    </div>
    <div class="aboutEight">
      <img width="24px" height="24px" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.0cd39f5.png" alt="">
      <img @mouseenter="showWeChat" @mouseleave="hiddenWeChat" width="24px" style="margin-left:10px" height="24px" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.ce329e6.png" alt="">
      <div v-show="showImg" class="WeChatImg">
        <div class="weChat">微信扫一扫</div>
        <img width="120px" height="120px" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-qr.b247fde.jpeg" alt="">
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "About",
  data() {
    return {
      showImg: false,
    };
  },
  methods: {
    showWeChat() {
      this.showImg = true;
    },
    hiddenWeChat() {
      this.showImg = false;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.left {
  float: left;
}
.right {
  float: right;
}
a {
  vertical-align: middle;
}
.about {
  width: 240px;
  height: 235px;
  line-height: 1.6px;
}
.about .aboutTop {
  width: 240px;
  height: 20px;
}
.about .aboutTop > ul {
  width: 100%;
  height: 100%;
  list-style: none;
  text-align: left;
}
.about .aboutTop > ul > li {
  float: left;
  height: 100%;
  width: 25%;
  font-size: 12px;
}
.about .aboutTop > ul > li > a {
  text-decoration: none;
  height: 20px;
  width: 48px;
  display: inline-block;
  line-height: 20px;
  /* vertical-align: top; */
}
.about .aboutThree {
  width: 240px;
  height: 20px;
  font-size: 12px;
  text-align: left;
  line-height: 20px;
}
.about .aboutThree > a {
  text-decoration: none;
}
.aboutFour {
  width: 240px;
  height: 20px;
  font-size: 12px;
  text-align: left;
}
.aboutFour > a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  line-height: 20px;
  display: block;
}
.aboutFour > a > span {
  height: 20px;
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
  line-height: 20px;
}
.aboutFive {
  width: 240px;
  height: 20px;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
}
.aboutSix {
  width: 240px;
  height: 20px;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
}
.aboutSeven {
  width: 240px;
  height: 60px;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
}
.aboutEight {
  text-align: left;
  position: relative;
}
.WeChatImg {
  background-color: #fff;
  position: absolute;
}
.weChat {
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}
.WeChatImg > img {
  display: block;
  margin: auto;
}
</style>