import chartjsRoutes from './chart-routes';
import nestedRoutes from './nested-routes';
import quillRoutes from './quill-routes';
import vueRoutes from './vue-routes';

const routes = [
  { path: '/', component: () => import('@/pages/LandingPage.vue') },
  {
    path: '/posts',
    component: () => import('@/pages/PostsPage.vue'),
  },
  { path: '/dashboard', component: () => import('@/pages/DashboardPage.vue') },
  {
    path: '/settings',
    component: () => import('@/pages/SettingsPage.vue'),
  },
  {
    path: '/gugudan',
    component: () => import('@/pages/GugudanPage.vue'),
  },
  nestedRoutes,
  chartjsRoutes,
  vueRoutes,
  quillRoutes,
  {
    path: '/css',
    component: () => import('@/pages/TailwindcssPlayground.vue'),
  },
  {
    path: '/chatgpt',
    component: () => import('@/pages/chatgptPage.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
];

export default routes;
