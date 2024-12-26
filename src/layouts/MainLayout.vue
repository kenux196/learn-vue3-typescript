<template>
  <Header />
  <MainMenu />
  <div class="my-10">
    <RouterView />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/layouts/HeaderLayout.vue';
import Footer from '@/layouts/FooterLayout.vue';
import MainMenu from '@/layouts/MainMenuLayout.vue';

const menuOpen = ref(true);

function toggleMainMenuDrawer() {
  menuOpen.value = !menuOpen.value;
  console.log(menuOpen.value);
}
</script>
