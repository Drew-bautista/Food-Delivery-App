<template>
  <div>
    <section-header>Category</section-header>
    <swiper
      :slides-per-view="'auto'"
      :space-between="10"
      :modules="[Pagination]"
    >
      <swiper-slide
        v-for="category in categories"
        :key="category.name"
      >
        <img :src="category.image">
        <div class="texts">
          <p :style="{ fontWeight: 700 }">
            {{ category.name }}
          </p>
          <p :style="{ fontWeight: 400 }">
            {{ category.noOfRecipes }} Recipes
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { CategoryMetadataArrayKey } from '@/symbols';
import { inject } from 'vue';
import { SectionHeader } from '@/components';

const categories = inject(CategoryMetadataArrayKey);
</script>

<style scoped>
.swiper {
  margin-top: 2.4rem;
}
.swiper-slide {
  position: relative;
  max-width: fit-content;
}

.swiper-slide .texts {
  position: absolute;
  bottom: 0;
  z-index: 10;
  padding: 0.4rem 1.6rem;
  margin-bottom: 3rem;

  color: var(--ion-color-primary-contrast);
}

p {
  text-transform: capitalize;
  margin-block: 0;
}
</style>
