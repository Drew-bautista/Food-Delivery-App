<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button color="primary">
        <ion-icon :icon="menu" />
        <ion-icon
          v-if="isNotif"
          class="notif"
          :icon="notif"
        />
      </ion-menu-button>
    </ion-buttons>
    <div class="slot">
      <slot />
    </div>
  </ion-toolbar>
</template>

<script setup lang="ts">
import { IonButtons, IonIcon, IonMenuButton, IonToolbar } from '@ionic/vue';
import { general } from '@/assets';
const { menu, notif } = general;
const { isNotif } = defineProps<{ isNotif?: boolean }>();
</script>

<style lang="scss" scoped>
ion-toolbar {
  --background: var(--ion-color-light);
}

ion-menu-button {
  position: relative;
  margin-right: 2rem;

  .notif {
    position: absolute;
    width: 1.3rem;
    top: -0.6rem;
    right: -0.3rem;
  }
}
</style>
