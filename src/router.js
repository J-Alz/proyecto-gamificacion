import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component: Login,
    },
    {
      path:"/difficulty",
      name:"difficulty",
      component:()=> import("./views/Difficulty.vue")
    },
    {
      path:"/board",
      name:"board",
      component:() => import("./views/Board.vue")
    }
  ]
})

export default router
