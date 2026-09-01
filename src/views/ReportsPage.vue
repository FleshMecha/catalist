<comp-page :title="$t('products.title')" :show_update="true" @update="onUpdate">
    <comp-skeleton v-if="loading" />
    <ion-list v-else>
        <ion-item v-for="product in products" :key="product.id" :router-link="`/app/products/${product.id}`">
            <ion-label>
                <h2>{{ product.name }}</h2>
                <p>{{ product.description }}</p>
            </ion-label>
        </ion-item>
    </ion-list>
</comp-page>