<template>
  <div class="aboute_box">
    <Bkimg :imgurl="imgurl"></Bkimg>
    <div class="text_box">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="17" :md="17" :lg="17" :xl="17">
          <div class="left_aside_box">
            <h3 class="title">转行码农</h3>
            <p>
              14年毕业后在入职某国企施工单位，在重庆工地搬砖两年，很迷茫。16年底离开重庆到杭州转行做java开发，17年中旬至今从事web前端开发。
            </p>
            <div class="contact item">
              <span>可以通过以下方式联系到我:</span>
              <ul>
                <li>企鹅：<b>1239395043</b></li>
                <li>邮箱：<b>jiangconghu_y@126.com</b></li>
                <li>
                  github:
                  <a href="https://github.com/jiangconghu01"
                    >https://github.com/jiangconghu01</a
                  >
                </li>
              </ul>
            </div>
            <div class="item">
              <h3 class="title">关于本站</h3>
              <p>
                本站主要个人用于记录学习笔记，技术分享、交流，同时也提供共享书籍上传和下载。
              </p>
              <span>本站结构:</span>
              <ul>
                <li>前端：<b>nuxt.js</b></li>
                <li>后端：<b>koa2+mongodb</b></li>
              </ul>
            </div>
            <div class="item">
              <h3 class="title">特别说明</h3>
              <ul>
                <li>本站文章仅代表个人观点，和任何组织或个人无关。</li>
                <li>
                  本站所有个人联系方式只做技术交流用，如有估计发垃圾信息，广告等坚决拉黑
                </li>
                <li>
                  本站源码托管在github上，路过的道友觉得还可以的望点个星星
                </li>
                <li>
                  本站所有样式设计都仿制燕十三大佬<a
                    href="https://www.yanshisan.cn/Blog/Index"
                    >https://www.yanshisan.cn/Blog/Index</a
                  >的模板
                </li>
              </ul>
            </div>
          </div></el-col
        >
        <el-col :xs="0" :sm="7" :md="7" :lg="7" :xl="7"
          ><div class="right_aside_box">
            <section class="aside-item aside-person-info">
              <p class="photo">
                <img src="../../static/images/headphoto.jpeg" alt="" />
              </p>
              <p class="name">jiangconghu | 逸风</p>
              <p class="job">Web搬砖工程师</p>
              <p class="abstract">
                一个90后草根站长！17年入行。一直潜心研究web前端和后端技术，一边工作一边积累经验，分享一些个人学习记录和学习资料。
              </p>
            </section>
            <section class="aside-item infor">
              <Aside-title>QQ号</Aside-title>
              <li>
                <img src="../../static/images/wechat.png" alt="" />
              </li>
            </section></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Bkimg from '@/components/layout/imgbkground.vue'
import img from '@/static/images/aboute_top.jpg'
import AsideTitle from '@/components/layout/aside.title.vue'
export default {
  components: { Bkimg, AsideTitle },
  data() {
    return {
      imgurl: img
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.aboute_box {
  min-height: calc(100% - 60px);
  .text_box {
    width: 90%;
    margin: 5% auto;
    .left_aside_box {
      color: #333;
      font-size: 14px;
      line-height: 1.6;
      padding: 20px 30px 30px 30px;
      box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.5);
      h3.title {
        font-size: 20px;
        font-weight: 600;
        line-height: 0.95;
        margin: 20px 0;
        padding-left: 15px;
        color: #222;
        border-left: 0.25rem solid #6bc30d;
      }
      p {
        margin-top: 10px;
      }
      .item {
        margin-top: 15px;
        ul {
          margin-top: 10px;
        }
        li {
          margin-top: 10px;
          b {
            font-weight: normal;
            color: #0366d6;
          }
          a {
            color: #0366d6;
          }
        }
      }
    }
    .right_aside_box {
      .aside-item {
        padding: 35px 30px;
        margin-bottom: 30px;
        background: #fff;
        box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.8);
        .item-img {
          margin: 0 auto;

          width: 96%;
        }
      }
      .aside-item.infor {
        color: #333;
        li {
          b {
            font-size: 15px;
          }
          a {
            color: #096;
          }
          img {
            width: 99%;
          }
          margin-bottom: 10px;
        }
      }
      .aside-item.aside-person-info {
        background: #fff url(../../static/images/banner.png) no-repeat;
        p {
          margin-top: 10px;
        }
        .photo {
          text-align: center;
          margin-top: 45px;
        }
        .photo img {
          width: 100px;
          border-radius: 50%;
        }
        .name {
          text-align: center;
          color: #3f3f3f;
          font-weight: bold;
          font-size: 16px;
        }
        .job {
          text-align: center;
          padding: 10px;
          color: #3f3f3f;
          font-size: 14px;
        }
        .abstract {
          color: #999;
        }
      }
    }
  }
}
</style>
