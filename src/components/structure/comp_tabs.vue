<template>
  <ion-tab-bar slot="bottom">
    <ion-tab-button v-for="tab in tabs" :key="tab.id" :tab="tab.id" :href="tab.route">
      <ion-icon :icon="tab.icon" />
      <ion-label>{{ tab.title }}</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script setup lang="ts">
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
} from '@ionic/vue'

import { get_tabs } from '@/config/navigation'

const tabs = get_tabs()
</script>