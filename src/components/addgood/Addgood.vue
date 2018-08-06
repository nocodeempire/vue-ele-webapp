<template>
  <div class="addgood">
    <div class="decrease" v-show="food.count > 0" @click="decrease">
      <i class="icon-remove_circle_outline"></i>
    </div>
    <div class="num" v-show="food.count > 0">{{food.count}}</div>
    <div class="add icon-add_circle" @click="add"></div>
  </div>
</template>
<script>
export default {
  props: {
    food: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    decrease() {
      this.food.count--;
    },
    add() {
      // if (!this.food.count) {
      //   // 刚进来这个字段没有 对象中新增的字段需要set一下
      //   this.$set(this.food, "count", 0);
      // }
     this.food.count++ ;
     console.log(this.food.count)
    }
  },
  created() {
    // console.log(this.food)
  }
};
</script>
<style lang='less'>
.addgood {
  div {
    display: inline-block;
  }
  .decrease,
  .add {
    color: #00a0dc;
    font-size: 24px;
    line-height: 24px;
    vertical-align: middle;
    padding: 6px;
  }
}
</style>
