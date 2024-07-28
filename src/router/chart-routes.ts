const chartRoutes = {
  path: '/chart',
  component: () => import('@/pages/chart-sample/ChartMainPage.vue'),
  children: [
    {
      path: 'echart',
      component: () => import('@/pages/chart-sample/EchartPage1.vue'),
    },
  ],
};

export default chartRoutes;
