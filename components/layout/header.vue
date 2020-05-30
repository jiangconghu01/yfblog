<template>
  <div class="header-box" :class="[offTop ? 'white' : '']">
    <div class="logo">
      YIFENG
    </div>
    <div class="nav">
      <ul>
        <li><nuxt-link to="/" class="index"> 首页</nuxt-link></li>
        <li><nuxt-link to="/article/articlelist" class=""> 文章</nuxt-link></li>
        <li><nuxt-link to="/life/life" class=""> 慢生活</nuxt-link></li>
        <li><nuxt-link to="/message/message" class=""> 留言</nuxt-link></li>
        <li><nuxt-link to="/aboute/aboute" class=""> 关于</nuxt-link></li>
      </ul>
    </div>
    <div class="login">QQ</div>
  </div>
</template>
<style lang="scss">
.header-box {
  &.white {
    background-color: #fff;
    box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.8);
    color: #444;
    a {
      color: #444;
    }
  }
  transition: background-color 1.5s;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  color: #fff;
  z-index: 10;
  .logo {
    font-family: BarbaraHand;
    font-size: 34px;
    font-weight: bold;
    letter-spacing: -1px;
  }

  .nav {
    flex: 1;
  }
  .nav ul {
    display: flex;
    justify-content: flex-end;
    li {
      margin: 10px 20px;
    }
  }
  .login {
    width: 80px;
    text-align: center;
  }
  a {
    color: #fff;
  }
}
</style>
<script>
export default {
  components: {},
  props: {
    scrollStyle: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      offTop: false
    }
  },
  computed: {},
  created() {},
  mounted() {
    if (this.scrollStyle) {
      this.offTop = true
    } else {
      window.addEventListener('scroll', () => {
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        // console.log(scrollTop)
        this.offTop = scrollTop > 60
      })
    }
  },
  methods: {}
}
</script>
