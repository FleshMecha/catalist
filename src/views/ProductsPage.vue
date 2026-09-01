<script setup lang = "ts">
    import { onMounted, ref } from 'vue'
//    import { useI18n } from 'vue-i18n'
    import { IonList,IonItem,IonLabel,IonBadge } from '@ionic/vue';
    import CompPage from '@/components/structure/comp_page.vue'
    import CompSkeleton from '@/components/base/comp_skeleton.vue'
    import {getProducts, type Product} from '@/data/products'

//    const { t } = useI18n()
    const products = ref<Product[]>([])
    const loading = ref(true)

    async function refreshProducts(){
        loading.value = true
        try{
            const response = await getProducts()
            products.value = response.products
        }catch(error){
            console.error('Error al cargar el producto:',error)
        }finally{
            loading.value = false
        }
    }

    onMounted(getProducts)

    async function onUpdate() {
        await refreshProducts()
    }


</script>

<template>
    <CompPage title="productos" :show-update="true" @update="onUpdate">
        <CompSkeleton v-if="loading" />
        <ion-list v-else>
            <ion-item v-for="product in products" :key="product.id" :router-link="`/app/products/${product.id}`">
                <ion-label>
                    <h2>{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                </ion-label>
                <ion-badge v-if="!product.available" slot="end" color="medium">Sin stock</ion-badge>
            </ion-item>
        </ion-list>
    </CompPage>
</template>