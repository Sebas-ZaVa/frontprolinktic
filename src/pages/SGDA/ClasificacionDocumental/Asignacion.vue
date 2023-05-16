<template>
  <div>
    <BreadCrumbs :crumbs="routes" />

    <div class="pl-4 tw-font-bold tw-text-3xl tw-my-5 text-bold">
      Asignación de tipos documentales
    </div>

    <q-card class="tw-rounded-lg tw-p-7" bordered flat>

      <p class="tw-text-2xl tw-font-semibold">Asignación</p>

      <q-form ref="CotizacionesForm" class="tw-mt-6">
        <div class="tw-flex tw-full q-col-gutter-md">
          <div class="tw-w-1/4">
            <p>Dependencia</p>
            <q-select outlined v-model="model" :options="options" label="Dependencia" />
          </div>
          <div class="tw-w-1/4">
            <p>Serie</p>
            <q-select outlined v-model="model" :options="options" label="Serie" />
          </div>
         <div class="tw-w-1/4">
           <p>Subserie</p>
           <q-select outlined v-model="model" :options="options" label="Subserie" />
         </div>
          <div class="tw-w-1/4">
            <p>Soporte</p>
            <q-select outlined v-model="model" :options="options" label="Soporte" />
          </div>
        </div>

        <div class="tw-mt-5 row q-col-gutter-md ">
          <div class="q-pr-xl col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pt-none">
            <q-card class="tw-rounded-2xl" bordered flat>
              <p class="tw-text-lg q-pa-md">Seleccione los tipos documentales que desea asignar</p>
              <Table :TABLE_HEADER="AMPAROS_HEADER" :TABLE_BODY="amparos"></Table>
            </q-card>
          </div>

          <q-card class="row col-xs-12 col-sm-12 col-md-6 col-lg-6 tw-rounded-2xl" bordered flat>
            <div class="">
              <p class="tw-text-lg">Estos son los tipos documentales que has seleccionado</p>
              <q-chip removable color="dark" t outline v-model="amparos[i]" v-for="(amparo, i) in amparos">
                {{ amparo }}
              </q-chip>

            </div>
          </q-card>
          <div class="col col-12 row justify-center q-gutter-x-md q-mt-xl q-pb-xl">
            <q-btn label="Limpiar" style="width: 240px; color: #003352" class="tw-rounded-xl tw-p-3 tw-bg-blue-lighter" />
            <q-btn label="Asignar" text-color="white" style="width: 240px;" class="tw-rounded-xl tw-p-3 tw-bg-blue"/>
          </div>
        </div>
      </q-form>
    </q-card>
    <q-card class="q-pa-md tw-mt-4 tw-rounded-lg" bordered flat>
      <div class="col row">
        <p class="tw-text-lg q-pa-md">Listado documentos asignados</p>
      </div>
      <div v-if="amparos.length > 0">
        <Table :TABLE_HEADER="AMPAROS2_HEADER" :TABLE_BODY="data" />
      </div>
      <figure class="row justify-center items-center" v-else>
        <div class="text-center">
          <q-icon name="groups" size="2rem"></q-icon>

          <p class="text-grey-7 block">Aún no hay asegurados</p>
          <b class="block">
            <q-icon name="add"></q-icon>
            Agregar asegurados</b>
        </div>
      </figure>
    </q-card>
    <Modal
      v-model="showModal"
      title="Asignación exitosa"
      text="Se ha asignado con éxito los tipos documentales a la dependencia x."
      is-success
      text-button="¡Ok!"
    />
  </div>
</template>
<script lang="ts" setup>
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs.vue';
import Modal from 'components/Modal/Modal.vue';
import Table from 'src/components/Table.vue';
import { useQuasar } from 'quasar';
import { Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const data: any[] = []

interface QSelectOption {
  label: string
  value: number
}

interface UserFromBack {
  id: number
  codigoRol: number
  nombreCompleto: string
}

const amparos = ref([true])

const q = useQuasar();
const route = useRoute()
const router = useRouter()
const showModal = ref(false)

const AMPAROS_HEADER = [

  {
    name: 'codigo',
    align: 'center',
    label: 'Código',
    field: 'codigo',
  },
  {
    name: 'detalle',
    align: 'center',
    label: 'Detalle',
    field: 'detalle',
  },
]

const AMPAROS2_HEADER = [

  {
    name: 'codigo',
    align: 'center',
    label: 'Código',
    field: 'codigo',
  },
  {
    name: 'detalle',
    align: 'center',
    label: 'Detalle',
    field: 'detalle',
  },
  {
    name: 'estado',
    align: 'center',
    label: 'Estado',
    field: 'estado',
  },
]

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

<style lang="scss">
.step_circle {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  padding: 10px;
}
</style>
