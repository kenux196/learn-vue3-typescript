<template>
  <div class="bg-base-200">
    <ul
      v-for="menu in mainMenuList"
      :key="menu.title"
      class="menu menu-vertical lg:menu-horizontal rounded-box"
    >
      <li>
        <a :href="menu.path"
          ><span class="material-symbols-outlined">{{ menu.icon }}</span
          >{{ menu.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// TO-DO: 아래의 링크 리스트를 pinia store에서 관리하도록 변경
const mainMenuList = [
  {
    title: 'Home',
    icon: 'home',
    path: '/',
  },
  {
    title: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    title: 'Posts',
    icon: 'article',
    path: '/posts',
  },
  {
    title: 'Settings',
    icon: 'settings',
    path: '/settings',
  },
  {
    title: '중첩된 라우팅 연습',
    icon: 'auto_awesome_mosaic',
    path: '/nested-route',
  },
  {
    title: 'Chart Test',
    icon: 'bar_chart',
    path: '/chart',
  },
  {
    title: 'Vue3 Test',
    icon: 'laptop',
    path: '/vue',
  },
  {
    title: 'Quill Test',
    icon: 'laptop',
    path: '/quill',
  },
  {
    title: '구구단 테스트',
    icon: 'toys',
    path: '/gugudan',
  },
  {
    title: 'tainwindcss 테스트',
    icon: 'responsive_layout',
    path: '/css',
  },
];
</script>
