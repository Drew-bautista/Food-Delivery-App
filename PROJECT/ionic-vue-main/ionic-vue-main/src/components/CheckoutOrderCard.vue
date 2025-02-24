<template>
  <div class="container">
    <img
      class="image"
      :src="orderedItem.item.image"
      :alt="orderedItem.item.name"
    >
    <div class="text">
      <h1>{{ orderedItem.item.name }}</h1>
      <p
        v-for="extra in orderedItem.extras"
        :key="extra.name"
      >
        {{ extra.quantity }}x {{ extra.name }}
      </p>
    </div>
    <div class="subtotal">
      <p>P {{ orderedItem.subtotal }}</p>
    </div>

    <menu-card-quantity-counter
      class="quantity-counter"
      :initial-quantity="1"
    />
  </div>
</template>

<script setup lang="ts">
import { OrderedItem } from '@/types';
import { MenuCardQuantityCounter } from '@/components';
import { computed } from 'vue';

const prop = defineProps<{ orderedItem: OrderedItem }>();
const orderedItem = computed(() => {
  return {
    ...prop.orderedItem,
    subtotal:
      prop.orderedItem.item.price * prop.orderedItem.quantity +
      prop.orderedItem.extras.reduce(
        (cur, acc) => cur + acc.quantity * acc.unitPrice,
        0,
      ),
  };
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: min-content min-content;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'image    text'
    'subtotal quantity-counter';

  margin: 0;
  margin-bottom: 0.8rem;
  padding: 1.5rem;
  border-radius: var(--border-radius-button);
  background: var(--ion-color-medium-tint);
  color: var(--ion-color-light-contrast);
}

.image {
  grid-area: image;
  padding: 1rem;
  width: 10rem;
  height: auto;
}
.text {
  margin-left: 1rem;
  grid-area: text;
}
.subtotal {
  grid-area: subtotal;
  align-self: center;

  p {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--ion-color-primary);
  }
}
.quantity-counter {
  grid-area: quantity-counter;

  justify-self: end;
}

p,
h1 {
  margin-top: 0;
}

h1 {
  font-size: 1.6rem;
  font-weight: bold;
}
p {
  margin-bottom: 0.2rem;
  font-size: 1.4rem;
  font-weight: 400;
}
</style>
