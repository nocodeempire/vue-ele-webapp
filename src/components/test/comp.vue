<template>
  <div @click="add">
    {{array.age}}
  </div>
</template>
<script>
  export default {
    props: {
      array: Object
    },
    methods: {
      add() {
        this.$set(this.array, "age", 1)
      }
    }
  }
</script>
<style>

</style>
