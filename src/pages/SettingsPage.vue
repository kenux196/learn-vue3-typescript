<template>
  <div>Settings Page</div>
  <div class="flex q-mx-md">
    <div class="text-h6 q-mr-md" style="width: 100px">region</div>
    <q-select v-model="region" :options="regionOptions" dense style="width: 400px" />
  </div>
  <!-- <div class="flex q-mx-md">
    <div class="text-h6 q-mr-md" style="width: 100px">관리국가</div>
    <q-select v-model="country" :options="countryOptions" dense style="width: 400px">
      <template v-slot:append>
        <q-icon name="close" @click.stop.prevent="model = ''" class="cursor-pointer" />
      </template>
    </q-select>
  </div> -->
  <div>
    <li v-for="post in posts" :key="post.id">
      <span>{{ post.id }} {{ post.title }}</span>
    </li>
  </div>
  <div>
    <li v-for="comment in comments" :key="comment.id">
      <span>{{ comment.id }} {{ comment.postId }} {{ comment.email }}</span>
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import JsonplaceHolderApiService from '@/api/JsonplaceHolderApiService';
import type { Comment, Post } from '@/models/PostTypes';

const region = ref('Asia/Pacific - KR');
const regionOptions = ['Asia/Pacific - KR', 'Europe - EU', 'North America/ Latin America - US'];

// const country = ref('한국');
// const countryOptions = ['한국', '베트남', '태국', '필리핀', '인도네시아', '독일', '프랑스'];

const posts = ref(new Array<Post>());
const comments = ref(new Array<Comment>());

async function getPost() {
  try {
    const res = await JsonplaceHolderApiService.fetchPosts();
    console.log('🚀 ~ getPost ~ data:', res.data);
    posts.value = res.data;
  } catch (error) {
    console.error(error);
  }
}

async function getComment() {
  try {
    const res = await JsonplaceHolderApiService.fetchComments();
    comments.value = res.data;
    console.log('🚀 ~ getComment ~ comments.value:', comments.value);
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  getPost();
  getComment();
});
</script>
