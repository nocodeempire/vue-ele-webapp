<template>
  <div class="foot">
    <div class="desc">
      <div class="car">
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
        border-right: 1px solid rgba(255,255,255,0.1);
        margin-right: 12px;
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
  }
}
</style>
