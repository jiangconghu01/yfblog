<template>
  <div class="timeline-box shadow">
    <div class="timeline-main">
      <h1 class="start"><i class="iconfont">&#xe610;</i>START</h1>
      <div class="timeline-line"></div>
      <div class="timeline-year">
        <h2>
          <a class="yearToggle">2018 年</a
          ><i class="fa fa-caret-down fa-fw"></i>
        </h2>
        <div class="timeline-month">
          <ul>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">10月16日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                江湖路远，有缘再见。
              </div>
              <div class="clear"></div>
            </li>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">08月12日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                花光所有运气遇见你。
              </div>
              <div class="clear"></div>
            </li>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">08月10日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                <p>
                  <span
                    >没人在乎你怎样在深夜痛哭，也没人在乎你辗转反侧的要熬几个秋。外人只看结果，自己要独撑过程。等我们都明白了这个道理，便不会再在人前矫情，四处诉说以求宽慰。</span
                  >
                </p>
              </div>
              <div class="clear"></div>
            </li>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">06月28日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                <p>
                  <span
                    >当你的才华还撑不起你的野心时，那你就应该静下心来学习。</span
                  >
                </p>
              </div>
              <div class="clear"></div>
            </li>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">06月26日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                <p>6.29 江湖再见</p>
              </div>
              <div class="clear"></div>
            </li>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">05月24日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                <p>
                  <span>林花谢了春红，太匆匆，无奈朝来寒雨晚来风。</span
                  ><span
                    >胭脂泪，相留醉，几时重？自是人生长恨水长东。&nbsp;
                    &nbsp;&nbsp;</span
                  ><span>——李煜《相见欢》</span>
                </p>
              </div>
              <div class="clear"></div>
            </li>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">05月04日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                <p style="text-align: left;">
                  <span
                    >今生今世，我们所走的路都错了，时间不对，地点也不对&nbsp;
                    &nbsp; &nbsp;</span
                  >来生，我们再会，来生，我会等你&nbsp; &nbsp;&nbsp;<span
                    style="text-align: right;"
                    >——</span
                  >爱有来生
                </p>
              </div>
              <div class="clear"></div>
            </li>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">05月03日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                <p>
                  <span>人面不知何处去，桃花依旧笑春风。</span
                  ><span class="c-gray c-gap-left-small op-imprecise-author"
                    >&nbsp;——</span
                  >崔护《题都城南庄》
                </p>
              </div>
              <div class="clear"></div>
            </li>
            <li>
              <div class="h4 animated fadeInLeft">
                <p class="date">04月15日</p>
              </div>
              <p class="dot-circle animated ">
                <i class="pointer"></i>
              </p>
              <div class="content animated fadeInRight">
                <p>
                  博客正式上线，这也是我第一个网站。&nbsp; &nbsp;--2018年4月15号
                </p>
              </div>
              <div class="clear"></div>
            </li>
          </ul>
        </div>
      </div>
      <h1
        style="padding-top:4px;padding-bottom:2px;margin-top:40px;"
        class="end"
      >
        <i class="iconfont">&#xe62e;</i>THE END
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
.clear {
  clear: both;
}
.timeline-box {
  background: #fff;
  padding: 8px;
  position: relative;
  min-height: 90vh;
  margin-top: 20px;
}
.timeline-main {
  position: relative;
  min-height: 85vh;
}

.timeline-main > h1 {
  font-size: 18px;
  background: #fff;
  z-index: 1;
  position: relative;
  color: #484348;
  margin-left: 33%; /*д����֧��calc()�������*/
  margin-left: -moz-calc(35% - 7px);
  margin-left: -webkit-calc(35% - 7px);
  margin-left: calc(35% - 7px);
}

.timeline-main > h1 > i {
  padding-right: 10px;
  font-size: 20px;
}

.timeline-main > h1 > span {
  display: none;
}

.timeline-main h2,
.timeline-main h3 {
  width: 31%;
  text-align: right;
}

.timeline-main h2,
.timeline-main h2 > a {
  font-size: 16px;
  margin: 5px 0;
  color: #6bc30d;
}

.timeline-main h3,
.timeline-main h3 > a {
  font-size: 14px;
  margin: 2px 0;
  color: #ff5722;
}

.timeline-month > ul > li {
  padding: 10px 0;
}

.timeline-month > ul > li .h4 {
  display: inline-block;
  width: 31%;
  text-align: right;
  float: left;
}

.date {
  display: inline-block;
  padding: 2px 5px;
  color: #484348;
  font-size: 15px;
  margin-top: 5px;
}

.dot-circle {
  color: #484348;
  width: 8%;
  text-align: center;
  font-size: 22px;
  z-index: 1;
  position: relative;
  background: #fff;
  height: 33px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  .pointer {
    display: block;
    width: 22px;
    height: 22px;
    background: linear-gradient(
      135deg,
      rgb(185, 186, 189) 0,
      rgb(83, 83, 85) 100%
    );
    border-radius: 50%;
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      height: 8px;
      width: 8px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      left: 7px;
      top: 7px;
    }
  }
}

.content {
  line-height: 1.5;
  padding: 10px;
  border-radius: 5px;
  max-width: 60%;
  float: left;
  padding: 10px;
  margin-left: 10px;
  position: relative;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgb(185, 186, 189) 0,
    rgb(83, 83, 85) 100%
  );
  color: #fff;
}
.content img {
  width: 100%;
}
.content::before {
  position: absolute;
  left: -20px;
  top: 6px;
  height: 0;
  width: 0;
  content: '';
  border: 10px solid rgba(255, 255, 255, 0);
  border-top: 6px solid rgba(255, 255, 255, 0);
  border-bottom: 6px solid rgba(255, 255, 255, 0);
  border-right-color: rgb(185, 186, 189);
}

.timeline-line {
  position: absolute;
  left: 35%;
  top: 0;
  height: 100%;
  width: 2px;
  //   background: linear-gradient(
  //     135deg,
  //     rgb(114, 151, 252) 0,
  //     rgb(129, 64, 233) 100%
  //   );
  background: linear-gradient(
    135deg,
    rgb(185, 186, 189) 0,
    rgb(83, 83, 85) 100%
  );
  z-index: 0;
}

.timeline-year {
  margin: 10px 0;
}

/* С��Ļ��ƽ�壬���ڵ��� 768px�� */
// @media (min-width: 768px) {
//   .timeline-box {
//     background: #fff;
//     padding: 15px;
//     position: relative;
//     min-height: 90vh;
//   }

//   .timeline-main > h1 {
//     font-size: 26px;
//     margin-left: 16%; /*д����֧��calc()�������*/
//     margin-left: calc(18% -13px);
//   }

//   .timeline-main > h1 > i {
//     font-size: 30px;
//   }

//   .timeline-main > h1 > span {
//     display: inline;
//   }

//   .timeline-main h2,
//   .timeline-main h3 {
//     width: 16%;
//   }

//   .timeline-main h2,
//   .timeline-main h2 > a {
//     font-size: 24px;
//   }

//   .timeline-main h3,
//   .timeline-main h3 > a {
//     font-size: 20px;
//   }

//   .timeline-month > ul > li .h4 {
//     width: 16%;
//   }

//   .dot-circle {
//     width: 4%;
//     font-size: 22px;
//   }

//   .content {
//     max-width: 70%;
//   }

//   .timeline-line {
//     left: 18%;
//   }
// }

// /* �е���Ļ��������ʾ�������ڵ��� 992px�� */
// @media (min-width: 992px) {
//   .timeline-main > h1 {
//     font-size: 34px;
//     background: #fff;
//     z-index: 1;
//     position: relative;
//     color: #484348;
//     margin-left: 17%; /*д����֧��calc()�������*/
//     margin-left: calc(18% - 16px);
//   }

//   .timeline-main > h1 > i {
//     font-size: 36px;
//   }

//   .timeline-main h2,
//   .timeline-main h2 > a {
//     font-size: 30px;
//   }

//   .timeline-main h3,
//   .timeline-main h3 > a {
//     font-size: 24px;
//   }
// }
</style>
<style scoped>
@media (min-width: 768px) {
  .timeline-box {
    background: #fff;
    padding: 15px;
    position: relative;
    min-height: 90vh;
  }

  .timeline-main > h1 {
    font-size: 26px;
    margin-left: 16%; /*д����֧��calc()�������*/
    margin-left: calc(18% -13px);
  }

  .timeline-main > h1 > i {
    font-size: 30px;
  }

  .timeline-main > h1 > span {
    display: inline;
  }

  .timeline-main h2,
  .timeline-main h3 {
    width: 16%;
  }

  .timeline-main h2,
  .timeline-main h2 > a {
    font-size: 24px;
  }

  .timeline-main h3,
  .timeline-main h3 > a {
    font-size: 20px;
  }

  .timeline-month > ul > li .h4 {
    width: 16%;
  }

  .dot-circle {
    width: 4%;
    font-size: 22px;
  }

  .content {
    max-width: 70%;
  }

  .timeline-line {
    left: 18%;
  }
}

/* �е���Ļ��������ʾ�������ڵ��� 992px�� */
@media (min-width: 992px) {
  .timeline-main > h1 {
    font-size: 34px;
    background: #fff;
    z-index: 1;
    position: relative;
    color: #484348;
    margin-left: 17%; /*д����֧��calc()�������*/
    margin-left: calc(18% - 16px);
  }

  .timeline-main > h1 > i {
    font-size: 36px;
  }

  .timeline-main h2,
  .timeline-main h2 > a {
    font-size: 30px;
  }

  .timeline-main h3,
  .timeline-main h3 > a {
    font-size: 24px;
  }
}
</style>
