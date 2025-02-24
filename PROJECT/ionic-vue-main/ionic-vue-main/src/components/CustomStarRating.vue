<template>
  <star-rating
    v-model="ratingModel"
    :star-size="starSize ?? 11"
    :star-color="'#FFC02E'"
    :inactive-color="'#676767'"
    :disable-click="true"
  />
</template>

<script setup lang="ts">
import StarRating from 'vue3-star-ratings';
const { rating, starSize } = defineProps<{
  rating: number;
  starSize?: number;
}>();
const ratingModel = rating;
</script>
