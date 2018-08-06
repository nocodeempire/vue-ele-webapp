<template>
  <div id="app">
    <v-head></v-head>
    <div class="tapList border-1px">
      <router-link to="/goods" class='tap'>商品</router-link>
      <router-link to="/ratings" class='tap'>评论</router-link>
      <router-link to="/seller" class='tap'>商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from "@/components/head/Head";
export default {
  name: "eleme",
  data() {
    return {
    };
  },
  components: {
    "v-head": Head
  },
  created() {

  },
  computed: {

  }
};
</script>

<style  lang='less'>
@import "./assets/css/minin.less";
.tapList {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  .border-1px(#ccc);
  .tap {
    flex: 1;
    text-align: center;
    color: #4d555d;
  }
  .router-link-active {
    color: #f01414;
  }
}
</style>
