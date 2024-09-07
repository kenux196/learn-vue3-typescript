<template>
  <dialog :open="isOpen">
    <article style="width: 100%">
      <h3>할 일</h3>
      <p>{{ todoData?.title }}</p>
      <p>{{ todoData?.completed ? '완료' : '미완료' }}</p>
      <input type="checkbox" :value="todoData?.completed" />
      <footer>
        <a href="#confirm" role="button" @click="close()">확인</a>
      </footer>
    </article>
  </dialog>
</template>

<script setup lang="ts">
import type { TodoItem } from '@/models/TodoTypes';
import { ref } from 'vue';

const todoData = ref<TodoItem>();
const isOpen = ref(false);

function close() {
  isOpen.value = false;
}

function open(data: TodoItem) {
  console.log('modal open');
  isOpen.value = true;
  todoData.value = data;
  console.log(data);
}

defineExpose({
  open,
});
</script>
