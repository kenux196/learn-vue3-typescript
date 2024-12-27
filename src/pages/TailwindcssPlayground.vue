<template>
  <p class="text-3xl font-bold">Tailwindcss Playground</p>
  <div>
    <p class="text-2xl font-bold">columns</p>
    <div class="colmuns-3 flex gap-5">
      <div class="bg-gray-200 p-4 w-10">1</div>
      <div class="bg-gray-300 p-4 w-20">2</div>
      <div class="bg-gray-400 p-4 w-32">3</div>
    </div>
  </div>
  <p class="text-2xl font-bold my-3">flex</p>
  <div class="flex flex-wrap gap-10">
    <div
      class="flex items-center bg-slate-900 w-64 h-20 gap-5 rounded-full"
      v-for="i in 10"
      :key="i"
    >
      <img
        src="https://img9.yna.co.kr/etc/inner/EN/2022/06/07/AEN20220607007800315_04_i_P4.jpg"
        class="w-24 h-24 rounded-full"
        alt="아이유"
      />
      <div>
        <p class="font-bold text-white">아이유</p>
        <p class="text-white">Singer</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
