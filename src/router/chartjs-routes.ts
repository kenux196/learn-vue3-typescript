const chartjsRoutes = {
  path: '/chart-js',
  component: () => import('@/pages/charjs-sample/ChartJsMainPage.vue'),
  children: [
    {
      path: 'chart1',
      component: () => import('@/pages/charjs-sample/ChartPage1.vue'),
    },
    {
      path: 'chart2',
      component: () => import('@/pages/charjs-sample/ChartPage2.vue'),
    },
    {
      path: 'echart',
      component: () => import('@/pages/charjs-sample/EchartPage1.vue')
    }
  ],
};

export default chartjsRoutes;
