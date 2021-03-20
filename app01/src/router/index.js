import Vue from 'vue'
import Router from 'vue-router'
import home from "@/page/home"
import accountlist from '@/page/accountlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      title: '홈' //표시할 이름
    },
    {
      path: "/accountlist",
      name: "accountlist",
      component: accountlist,
      title: '리스트'
    },
  ],
  mode: 'history'
})
