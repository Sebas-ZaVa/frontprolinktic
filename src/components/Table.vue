
<template>
  <div>
    <q-table flat :rows="POLIZA_BODY" :columns="POLIZA_HEADER" row-key="numeroCotizacion"
      table-header-class="text-black text-h6 " class="q-mr-md full-width" rows-per-page-label="Páginas"
      :pagination="{ rowsPerPage: 0 }" hide-pagination selection="multiple" v-model:selected="selection">




      <template v-slot:body-cell-estado="props">
        <q-td v-if="props.row.estado === 'A'">
          <q-chip outline color="green-7" text-color="white">

            Aprobado

          </q-chip>
        </q-td>

        <q-td v-else :props="props" :class="props.row.estado">
          {{ props.row.estado }}
        </q-td>
      </template>



      <template v-slot:body-cell-acciones="props">

        <q-td class="text-center">

          <!-- <q-btn size="sm" color="black" @click="editRow(props.row.id)" icon="edit" flat /> -->
          <q-btn size="sm" color="white" style="background: #39BA2E;" icon="delete_outline" flat />
        </q-td>

      </template>

    </q-table>
  </div>
</template>

<script setup lang="ts">

import { useQuasar } from "quasar";
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRouter } from "vue-router";

const vuerouter = useRouter()
const q = useQuasar();

const selection = ref([])

const props = withDefaults(defineProps<{
  POLIZA_BODY: any[],
  POLIZA_HEADER: any[],
  // buscar: string,
  // action: string,
  // target?: string,
}>(), {
  // target: ""
})

const fakeAlerta = ["alerta", "falso"];
// onMounted(() => {
//   console.log(props.action, props.POLIZA_BODY)
// })


// function editRow(id: number) {
//   vuerouter.push('/crud/' + props.target + '/editar/' + id)
// }



</script>

<style lang="scss" scoped></style>

