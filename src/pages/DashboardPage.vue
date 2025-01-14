<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">읽을 책</h2>
    <div class="grid grid-cols-4 gap-4">
      <div
        class="border border-gray-300 p-4 rounded-lg"
        v-for="book in bookListToRead"
        :key="book.id"
      >
        <img :src="book.coverUrl" alt="Book cover" class="w-full h-auto mb-2" />
        <h3 class="text-xl font-semibold">{{ book.title }}</h3>
        <p class="text-gray-500">{{ book.author }}</p>
        <p class="text-gray-400">{{ book.category }}</p>
        <p class="text-gray-400">{{ book.summary }}</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4">읽은 책</h2>
    <div class="grid grid-cols-4 gap-4">
      <div
        class="border border-gray-300 p-4 rounded-lg"
        v-for="book in bookListRead"
        :key="book.id"
      >
        <img :src="book.coverUrl" alt="Book cover" class="w-full h-auto mb-2" />
        <h3 class="text-xl font-semibold">{{ book.title }}</h3>
        <p class="text-gray-500">{{ book.author }}</p>
        <p class="text-gray-400">{{ book.category }}</p>
        <p class="text-gray-400">{{ book.summary }}</p>
        <p class="text-green-500">완독</p>
      </div>
    </div>

    <div ref="chart" class="w-full h-96 mt-8"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import * as echarts from 'echarts';
import { books } from '@/data/books';
import type { Book } from '@/types/book';

const bookList = ref<Book[]>(books);

const bookListToRead = computed(() => bookList.value.filter((book) => !book.status));
const bookListRead = computed(() => bookList.value.filter((book) => book.status));

const chart = ref(null);

onMounted(() => {
  if (chart.value) {
    const myChart = echarts.init(chart.value);
    const option = {
      title: {
        text: '읽은 책과 읽을 책 비교',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: function (params: any) {
          return `${params[0].name}: ${params[0].value} 책`;
        },
      },
      xAxis: {
        data: ['읽을 책', '읽은 책'],
      },
      yAxis: {},
      series: [
        {
          name: '책 수',
          type: 'bar',
          data: [bookListToRead.value.length, bookListRead.value.length],
          itemStyle: {
            color: function (params: { dataIndex: number }) {
              const colorList = ['#d3d3d3', '#32cd32'];
              return colorList[params.dataIndex];
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }
});
</script>
