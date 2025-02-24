<template>
  <section-header>What's New?</section-header>
  <div class="main">
    <img :src="whatsNew">
  </div>
</template>

<script setup lang="ts">
import { promotions } from '@/assets';
import { SectionHeader } from '@/components';
const { whatsNew } = promotions;
</script>

<style scoped>
.main {
  width: 100%;
  margin-block: 2.4rem;
}

img {
  width: 100%;
}
</style>
