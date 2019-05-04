import Vue from 'vue';
import Router from 'vue-router';
import ForecastView from '@/views/ForeCastView.vue';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '',
      name: 'forecast',
      compopnent: ForecastView
    }
  ]
});