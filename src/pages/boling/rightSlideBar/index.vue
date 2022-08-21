<template>
  <div class="slideBar">
    <div class="slideBarFirst">
      <div class="slideBarFirstTop">
        <img src="https://p9-passport.byteacctimg.com/img/user-avatar/99dee8f020219adf34fe92dc726ebb88~300x300.image" width="48px" height="48px">
        <span>用户1523226</span>
      </div>
      <div class="slideBarFirstBottom">
        <a href="">
          <div>1</div>
          <div>沸点</div>
        </a>
        <a href="">
          <div>2</div>
          <div>圈子</div>
        </a>
        <a href="">
          <div>4</div>
          <div>关注</div>
        </a>
        <a href="">
          <div>3</div>
          <div>关注者</div>
        </a>
      </div>
    </div>
    <div class="hot_list">
      <p>精选沸点</p>
      <a href="Javascript:void(0)" class="hot_item" target="_self">
        <div class="hot_content">
          <p class="content">【三分钟阅读挑战 | 碎片时间不浪费 】</p>
          <p class="count">
            269赞 ·
            265评论
          </p>
        </div>
        <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08c6ba6b0a714c3d9d39ce697d94beef~tplv-k3u1fbpfcp-watermark.image?" width="64px" height="64px">
      </a>
      <a href="Javascript:void(0)" class="hot_item" target="_self">
        <div class="hot_content">
          <p class="content">Hi 掘友们，夏日炎炎很久未见，见面🌈 </p>
          <p class="count">
            57赞 ·
            298评论
          </p>
        </div>
        <img width="64px" height="64px" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fe7fe7e49c14711b9649d241ae8f68f~tplv-k3u1fbpfcp-watermark.image?">
      </a>
      <a href="Javascript:void(0)" class="hot_item" target="_self">
        <div class="hot_content">
          <p class="content">【神转折活动 | 开头文案有奖征集】</p>
          <p class="count">
            37赞 ·
            15评论
          </p>
        </div>
        <img width="64px" height="64px" data-v-62b0bd96="" src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2b37b224de24242a67424c56bb915c2~tplv-k3u1fbpfcp-watermark.image?">
      </a>
    </div>
    <div class="slideBarThree">
      <p class="slideBarThreeComment">
        热门话题
        <span style="float:right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huanyihuan"></use>
          </svg>
          换一换</span>
      </p>
      <a class="slideBarList" href="Javascript:void(0)" v-for="(item,index) in commentList" :key="index">
        <p class="slideBarThreeMain">
          <img class="slideBarImg" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/rec.476fe07.png">
          <span>
            {{item.one}}
          </span>
        </p>
        <span class="slideBarThreeRight">{{item.two}}</span>
      </a>
      <p class="slideBarThreeBottom">
        <a href="Javascript:void(0)">
          查看更多
          <i class="el-icon-arrow-right"></i>
        </a>
      </p>
    </div>
    <div class="slideBarFour">
      <a href="Javascript:void(0)">如何玩转沸点</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'RightSlideBar',
    data() {
        return {
            commentList: [
                {
                    one: '#搞笑程序员#',
                    two: '899',
                },
                {
                    one: '#空气炸锅美食推荐#',
                    two: '635',
                },
                {
                    one: '#高情商小技巧#',
                    two: '635',
                },
                {
                    one: '#医疗人生#',
                    two: '58K',
                },
                {
                    one: '#高效阅读技巧#',
                    two: '635',
                },
                {
                    one: '#倔友加油站#',
                    two: '635',
                },
                {
                    one: '#休闲小游戏推荐#',
                    two: '635',
                },
                {
                    one: '#运动装备推荐#',
                    two: '635',
                },
                {
                    one: '#怎么看待996#',
                    two: '635',
                },
            ],
        };
    },
};
</script>

<style scoped>
.slideBar div {
    background-color: #fff;
    margin-bottom: 20px;
}
.slideBarFirst {
    height: 200px;
    padding: 24px 20px;
    box-sizing: border-box;
    width: 100%;
}
.slideBarFirst .slideBarFirstTop {
    height: 52px;
    line-height: 52px;
    display: flex;
    align-items: center;
}
.slideBarFirst .slideBarFirstTop img {
    border-radius: 50%;
}
.slideBarFirst .slideBarFirstTop span {
    margin-left: 10px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #252933;
    word-break: break-all;
    max-width: 140px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.slideBarFirstBottom {
    height: 50px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    line-height: 50px;
}
.slideBarFirstBottom a {
    text-decoration: none;
    text-align: left;
    padding-right: 15px;
}
.slideBarFirstBottom div {
    height: 25px;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #252933;
    white-space: nowrap;
}
/* 第二个区域 */
.hot_list {
    height: 337px;
    width: 100%;
    box-sizing: border-box;
}
.hot_list > p {
    text-align: left;
    height: 56px;
    line-height: 56px;
    padding: 0 20px;
    font-weight: 500;
    font-size: 16px;
    color: #1d2129;
    border-bottom: 1px solid #e4e6eb;
    margin: 0;
}
.hot_list .hot_item {
    display: flex;
    text-decoration: none;
    height: 83px;
    width: 100%;
    margin-top: 10px;
}
.hot_list a:hover,
.hot_content:hover {
    background-color: #f7f8fa;
}
.hot_content > p:hover {
    color: blue;
}
.hot_list .hot_item .hot_content {
    transition: color 0.3s;
    font-size: 14px;
    line-height: 24px;
    color: #515767;
    margin: 0;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    box-sizing: border-box;
}
.hot_list .hot_item .cont {
    padding-top: 4px;
    font-size: 12px;
    line-height: 20px;
    color: #8a919f;
    margin: 0;
}
.hot_list .hot_item img {
    margin-left: 16px;
    width: 64px;
    height: 64px;
    border-radius: 4px;
}
/* 第四个区域 */
.slideBarThree .slideBarThreeComment {
    height: 56px;
    line-height: 56px;
    text-align: left;
    padding: 0 20px;
    font-weight: 500;
    font-size: 16px;
    color: #1d2129;
    border-bottom: 1px solid #e4e6eb;
    margin: 0;
}
.slideBarThree .slideBarThreeComment > span {
    font-size: 14px;
    color: #8a919f;
    cursor: pointer;
}
.slideBarList {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 22px;
    padding: 10px 10px;
    text-decoration: none;
    line-height: 22px;
}
.slideBarList:hover {
    text-decoration: none; /*指鼠标在链接*/
}
.slideBarThree .slideBarList .slideBarImg {
    width: 16px;
    height: 16px;
    margin-bottom: 2px;
    vertical-align: middle;
}
.slideBarThreeMain > span {
    font-size: 14px;
    color: #515767;
    word-break: break-all;
}
.slideBarThreeBottom {
    height: 46px;
    line-height: 46px;
    border-top: 1px solid #e4e6eb;
    font-size: 14px;
    cursor: pointer;
    color: #8a919f;
}
.slideBarThreeBottom > a {
    text-decoration: none;
}
.slideBarFour > a {
    display: block;
    line-height: 72px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    padding-left: 108px;
    color: #515767;
    margin-top: 20px;
    background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/guide.1535752.png);
    background-color: #fff;
    background-size: 80px;
    background-repeat: no-repeat;
    background-position: 33px -1px;
    text-decoration: none;
}
</style>