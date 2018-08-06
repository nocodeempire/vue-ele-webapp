<template>
  <div id="app">
    <v-head></v-head>
    <div class="tapList border-1px">
      <router-link to="/goods" class='tap'>商品</router-link>
      <router-link to="/ratings" class='tap'>评论</router-link>
      <router-link to="/seller" class='tap'>商家</router-link>
    </div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
<<<<<<< HEAD
import Head from "@/components/head/Head";
=======
import Head from '@/components/head/Head'
import foot from '@/components/foot/Foot'
>>>>>>> d5e7630f1ae987b3b672b392066233a71fa5b658
export default {
  name: "eleme",
  data() {
    return {
    };
  },
  components: {
<<<<<<< HEAD
    "v-head": Head
  },
  created() {

  },
  computed: {

=======
    'v-head': Head,
    foot
>>>>>>> d5e7630f1ae987b3b672b392066233a71fa5b658
  }
};
</script>

<style  lang='less'>
<<<<<<< HEAD
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
=======
  @import './assets/css/minin.less';
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
>>>>>>> d5e7630f1ae987b3b672b392066233a71fa5b658
  }
  .router-link-active {
    color: #f01414;
  }
}
</style>
