<template>
  <div class="greeting">
    <ion-icon
      class="logo"
      :icon="logo"
    />
    <div>
      <h2>Anneoyong, {{ profile?.firstName }}!</h2>
      <h1>What do you want to eat?</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { ProfileKey } from '@/symbols';
import { logo } from '@/assets';
import { inject } from 'vue';

const profile = inject(ProfileKey);
</script>

<style scoped>
.greeting {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.greeting ion-icon.logo {
  height: auto;
  min-width: 20%;
}

.greeting h2 {
  font-size: 1.4rem;
  color: var(--ion-color-medium-shade);
}

.greeting h1 {
  font-size: 2.7rem;
  font-weight: 700;
  width: 80%;
  margin-top: 0;
}
</style>
