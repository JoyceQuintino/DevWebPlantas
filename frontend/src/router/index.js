import Vue from 'vue';
import Router from 'vue-router';
import Mymodal from '@/components/Mymodal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mymodal',
      component: Mymodal,
    },
  ],
});
