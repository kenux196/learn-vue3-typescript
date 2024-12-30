<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">할일 목록</h1>
    <div class="mb-4">
      <input v-model="newTask" type="text" placeholder="할일 추가" class="border p-2 mr-2" />
      <input v-model="newTaskDate" type="date" class="border p-2 mr-2" />
      <input v-model="newTaskTime" type="time" class="border p-2 mr-2" />
      <button @click="addTask" class="bg-blue-500 text-white p-2 rounded">추가</button>
    </div>
    <div class="flex gap-5">
      <div class="w-1/2 pr-2 bg-gray-100 p-4 rounded">
        <h2 class="text-xl font-semibold mb-2">할 일</h2>
        <ul>
          <li v-for="task in incompleteTasks" :key="task.id" class="flex items-center mb-2">
            <input
              type="checkbox"
              @change="completeTask(task)"
              :checked="task.completed"
              class="mr-2 transform scale-150"
            />
            <span :class="{ 'line-through': task.completed }">
              {{ task.name }} ({{ task.date }} {{ task.time || '' }})
            </span>
            <button @click="deleteTask(task.id)" class="bg-blue-500 text-white p-1 ml-2 rounded">
              삭제
            </button>
          </li>
        </ul>
      </div>
      <div class="w-1/2 pl-2 bg-green-200 p-4 rounded">
        <h2 class="text-xl font-semibold mb-2">완료한 일</h2>
        <ul>
          <li v-for="task in completedTasks" :key="task.id" class="flex items-center mb-2">
            <input
              type="checkbox"
              @change="completeTask(task)"
              :checked="task.completed"
              class="mr-2 transform scale-150"
            />
            <span> {{ task.name }} ({{ task.date }} {{ task.time || '' }}) </span>
            <button @click="deleteTask(task.id)" class="bg-blue-500 text-white p-1 ml-2 rounded">
              삭제
            </button>
          </li>
        </ul>
      </div>
    </div>
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

const tasks = ref<Task[]>([
  { id: 1, name: '할일 1', date: '2023-10-01', time: '10:00', completed: false },
  { id: 2, name: '할일 2', date: '2023-10-02', time: '11:00', completed: false },
  { id: 3, name: '할일 3', date: '2023-10-03', time: '12:00', completed: false },
  { id: 4, name: '할일 4', date: '2023-10-04', time: '13:00', completed: false },
  { id: 5, name: '할일 5', date: '2023-10-05', time: '14:00', completed: false },
  { id: 6, name: '완료한 일 1', date: '2023-09-01', time: '10:00', completed: true },
  { id: 7, name: '완료한 일 2', date: '2023-09-02', time: '11:00', completed: true },
  { id: 8, name: '완료한 일 3', date: '2023-09-03', time: '12:00', completed: true },
  { id: 9, name: '완료한 일 4', date: '2023-09-04', time: '13:00', completed: true },
  { id: 10, name: '완료한 일 5', date: '2023-09-05', time: '14:00', completed: true },
]);
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

const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
button {
  border-radius: 0.375rem; /* TailwindCSS rounded-md */
}
</style>
