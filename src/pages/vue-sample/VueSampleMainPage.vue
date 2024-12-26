<template>
  <div role="tablist" class="tabs tabs-bordered mb-10">
    <a role="tab" class="tab" href="/vue/emit">Emit</a>
    <a role="tab" class="tab" href="/vue/todo-list1">Todo List 1</a>
    <a role="tab" class="tab" href="/vue/todo-list2">Todo List 2</a>
    <a role="tab" class="tab" href="/vue/store">Store</a>
    <a role="tab" class="tab" href="/vue/utils">Utils</a>
    <a role="tab" class="tab" href="/vue/login">Login</a>
    <a role="tab" class="tab" href="/vue/vue-query">Vue Query</a>
    <a role="tab" class="tab" href="/vue/i18n">Language</a>
  </div>
  <!-- <div v-for="subMenu in subMenus" :key="subMenu.id" role="tablist" class="tabs tabs-bordered">
    <a role="tab" class="tab" :href="subMenu.path">{{ subMenu.name }}</a>
  </div> -->
  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const subMenus = ref([
  { id: 1, name: 'Emit', path: '/vue/emit' },
  { id: 2, name: 'Todo List 1', path: '/vue/todo-list1' },
  { id: 3, name: 'Todo List 2', path: '/vue/todo-list2' },
  { id: 4, name: 'Store', path: '/vue/store' },
  { id: 5, name: 'Utils', path: '/vue/utils' },
  { id: 6, name: 'Login', path: '/vue/login' },
  { id: 7, name: 'Vue Query', path: '/vue/vue-query' },
  { id: 8, name: 'Language', path: '/vue/i18n' },
  { id: 9, name: 'Tab 2', path: '/vue/tab2' },
]);
</script>
