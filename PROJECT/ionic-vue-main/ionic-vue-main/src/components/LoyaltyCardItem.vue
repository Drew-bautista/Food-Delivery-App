<template>
  <ion-card>
    <img
      class="reward-image"
      :src="rewardItem.image"
      :alt="rewardItem.name"
    >
    <div class="texts">
      <ion-card-title>{{ rewardItem.name }}</ion-card-title>
      <ion-card-subtitle>{{ rewardItem.category }}</ion-card-subtitle>
      <div class="points">
        <img
          :src="crown"
          alt="crown"
        >
        <p>{{ `${rewardItem.reward?.points} points` }}</p>
      </div>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import { MenuItem } from '@/types';
import { general } from '@/assets';
const { crown } = general;

const { rewardItem } = defineProps<{ rewardItem: MenuItem }>();
</script>

<style lang="scss" scoped>
ion-card {
  padding-inline: 1rem;
  display: flex;
  align-items: center;
  --background: var(--ion-color-medium-tint);

  .reward-image {
    width: 10rem;
  }

  .texts {
    width: 100%;
    margin-top: 3rem;
    margin-inline: 1rem;
  }

  .points {
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: bold;
    color: var(--ion-color-primary);

    img {
      margin-right: 1rem;
    }
  }

  ion-card-title {
    font-size: 1.5rem;
  }

  ion-card-subtitle {
    font-size: 1.4rem;
    text-transform: capitalize;
  }
}
</style>
