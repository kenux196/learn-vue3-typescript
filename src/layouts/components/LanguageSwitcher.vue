<template>
  <div>언어 선택기</div>
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
