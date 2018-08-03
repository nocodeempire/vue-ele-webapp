<template>
  <div class="star">
    <!-- 外层循环 里层是星星类型(实心 空心 半星等) -->
    <div :class="'starList_'+size" v-for="(item, index) in starList" :key="index">
      <div :class="'star_'+item" class="starstyle"></div>
    </div>
  </div>
</template>
<script>
const STAR_ON = "on";
const STAR_OFF = "off";
const STAR_HALF = "half";
const STAR_SCORE = 5;
export default {
  // 根据外面传进来的size判断用的是24/36/48的图片, 根据score算出星星类型
  props: {
    size: {
      type: Number,
      default: 48
    },
    score: {
      type: Number,
      default: 5
    }
  },
  // 这个组件总的思路是用一个数组 记录半星全星的状态,类似['on','on','half','off','off']
  // 用这个数组循环,得出不同的class, 不同的class对应不同的图片展示
  computed: {
    starList() {
      let result = [];
      let score = Math.round(this.score * 2) / 2; // 这样算出来的分数肯定是整数或者某点5
      let decimals = score % 1 !== 0; // 判断是否有小数
      let scoreInt = Math.round(this.score);
      for (let i = 1; i <= score; i++) {
        result.push(STAR_ON);
      }
      decimals ? result.push(STAR_HALF) : "";
      while (result.length < STAR_SCORE) {
        result.push(STAR_OFF);
      }
      return result;
    }
  }
};
</script>
<style lang="less">
@import "../../assets/css/minin.less";
.star {
  .starList_48 {
    display: inline-block;
    .starstyle {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 20px;
      background-size: 20px 20px;
      background-repeat: no-repeat;
    }
    .star_on {
      .bg-img("star48_on");
    }
    .star_off {
      .bg-img("star48_off");
    }
    .star_half {
      .bg-img("star48_half");
    }
  }
  .starList_36 {
    display: inline-block;
    .starstyle {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 5px;
      background-size: 15px 15px;
      background-repeat: no-repeat;
    }
    .star_on {
      .bg-img("star36_on");
    }
    .star_off {
      .bg-img("star36_off");
    }
    .star_half {
      .bg-img("star36_half");
    }
  }
  .starList_24 {
    display: inline-block;
    .starstyle {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 2px;
      background-size: 10px 10px;
      background-repeat: no-repeat;
    }
    .star_on {
      .bg-img("star36_on");
    }
    .star_off {
      .bg-img("star36_off");
    }
    .star_half {
      .bg-img("star36_half");
    }
  }
}
</style>
