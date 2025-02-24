<template>
  <ion-card :router-link="`/menu/${menuItem.id}`">
    <img
      :src="menuItem.image"
      :alt="menuItem.name"
    >
    <div class="texts">
      <ion-card-title>{{ menuItem.name }}</ion-card-title>
      <ion-card-subtitle>{{ menuItem.category }}</ion-card-subtitle>
      <div class="price-rating">
        <p>{{ `P ${menuItem.price}` }}</p>
        <custom-star-rating :rating="rating" />
      </div>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
import { CustomStarRating } from '@/components';
import { MenuItem } from '@/types';

const { menuItem } = defineProps<{
  menuItem: MenuItem;
}>();
const rating = menuItem.rating;
</script>

<style scoped>
ion-card {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  --background: var(--ion-color-medium-tint);
}

.texts {
  width: 100%;
  margin-top: 3rem;
}

.price-rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--ion-color-primary);
}

ion-card-title {
  font-size: 1.4rem;
}

ion-card-subtitle {
  font-size: 1.2rem;
  text-transform: capitalize;
}
</style>
