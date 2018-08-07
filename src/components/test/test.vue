<template>
  <div>
    <comp :array="array"></comp>
  </div>
</template>
<script>
import comp from "./comp"
  export default {
    components: {
      comp
    },
    data(){
      return {
        array: {name: "11111",age:222}  // 遇到个问题 这里age不加 直接在组件中this.$set不行,做不到实时更新
      }
    }
  }
</script>
<style>

</style>
