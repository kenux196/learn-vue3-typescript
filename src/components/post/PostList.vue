<template>
  <table>
    <thead>
      <th>#</th>
      <th>title</th>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>
          <a @click="showPostContent(post.id)">{{ post.id }}</a>
        </td>
        <td>
          <a>
            {{ post.title }}
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const baseUrl = 'http://jsonplaceholder.typicode.com/posts';

const posts = ref<Array<Post>>();
const post = ref<Post>();

async function fetchPostData() {
  try {
    const res = await axios.get(baseUrl);
    posts.value = res.data;
  } catch (error) {
    console.error(error);
  }
}

const showPostContent = async (id: number) => {
  const res = await axios.get(baseUrl + '/' + id);
  post.value = res.data;
  alert(post.value?.body);
};

onMounted(() => {
  fetchPostData();
});
</script>
