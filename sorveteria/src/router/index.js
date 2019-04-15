/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Mydashboard from '@/components/Mydashboard';
import Mylogin from '@/components/Mylogin';
<<<<<<< HEAD
import Mymodalremessa from '@/components/Mymodalremessa';
import Mymodallocal from '@/components/Mymodallocal';
=======
//import Mymodal from '@/components/Mymodal';
>>>>>>> 5795c9f24d8be4f29b1c5bd9f925e6732640559a
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
    {
      path: '/modalremessa',
      name: 'modalremessa',
      component: Mymodalremessa
    },
    {
      path: '/modallocal',
      name: 'modallocal',
      component: Mymodallocal
    }
  ],
});
