<template>
  <select v-model="locale" class="select select-bordered select-sm w-full max-w-xs">
    <option v-for="option in localeOptions" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// const { locale } = useI18n({
//   useScope: 'global',
// });
const { availableLocales, locale } = useI18n();
console.log('가능한 로케일 : ' + availableLocales);
const localeOptions = [
  {
    value: 'ko-KR',
    label: '한국어',
  },
  {
    value: 'en-US',
    label: 'English',
  },
];
</script>
