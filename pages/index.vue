<template>
  <div class="index">
    <div class="section_back">
      <div class="mask">
        <div class="text animated zoomIn delay-1.8s">
          <div class="blog"><i class="name">Mr.yifeng</i> 的博客</div>
          <div class="maxim">一直风雨兼程 ，却从未到达过远方。</div>
        </div>
        <div class="icon-more"><span class="icon iconfont">&#xe608;</span></div>
      </div>
    </div>
    <div class="section_acticle">
      <div class="box wow animated fadeInLeft">
        <div class="title">
          <p class="cn">最近文章</p>
          <p class="zn">latest article</p>
        </div>
        <div class="desc">
          <i
            >时间并不会真的帮我们解决什么问题，它只是把原来怎么也想不通的问题，变得不再重要了。</i
          >
        </div>
      </div>
      <div class="articles">
        <el-row :gutter="25">
          <el-col
            v-for="(item, index) in articleList"
            :key="index + item"
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
            :xl="8"
            ><div class="grid-content bg-purple   wow animated fadeInRight">
              <Article-item :item="item"></Article-item></div
          ></el-col>
          <!-- <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
            ><div class="grid-content bg-purple">
              <Article-item></Article-item></div
          ></el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
            ><div class="grid-content bg-purple-light">
              <Article-item></Article-item></div
          ></el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
            ><div class="grid-content bg-purple">
              <Article-item></Article-item></div
          ></el-col> -->
        </el-row>
      </div>
    </div>
    <div class="section_message">
      <div class="box  wow animated fadeInLeft">
        <div class="title">
          <p class="cn">最近留言</p>
          <p class="zn">latest message</p>
        </div>
        <div class="desc">
          <i>言有浮于其意，而意有不尽于其言。</i>
        </div>
      </div>
      <div class="messages">
        <el-carousel
          :interval="3000"
          type="card"
          height="200px"
          :autoplay="true"
        >
          <el-carousel-item v-for="item in 6" :key="item">
            <div class="medium">
              <div class="msg">
                <span class="icon iconfont">&#xe619;</span>
                <span
                  >{{
                    item
                  }}时间并不会真的帮我们解决什么问题，它只是把原来怎么也想不通的问题，变得不再重要了</span
                >
              </div>
              <div class="user">
                <i>--</i>
                <img src="../static/images/headphoto.jpeg" alt="" />
                <p>传奇原士魔都</p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="section_recommend">
      <div class="box wow  animated fadeInLeft">
        <div class="title">
          <p class="cn">关于我</p>
          <p class="zn">about me</p>
        </div>
        <div class="desc">
          <i>如果天气很好，加上没啥事儿的话，我选择睡一觉！</i>
        </div>
      </div>
      <el-row :gutter="20" class="aboute_me">
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <div class="abstracts wow  animated fadeInRight">
            <h2>个人简介</h2>
            <div class="head-photo">
              <a href="/"
                ><img src="../static/images/headphoto.jpeg" alt=""
              /></a>
            </div>
            <p class="abstract">站长: 逸风</p>
            <p class="abstract">职业: 长方形混凝土块转移工程师</p>
            <p class="abstract">邮箱: jiangconghu_y@126.com</p>
            <p class="abstract">QQ: 1239395043</p>
          </div></el-col
        >
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
          ><div class="abstracts wow  animated fadeInLeft">
            <h2>工作</h2>
            <div class="head-photo">
              <a href="/"><img src="../static/images/work_1.png" alt=""/></a>
            </div>
            <p class="abstract">
              认真敲代码时候也会废寝忘食，奈何技术成长甚微。
            </p>
            <p class="abstract">
              没有牛批的大厂工作经历，没有很深入的技术研究（哭脸）。
            </p>
            <p class="abstract">
              理想工作是成为一个能养活自己的自由开发者，谁说的代码不能敲一辈子，我觉得我就可以（哭脸）。
            </p>
          </div></el-col
        >
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
          ><div class="abstracts wow  animated fadeInRight">
            <h2>慢生活</h2>
            <div class="head-photo">
              <a href="/"><img src="../static/images/life_1.png" alt=""/></a>
            </div>
            <p class="abstract">
              急速看电影，从来都是看解说电影，一个小时能开完十多部那种。急速看电视剧，基本都是1.5-2.0倍看剧，50集的剧一般只计划三天内看完。
            </p>
            <p class="abstract">
              王者农药，不要问，问就是我的姜子牙贼六，帮抢必赢！
            </p>
          </div></el-col
        >
      </el-row>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import ArticleItem from '@/components/article/index.article.item.vue'
import Footer from '@/components/layout/footer.vue'
export default {
  layout: 'layoutindex',
  components: {
    ArticleItem,
    Footer
  },
  data() {
    return {
      height: 1000,
      articleList: [
        {
          imgurl: 'article_1.jpg',
          date: '2020年05月11日',
          content: `如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else
        if 来判断，输出。思路已打开，样式调用就可以多样化啦！...`,
          title: '正确使用正则表达式的'
        },
        {
          imgurl: 'article_2.jpg',
          date: '2020年05月11日',
          content: `如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else
        if 来判断，输出。思路已打开，样式调用就可以多样化啦！...`,
          title: '正确使用正则表达式的'
        },
        {
          imgurl: 'article_3.jpg',
          date: '2020年05月11日',
          content: `如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else
        if 来判断，输出。思路已打开，样式调用就可以多样化啦！...`,
          title: '正确使用正则表达式的'
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {
    const pageHeight = document.body.clientHeight
    this.height = pageHeight
    // this.$wow.init()
    console.log(process)
    if (process.browser) {
      const wowjs = require('wowjs')
      const W = new wowjs.WOW()
      W.init()
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.common_footer {
  display: none;
}
.index {
  height: 100%;
  //   background-color: $contaner_bg;

  .section_back {
    .mask {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
        135deg,
        rgba(94, 136, 255, 0.1) 0,
        rgba(94, 18, 214, 0.2) 100%
      );
    }
    background-image: url('../static/images/back.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    color: #fff;
    .text {
      height: 160px;
      .blog {
        text-align: center;
        margin-bottom: 40px;
        font-size: 24px;
      }
      .maxim {
        text-align: center;
      }
      .name {
        font-family: BarbaraHand;
        font-size: 38px;
        font-weight: bold;
        letter-spacing: 2px;
      }
    }
    .icon-more {
      position: absolute;
      bottom: 30px;
      left: calc(50% - 23px);
      width: 46px;
      height: 46px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.8s;
      &:hover {
        background-color: rgba(94, 136, 255, 0.3);
      }
      .icon {
        font-size: 30px;
      }
    }
  }
  .box {
    padding: 40px 0;
    position: relative;
    width: 80%;
    margin-left: 10%;
    text-align: center;
    .title {
      width: 30%;
      max-width: 200px;
      height: 140px;
      border-radius: 10px;
      padding: 41px 0;
      color: #fff;
      background-image: url('../static/images/back.jpg');
      background-size: cover;
      //   background-image: linear-gradient(151deg, #d4d3d6 0%, #37393a 100%);
      // background-image: linear-gradient(
      //   151deg,
      //   rgba(94, 136, 255, 0.2) 0%,
      //   rgba(94, 18, 214, 0.4) 100%
      // );
      position: absolute;
      left: -20px;
      top: 20px;
      .cn {
        text-align: center;
        line-height: 30px;
        font-size: 24px;
      }
      .zn {
        text-align: center;
        line-height: 28px;
        font-size: 24px;
        font-family: BarbaraHand;
      }
    }
    .desc {
      background: #fff;
      width: 100%;
      height: 140px;
      line-height: 30px;
      border-radius: 10px;
      padding: 10px 20px 10px 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.5);
    }
  }
  .section_acticle {
    max-width: $pc_max_width;
    margin: 35px auto;
    padding: 10px 20px;
    .articles {
      padding: 0 5%;
      .grid-content {
        background-color: #fff;
        min-height: 36px;
        border-radius: 4px;
        margin-bottom: 20px;
        overflow: hidden;
        box-shadow: 0 0 18px 2px rgba(182, 193, 215, 0.5);
      }
    }
  }
  .section_message {
    max-width: $pc_max_width;
    margin: 35px auto;
    padding: 10px 20px;
    .messages {
      padding: 0 5%;
      .medium {
        background-color: #fff;
        border-radius: 1%;
        height: 100%;

        box-shadow: 0 0 4px 1px rgba(182, 193, 215, 0.5) inset;
        padding: 15px 20px;
        .msg {
          height: 90px;
          line-height: 30px;
          padding: 0 20px;
          overflow: hidden;
          -webkit-line-clamp: 3;
          text-overflow: ellipsis;
          .icon {
            font-size: 24px;
            color: #29b6f6;
            margin-right: 15px;
          }
        }
        .user {
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            color: #42c02e;
            margin-right: 20px;
          }
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          p {
            margin-left: 10px;
            font-size: 18px;
            color: #42c02e;
          }
        }
      }
    }
  }
  .section_recommend {
    max-width: $pc_max_width;
    margin: 35px auto;
    padding: 10px 20px;
    .aboute_me {
      padding: 0 5%;
    }
    .abstracts {
      //   height: 400px;
      padding: 15px;
      background-color: #fff;
      box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.8);
      border-radius: 1%;
      margin-bottom: 20px;
      .head-photo {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        img {
          height: 100%;
          width: 100%;
        }
      }
      p {
        background: #f6f6f6;
        line-height: 30px;
        color: #555;
        margin: 5px 0;
        padding-left: 25px;
        border-radius: 5px;
        text-shadow: rgba(255, 255, 255, 0.3) 0px 1px 0px;
        position: relative;
        &::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #29b6f6;
          position: absolute;
          left: 8px;
          top: 12px;
        }
      }
    }
  }
}
</style>
<style scoped>
.el-carousel__item {
  overflow: inherit;
}
.el-carousel--horizontal {
  padding: 5px 0;
}
</style>
