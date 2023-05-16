<template>
  <div>
    <BreadCrumbs :crumbs="routes" />
    <div class="tw-flex tw-justify-between q-my-lg">

      <h1 class="tw-text-3xl tw-font-medium">Administración de tipos documentales</h1>
    </div>
    <q-card class="tw-rounded-lg tw-p-7">
      <q-form ref="CotizacionesForm">
        <q-expansion-item expand-separator default-opened>
          <template v-slot:header>
            <div class="col row">
              <b class="h7">Amparos - Valor asegurado</b>
            </div>
          </template>
          <div class=" row  q-col-gutter-md ">



            <div class="q-pr-xl col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pt-none">


              <q-card class=" " bordered flat>
                <b class="block q-pa-md">Seleccione los amparos</b>
                <Table :TABLE_HEADER="AMPAROS_HEADER" :TABLE_BODY="amparos"></Table>
              </q-card>
            </div>

            <q-card class="row col-xs-12 col-sm-12 col-md-6 col-lg-6  " bordered flat>
              <div class="row">
                <q-chip removable color="dark" t outline v-model="amparos[i]" v-for="(amparo, i) in amparos">
                  {{ amparo }}
                </q-chip>

              </div>
            </q-card>
            <div class="col col-12 row justify-center q-gutter-x-md q-mt-xl q-pb-xl">
              <q-btn color-button="primary" flat color="black" no-caps label="Limpiar Formulario" style="width: 240px;" />
              <q-btn color="dark" no-caps label="Agregar" text-color="white" style="width: 240px;" />
            </div>
          </div>
        </q-expansion-item>



        <q-card class="q-pa-md" bordered flat>
          <div class="col row">
            <b class="h7">Listado de asegurados agregados</b>
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
      </q-form>
    </q-card>
  </div>
</template>
<script lang="ts" setup>
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs.vue';
import Table from 'src/components/Table.vue';
import { useQuasar } from 'quasar';
import { Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


interface Formulario {
  "fechaSolicitud": string;
  "funcionario": string;
  "ramo": string;
  "producto": string;
  "tipoNegocio": string;
  "negocioNuevo": string;
  "aseguradoraActual": string;
  "numeroPoliza": string;
  "vigenciaInicio": string;
  "vigenciaFin": string;
  "firstName": string;
  "secondName": string;
  "lastName": string;
  "lastSecondName": string;
  "clave": string;
  "plazoPago": string;
  "duracion": string;
  "tipoSeguro": string;
  "periodicidadPago": string;
  "primaAñoAnterior": string;
  "presupuestoAsignado": string;
  "porcentajeEstampillas": string;
  "expectativaComercial": string;
  "canalComercializacion": string;
  "porcentajeComision": string;
  "honorariosGestion": string;
  "otrosGastos": string;
  "observaciones": string;
}

//const testy = computed(() => formulario.value.telefono)

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

const usuariosOpciones = ref([] as QSelectOption[]);
const usuariosSeleccionados = ref([] as number[]);
const amparos = ref([true])




const SeguridadPostalForm = ref()
const newfile: Ref<any> = ref();

const q = useQuasar();
const route = useRoute()
const router = useRouter()
const tipoCliente = ref("A");

const AMPAROS_HEADER = [

  {
    name: 'amparo',
    align: 'center',
    label: 'Nombre de amparo',
    field: 'amparo',
  },
  {
    name: 'descripcion',
    align: 'center',
    label: 'Descripción',
    field: 'descripcion',
  },
]

const AMPAROS2_HEADER = [

  {
    name: 'codigo',
    align: 'center',
    label: 'Codigo',
    field: 'codigo',
  },
  {
    name: 'detalle',
    align: 'center',
    label: 'Detale',
    field: 'detalle',
  },
  {
    name: 'estado',
    align: 'center',
    label: 'Estado',
    field: 'estado',
  },

]

const formulario: Ref<Formulario> = ref({
  fechaSolicitud: "",
  funcionario: "",
  ramo: "",
  producto: "",
  tipoNegocio: "",
  negocioNuevo: "",
  aseguradoraActual: "",
  numeroPoliza: "",
  vigenciaInicio: "",
  vigenciaFin: "",
  firstName: "",
  secondName: "",
  lastName: "",
  lastSecondName: "",
  clave: "",
  plazoPago: "",
  duracion: "",
  tipoSeguro: "",
  periodicidadPago: "",
  primaAñoAnterior: "",
  presupuestoAsignado: "",
  porcentajeEstampillas: "",
  expectativaComercial: "",
  canalComercializacion: "",
  porcentajeComision: "",
  honorariosGestion: "",
  otrosGastos: "",
  observaciones: ""
});

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
