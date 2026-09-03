<template>
    <ion-menu :content-id="contentId" type="overlay">
        <ion-header>
            <ion-toolbar>
                <ion-title>Menú</ion-title>
            </ion-toolbar>
        </ion-header>
        
        <ion-content>
            <ion-list>
                <ion-menu-toggle 
                    v-for="item in menuItems" 
                    :key="item.id"
                    @click="navigateTo(item.path)"
                >
                    <ion-item>
                        <ion-icon :icon="item.icon" slot="start" />
                        <ion-label>{{ item.title }}</ion-label>
                    </ion-item>
                </ion-menu-toggle>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script setup lang="ts">
import {
	IonMenu,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonMenuToggle,
    IonLabel,
    IonIcon,
} from '@ionic/vue'
import { useRouter } from 'vue-router';
import { get_menu } from '@/config/navigation';

interface Props {
	contentId: string;
}
const props = defineProps<Props>();
const router = useRouter();
const menuItems = get_menu();
function navigateTo(path:string){
	router.push(path);
}
</script>
