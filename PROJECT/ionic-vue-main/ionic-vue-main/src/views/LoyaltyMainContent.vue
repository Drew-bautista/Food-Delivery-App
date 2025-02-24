<template>
  <ion-page>
    <ion-header
      :translucent="true"
      class="ion-no-border"
    >
      <view-header :is-notif="isNotif">
        <h1>Loyalty Points</h1>
      </view-header>
    </ion-header>

    <ion-content
      class="ion-padding"
      :fullscreen="true"
    >
      <div class="tier-header">
        <img
          :src="crown"
          alt="crown"
        >
        <section-header
          class="section-header"
          button-text="View All"
        >
          {{ `${tiers[1]} Tier` }}
        </section-header>
      </div>
      <p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
      </p>

      <!-- this is a placeholder for the actual -->
      <div class="loyalty-progress-wheel">
        <img
          :src="loyaltyPointsWheel"
          alt="loyalty points progress wheel placeholder"
        >
      </div>

      <section-header button-text="How it Works">
        Rewards
      </section-header>

      <div class="reward-buttons">
        <ion-button
          v-for="tier in tiers"
          :key="tier"
          :class="{ selected: tier === selectedTier }"
          @click.prevent="selectedTier = tier"
        >
          {{ tier }}
        </ion-button>
      </div>

      <div
        v-for="rewardItem in rewardItems"
        :key="rewardItem.id"
      >
        <loyalty-card-item
          v-if="
            selectedTier === rewardItem.reward?.tier || selectedTier === 'All'
          "
          :reward-item="rewardItem"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage } from '@ionic/vue';
import { LoyaltyCardItem, SectionHeader, ViewHeader } from '@/components';
import { inject, ref } from 'vue';
import { general } from '@/assets';
import { MenuItemArrayKey } from '@/symbols';
const { crown, loyaltyPointsWheel } = general;
const tiers = ['All', 'Beginner', 'Intermediate', 'Loyal'];
const selectedTier = ref('All');

// placeholders
const menuItems = inject(MenuItemArrayKey);
const rewardItems = menuItems?.filter((item) => item.reward);
const isNotif = true;
</script>

<style lang="scss" scoped>
ion-content {
  font-weight: 400;
}

.tier-header {
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    margin-right: 2rem;
  }

  .section-header {
    flex: 1;
  }
}

.loyalty-progress-wheel {
  width: 100%;

  display: flex;
  justify-content: center;
}

.reward-buttons {
  display: flex;
  justify-content: space-around;

  button {
    padding: 2rem;
    border-radius: var(--border-radius-button);
    font-weight: bold;
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
}
</style>
