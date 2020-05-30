<template>
  <div class="article_item">
    <h4 class="title">
      <nuxt-link to="/"> {{ item.title }}</nuxt-link>
    </h4>
    <div class="content clearfix">
      <img :src="require(`@/static/images/${item.imgurl}`)" alt="" />
      <span class="text">{{ item.content }}</span>
    </div>
    <div class="infor">
      <div class="tag">
        <span class="icon iconfont">&#xe60c;</span><i>日记</i>
      </div>

      <span class="right"
        ><span class="icon iconfont">&#xe612;</span><i>456</i>
        <span class="comment icon iconfont">&#xe619;</span><i>22</i>
      </span>
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
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.5);
  .title {
    line-height: 30px;
    font-size: 18px;
    padding: 10px 0;
    margin-bottom: 10px;
    a {
      color: #333;
      &:hover {
        color: #42c02e;
      }
    }
  }
  .content {
    img {
      float: left;
      margin-right: 15px;
    }
    .text {
      line-height: 1.3;
      color: #787977;
      line-height: 1.3;
    }
  }
  .infor {
    border-top: 1px solid #d0d0d0;
    height: 40px;
    margin-top: 20px;
    align-items: center;
    display: flex;
    color: #787977;
    .tag {
      width: 100%;
    }
    .right {
      flex-shrink: 0;
      .comment {
        margin-left: 10px;
      }
    }
  }
}
@media only screen and (max-width: 991px) {
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
