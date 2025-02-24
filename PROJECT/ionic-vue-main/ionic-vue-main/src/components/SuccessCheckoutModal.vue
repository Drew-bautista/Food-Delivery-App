<template>
  <div class="ion-padding">
    <img
      :src="thumbsUp"
      alt="thumbs up"
    >
    <h1>Order Received!</h1>
    <h2>
      Your order <span>No. {{ placeholderOrderNumber }}</span> is successful and
      is now being processed. Kindly wait for our notification regarding your
      order.
    </h2>
    <div class="buttons">
      <ion-button @click="goToTrackOrder">Track Order</ion-button>
      <ion-button
        fill="clear"
        @click="goHome"
      >
        Back to Home
      </ion-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IonButton, modalController } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { general } from '@/assets';
const { thumbsUp } = general;
const router = useRouter();




const placeholderOrderNumber = '000000';

function goHome() {
  modalController.dismiss();
  router.push('/home');
}

// Function to navigate to Track Order page
function goToTrackOrder() {
  modalController.dismiss();
  router.push('/track-order'); // Update this path if needed
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  height: 100%;
  padding-top: 15rem;

  * {
    font-size: 1.6rem;
    font-weight: 500;
  }

  img {
    height: 20rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
  }

  h2 {
    align-self: center;
    text-align: center;

    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-weight: 400;
    color: var(--ion-color-medium-shade);

    span {
      color: var(--ion-color-primary);
      font-weight: 600;
    }
  }

  .buttons {
    width: 100%;
    justify-self: end;

    ion-button {
      width: 100%;
      font-weight: 700;
    }

    ion-button::part(native) {
      padding-block: 2.2rem;
    }
  }
}
</style>
