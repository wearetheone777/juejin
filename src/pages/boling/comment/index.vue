<template>
  <div class="Comment">
    <el-row>
      <el-col :span="24">
        <el-card>
          <div>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="快和掘友一起分享新鲜事！告诉你个小秘密，发布沸点时添加圈子和话题会被更多掘友看到哦～">
            </el-input>
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple circle">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-quanzi1"></use>
                  </svg>请选择圈子 &nbsp >
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple circle"><span>0/10000</span></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="16">
                <div class="grid-content bg-purple circle">
                  <ul class="commitRelease">
                    <li :class="{blue:currentIndex==1,backColor: currentActive==1}" @mouseenter="changeColor(1,1)" @mouseleave="changeColor(2)" @click="changeBackColor(1)">
                      <el-popover placement="bottom-start" width="350" trigger="click">
                        <picker :include="['people','Smileys']" :showSearch="false" :showPreview="false" :showCategories="false" @select="addEmoji" />
                        <template>
                          <div slot="reference">
                            <svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-biaoqing"></use>
                            </svg>
                            表情
                          </div>
                        </template>
                      </el-popover>
                    </li>
                    <li :class="{blue:currentIndex==2,backColor: currentActive==2}" @mouseenter="changeColor(1,2)" @mouseleave="changeColor(2)" @click="changeBackColor(2)">
                      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed">
                        <i class="el-icon-picture-outline">图片</i>
                      </el-upload>
                    </li>
                    <li :class="{blue:currentIndex==3,backColor: currentActive==3}" @mouseenter="changeColor(1,3)" @mouseleave="changeColor(2)" @click="changeBackColor(3)">
                      <el-popover placement="bottom-start" width="400" trigger="click">
                        <el-card>
                          <div>
                            <el-input placeholder="输入网页链接"></el-input>
                            <div style="margin-top:10px">
                              <span>自动抓取网页标题和头部</span>
                              <i class="el-icon-plus right" style="color:blue">添加</i>
                            </div>
                          </div>
                        </el-card>
                        <i class="el-icon-link" slot="reference">链接</i>
                      </el-popover>
                    </li>
                    <li :class="{blue:currentIndex==4,backColor: currentActive==4}" @mouseenter="changeColor(1,4)" @mouseleave="changeColor(2)" @click="changeBackColor(4)">
                      <el-popover placement="bottom-start" width="400" trigger="click">
                        <el-card>
                          <div>
                            <el-input placeholder="搜索话题名称" suffix-icon="el-icon-search"></el-input>
                            <div style="margin-top:10px">
                              <a style="text-decoration:none" class="slideBarList" href="Javascript:void(0)" v-for="(item,index) in commentList" :key="index">
                                <p class="slideBarThreeMain">
                                  <img width="16px" height="16px" class="slideBarImg" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/rec.476fe07.png">
                                  <span>
                                    {{item.one}}
                                  </span>
                                </p>
                              </a>
                            </div>
                          </div>
                        </el-card>
                        <i class="el-icon-picture-outline" slot="reference">话题</i>
                      </el-popover>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple circle pubsubButton">
                  <el-button type="primary">发布</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Picker } from 'emoji-mart-vue'; //引入组件
export default {
    name: 'Comment',
    data() {
        return {
            emojiList: [],
            currentIndex: -1,
            currentActive: -1,
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
    components: {
        //注册组件，不能全局挂载
        Picker,
    },
    methods: {
        addEmoji(e) {
            this.content += e.native;
        },
        changeColor(type, number) {
            if (type == 1) {
                this.currentIndex = number;
            } else {
                this.currentIndex = -1;
            }
        },
        changeBackColor(type) {
            this.currentActive = type;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
    },
};
</script>

<style lang="less" scoped>
.Comment {
    background-color: #fff;
    .circle {
        display: flex;
        align-items: center;
        .commitRelease {
            display: flex;
            li {
                padding-left: 25px;
            }
        }
    }
    .pubsubButton {
        justify-content: flex-end;
    }
}
</style>
<style scoped>
/* emoji */
.emoji-mart[data-v-7bc71df8] {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 420px;
    color: #ffffff !important;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background: #fff;
}
.blue {
    color: blue;
}
.backColor {
    color: blue;
}
</style>