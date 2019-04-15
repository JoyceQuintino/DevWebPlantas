/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Mydashboard from '@/components/Mydashboard';
import Mylogin from '@/components/Mylogin';
import Mymodalremessa from '@/components/Mymodalremessa';
import Mymodallocal from '@/components/Mymodallocal';
import Mysidebar from '@/components/Mysidebar';
import MyRemessaTable from '@/components/MyRemessaTable';

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
    {
      path: '/modalremessa',
      name: 'modalremessa',
      component: Mymodalremessa
    },
    {
      path: '/modallocal',
      name: 'modallocal',
      component: Mymodallocal
    },
    {
      path: '/remessa',
      name: 'remessa',
      component: MyRemessaTable
    }
  ],
});
