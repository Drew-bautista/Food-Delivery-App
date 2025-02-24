<template>
  <div>
    <strong>
      <slot />
    </strong>

    <ion-button
      fill="clear"
      v-if="buttonText"
    >
      <p>{{ buttonText }}</p>
      <ion-icon :icon="chevronForwardOutline" />
    </ion-button>
  </div>
</template>

<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
const { buttonText } = defineProps<{
  buttonText?: string;
}>();
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

strong {
  color: var(--ion-color-light-contrast);
  text-transform: capitalize;
  margin-right: 1rem;
  font-size: 1.8rem;
}

p {
  font-size: 1.4rem;
  font-weight: bolder;
}

ion-button {
  --padding-top: 0;
  --padding-bottom: 0;
  --padding-end: 0;
}

ion-button::part(native) p {
  margin-block: 0;
}
</style>
