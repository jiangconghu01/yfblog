<template>
  <div class="message_box">
    <Bkimg :imgurl="imgurl"></Bkimg>
    <div class="text_box">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="17" :md="17" :lg="17" :xl="17">
          <div class="message_container">
            <Message-input>
              <template slot="button">
                留言
              </template>
            </Message-input>

            <Commont></Commont>
            <Commont></Commont>
            <Commont></Commont>
            <Commont></Commont>
          </div>
        </el-col>
        <el-col :xs="0" :sm="7" :md="7" :lg="7" :xl="7">
          <div class="right_aside_box">
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
              <Aside-title>微信号</Aside-title>
              <li>
                <img src="../../static/images/wechat.png" alt="" />
              </li>
            </section>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// import VueEmoji from 'emoji-vue'
import Bkimg from '@/components/layout/imgbkground.vue'
import MessageInput from '@/components/message/message.input.vue'
import Commont from '@/components/message/comment.vue'
import AsideTitle from '@/components/layout/aside.title.vue'
import img from '@/static/images/article_top.jpg'

export default {
  components: { Bkimg, MessageInput, Commont, AsideTitle },
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
.message_box {
  min-height: calc(100% - 60px);
  .text_box {
    width: 90%;
    margin: 5% auto;
  }
  .message_container {
    padding: 20px;
    box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.8);
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
</style>
