<template>
  <div class="q-pa-md">
    <div class="q-guttoer-y-md">
      <q-tabs v-model="tab" inline-label align="left" class="bg-primary text-white shadow-2">
        <q-route-tab name="mails" icon="mail" label="메일" to="/nested-route/sub-page1" />
        <q-route-tab name="alarms" icon="alarm" label="알람" to="/nested-route/sub-page2" />
        <q-route-tab name="movies" icon="movie" label="영화" to="/nested-route/sub-page3" />
        <q-route-tab name="photo" icon="photo" label="사진" to="/nested-route/sub-page4" />
        <q-route-tab name="book" icon="book" label="책" to="/nested-route/books" />
      </q-tabs>
    </div>
    <RouterView class="q-pa-md" />
  </div>
  <div class="q-pa-md">중첩 라우터 연습 페이지</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('mails');
</script>

<style lang="scss" scoped></style>
