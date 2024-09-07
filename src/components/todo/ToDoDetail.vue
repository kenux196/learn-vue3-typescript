<template>
  <p>할 일 id: {{ todoId }}</p>
  <button @click="todoId++">다음 할 일 가져오기</button>
  <p v-if="!todoData">로딩...</p>
  <pre v-else>{{ todoData }}</pre>
</template>

<script setup lang="ts">
import JsonplaceHolderApiService from '@/api/JsonplaceHolderApiService';
import { onMounted, ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  try {
    const res = await JsonplaceHolderApiService.fetchTodoById(todoId.value);
    todoData.value = res.data;
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  fetchData();
});

watch(todoId, (newTodoId) => {
  console.log('🚀 ~ watch ~ newTodoId:', newTodoId);
  fetchData();
});
</script>
