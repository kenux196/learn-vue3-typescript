const chartRoutes = {
  path: '/chart',
  component: () => import('@/pages/charjs-sample/ChartMainPage.vue'),
  children: [
    {
      path: 'echart',
      component: () => import('@/pages/charjs-sample/EchartPage1.vue'),
    },
  ],
};

export default chartRoutes;
