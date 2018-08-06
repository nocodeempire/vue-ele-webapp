<template>
<div class="container">
  <div class="goods">
   <div class="goodLeft" ref="wrapperLeft">
     <ul class="goodlist">
       <li class="title" :class="[index==leftIndex ? 'current' : '']" v-for="(item, index) in goods" :key="index" @click="rightScrollPosition(index)">
         <div class="goodTitle">
            <span v-if="item.type>0" class="ico" :class="'type_'+item.type"></span>
            {{item.name}}
         </div>
       </li>
     </ul>
   </div>
   <div class="goodRight" ref="wrapperRight">
     <ul class="detail">
       <li class="singleitem" v-for="(item, index) in goods" :key="index">
         <h3>{{item.name}}</h3>
         <ul class="foodsList">
           <li class="fooddetail" v-for="(food, ids) in item.foods" :key="ids">
             <img :src="food.image" alt="">
             <div class="info">
               <p class="name">{{food.name}}</p>
               <p class="desc">{{food.description}}</p>
               <div class="more">
                 <span class="sale">月售{{food.sellCount}}份</span><span class="good">好评率{{food.rating}}%</span>
               </div>
               <div class="price">
                 <span class="now">￥{{food.price}}</span>
                 <span v-if="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
               </div>
             </div>
             <div class="addgoodcomp">
               <addgood :food.sync="food"></addgood>
             </div>
           </li>
         </ul>
       </li>
     </ul>
   </div>
  </div>
  <foot :selectedPrice="selectedPrice" :minPrice="minPrice" :deliveryPrice="deliveryPrice"></foot>
</div>
</template>
<script>
import BScroll from "better-scroll";
import addgood from "@/components/addgood/Addgood";
import foot from "@/components/foot/Foot";
export default {
  data() {
    return {
      goods: [],
      scrollHeigthList: [0],
      scrollY: 0,
      scrollRight: "",
      minPrice: 0,
      deliveryPrice: 0,
      foods: []
    };
  },
  components: {
    addgood,
    foot
  },
  methods: {
    _initScroll() {
      // better-scroll插件 api文档 https://github.com/ustbhuangyi/better-scroll/blob/master/doc/zh-hans/options.md
      let scrollLeft = new BScroll(this.$refs.wrapperLeft, { click: true });
      this.scrollRight = new BScroll(this.$refs.wrapperRight, {
        probeType: 3,
        click: true
      });
      this.scrollRight.on("scroll", data => {
        this.scrollY = Math.abs(data.y);
        // console.log(this.scrollY);
      });
    },
    _getScrollHeigthList() {
      let ele = this.$refs.wrapperRight.querySelectorAll(".singleitem");
      let height = 0;
      for (let i = 0; i < ele.length; i++) {
        height += ele[i].clientHeight;
        this.scrollHeigthList.push(height);
        // console.log(this.scrollHeigthList);
      }
    },
    rightScrollPosition(index) {
      this.scrollRight.scrollToElement(
        this.$refs.wrapperRight.querySelectorAll(".singleitem")[index],
        300
      );
    },
    changefood(msg) {
      food.count = msg;
      // console.log(food);
    }
  },
  created() {
    this.axios.get("/api/goods").then(res => {
      this.goods = res.data;
      // 这个直接写在mounted下有问题,打断点发现页面还没出来就走代码了,因为axios请求来的数据,渲染不能保证花了多久,所以把nextTick写在回调函数中.这样就肯定是得到了数据后在渲染之后的事件后添加下面代码事件
      this.$nextTick(function() {
        this._getScrollHeigthList();
        this._initScroll();
      });
    });
    this.axios.get("/api/seller").then(data => {
      this.minPrice = data.data.minPrice;
      this.deliveryPrice = data.data.deliveryPrice;
    });
  },
  computed: {
    leftIndex() {
      for (let j = 0; j < this.scrollHeigthList.length; j++) {
        let now = this.scrollHeigthList[j];
        let next = this.scrollHeigthList[j + 1];
        if (this.scrollY >= now && this.scrollY < next) {
          return j;
        }
      }
    },
    selectedPrice() {
      this.goods && this.goods.forEach(good => {
        good.foods.forEach(food => {
          this.foods.push(food)
        })
      });
      // console.log(this.foods)
      return this.foods;
    }
  },
  mounted() {}
};
</script>
<style lang="less">
@import "../../assets/css/minin.less";
.goods {
  display: flex;
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  top: 174px;
  bottom: 40px;
  overflow: hidden;
  .goodLeft {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    .goodlist {
      background-color: #f3f5f7;
    }
    .title {
      padding: 0 12px;
      .goodTitle {
        height: 54px;
        width: 56px;
        display: table-cell;
        vertical-align: middle;
        .border-1px(rgba(7,17,27,0.1));
      }
      &.current {
        background-color: #fff;
        margin-top: -1px;
        position: relative;
        .goodTitle:after {
          border-bottom: none;
        }
      }
    }
    .title:last-child:after {
      border-bottom: none;
    }
    .ico {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-size: 12px 12px;
      background-repeat: no-repeat;
      &.type_0 {
        .bg-img("decrease_3");
      }
      &.type_1 {
        .bg-img("discount_3");
      }
      &.type_2 {
        .bg-img("guarantee_3");
      }
      &.type_3 {
        .bg-img("invoice_3");
      }
      &.type_4 {
        .bg-img("special_3");
      }
    }
  }
  .goodRight {
    flex: 1;
    .singleitem {
      font-size: 12px;
      color: #93999f;
      h3 {
        height: 26px;
        line-height: 26px;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
        background-color: #f3f5f7;
      }
      .foodsList {
        .fooddetail {
          display: flex;
          margin: 18px 18px 0;
          padding-bottom: 18px;
          box-sizing: border-box;
          .border-1px(rgba(7,17,27,0.1));
          position: relative;
          img {
            flex: 0 0 57px;
            width: 57px;
            height: 57px;
            margin-right: 8px;
          }
          .info {
            .name {
              font-size: 14px;
              color: #000;
              margin-bottom: 6px;
            }
            .desc {
              margin-bottom: 6px;
            }
            .more {
              margin-bottom: 6px;
            }
            .sale {
              margin-right: 12px;
            }
            .now {
              font-size: 14px;
              color: #f01414;
              margin-right: 8px;
            }
          }
          .addgoodcomp {
            position: absolute;
            right: 0;
            bottom: 6px;
          }
        }
        .fooddetail:last-child:after {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
