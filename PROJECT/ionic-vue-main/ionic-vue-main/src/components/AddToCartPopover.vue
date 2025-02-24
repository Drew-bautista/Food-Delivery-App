<template>
  <div class="ion-padding">
    <img
      :src="thumbsUp"
      alt="thumbs up"
    >
    <h1>Successfully Added!</h1>
    <h2>What do you want to do now?</h2>
    <ion-button @click="checkout">
      Proceed to checkout
    </ion-button>
    <ion-button
      fill="clear"
      @click="addMore"
    >
      Add more
    </ion-button>
  </div>
</template>

<script lang="ts" setup>
import { IonButton, popoverController } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { general } from '@/assets';
const { thumbsUp } = general;

const router = useRouter();

function addMore() {
  popoverController.dismiss();
  router.push('/menu');
}

function checkout() {
  popoverController.dismiss();
  router.push('/checkout');
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 1.6rem;

  * {
    font-size: 1.6rem;
    font-weight: bold;
  }

  img {
    margin-top: 1rem;

    max-height: 7rem;
  }

  h2 {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-weight: 400;
    color: var(--ion-color-medium-shade);
  }

  ion-button {
    width: 85%;
  }
}
</style>
