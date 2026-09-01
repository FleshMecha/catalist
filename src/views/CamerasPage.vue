<comp-page :title="$t('cameras.title')" :show_update="true" @update="onUpdate">
    <comp-skeleton v-if="loading" />
    <ion-list v-else>
        <ion-item v-for="camera in cameras" :key="camera.id" :router-link="`/app/cameras/${camera.id}`">
            <ion-label>
                <h2>{{ camera.name }}</h2>
                <p>{{ camera.description }}</p>
            </ion-label>
        </ion-item>
    </ion-list>
</comp-page>