<template>
  <template>
    <q-dialog v-model="card">
      <q-card class="tw-px-3" style="width: 480px; height: 396px">
        <div class="tw-rounded-lg tw-flex tw-justify-center tw-mt-10">
          <span class="tw-rounded-[50px] tw-flex tw-justify-center" v-if="isSuccess" style="background-color: rgba(0, 219, 0, 0.05); width: 130px; height: 82px">
            <img :src="Check" alt="check" width="40">
          </span>

          <span class="tw-rounded-[50px] tw-flex tw-justify-center" v-else style="background-color: rgba(255, 197, 13, 0.1); width: 130px; height: 82px">
            <img :src="CheckYellow" alt="check" width="40">
          </span>

        </div>
        <q-card-section class="flex column justify-center items-center">
          <p class="tw-text-2xl text-center tw-font-bold q-mt-lg">
            {{ title }}
          </p>
          <p class="tw-text-lg text-center tw-mt-3">{{ text }}</p>

          <div class="tw-flex tw-mt-8">
            <q-btn
              label="Cancelar"
              color="primary"
              v-if="cancelButton"
              class="tw-p-3"
              style="width: 210px;"
              flat
              @click="hideModal"
            />
            <q-btn
              :label="textButton"
              style="width: 210px"
              text-color="white"
              class="tw-rounded-xl tw-p-3 tw-bg-blue"
              @click="handleButton"
            />

          </div>

        </q-card-section>
      </q-card>
    </q-dialog>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Check from '../../assets/check.svg';
import CheckYellow from '../../assets/check-yellow.svg';

const props = defineProps<{
  title: string,
  text: string,
  isSuccess: boolean,
  textButton: string,
  cancelButton: boolean
}>()

const emit = defineEmits(['closeModal', 'handleAccept'])

function hideModal() {
  emit('closeModal')
}

function handleButton() {
  emit('handleAccept')
}

const card = ref(false)

</script>
