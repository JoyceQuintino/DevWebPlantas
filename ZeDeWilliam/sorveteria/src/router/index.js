import Vue from 'vue';
import Router from 'vue-router';
import Mydashboard from '@/components/Mydashboard'

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
    }
  ],
});
