<template>
  <div class="foot">
    <div class="desc">
      <div class="car">
        <div class="circle" :class="[countNum>0 ? 'active' : '']">
          <i class="icon-shopping_cart" :class="[countNum>0 ? 'active' : '']"></i>
        </div>
      </div>
      <div class="rates">
        <span class="total" :class="[countNum>0 ? 'active' : '']">￥{{totalPrice}}</span>
        <span class="delivery">另需配送费￥{{deliveryPrice}}</span>
      </div>
    </div>
    <div class="price" :class="[this.totalPrice >= this.minPrice>0 ? 'active' : '']">{{goPrice}}</div>
    <transition-group name="ball" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
      <div class="ballList" v-for="(item, index) in ballList" :key="index" v-show="item.show">
        <span class="ball"></span>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: {
    minPrice: {
      type: Number,
      default: 0
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    selectedPrice: {
      type: Array
    }
  },
  data() {
    return {
      ballList: [
        { show: false }
        // { show: false },
        // { show: false },
        // { show: false },
        // { show: false }
      ]
    };
  },
  computed: {
    countNum() {
      let count = 0;
      this.selectedPrice.forEach((item, index) => {
        count += item.count || 0;
      });
      return count;
    },
    totalPrice() {
      let totalPrice = 0;
      if (!this.selectedPrice.length) return 0;
      this.selectedPrice.forEach((item, index) => {
        item.count = item.count || 0;
        totalPrice += item.price * item.count;
      });
      return totalPrice;
    },
    goPrice() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}起送`;
      } else if (this.totalPrice < this.minPrice) {
        return `还差￥${this.minPrice - this.totalPrice}起送`;
      } else {
        return "去结算";
      }
    }
  },
  methods: {
    beforeEnter(el) {
      // console.log("beforeEnter");
      console.log(this.ballList[0]);
      el.offsetHeight;
      let count = this.ballList.length;
      // while(count--) {
      el.style.display = "";
      el.style.transform = "translate(-" +(this.ballList[0].position.x + 12) + "px, 0)";
      // }
    },
    enter(el, done) {
      el.offsetHeight;
      this.$nextTick(() => {
        el.style.transform = "translate(0, 0)";
      });
      done();
    },
    afterEnter(el) {},
    drop(pos) {
      // 获取添加的位置信息
      let position = pos.getBoundingClientRect();
      console.log(position);
      this.ballList.forEach(ball => {
        if (!ball.show) {
          ball.show = true;
          ball.position = position;
        }
      });
    }
  }
};
</script>
<style lang="less">
.foot {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 48px;
  background-color: #141d27;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  .desc {
    flex: 1;
    .car {
      position: relative;
      top: -10px;
      height: 56px;
      width: 56px;
      margin: 0 12px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #141d27;
      display: inline-block;
    }
    .circle {
      width: 100%;
      height: 100%;
      background-color: #2b343c;
      border-radius: 50%;
      text-align: center;
      .icon-shopping_cart {
        font-size: 24px;
        line-height: 44px;
        &.active {
          color: #fff;
        }
      }
      &.active {
        background-color: #00a0dc;
      }
    }
    .rates {
      display: inline-block;
      position: absolute;
      font-size: 16px;
      line-height: 48px;
      .total {
        height: 24px;
        line-height: 24px;
        padding-right: 12px;
        font-weight: 700;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        margin-right: 12px;
        &.active {
          color: #fff;
        }
      }
      .delivery {
        font-size: 10px;
      }
    }
  }
  .price {
    flex: 0 0 105px;
    width: 105px;
    background: #2b333b;
    font-size: 12px;
    text-align: center;
    line-height: 48px;
    font-weight: 700;
    &.active {
      background-color: #00b43c;
      color: #fff;
    }
  }
  .ballList {
    position: fixed;
    bottom: 30px;
    left: 33px;
    z-index: 10;
    transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    .ball {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-color: red;
      border-radius: 50%;
      transition: all 0.6s;
    }
  }
}
</style>
