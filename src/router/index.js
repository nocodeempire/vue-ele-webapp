import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/Goods'
import Seller from '@/components/seller/Seller'
import Ratings from '@/components/ratings/Ratings'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings,
      // meta:{ requireAuth: true }  // 需要验证才能看到的页面
    }
  ]
})
// const loggedIn = function() {
//   prompt("确认登录么?", "admin")
// }
// router.beforeEach((to, from, next) => {
//   if(to.matched.some(ele => ele.meta.requireAuth)) {
//     if(loggedIn() !== "admin") {
//       next({
//         redirect: "/"
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
//   console.log('用户从 ' + from.fullPath + " 进入到了" + to.fullPath )
//   next()
// })

export default router
