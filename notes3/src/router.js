import { createRouter, createWebHistory } from 'vue-router'

import FormScreen from './components/FormScreen.vue'
import DetailScreen from './components/DetailScreen.vue'
import NotFound from './components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/form' },
    { path: '/form', component: FormScreen, name: 'form' },
    { path: '/detail', component: DetailScreen },
    { path: '/detail/:name', component: DetailScreen, props: true },
    { path: '/:notFound(.*)', component: NotFound, props: true }
  ]
});

export default router;
