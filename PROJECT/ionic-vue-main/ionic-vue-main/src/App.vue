<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu
        content-id="main-content"
        type="push"
      >
        <ion-content>
          <ion-list>
            <!-- Profile Header -->
            <ion-item
              class="profile-header"
              lines="none"
            >
              <div>
                <div class="sidebar-header-buttons">
                  <ion-avatar>
                    <img
                      :alt="profile?.firstName"
                      :src="profile?.image"
                    >
                  </ion-avatar>
                  <ion-menu-toggle>
                    <points-button :profile="profile" />
                  </ion-menu-toggle>
                </div>
                <ion-header>{{ fullName }}</ion-header>
                <ion-note>{{ profile.phone }}</ion-note>
              </div>
            </ion-item>

            <ion-menu-toggle
              :auto-hide="false"
              v-for="(p, i) in appPages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                :lines="i !== 4 ? 'none' : 'full'"
                :style="
                  i === 4
                    ? { '--padding-bottom': '1.7rem' }
                    : i === 5
                      ? { '--padding-top': '1.7rem' }
                      : ''
                "
                :detail="false"
                class="hydrated"
              >
                <ion-icon
                  aria-hidden="true"
                  slot="start"
                  size="small"
                  :color="i === 0 || selectedIndex === i ? 'primary' : 'medium'"
                  :icon="p.icon"
                />
                <ion-label>{{ p.title }}</ion-label>
                <ion-note
                  v-if="p.counter"
                  slot="end"
                  class="counter"
                >
                  {{ p.counter }}
                </ion-note>
              </ion-item>
            </ion-menu-toggle>

            <ion-item
              lines="none"
              class="logout"
            >
              <ion-button>Logout</ion-button>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content" />
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
// Hardcoded placeholder data
import { categoriesMetaData, profile, menuItems } from '../placeholders';

import { PointsButton } from '@/components';
import {
  ProfileKey,
  MenuItemArrayKey,
  CategoryMetadataArrayKey,
} from '@/symbols';
import {
  IonApp,
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonHeader,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { provide, ref } from 'vue';
import {
  bagHandleSharp,
  fastFoodSharp,
  heartSharp,
  helpCircleSharp,
  locationSharp,
  notificationsSharp,
  personSharp,
  storefrontSharp,
  timeSharp,
} from 'ionicons/icons';
import { logo } from '@/assets';
const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Home',
    url: '/home',
    icon: logo,
  },
  {
    title: 'Order Now!',
    url: '/menu',
    icon: fastFoodSharp,
  },
  {
    title: 'Notifications',
    url: '/home',
    icon: notificationsSharp,
    counter: 4,
  },
  {
    title: 'Store Locator',
    url: '/home',
    icon: storefrontSharp,
  },
  {
    title: "FAQ's",
    url: '/home',
    icon: helpCircleSharp,
  },
  {
    title: 'My Orders',
    url: '/home',
    icon: bagHandleSharp,
    counter: 2,
  },
  {
    title: 'My Account',
    url: '/home',
    icon: personSharp,
  },
  {
    title: 'My Favorites',
    url: '/home',
    icon: heartSharp,
  },
  {
    title: 'Order Tracker',
    url: '/home',
    icon: locationSharp,
  },
  {
    title: 'Order History',
    url: '/home',
    icon: timeSharp,
  },
];

const fullName = `${profile.firstName} ${profile.lastName}`;

provide(ProfileKey, profile);
provide(MenuItemArrayKey, menuItems);
provide(CategoryMetadataArrayKey, categoriesMetaData);

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase(),
  );
}
</script>

<style lang="scss" scoped>
.profile-header {
  --padding-bottom: 1.7rem;

  .sidebar-header-buttons {
    display: flex;
    align-items: center;

    ion-avatar {
      margin-right: 1rem;
      margin-block: 1rem;
      height: 7rem;
      width: 7rem;
    }

    ion-menu-toggle {
      flex: 1;
      display: grid;
      place-items: center;
    }
  }
  ion-header {
    font-size: 2.7rem;
    font-weight: 900;
  }

  ion-note {
    font-size: 1.5rem;
  }
}

ion-note {
  font-size: 1.4rem;
}

ion-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.logout {
  flex: 1;
  align-items: end;
  --min-height: 70%;

  ion-button::part(native) {
    --border-radius: 1.6rem;
    padding: 1.7rem 5rem;
    font-weight: bold;
  }
}

.counter {
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  font-size: 1rem;
  padding: 0.4rem 0.7rem;
  border-radius: 100%;
}
</style>
