<template>
  <div class="grid gap-4 grid-cols-3">
    <div>{{ currentDateTime }}</div>
    <div>
      Released under <span class="font-bold">MIT License</span>.
      <div>Copyright @ 2024 kenux.yun</div>
    </div>
    <LanguageSwitcher />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LanguageSwitcher from '@/layouts/components/LanguageSwitcher.vue';

const currentDateTime = ref(new Date().toLocaleString());
</script>
