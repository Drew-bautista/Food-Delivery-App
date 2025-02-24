<template>
  <div>
    <section-header button-text="View All">
      Special Offers!
    </section-header>
    <swiper
      :slides-per-view="'auto'"
      :space-between="5"
      :modules="[Pagination]"
    >
      <swiper-slide
        v-for="specialOffer in specialOffers"
        :key="specialOffer"
      >
        <img :src="specialOffer">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { SectionHeader } from '@/components';
import 'swiper/swiper-bundle.css';

import { promotions } from '@/assets';
const { specialOffer1, specialOffer2 } = promotions;
const specialOffers = [specialOffer1, specialOffer2];
</script>

<style scoped>
.swiper {
  margin-top: 0.8rem;
}
.swiper-slide {
  width: 80%;
}
</style>
