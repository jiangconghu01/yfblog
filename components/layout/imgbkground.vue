<template>
  <div :style="{ backgroundImage: `url(${imgurl})` }" class="bg-top">
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  props: {
    imgurl: {
      type: String,
      default: '',
      required: false
    }
  },
  mounted() {
    // console.log(this.imgurl)
  }
}
</script>

<style lang="scss">
.bg-top {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  //margin-top: 60px;
  padding: 85px 0;
  text-align: center;
  width: 100%;
  position: relative;
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      135deg,
      rgba(94, 136, 255, 0.2) 0,
      rgba(94, 18, 214, 0.3) 100%
    );
  }
}
@media only screen and (max-width: 768px) {
  .bg-top {
    padding: 40px 0;
  }
}
</style>
