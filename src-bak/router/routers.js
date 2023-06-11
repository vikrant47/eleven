import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index';

// Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/login',
    meta: { title: 'Log In', noCache: true },
    component: import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: import('@/views/features/404'),
    hidden: true
  },
  {
    path: '/401',
    component: import('@/views/features/401'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: import('@/views/features/redirect')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: import('@/modules/dashboard/views/index'),
        name: 'Dashboard',
        meta: { title: 'Home', icon: 'index', affix: true, noCache: true },
        props: true
      }, {
        path: 'models/:modelAlias/list/:list/:view',
        component: import('@/modules/list/views/index'),
        name: 'List',
        meta: { title: 'Home', icon: 'index', affix: true, noCache: true },
        props: true
      }, {
        path: '/flows/:flowId',
        component: import('@/modules/flowdesigner/views/FlowRenderer'),
        name: 'Form',
        meta: { title: 'Flow', icon: 'index', affix: true, noCache: true },
        props: true
      }, {
        path: '/models/:modelAlias/form/:formId/:recordId/:view',
        component: import('@/modules/form/views/FormRenderer'),
        name: 'Form',
        meta: { title: 'Home', icon: 'index', affix: true, noCache: true },
        props: true
      }, {
        path: 'widgets/:widgetId/render',
        component: import('@/modules/list/views/index'),
        name: 'Widget',
        meta: { title: 'Home', icon: 'index', affix: true, noCache: true },
        props: true
      }, {
        path: 'dashboards/:dashboardId/render',
        component: import('@/modules/list/views/index'),
        name: 'Dashboard',
        meta: { title: 'Home', icon: 'index', affix: true, noCache: true },
        props: true
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'center',
        component: import('@/views/system/user/center'),
        name: 'Personal center',
        meta: { title: 'Personal center' }
      }
    ]
  }
];

export default createRouter({
  // mode: 'hash',
  mode: 'history',
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
