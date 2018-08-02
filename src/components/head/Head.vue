<template>
  <div class="header">
    <div class="head">
      <div class="detail">
        <div class="left">
          <img :src="seller.avatar" alt="">
        </div>
        <div class="right">
          <div class="title">
            <span class="brand"></span>
            <span class="storename">{{seller.name}}</span>
          </div>
          <div class="discription">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div v-if="seller.supports" class="supports">
            <span :class="supportType" class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="count" @click="popInfo">
          <span class="num" v-if="seller.supports">
            {{seller.supports.length}}个
          </span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="notice" @click="popInfo">
        <span class="ico"></span>
        <span class="content">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar" alt="">
      </div>
    </div>
    <div class="sticky-footer" v-if="isPop">
      <div class="content">
        <h1>{{seller.name}}</h1>
        <div class="text">
          <span>优惠信息</span>
        </div>
        <ul>
          <li v-for="(item, index) in seller.supports" :key="index" class="reducedInfo">
            <span :class="'type-'+item.type" class="icon"></span>
            <span class="info">
              {{item.description}}
            </span>
          </li>
        </ul>
        <div class="text">
          <span>商家公告</span>
        </div>
        <p class="introduce">{{seller.bulletin}}</p>
      </div>
      <div class="close" @click="closePop">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seller: {},
      isPop: false
    };
  },
  created() {
    this.axios.get("/api/seller").then(data => {
      this.seller = data.data;
      console.log(this.seller);
    });
  },
  methods: {
    popInfo() {
      this.isPop = true;
    },
    closePop() {
      this.isPop = false;
    }
  },
  computed: {
    supportType() {
      return "type-" + this.seller.supports[0].type;
    }
  }
};
</script>
<style lang='less'>
@import "../../assets/css/minin.less";
.header {
  .head {
    position: relative;
    background-color: rgba(0, 0, 0, 0.2);
    overflow: hidden;
    .detail {
      width: 100%;
      padding: 24px 12px 18px 24px;
      box-sizing: border-box;
      .left {
        display: inline-block;
        vertical-align: top;
        width: 64px;
        height: 64px;
        img {
          width: 100%;
          border-radius: 2px;
        }
      }
      .right {
        display: inline-block;
        color: #fff;
        margin-left: 14px;
        .title {
          margin-bottom: 8px;
        }
        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          .bg-img("brand");
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .storename {
          display: inline-block;
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
        .discription {
          font-size: 12px;
          margin-bottom: 10px;
        }
        .supports {
          font-size: 10px;
          line-height: 12px;
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.type-0 {
              .bg-img("decrease_1");
            }
            &.type-1 {
              .bg-img("discount_1");
            }
            &.type-2 {
              .bg-img("guarantee_1");
            }
            &.type-3 {
              .bg-img("invoice_1");
            }
            &.type-4 {
              .bg-img("special_1");
            }
          }
        }
      }
      .count {
        position: absolute;
        right: 12px;
        bottom: 44px;
        padding: 0 18px 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
        font-size: 10px;
        color: #fff;
        .icon-keyboard_arrow_right {
          position: absolute;
          right: 5px;
          bottom: 5px;
        }
      }
    }
    .notice {
      height: 28px;
      line-height: 28px;
      color: #fff;
      padding: 0 22px 0 12px;
      box-sizing: border-box;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 10px;
      background: rgba(7, 17, 27, 0.2);
      position: relative;
      .ico {
        display: inline-block;
        width: 22px;
        height: 12px;
        .bg-img("bulletin");
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .content {
        vertical-align: top;
        margin: 0 4px;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        right: 5px;
        top: 9px;
      }
    }
    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      filter: blur(10px);
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
  .sticky-footer {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    color: #fff;
    font-size: 12px;
    background: rgba(7, 17, 27, 0.8);
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    .content {
      flex: 1;
      margin: 64px auto;
      width: 80%;
      h1 {
        font-size: 16px;
        font-weight: 700;
        text-align: center;
      }
      .text {
        font-weight: 700;
        font-size: 14px;
        display: flex;
        margin: 28px auto 24px;
        span {
          padding: 0 12px;
        }
        &:before,
        &:after {
          content: "";
          flex: 1;
          display: block;
          height: 1px;
          background-color: #fff;
          position: relative;
          top: 7px;
        }
      }
      .reducedInfo {
        padding: 0 12px;
        margin-bottom: 12px;
        .icon {
          display: inline-block;
          vertical-align: text-bottom;
          margin-right: 4px;
          width: 16px;
          height: 16px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
          &.type-0 {
            .bg-img("decrease_2");
          }
          &.type-1 {
            .bg-img("discount_2");
          }
          &.type-2 {
            .bg-img("guarantee_2");
          }
          &.type-3 {
            .bg-img("invoice_2");
          }
          &.type-4 {
            .bg-img("special_2");
          }
        }
      }
      .introduce {
        padding: 0 12px;
        line-height: 24px;
      }
    }
    .close {
      flex: 0;
      font-size: 32px;
      text-align: center;
      margin-bottom: 32px;
    }
  }
}
</style>
