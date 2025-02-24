<template>
  <div class="searchbar">
    <ion-searchbar
      class="override"
      :placeholder="`try our new ${
        !!menuItems ? menuItems[0].name : 'delights'
      }`"
    />
    <ion-button
      v-if="enableFilter"
      fill="clear"
    >
      <ion-icon :icon="options" />
    </ion-button>
  </div>
</template>

<script setup lang="ts">
import { IonButton, IonIcon, IonSearchbar } from '@ionic/vue';
import { MenuItemArrayKey } from '@/symbols';
import { options } from 'ionicons/icons';
import { inject } from 'vue';

const menuItems = inject(MenuItemArrayKey);

const { enableFilter } = defineProps<{ enableFilter?: boolean }>();
</script>

<style scoped>
ion-searchbar {
  --icon-color: var(--ion-color-primary);
  --clear-button-color: var(--ion-color-medium-shade);
}

.searchbar {
  display: flex;

  margin-bottom: 2rem;

  border-radius: 1.6rem;
  box-shadow: inset 0 0 1px 1px var(--ion-color-medium-tint);
  background-color: #f8f9fa;
}

.searchbar ion-searchbar.override {
  --background: transparent;

  flex: 1;
}

.searchbar svg {
  stroke-width: 2px;
}
</style>
