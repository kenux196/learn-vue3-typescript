<template>
  <p class="text-3xl font-bold">Tailwindcss Playground</p>
  <div>
    <p class="text-2xl font-bold">flex: basis</p>
    <div class="flex flex-row gap-5 bg-green-200 h-40 items-center">
      <div
        class="basis-1/5 bg-orange-400 h-20 font-bold text-white rounded-full content-center text-center"
      >
        1/5
      </div>
      <div
        class="basis-1/4 bg-orange-500 h-20 font-bold text-white rounded-lg content-center text-center"
      >
        1/4
      </div>
      <div
        class="basis-1/3 bg-orange-600 h-20 font-bold text-white rounded-2xl content-center text-center"
      >
        1/3
      </div>
      <div
        class="basis-1/2 bg-orange-700 h-20 font-bold text-white rounded-3xl content-center text-center"
      >
        1/2
      </div>
    </div>
  </div>
  <p class="text-2xl font-bold my-3">flex</p>
  <div class="flex flex-wrap gap-10">
    <div
      class="flex items-center bg-slate-600 w-64 h-20 gap-5 rounded-full"
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
