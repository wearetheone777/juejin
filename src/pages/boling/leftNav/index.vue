<template>
  <div>
    <div class="navTop">
      <ul>
        <li>
          <router-link @click.native="select(1)" :class="{backColor: liActiveClass == 1}" :to="{name:'News'}">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shizhong"></use>
            </svg>
            最新
          </router-link>
        </li>
        <li>
          <router-link @click.native="select(2)" :class="{backColor: liActiveClass == 2}" :to="{name:'Hots'}">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-hot"></use>
            </svg>
            热门
          </router-link>
        </li>
        <li>
          <a @click="select(3)" :class="{backColor: liActiveClass == 3}">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guanzhu"></use>
            </svg>
            关注
          </a>
        </li>
        <li>
          <a @click="select(4)" :class="{backColor: liActiveClass == 4}" href="JavaScript:void(0)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-quanzi"></use>
            </svg>我的圈子</a>
        </li>
        <li>
          <a @click="select(5)" :class="{backColor: liActiveClass == 5}" href="JavaScript:void(0)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tuijian"></use>
            </svg>推荐圈子</a>
        </li>
      </ul>
    </div>
    <div class="navBottom">
      <ul>
        <li>
          <a @click="select(6)" :class="{backColor: liActiveClass == 6}" href="JavaScript:void(0)">内推招聘广场</a>
        </li>
        <li>
          <a @click="select(7)" :class="{backColor: liActiveClass == 7}" href="JavaScript:void(0)">技术交流圈</a>
        </li>
        <li>
          <a @click="select(8)" :class="{backColor: liActiveClass == 8}" href="JavaScript:void(0)">倔友请回答</a>
        </li>
        <li>
          <a @click="select(9)" :class="{backColor: liActiveClass == 9}" href="JavaScript:void(0)">树洞一下</a>
        </li>
        <li>
          <a @click="select(10)" :class="{backColor: liActiveClass == 10}" href="JavaScript:void(0)">上班摸鱼</a>
        </li>
        <li>
          <a @click="select(11)" :class="{backColor: liActiveClass == 11}" href="JavaScript:void(0)">更多</a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  data() {
    return {
      liActiveClass: 1,
    };
  },
  methods: {
    select(i) {
      this.liActiveClass = i;
    },
  },
};
</script>

<style scoped>
.navTop ul li {
  line-height: 44px;
  height: 44px;
  text-align: left;
}
.navTop ul li a {
  text-decoration: none;
  font-size: 16px;
  padding: 0 14px;
  width: 100%;
  display: block;
  box-sizing: border-box;
}
.navTop ul li a:hover {
  color: blue;
  background-color: #f7f8fa;
}
.backColor {
  background-color: #eaf2ff;
  color: blue;
}
.navTop ul li a svg {
  margin-right: 10px;
}
/* 阿里图标 */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.navBottom ul li {
  line-height: 44px;
  height: 44px;
  text-align: left;
}
.navBottom ul li a {
  text-decoration: none;
  font-size: 16px;
  padding: 0 25px;
  width: 100%;
  display: block;
  box-sizing: border-box;
}
.navBottom ul li a:hover {
  color: blue;
  background-color: #f7f8fa;
}
</style>
