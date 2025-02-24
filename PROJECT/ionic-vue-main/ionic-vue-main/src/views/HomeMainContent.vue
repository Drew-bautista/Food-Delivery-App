<template>
  <ion-page>
    <ion-header
      :translucent="true"
      class="ion-no-border"
    >
      <view-header :is-notif="isNotif">
        <div class="header-slot">
          <points-button />
          <ion-buttons slot="end">
            <ion-avatar>
              <img
                :alt="profile?.firstName"
                :src="profile?.image"
              >
            </ion-avatar>
          </ion-buttons>
        </div>
      </view-header>
    </ion-header>

    <ion-content
      class="ion-padding"
      :fullscreen="true"
    >
      <!-- greeting -->
      <home-greeting />

      <!-- searchbar -->
      <custom-searchbar />

      <!-- special offers -->
      <home-special-offers />

      <!-- category -->
      <home-category />

      <!-- what's new -->
      <home-whats-new />

      <!-- most popular -->
      <home-most-popular />

      <ion-button
        @click="router.push('/menu')"
        :style="{ zIndex: 9999 }"
        class="cta"
      >
        Order Now!
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/vue';
import {
  CustomSearchbar,
  HomeCategory,
  HomeGreeting,
  HomeMostPopular,
  HomeSpecialOffers,
  HomeWhatsNew,
  PointsButton,
  ViewHeader,
} from '@/components';
import { ProfileKey } from '@/symbols';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const profile = inject(ProfileKey);
const router = useRouter();

// placeholders
const isNotif = true;
</script>

<style scoped>
.header-slot {
  display: flex;
  justify-content: space-between;
}

ion-button.cta {
  position: fixed;
  right: 5%;
  bottom: 10%;
  font-size: 1.4rem;
  font-weight: bolder;

  --padding-top: 2rem;
  --padding-bottom: 2rem;
  --padding-start: 4rem;
  --padding-end: 4rem;
  --box-shadow: var(--ion-color-medium-shade) 1px 1px 2px;
}
</style>
