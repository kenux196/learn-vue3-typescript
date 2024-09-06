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
import { $api } from '@/api/api';
import { ref, onMounted } from 'vue';
import type Post from '@/models/Post';
import type Comment from '@/models/Comment';
import JsonplaceHolderApiService from '@/api/JsonplaceHolderApiService';

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

  // $api.jsonplaceholder
  //   .fetchPosts()
  //   .then((res) => {
  //     console.log('getPosts() success', res.data);
  //     posts.value = res.data;
  //   })
  //   .catch((res) => {
  //     console.log('failed', res);
  //   });
}

function getComment() {
  $api.jsonplaceholder
    .fetchComments()
    .then((res) => {
      console.log('getComments() success', res.data);
      comments.value = res.data;
      console.log('🚀 ~ .then ~ comments.value:', comments.value);
    })
    .catch((res) => {
      console.log('failed', res);
    });
}

onMounted(() => {
  getPost();
  getComment();
});
</script>
