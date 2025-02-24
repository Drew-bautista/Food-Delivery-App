<template>
  <div>
    <button @click="decrement">
      -
    </button>
    <p>{{ quantity }}</p>
    <button @click="increment">
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const { initialQuantity } = defineProps<{ initialQuantity: number }>();
const emits = defineEmits<{ update: [newQuantity: number] }>();
const quantity = ref(initialQuantity || 1);
const increment = () => {
  quantity.value++;
  emits('update', quantity.value);
};
const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
    emits('update', quantity.value);
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  gap: 1.8rem;

  font-size: 1.6rem;
  color: var(--ion-color-light-contrast);

  button {
    display: grid;
    place-items: center;

    border-radius: var(--border-radius-button);
    background-color: var(--ion-color-light-shade);
    height: 3.5rem;
    width: 3.5rem;

    font-size: 2.5rem;
    font-weight: bold;
    color: var(--ion-color-primary);
  }
}
</style>
