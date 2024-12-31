<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">읽을 책</h2>
    <div class="grid grid-cols-4 gap-4">
      <div class="border border-gray-300 p-4 rounded-lg" v-for="book in booksToRead" :key="book.id">
        <img :src="book.coverUrl" alt="Book cover" class="w-full h-auto mb-2" />
        <h3 class="text-xl font-semibold">{{ book.title }}</h3>
        <p class="text-gray-500">{{ book.author }}</p>
        <p class="text-gray-400">{{ book.category }}</p>
        <p class="text-gray-400">{{ book.summary }}</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4">읽은 책</h2>
    <div class="grid grid-cols-4 gap-4">
      <div class="border border-gray-300 p-4 rounded-lg" v-for="book in booksRead" :key="book.id">
        <img :src="book.coverUrl" alt="Book cover" class="w-full h-auto mb-2" />
        <h3 class="text-xl font-semibold">{{ book.title }}</h3>
        <p class="text-gray-500">{{ book.author }}</p>
        <p class="text-gray-400">{{ book.category }}</p>
        <p class="text-gray-400">{{ book.summary }}</p>
        <p class="text-green-500">완독</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  coverUrl: string;
  summary: string;
  status: boolean;
}

const books = ref<Book[]>([
  {
    id: 1,
    title: '자기혁명',
    author: '김미경',
    category: '자기계발',
    coverUrl: 'https://example.com/cover1.jpg',
    summary: '자기계발을 위한 혁신적인 방법론.',
    status: false,
  },
  {
    id: 2,
    title: '미래의 부',
    author: '유시민',
    category: '경제',
    coverUrl: 'https://example.com/cover2.jpg',
    summary: '미래 경제에 대한 통찰.',
    status: true,
  },
  {
    id: 3,
    title: '나의 라임 오렌지나무',
    author: '조제 마우루 지 바스콘셀로스',
    category: '소설',
    coverUrl: 'https://example.com/cover3.jpg',
    summary: '어린 소년의 성장 이야기.',
    status: false,
  },
  {
    id: 4,
    title: '아몬드',
    author: '손원평',
    category: '소설',
    coverUrl: 'https://example.com/cover4.jpg',
    summary: '감정을 느끼지 못하는 소년의 이야기.',
    status: true,
  },
  {
    id: 5,
    title: '지적 대화를 위한 넓고 얕은 지식',
    author: '채사장',
    category: '교양',
    coverUrl: 'https://example.com/cover5.jpg',
    summary: '다양한 분야의 지식을 쉽게 설명.',
    status: false,
  },
  {
    id: 6,
    title: '멋진 신세계',
    author: '올더스 헉슬리',
    category: '소설',
    coverUrl: 'https://example.com/cover6.jpg',
    summary: '디스토피아 소설의 고전.',
    status: true,
  },
  {
    id: 7,
    title: '설득의 심리학',
    author: '로버트 치알디니',
    category: '심리학',
    coverUrl: 'https://example.com/cover7.jpg',
    summary: '설득의 원리와 기술.',
    status: false,
  },
  {
    id: 8,
    title: '호모 데우스',
    author: '유발 하라리',
    category: '역사',
    coverUrl: 'https://example.com/cover8.jpg',
    summary: '미래 인류의 모습.',
    status: true,
  },
  {
    id: 9,
    title: '사피엔스',
    author: '유발 하라리',
    category: '역사',
    coverUrl: 'https://example.com/cover9.jpg',
    summary: '인류의 역사.',
    status: false,
  },
  {
    id: 10,
    title: '코스모스',
    author: '칼 세이건',
    category: '과학',
    coverUrl: 'https://example.com/cover10.jpg',
    summary: '우주에 대한 탐구.',
    status: true,
  },
  {
    id: 11,
    title: '이기적 유전자',
    author: '리처드 도킨스',
    category: '과학',
    coverUrl: 'https://example.com/cover11.jpg',
    summary: '진화론의 새로운 시각.',
    status: false,
  },
  {
    id: 12,
    title: '총, 균, 쇠',
    author: '재레드 다이아몬드',
    category: '역사',
    coverUrl: 'https://example.com/cover12.jpg',
    summary: '인류 문명의 발전사.',
    status: true,
  },
  {
    id: 13,
    title: '나미야 잡화점의 기적',
    author: '히가시노 게이고',
    category: '소설',
    coverUrl: 'https://example.com/cover13.jpg',
    summary: '기적을 일으키는 잡화점 이야기.',
    status: false,
  },
  {
    id: 14,
    title: '데미안',
    author: '헤르만 헤세',
    category: '소설',
    coverUrl: 'https://example.com/cover14.jpg',
    summary: '자아를 찾는 여정.',
    status: true,
  },
  {
    id: 15,
    title: '1984',
    author: '조지 오웰',
    category: '소설',
    coverUrl: 'https://example.com/cover15.jpg',
    summary: '전체주의 사회의 디스토피아.',
    status: false,
  },
  {
    id: 16,
    title: '브레이브 뉴 월드',
    author: '올더스 헉슬리',
    category: '소설',
    coverUrl: 'https://example.com/cover16.jpg',
    summary: '미래 사회의 디스토피아.',
    status: true,
  },
  {
    id: 17,
    title: '파친코',
    author: '이민진',
    category: '소설',
    coverUrl: 'https://example.com/cover17.jpg',
    summary: '한국 이민자 가족의 이야기.',
    status: false,
  },
  {
    id: 18,
    title: '채식주의자',
    author: '한강',
    category: '소설',
    coverUrl: 'https://example.com/cover18.jpg',
    summary: '채식주의자가 된 여성의 이야기.',
    status: true,
  },
  {
    id: 19,
    title: '82년생 김지영',
    author: '조남주',
    category: '소설',
    coverUrl: 'https://example.com/cover19.jpg',
    summary: '한국 여성의 삶을 그린 소설.',
    status: false,
  },
  {
    id: 20,
    title: '어린 왕자',
    author: '앙투안 드 생텍쥐페리',
    category: '소설',
    coverUrl: 'https://example.com/cover20.jpg',
    summary: '어린 왕자의 모험 이야기.',
    status: true,
  },
]);

const booksToRead = computed(() => books.value.filter((book) => !book.status));
const booksRead = computed(() => books.value.filter((book) => book.status));
</script>
