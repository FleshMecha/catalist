<template>
    <ion-page id="contenido_principal">
        <CompMenu content-id="contenido_principal"/>
        <ion-tabs>
            <ion-router-outlet />
            <CompTabs />
        </ion-tabs>
    </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
} from '@ionic/vue'

import CompMenu from '@/components/structure/comp_menu.vue'
import CompTabs from '@/components/structure/comp_tabs.vue'
</script>
