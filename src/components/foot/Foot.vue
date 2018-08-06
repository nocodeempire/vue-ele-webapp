<template>
  <div class="foot">
    <div class="desc">
      <div class="car">
<<<<<<< HEAD
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
      type: Array // 默认传过来的是一个数组,数组成员是一个个对象,对象属性是价格和数量
    }
  },
  computed: {
    countNum() {
      let count = 0;
      this.selectedPrice.forEach((item, index) => {
        count += item.count;
      });
      return count;
    },
    totalPrice() {
      let totalPrice = 0;
      if (!this.selectedPrice.length) return 0;
      this.selectedPrice.forEach((item, index) => {
        item.count = item.count ? item.count : 0;
        totalPrice += item.price * item.count;
      });
      return totalPrice;
    },
    goPrice() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}起送`;
      } else if (this.totalPrice < this.minPrice) {
        return `还差￥${this.minPrice - this.totalPrice}起送`;
      }else {
        return '去结算'
      }
    }
  }
};
=======
        <div class="circle">
          <i class="icon-shopping_cart"></i>
        </div>
      </div>
      <div class="rates">
        <span class="total">￥0</span>
        <span class="delivery">另需配送费￥11</span>
      </div>
    </div>
    <div class="price">￥20起送</div>
  </div>
</template>
<script>
export default {};
>>>>>>> d5e7630f1ae987b3b672b392066233a71fa5b658
</script>
<style lang="less">
.foot {
  position: fixed;
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
<<<<<<< HEAD
        &.active {
          color: #fff;
        }
      }
      &.active {
        background-color: #00a0dc;
=======
>>>>>>> d5e7630f1ae987b3b672b392066233a71fa5b658
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
<<<<<<< HEAD
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        margin-right: 12px;
        &.active {
          color: #fff;
        }
=======
        border-right: 1px solid rgba(255,255,255,0.1);
        margin-right: 12px;
>>>>>>> d5e7630f1ae987b3b672b392066233a71fa5b658
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
<<<<<<< HEAD
    &.active {
      background-color:#00b43c;
      color: #fff
    }
=======
>>>>>>> d5e7630f1ae987b3b672b392066233a71fa5b658
  }
}
</style>
