<template>
  <section class="tw-flex tw-flex-row">

    <BreadCrumbs :crumbs="routes" />

    <!--CONTENIDO PRICIPAL-->
    <main class="tw-min-h-screen tw-w-full tw-p-7  ">

      <div class="tw-flex tw-justify-between ">

        <h1 class="tw-text-3xl tw-font-medium">Administración de tipos documentales</h1>
        <q-btn label="Crear tipo documental" color="secondary" icon="add" class="tw-rounded-lg"></q-btn>
      </div>
      <q-card class="q-mt-xl tw-rounded-xl q-pa-lg" flat>


        <b class="tw-text-xl q-pl-md q-pb-md">Filtros</b>


        <div class="row q-col-gutter-md q-pb-md q-px-md">
          <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 tw-gap-4">
            <span class="tw-text-label">Descripción </span>

            <q-input v-model="formulario.data" dense label="Seleccione" outlined class="mb-3" :rules="[]" required />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <span class="tw-text-label">Término trámite </span>
            <q-input v-model="formulario.data" dense label="Seleccione" outlined class="mb-3 " :rules="[]" required />

          </div>

          <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
            <span class="tw-text-label">Tipo de radicado </span>
            <q-select :options="[]" dense emit-value label="Seleccione" map-options outlined
              :rules="[(val: string) => val.length > 0 || 'Escoja una opcion']" required id:="input.label"
              v-model="formulario.data" />

          </div>
          <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
            <span class="tw-text-label">Estado </span>
            <q-select :options="[]" dense emit-value label="Seleccione" map-options outlined
              :rules="[(val: string) => val.length > 0 || 'Escoja una opcion']" required id:="input.label"
              v-model="formulario.data" />
          </div>
        </div>
        <footer class="row tw-flex tw-justify-center tw-gap-2">
          <q-btn label="Limpiar filtros" color="accent" textColor="secondary" class="tw-rounded-lg col-2"></q-btn>
          <q-btn label="Buscar" color="secondary" class="tw-rounded-lg col-2"></q-btn>
        </footer>

      </q-card>

      <q-card class="q-mt-lg" flat>
        <Table :TABLE_HEADER="Documental_HEADER" :TABLE_BODY="data" :selection="undefined" />
      </q-card>
    </main>
    <!-- END BLOCK -->

  </section>
</template>

<script  lang="ts" setup>
import Table from 'src/components/Table.vue';
import { Documental_HEADER } from "."
import { ref } from "vue"
import BreadCrumbs from 'src/components/BreadCrumbs/BreadCrumbs.vue';

const data = [
  {
    descripcion: 'Lorem ipsum',
    termino: 'Lorem ipsum',
    radicado: 'Lorem ipsum',
    estado: 'Activo',

  },

]

const formulario = ref({
  data: ""
})


const routes = [
  {
    name: 'Inicio',
    to: '/home'
  },
  {
    name: 'Módulo SGDA',
    to: '/home'
  },
  {
    name: 'Clasificación documental',
    to: '/home'
  },
  {
    name: 'Asignación de tipos documentales'
  }
]
</script>