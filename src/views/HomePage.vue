<template>
  <ion-page>
  <CompPage title="Inicio" :show-update="false">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Nicolas Bustamante</ion-card-title>
            <ion-card-subtitle>Ready</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
              <ion-img
                src="lain3.gif"
                alt="Dancing Lain"
              ></ion-img>
          </ion-card-content>
        </ion-card>
  </CompPage>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/vue';
import CompPage from '@/components/structure/comp_page.vue'
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
