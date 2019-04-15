/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Mydashboard from '@/components/Mydashboard';
import Mylogin from '@/components/Mylogin';
//import Mymodal from '@/components/Mymodal';
import Mysidebar from '@/components/Mysidebar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Mydashboard
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: Mysidebar
    },
    {
      path: '/login',
      name: 'login',
      component: Mylogin
    },
    // {
    //   path: '/modal',
    //   name: 'modal',
    //   component: Mymodal
    // }
  ],
});
