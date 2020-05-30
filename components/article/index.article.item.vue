<template>
  <div class="article_item">
    <div class="img_box">
      <div class="mask">
        <p class="read">阅读</p>
      </div>
      <img :src="require(`@/static/images/${item.imgurl}`)" alt="" />
    </div>
    <div class="abstract">
      <h4 class="title">
        <nuxt-link to="/articlepage/1" class="index">
          {{ item.title }}</nuxt-link
        >
      </h4>
      <p class="date">{{ item.date }}</p>
      <p class="text">
        {{ item.content }}
      </p>
      <p class="read_more">
        <nuxt-link to="/" class="index"> 阅读全部</nuxt-link>
      </p>
    </div>
  </div>
</template>
<script>
// 图片统一用ps处理为16:9，宽度设为400
export default {
  components: {},
  props: {
    item: {
      type: Object,
      requred: false,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.article_item {
  width: 100%;
  height: 100%;
  .img_box {
    width: 100%;
    overflow: hidden;
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 100%;
      padding-top: 55.26%;
    }
    .mask {
      width: 100%;
      padding-top: 56.26%;
      position: absolute;
      cursor: pointer;
      background: linear-gradient(
        135deg,
        rgba(94, 136, 255, 0.1) 0,
        rgba(94, 18, 214, 0.2) 100%
      );
      z-index: 1;
      &:hover + img {
        transform: scale(1.1);
      }
      &:hover {
        .read {
          display: block;
        }
      }
      .read {
        transition: all 0.4s ease;
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 15px;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        &:hover {
          background-color: #fff;
          color: #29b6f6;
        }
      }
    }
    img {
      width: 100%;
      position: absolute;
      transition: all 0.5s ease;
    }
  }
  .abstract {
    padding: 15px;
    .title {
      margin-bottom: 15px;

      a {
        color: #000;
        &:hover {
          color: #42c02e;
        }
      }
    }
    .date {
      color: #bbb;
      font-size: 12px;
      margin-bottom: 15px;
    }
    .text {
      margin-bottom: 15px;
      color: #999;
    }
    .read_more {
      a {
        color: #29b6f6;
      }
    }
  }
}
</style>
