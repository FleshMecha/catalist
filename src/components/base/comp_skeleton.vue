<template>
	<ion-list>
		<ion-item v-for="fila in filas" :key="fila">
			<ion-label>
				<h3><ion-skeleton-text :animated="true" style="width: 55%" /></h3>
				<p><ion-skeleton-text :animated="true" style="width: 80%" /></p>
			</ion-label>
		</ion-item>
	</ion-list>
</template>

<script setup lang="ts">
import {
  IonItem,
  IonLabel,
  IonList,
  IonSkeletonText
} from '@ionic/vue'

interface Props {
  filas?: number
}

const props = withDefaults(defineProps<Props>(), {
  filas: 4
})

// Opcion para validacion en tiepo de ejecucion
// const props = defineProps({
//   filas: {
//     type: Number,
//     default: 4
//   }
// })
</script>