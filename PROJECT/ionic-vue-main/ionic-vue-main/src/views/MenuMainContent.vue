<template>
  <ion-page>
    <ion-header
      :translucent="true"
      class="ion-no-border"
    >
      <view-header :is-notif="isNotif">
        <div class="header-slot">
          <ion-text>
            <h1>Our Foods</h1>
          </ion-text>
          <ion-button
            fill="clear"
            slot="end"
          >
            <ion-icon
              slot="icon-only"
              :icon="bagHandle"
            />
          </ion-button>
        </div>
      </view-header>
    </ion-header>

    <ion-content
      class="ion-padding"
      :fullscreen="true"
    >
      <!-- searchbar -->
      <custom-searchbar enable-filter />

      <!-- categories -->
      <category-button-swiper />

      <div class="menu-cards">
        <menu-card-item
          v-for="item in menuItems"
          :key="item.name"
          :menu-item="item"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
} from '@ionic/vue';
import { bagHandle } from 'ionicons/icons';
import {
  CategoryButtonSwiper,
  CustomSearchbar,
  MenuCardItem,
  ViewHeader,
} from '@/components';
import { MenuItemArrayKey } from '@/symbols';
import { inject } from 'vue';

const menuItems = inject(MenuItemArrayKey) ?? [];
// placeholders
const isNotif = true;
</script>

<style scoped>
.header-slot {
  display: flex;
  justify-content: space-between;
}

.menu-cards {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
