import type { Component } from 'vue';
import { homeOutline, pricetagOutline } from 'ionicons/icons';

export interface NavigationItem {
    id: string;
    title: string;
    path: string;
    icon: any;
    order: number;
    component: Component;
}

export const navigation: NavigationItem[] = [
    {
        id: 'home',
        title: 'Inicio',
        path: '/app/home',
        icon: homeOutline,
        order: 1,
        component: () => import('@/views/HomePage.vue')
    },
    {
        id: 'products',
        title: 'Productos',
        path: '/app/products',
        icon: pricetagOutline,
        order: 2,
        component: () => import('@/views/ProductsPage.vue')
    }/*
    {
        id: 'cameras',
        title: 'Cámaras',
        path: '/app/cameras',
        order: 2,
        component: () => import('@/views/CamerasPage.vue')
    },
    {
        id: 'reports',
        title: 'Reportes',
        path: '/app/reports',
        order: 3,
        component: () => import('@/views/ReportsPage.vue')
    }*/

    
];

export function get_tabs(): NavigationItem[] {
    return [...navigation].sort((a, b) => a.order - b.order);
}
export function get_menu(): NavigationItem[] {
    return [...navigation].sort((a, b) => a.order - b.order);
}