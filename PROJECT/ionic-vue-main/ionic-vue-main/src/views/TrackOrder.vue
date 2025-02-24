
<template>
   <ion-page>
      <ion-header>
         <ion-toolbar>
            <ion-title>Track Orders</ion-title>
         </ion-toolbar>
      </ion-header>
      <ion-content>
         <ion-list>
            <ion-item v-for="order in orders" :key="order.id">
               <ion-label>
                  <h2><b>ORDER NO. : {{ order.id.padStart(6, '0') }}</b></h2>
                  <p><b>ITEM: {{ order.car_id }}</b></p>
                  <p><b>Total: ${{ order.total }}</b></p>
               </ion-label>
               <ion-button color="danger" @click="deleteOrder(order.id)">CANCEL ORDER</ion-button>
            </ion-item>
         </ion-list>
      </ion-content>
   </ion-page>
</template>

<script>
import { 
   IonPage, 
   IonHeader, 
   IonToolbar, 
   IonTitle, 
   IonContent, 
   IonList, 
   IonItem, 
   IonLabel, 
   IonButton 
} from '@ionic/vue';

import axios from 'axios';

export default {
   name: 'TrackOrder',
   components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton },
   data() {
      return {
         orders: []
      };
   },
   mounted() {
      this.fetchOrders();
   },
   methods: {
      async fetchOrders() {
         try {
            this.orders = []
            const response = await axios.get('http://192.168.254.111:80/orders');
            this.orders = response.data;
         } catch (error) {
            console.error('Failed to fetch orders', error);
         }
      },
      editOrder(order) {
         // Implement edit logic or navigate to edit page with order details
      },
      async deleteOrder(orderId) {
         try {
            await axios.get(`http://192.168.254.111:80/order/${orderId}/delete`);
            this.fetchOrders();  // Refresh list
         } catch (error) {
            console.error('Failed to delete order', error);
         }
      }
   }
};
</script>
