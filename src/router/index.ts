import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Color from '../views/general/Color.vue';
import Button from '../views/general/Button.vue';
import Fonts from '../views/general/Fonts.vue';
import Input from '../views/general/Input.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/button",
    name: "button",
    component: Button,
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
  {
    path: "/input",
    name: "input",
    component: Input,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
