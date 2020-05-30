<template>
  <div class="article_box">
    <Bkimg :imgurl="imgurl"></Bkimg>
    <div class="list_box">
      <aside class="left_box">
        <Article-list-item
          v-for="(item, index) in articleList"
          :key="index + 'article'"
          :item="item"
        ></Article-list-item>
      </aside>
      <aside class="right_box">
        <section class="aside-item recommend">
          <Aside-title>特别推荐</Aside-title>
          <ul>
            <li
              v-for="(item, index) in recommendList"
              :key="index + 'img'"
              class="item-img"
            >
              <Item-img :img="item.img" :title="item.title"></Item-img>
            </li>
          </ul>
        </section>
        <section class="aside-item clicksort">
          <Aside-title>点击排行</Aside-title>
          <ul>
            <li>
              <Item-img
                :img="articleList[0].imgurl"
                :title="articleList[0].title"
                type="2"
              ></Item-img>
            </li>
            <li v-for="(item, index) in articleList" :key="index + 'small'">
              <Article-small-item
                :img="item.imgurl"
                :title="item.title"
                :date="item.date"
              ></Article-small-item>
            </li>
          </ul>
        </section>
        <section class="aside-item latest">
          <Aside-title>最新更新</Aside-title>
          <ul>
            <li>
              <Item-img
                :img="articleList[0].imgurl"
                :title="articleList[0].title"
                type="2"
              ></Item-img>
            </li>
            <li v-for="(item, index) in articleList" :key="index + 'small'">
              <Article-small-item
                :img="item.imgurl"
                :title="item.title"
                :date="item.date"
              ></Article-small-item>
            </li>
          </ul>
        </section>
        <section class="aside-item tags">
          <Aside-title>标签</Aside-title>
          <Tags :tags="tags"></Tags>
        </section>
        <section class="aside-item infor">
          <Aside-title>站点信息</Aside-title>
          <ul>
            <li><b>建站时间：</b>2018-09-09</li>
            <li><b>建站程序：</b>nuxt+koa2+mongodb+redis</li>
            <li><b>文章统计：</b>共25篇</li>
            <li><b>统计数据：</b><a href="/">百度统计</a></li>
            <li><b>微信公众号和小程序：</b><a href="/">还在开发中</a></li>
            <li>
              <b>个人QQ号：</b
              ><img src="../../static/images/wechat.png" alt="" />
            </li>
          </ul>
        </section>
      </aside>
    </div>
  </div>
</template>
<script>
import Bkimg from '@/components/layout/imgbkground.vue'
import ArticleListItem from '@/components/article/article.list.item.vue'
import img from '@/static/images/life_top.jpg'
import AsideTitle from '@/components/layout/aside.title.vue'
import Tags from '@/components/article/tags.vue'
import ArticleSmallItem from '@/components/article/article.small.item.vue'
import ItemImg from '@/components/article/article.img.vue'
export default {
  components: {
    Bkimg,
    ArticleListItem,
    AsideTitle,
    Tags,
    ArticleSmallItem,
    ItemImg
  },
  data() {
    return {
      imgurl: img,
      tags: [
        { name: 'koa2', link: '/' },
        { name: 'http', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' }
      ],
      recommendList: [
        {
          title: '正则表达式的正确打开方式',
          img: 'article_1.jpg'
        }
      ],

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
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.article_box {
  min-height: calc(100% - 60px);
  .list_box {
    width: 90%;
    margin: 5% auto;
    display: flex;
    .left_box {
      flex: 1;
    }
    .right_box {
      width: 350px;
      margin-left: 30px;
      //   box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.5);
      .aside-item {
        box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.5);
        padding: 35px 30px;
        margin-bottom: 20px;
        background: #fff;
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
    }
  }
}
@media only screen and (max-width: 991px) {
  .right_box {
    display: none;
  }
}
</style>
