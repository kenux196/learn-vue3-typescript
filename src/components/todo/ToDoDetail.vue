<template>
  <p>할 일 id: {{ todoId }}</p>
  <button @click="incrementTodoId">다음 할 일 가져오기</button>
  <p v-if="!todoData && !error">로딩...</p>
  <p v-if="error">에러 발생: {{ error }}</p>
  <pre v-else>{{ todoData }}</pre>
</template>

<script setup lang="ts">
import JsonplaceHolderApiService from '@/api/JsonplaceHolderApiService';
import { onMounted, ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref(null);
const error = ref<string | null>(null);

async function fetchData() {
  todoData.value = null;
  error.value = null;
  try {
    const res = await JsonplaceHolderApiService.fetchTodoById(todoId.value);
    todoData.value = res.data;
  } catch (e) {
    console.error(e);
    error.value = '데이터를 불러오는 중 에러가 발생했습니다.';
  }
}

function incrementTodoId() {
  todoId.value++;
}

onMounted(() => {
  fetchData();
});

watch(todoId, (newTodoId) => {
  console.log('🚀 ~ watch ~ newTodoId:', newTodoId);
  fetchData();
});
</script>
