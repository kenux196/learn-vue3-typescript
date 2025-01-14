const chartRoutes = {
  path: '/chart',
  component: () => import('@/pages/chart-sample/ChartMainPage.vue'),
  children: [
    {
      path: 'echart',
      component: () => import('@/pages/chart-sample/EchartPieSample.vue'),
    },
  ],
};

export default chartRoutes;
