import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomeMainContent from '../views/HomeMainContent.vue';
import MenuMainContent from '../views/MenuMainContent.vue';
import MenuItemDetail from '../views/MenuItemDetail.vue';
import CheckoutView from '../views/CheckoutView.vue';
import LoyaltyMainContent from '../views/LoyaltyMainContent.vue';
import FolderPage from '../views/FolderPage.vue';
import TrackOrder from '../views/TrackOrder.vue';
import Test from '../views/Test.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomeMainContent,
  },
  {
    path: '/menu',
    component: MenuMainContent,
  },
  {
    path: '/menu/:id',
    component: MenuItemDetail,
    props: true,
  },
  {
    path: '/checkout/:id',
    component: CheckoutView,
  },
  {
    path: '/loyalty',
    component: LoyaltyMainContent,
  },
  {
    path: '/folder/:id',
    component: FolderPage,
  },
  {
    path: '/track-order',
    component: TrackOrder,
  },
  {
    path: '/orders',
    component: Test,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
