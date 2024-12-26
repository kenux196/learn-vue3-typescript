<template>
  <div class="text-3xl font-bold my-10">KENUX Play Ground</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const darkMode = ref(false);

onMounted(() => {
  darkMode.value = new Date().getHours() >= 18;
  toggleDarkMode();
});

function toggleDarkMode() {
  console.log('toggleDarkMode');
}
</script>
