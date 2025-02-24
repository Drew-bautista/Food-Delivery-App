<template>
  <swiper
    :slides-per-view="'auto'"
    :free-mode="true"
    :modules="[FreeMode, Pagination]"
  >
    <swiper-slide
      v-for="category in categories"
      :key="category"
    >
      <ion-button
        :class="{ selected: category === selectedCategory }"
        @click.prevent="selectedCategory = category"
      >
        {{ category }}
      </ion-button>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { menuCategories } from '@/types';
import { ref } from 'vue';

const categories = ['All', ...menuCategories];
const selectedCategory = ref('All');
</script>

<style scoped>
.swiper-slide {
  flex-shrink: 1;
  padding-right: 0.4rem;
}

ion-button {
  --background: var(--ion-color-medium);
  --color: var(--ion-color-medium-shade);
  font-weight: bold;
}

ion-button.selected {
  --background: var(--ion-color-primary);
  --color: var(--ion-color-primary-contrast);
}
</style>
