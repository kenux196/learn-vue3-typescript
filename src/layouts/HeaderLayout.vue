<template>
  <div>
    <div>header area</div>
    <div>nav</div>
  </div>
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
