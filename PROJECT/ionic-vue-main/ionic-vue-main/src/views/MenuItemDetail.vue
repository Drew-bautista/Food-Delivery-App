<template>
  <ion-page>
    <ion-header
      :translucent="true"
      class="ion-no-border"
    >
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" />
        </ion-buttons>
        <ion-text>
          <h1>{{ menuItem.category }}</h1>
        </ion-text>
        <ion-button slot="end">
          <ion-icon
            slot="icon-only"
            :icon="bagHandle"
          />
        </ion-button>
      </ion-toolbar>
    </ion-header>

    <ion-content
      class="ion-padding"
      :style="{ position: 'relative' }"
      :fullscreen="true"
    >
      <!-- item image -->
      <div class="menu-item-image-container">
        <img
          :src="menuItem.image"
          :alt="menuItem.name"
        >
        <button>
          <ion-icon :icon="heart" />
        </button>
      </div>

      <!-- item name -->
      <h1 class="menu-item-name">
        {{ menuItem.name }}
      </h1>

      <!-- item star rating -->
      <custom-star-rating
        :rating="menuItem.rating"
        :star-size="18"
      />

      <!-- item description -->
      <p class="menu-item-description">
        {{ menuItem.description }}
      </p>

      <!-- item price and qty -->
      <div class="menu-item-price-and-qty">
        <p>P {{ menuItem.price }}</p>
        <!-- insert qty  (+/-) buttons-->
      </div>

      <ion-button
        class="cta"
        :router-link="`/checkout/${menuItem.id}`"
      >
        Add to Bag
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonHeader,
  IonPage,
  IonText,
  IonToolbar,
  popoverController,
} from '@ionic/vue';
import { bagHandle } from 'ionicons/icons';
import {
  AddToCartPopover,
  CustomStarRating,
  MenuCardQuantityCounter,
} from '@/components';
import { MenuItemArrayKey } from '@/symbols';
import { MenuItem } from '@/types';
import { general } from '@/assets';
import { ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const orderQuantity = ref(1);

const route = useRoute();
const router = useRouter();

const { id } = route.params;

let menuItem: MenuItem;
const menuItems = inject(MenuItemArrayKey) ?? [];
const menuItemData = menuItems.find(
  (item) => item.id === (typeof id === 'string' ? id : null),
);

if (menuItemData) {
  menuItem = menuItemData;
} else {
  router.back();
}

async function openPopover() {
  const popover = await popoverController.create({
    component: AddToCartPopover,
    backdropDismiss: false,
  });
  popover.present();
}

const { heart } = general;
</script>

<style lang="scss" scoped>
* {
  --cta-min-height: 5rem;
  --cta-margin-bottom: 2rem;
}

ion-content {
  --padding-bottom: calc(var(--cta-min-height) + var(--cta-margin-bottom));
}

.menu-item-image-container {
  position: relative;

  width: 100%;
  display: flex;
  justify-content: center;

  background-color: var(--ion-color-medium);
  border-radius: var(--border-radius-button);

  img {
    width: 70%;
  }

  button {
    position: absolute;
    bottom: -2rem;
    right: 2rem;

    display: grid;
    width: 5rem;
    height: 5rem;
    place-items: center;
    padding: 1rem;

    background-color: var(--ion-color-light-tint);
    border-radius: var(--border-radius-button);
    box-shadow: var(--ion-color-medium-shade) 1px 1px 2px;

    ion-icon {
      height: 80%;
      width: 80%;
    }
  }
}

.menu-item-name {
  font-size: 2rem;
  font-weight: 700;
}

.menu-item-description {
  font-weight: 400;
  color: var(--ion-color-medium-shade);
}

.menu-item-price-and-qty {
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 2.4rem;
  font-weight: 700;
  color: var(--ion-color-primary);
}

ion-button.cta {
  position: fixed;
  bottom: 0;
  width: 92vw;

  min-height: var(--cta-min-height);
  margin-bottom: var(--cta-margin-bottom);

  font-weight: bold;
}
</style>
