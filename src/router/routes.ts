import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: to => {
      const token = localStorage.getItem("bearer_token");
      if (token) {
        return "/SGDA";
      } else {
        return "/login";
      }
    }
  },
  {path: '/Home', component: () => import('pages/Home.vue')},
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },

  {
    path: '/SGDA',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      {path: '/SGDA/asignacion', component: () => import('pages/SGDA/ClasificacionDocumental/Asignacion.vue'),},
      {path: '/SGDA/administracion', component: () => import('pages/SGDA/Administracion/TiposDocumentales.vue'),},
      {path: '/SGDA/radicacion', component: () => import('pages/SGDA/Radicacion.vue'),},
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
