<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">읽을 책</h2>
    <div class="grid grid-cols-4 gap-4">
      <div class="border border-gray-300 p-4 rounded-lg" v-for="book in booksToRead" :key="book.id">
        <img :src="book.coverUrl" alt="Book cover" class="w-full h-auto mb-2" />
        <h3 class="text-xl font-semibold">{{ book.title }}</h3>
        <p class="text-gray-500">{{ book.author }}</p>
        <p class="text-gray-400">{{ book.summary }}</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4">읽은 책</h2>
    <div class="grid grid-cols-4 gap-4">
      <div class="border border-gray-300 p-4 rounded-lg" v-for="book in booksRead" :key="book.id">
        <img :src="book.coverUrl" alt="Book cover" class="w-full h-auto mb-2" />
        <h3 class="text-xl font-semibold">{{ book.title }}</h3>
        <p class="text-gray-500">{{ book.author }}</p>
        <p class="text-gray-400">{{ book.summary }}</p>
        <p class="text-green-500">완독</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Book {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  summary: string;
}

const booksToRead = ref<Book[]>([
  {
    id: 1,
    title: '위대한 개츠비',
    author: 'F. 스콧 피츠제럴드',
    coverUrl: 'https://example.com/covers/great_gatsby.jpg',
    summary: '미국의 꿈과 사랑, 배신을 그린 소설.',
  },
  {
    id: 2,
    title: '1984',
    author: '조지 오웰',
    coverUrl: 'https://example.com/covers/1984.jpg',
    summary: '전체주의 사회를 경고하는 디스토피아 소설.',
  },
  {
    id: 3,
    title: '모비 딕',
    author: '허먼 멜빌',
    coverUrl: 'https://example.com/covers/moby_dick.jpg',
    summary: '고래 사냥을 통해 인간의 집착과 복수를 그린 소설.',
  },
  {
    id: 4,
    title: '전쟁과 평화',
    author: '레프 톨스토이',
    coverUrl: 'https://example.com/covers/war_and_peace.jpg',
    summary: '나폴레옹 전쟁 시기의 러시아 사회를 그린 대서사시.',
  },
  {
    id: 5,
    title: '호밀밭의 파수꾼',
    author: 'J.D. 샐린저',
    coverUrl: 'https://example.com/covers/catcher_in_the_rye.jpg',
    summary: '청소년의 방황과 성장을 그린 소설.',
  },
  {
    id: 6,
    title: '브레이브 뉴 월드',
    author: '올더스 헉슬리',
    coverUrl: 'https://example.com/covers/brave_new_world.jpg',
    summary: '미래 사회의 디스토피아를 그린 소설.',
  },
  {
    id: 7,
    title: '동물 농장',
    author: '조지 오웰',
    coverUrl: 'https://example.com/covers/animal_farm.jpg',
    summary: '정치적 풍자를 담은 우화 소설.',
  },
  {
    id: 8,
    title: '파리 대왕',
    author: '윌리엄 골딩',
    coverUrl: 'https://example.com/covers/lord_of_the_flies.jpg',
    summary: '문명과 야만의 경계를 탐구하는 소설.',
  },
  {
    id: 9,
    title: '노인과 바다',
    author: '어니스트 헤밍웨이',
    coverUrl: 'https://example.com/covers/the_old_man_and_the_sea.jpg',
    summary: '인간의 의지와 자연의 싸움을 그린 소설.',
  },
  {
    id: 10,
    title: '안나 카레니나',
    author: '레프 톨스토이',
    coverUrl: 'https://example.com/covers/anna_karenina.jpg',
    summary: '사랑과 비극을 그린 러시아 소설.',
  },
]);

const booksRead = ref<Book[]>([
  {
    id: 11,
    title: '앵무새 죽이기',
    author: '하퍼 리',
    coverUrl: 'https://example.com/covers/to_kill_a_mockingbird.jpg',
    summary: '인종 차별과 정의를 다룬 소설.',
  },
  {
    id: 12,
    title: '오만과 편견',
    author: '제인 오스틴',
    coverUrl: 'https://example.com/covers/pride_and_prejudice.jpg',
    summary: '사랑과 사회적 지위를 다룬 로맨스 소설.',
  },
  {
    id: 13,
    title: '호빗',
    author: 'J.R.R. 톨킨',
    coverUrl: 'https://example.com/covers/the_hobbit.jpg',
    summary: '호빗의 모험을 그린 판타지 소설.',
  },
  {
    id: 14,
    title: '반지의 제왕',
    author: 'J.R.R. 톨킨',
    coverUrl: 'https://example.com/covers/the_lord_of_the_rings.jpg',
    summary: '반지를 둘러싼 서사시적 모험 이야기.',
  },
  {
    id: 15,
    title: '제인 에어',
    author: '샬럿 브론테',
    coverUrl: 'https://example.com/covers/jane_eyre.jpg',
    summary: '고아 소녀의 성장과 사랑 이야기.',
  },
  {
    id: 16,
    title: '위대한 유산',
    author: '찰스 디킨스',
    coverUrl: 'https://example.com/covers/great_expectations.jpg',
    summary: '한 소년의 성장과 야망을 그린 소설.',
  },
  {
    id: 17,
    title: '드라큘라',
    author: '브램 스토커',
    coverUrl: 'https://example.com/covers/dracula.jpg',
    summary: '흡혈귀 드라큘라 백작의 이야기를 그린 소설.',
  },
  {
    id: 18,
    title: '프랑켄슈타인',
    author: '메리 셸리',
    coverUrl: 'https://example.com/covers/frankenstein.jpg',
    summary: '인간의 창조와 파멸을 그린 소설.',
  },
  {
    id: 19,
    title: '셜록 홈즈의 모험',
    author: '아서 코난 도일',
    coverUrl: 'https://example.com/covers/sherlock_holmes.jpg',
    summary: '명탐정 셜록 홈즈의 모험 이야기.',
  },
  {
    id: 20,
    title: '위대한 유산',
    author: '찰스 디킨스',
    coverUrl: 'https://example.com/covers/great_expectations.jpg',
    summary: '한 소년의 성장과 야망을 그린 소설.',
  },
]);
</script>
