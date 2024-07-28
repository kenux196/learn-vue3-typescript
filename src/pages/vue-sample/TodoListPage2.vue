<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"
      />
    </header>
  </section>
  <section class="main" v-show="todos.length">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="remaining === 0"
      @change="toggleAll"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        v-for="todo in filteredTodos"
        class="todo"
        :key="todo.id"
        :class="{ completed: todo.completed, editing: todo === editedTodo }"
      >
        <div class="view">
          <input class="toggle" type="checkbox" v-model="todo.completed" />
          <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
          <span class="destory" @click="removeTodo(todo)">삭제</span>
        </div>
        <input
          v-if="todo === editedTodo"
          class="edit"
          type="text"
          v-model="todo.title"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.escape="cancelEdit(todo)"
        />
      </li>
    </ul>
  </section>
  <footer class="footer" v-show="todos.length">
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      <span>{{ remaining === 1 ? ' item' : ' items' }} left</span>
    </span>
    <ul class="filters">
      <li>
        <a href="#/all" :class="{ selected: visibility === 'all' }">All</a>
      </li>
      <li>
        <a href="#/active" :class="{ selected: visibility === 'active' }">Active</a>
      </li>
      <li>
        <a href="#/completed" :class="{ selected: visibility === 'completed' }">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="removeCompleted" v-show="todos.length">
      Clear completed
    </button>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect, type Ref } from 'vue';

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

const STORAGE_KEY = 'vue-todomvc';
const filters = {
  all: (todos: Array<TODO>) => todos,
  active: (todos: Array<TODO>) => todos.filter((todo) => !todo.completed),
  completed: (todos: Array<TODO>) => todos.filter((todo) => todo.completed),
};

// state

const todos: Ref<Array<TODO>> = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
const visibility = ref('all');
const editedTodo: Ref<TODO | undefined> = ref();

// derived state
const filteredTodos = computed(() => filters.all(todos.value));
const remaining = computed(() => filters.active(todos.value).length);

// handle routing
window.addEventListener('hashchange', onhashchange);
onhashchange();

// persist state
watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
});

function toggleAll(e: Event) {
  todos.value.forEach((todo) => {
    todo.completed = (e.target as HTMLInputElement).checked;
  });
}

function addTodo(e: Event) {
  const value = (e.target as HTMLInputElement).value.trim();
  if (value) {
    todos.value.push({
      id: Date.now(),
      title: value,
      completed: false,
    });
    (e.target as HTMLInputElement).value = '';
  }
}

function removeTodo(todo: TODO) {
  todos.value.splice(todos.value.indexOf(todo), 1);
}

let beforeEditCache = '';
function editTodo(todo: TODO) {
  beforeEditCache = todo.title;
  editedTodo.value = todo;
}

function cancelEdit(todo: TODO) {
  editedTodo.value = undefined;
  todo.title = beforeEditCache;
}

function doneEdit(todo: TODO) {
  if (editedTodo.value) {
    editedTodo.value = undefined;
    todo.title = todo.title.trim();
    if (!todo.title) removeTodo(todo);
  }
}

function removeCompleted() {
  todos.value = filters.active(todos.value);
}

function onhashchange() {
  // const route = window.location.hash.replace(/#\/?/, '');
  // if (filters[route]) {
  //   visibility.value = route;
  // } else {
  //   window.location.hash = '';
  //   visibility.value = 'all';
  // }
}
</script>

<style scoped></style>
