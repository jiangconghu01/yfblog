<template>
  <div class="life_box">
    <Bkimg :imgurl="imgurl"></Bkimg>
    <!-- <el-timeline class="msg_box">
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline> -->
    <Time-line class="time_box"></Time-line>
  </div>
</template>
<script>
import Bkimg from '@/components/layout/imgbkground.vue'
import TimeLine from '@/components/life/time.line.vue'
import img from '@/static/images/life_top.jpg'
export default {
  components: {
    Bkimg,
    TimeLine
  },
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
.life_box {
  min-height: calc(100% - 60px);

  //   background-image: url('../../static/images/life_bk.jpg');
  .time_box {
    width: 90%;
    margin: 2% auto;
    box-shadow: 0 0 8px 2px rgba(182, 193, 215, 0.5);
    padding: 5% 1%;
  }
}
</style>
