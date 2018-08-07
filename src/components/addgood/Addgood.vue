<template>
  <div class="addgood">
    <div class="decrease" v-show='food.count > 0' @click="decrease">
      <i class="icon-remove_circle_outline"></i>
    </div>
    <div class="num" v-show='food.count > 0'>{{food.count}}</div>
    <div class="add icon-add_circle" @click="add" ref="addfoodposition"></div>
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
     this.food.count++ ;
     this.$emit("addposition", this.$refs.addfoodposition)  // 把添加的这个元素传出去 好知道小球的具体位置
    }
  },
  mounted() {
    // console.log(this.$refs.addfoodposition)
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
