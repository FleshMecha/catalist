import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import {navigation} from '@/config/navigation';
import MainLayout from '@layouts/main_layout.vue';
import HomePage from '../views/HomePage.vue';


const app_routes = navigation.map(item => ({
  path: item.route.replace('/app', ''),
  name: item.id,
  component: item.component
}));


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/app/home'
  },
  {
    path: '/app',
    component: MainLayout,
    children: [
      ...navigation.map(item=>({
        path: item.route.replace('/app',''),
        component: item.component,
        name: item.id
      }))
    ]
  }
];

/*
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: '/home',
        name: 'Home',
        component: MainLayout,
        children: [
          {
            path: '',
            redirect: '/app/home'
          },
          ...app_routes
        ]
      }
    ]
  }
]
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
