<template>
    <CompMenu content-id="contenido_principal"/>
    <ion-tabs id="contenido_principal">
        <ion-router-outlet />
        <CompTabs />
    </ion-tabs>
</template>

<script setup lang="ts">
//Evita los errores al instanciar el elemento que tiene mas de 1 elemento raiz y maneja los parametros por la interfaz
defineOptions({
  inheritAttrs: false
})
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
} from '@ionic/vue'

import CompMenu from '@/components/structure/comp_menu.vue'
import CompTabs from '@/components/structure/comp_tabs.vue'
</script>
