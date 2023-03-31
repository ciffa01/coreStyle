import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Color from '../views/general/Color.vue';
import Body from '../views/general/Body.vue';
import Fonts from '../views/general/Fonts.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/body",
    name: "body",
    component: Body,
  },
  {
    path: "/color",
    name: "color",
    component: Color,
  },
  {
    path: "/font",
    name: "font",
    component: Fonts,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
