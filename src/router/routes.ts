import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

    ],
  },

  { path: '/Home', component: () => import('pages/Home.vue') },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
  },

  {
    path: '/administracion',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      { path: '', component: () => import('pages/Administracion/TiposDocumentales.vue'), },

    ],
  },

  {
    path: '/SGDA',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      { path: '/SGDA/asignacion', component: () => import('pages/SGDA/ClasificacionDocumental/Asignacion.vue'), },

    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },


];

export default routes;
