<template>
  <div>
    <table>
      <thead>
        <th>#</th>
        <th>title</th>
        <th>complete</th>
        <th>userId</th>
      </thead>
      <tbody>
        <tr v-for="todoItem in todoList" :key="todoItem.id">
          <td>
            <a href="#" @click="openDetail(todoItem.id)">{{ todoItem.id }}</a>
          </td>
          <td>
            <a href="#" @click="openDetail(todoItem.id)">
              {{ todoItem.title }}
            </a>
          </td>
          <td><input type="checkbox" :checked="todoItem.completed" /></td>
          <td>{{ todoItem.userId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <ToDoDetailModal ref="todoDetailModal" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ToDoDetailModal from './ToDoDetailModal.vue';
import JsonplaceHolderApiService from '@/api/JsonplaceHolderApiService';
import type { TodoItem } from '@/models/TodoTypes';

const todoDetailModal = ref<InstanceType<typeof ToDoDetailModal> | null>(null);
const todoList = ref<TodoItem[]>();

async function fetchData() {
  try {
    const res = await JsonplaceHolderApiService.fetchTodos();
    todoList.value = res.data;
    console.log('🚀 ~ fetchData ~ res.data:', res.data);
  } catch (e) {
    console.error(e);
  }
}

async function openDetail(id: number) {
  try {
    console.log('open detail : ' + id);
    const res = await JsonplaceHolderApiService.fetchTodoById(id);
    todoDetailModal.value?.open(res.data);
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  fetchData();
});
</script>
