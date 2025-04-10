<template>
  <div>
    <h1>Hello Emit Test</h1>
    <input type="text" v-model="message" />
    <button @click="sendToChild">send to child {{ count }}</button>
    <div>지금 시간은 ? {{ afterMessage }}</div>
    <button @click="runAction">run some action</button>
  </div>
  <EmitTestComponent @hello="say"></EmitTestComponent>
  <div class="logo-wrapper">
    <input type="file" @change="onFileChange" accept="image/*" />
    <div class="logo-box">
      <img v-if="logoUrl" :src="logoUrl" alt="Uploaded Logo" class="logo-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EmitTestComponent from '@/components/EmitTestComponent.vue';
import { runSomeAction } from '@/utils/emit-test';
import { provide, ref } from 'vue';

const message = ref('good');
const count = ref(0);
const pMessage = ref('');
const afterMessage = ref('');

function say(msg: string) {
  console.log(`recieved message: ${msg}`);
  message.value = msg;
}

function sendToChild() {
  count.value++;
  pMessage.value = count.value + '번 메시지입니다.';
}

function runAction() {
  runSomeAction(afterRunner);
}

function afterRunner() {
  console.log('afterRunner');
  afterMessage.value = new Date().toISOString();
}

provide('parent-message', pMessage);

const logoUrl = ref<string | null>(null);

const onFileChange = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const file: File | undefined = target.files?.[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      logoUrl.value = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
.logo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  margin-top: 30px;
}

.logo-box {
  width: 220px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  overflow: hidden;
  position: relative;
}

.logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
