<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">할일 목록</h1>
    <div class="mb-4">
      <input v-model="newTask" type="text" placeholder="할일 추가" class="border p-2 mr-2" />
      <input v-model="newTaskDate" type="date" class="border p-2 mr-2" />
      <input v-model="newTaskTime" type="time" class="border p-2 mr-2" />
      <button @click="addTask" class="bg-blue-500 text-white p-2 rounded">추가</button>
    </div>
    <h2 class="text-xl font-semibold mb-2">할일</h2>
    <ul>
      <li v-for="task in incompleteTasks" :key="task.id" class="flex items-center mb-2">
        <span :class="{ 'line-through': task.completed }"
          >{{ task.name }} ({{ task.date }} {{ task.time || '' }})</span
        >
        <button @click="completeTask(task)" class="bg-green-500 text-white p-2 ml-2 rounded">
          {{ task.completed ? '취소' : '완료' }}
        </button>
      </li>
    </ul>
    <h2 class="text-xl font-semibold mt-4 mb-2">완료된 항목</h2>
    <ul>
      <li v-for="task in completedTasks" :key="task.id" class="mb-2">
        <span>{{ task.name }} ({{ task.date }} {{ task.time || '' }})</span>
        <button @click="completeTask(task)" class="bg-red-500 text-white p-2 ml-2 rounded">
          취소
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Task {
  id: number;
  name: string;
  date: string;
  time?: string;
  completed: boolean;
}

const tasks = ref<Task[]>([]);
const newTask = ref('');
const newTaskDate = ref('');
const newTaskTime = ref('');

const addTask = () => {
  if (newTask.value && newTaskDate.value) {
    tasks.value.push({
      id: Date.now(),
      name: newTask.value,
      date: newTaskDate.value,
      time: newTaskTime.value || '',
      completed: false,
    });
    newTask.value = '';
    newTaskDate.value = '';
    newTaskTime.value = '';
  }
};

const completeTask = (task: Task) => {
  task.completed = !task.completed;
};

const incompleteTasks = computed(() => tasks.value.filter((task) => !task.completed));
const completedTasks = computed(() => tasks.value.filter((task) => task.completed));
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
button {
  border-radius: 0.375rem; /* TailwindCSS rounded-md */
}
</style>
