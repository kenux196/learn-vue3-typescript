<template>
  <div v-for="link in linksList" :key="link.title">
    <a :href="link.link">{{ link.title }}</a>
  </div>
</template>

<script setup lang="ts">
import MainMenuItem from './components/MainMenuItem.vue';

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    title: 'Posts',
    icon: 'article',
    link: '/posts',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings',
  },
  {
    title: '중첩된 라우팅 연습',
    icon: 'auto_awesome_mosaic',
    link: '/nested-route',
  },
  {
    title: 'Quasar Samples',
    icon: 'memory',
    link: '/quasar',
  },
  {
    title: 'Chart Test',
    icon: 'bar_chart',
    link: '/chart',
  },
  {
    title: 'Vue3 Test',
    icon: 'laptop',
    link: '/vue',
  },
  {
    title: 'Quill Test',
    icon: 'laptop',
    link: '/quill',
  },
  {
    title: '구구단 테스트',
    icon: 'toys',
    link: '/gugudan',
  },
];
</script>
