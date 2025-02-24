<template>
  <ion-button
    fill="clear"
    :router-link="`/loyalty`"
  >
    <img
      :src="crown"
      alt="crown"
    >
    <strong>{{ `${profile?.points ?? 0} Points` }}</strong>
    <ion-icon :icon="chevronForwardOutline" />
  </ion-button>
</template>

<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { ProfileKey } from '@/symbols';
import { inject } from 'vue';
import { chevronForwardOutline } from 'ionicons/icons';
import { general } from '@/assets';
const { crown } = general;

const profile = inject(ProfileKey);
</script>

<style scoped>
span {
  font-size: 2rem;
  margin-right: 0.7rem;
}

strong {
  margin-right: 1rem;
  margin-left: 3rem;

  text-transform: capitalize;
  color: var(--ion-color-light-contrast);
  font-size: 1.6rem;
}
</style>
