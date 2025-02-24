<template>
  <section-header>Most Popular</section-header>
  <div class="main">
    <menu-card-item
      v-for="menuItem in menuItems"
      :key="menuItem.id"
      :menu-item="menuItem"
    />
  </div>
</template>

<script setup lang="ts">
import { MenuCardItem, SectionHeader } from '@/components';
import { MenuItemArrayKey } from '@/symbols';
import { inject } from 'vue';

const menuItems = inject(MenuItemArrayKey);
</script>

<style scoped>
.main {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
