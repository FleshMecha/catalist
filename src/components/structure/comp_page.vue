<template>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button />
				</ion-buttons>
				<ion-title>{{ title }}</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-refresher v-if="show_update" slot="fixed" @ionRefresh="refresh">
				<ion-refresher-content pulling-text="Desliza para actualizar" refreshing-text="Actualizando..." />
			</ion-refresher>
			<slot />
		</ion-content>
</template>

<script setup lang="ts">
//Evita los errores al instanciar el elemento que tiene mas de 1 elemento raiz y maneja los parametros por la interfaz
defineOptions({
  inheritAttrs: false
})

import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonRefresher,
	IonRefresherContent,
	IonTitle,
	IonToolbar
} from '@ionic/vue';

interface Props {
	show_update?: boolean;
	title: string;
}


const props = withDefaults(defineProps<Props>(),{show_update:false,title:'no title'})

const emit = defineEmits<{(e:'update'):void;}>();

function refresh (event:any){
	emit('update');
	setTimeout(() => event.detail.complete(), 350);
}
</script>