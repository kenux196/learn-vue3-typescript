<template>
  <div role="tablist" class="tabs tabs-bordered mb-10">
    <a role="tab" class="tab" href="/chart/echart">echart</a>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('chart1');
</script>
