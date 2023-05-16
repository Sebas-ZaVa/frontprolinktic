<template>
  <q-layout view="lHh Lpr lFf">
    <header class="tw-header tw-top-0 tw-flex tw-flex-grow">
      <div
        class="tw-flex tw-items-center tw-justify-between tw-w-full tw-bg-white tw-px-8 tw-h-24 tw-shadow-md tw-z-10 tw-">

        <div class="tw-flex tw-flex-row tw-justify-start">
          <!--SEARCH-->
          <div class="tw-relative">
            <input
              class="tw-pl-10 tw-py-3 tw-rounded-lg tw-border tw-border-gray-sky tw-bg-white"
              type="search" placeholder="Buscar" style="">
            <div class="tw-absolute tw-inset-y-0 tw-left- tw-flex tw-items-center tw-pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" fill="#505050" class="tw-bi tw-bi-search"
                   viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1
                    1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5
                    0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </div>
        <!--END SEARCH-->


        <div class="tw-flex tw-flex-row tw-justify-center tw-items-center">
          <q-select
            outlined
            v-model="model"
            label="SGDA"
            class="tw-w-1/2 tw-bg-[#E0F3FEB2]"
            dense
          >
            <template v-slot:prepend>
              <q-icon name="archive" />
            </template>
          </q-select>
          <div class="tw-mx-2 tw-sm:mx-3">
            <a href="#">
              <img class="tw-w-14" :src="tink" alt="LogoLinktic">
            </a>
          </div>

          <div class="md:tw-mr-5">
            <a href="#">
              <img class="tw-w-14" :src="interrogation" alt="Personal">
            </a>
          </div>

          <div class="tw-flex tw-flex-row tw-items-center">
            <div class="tw-flex-shrink-0 tw-px-2 tw--mr-3 tw-md:-mr-10 tw-h-full">
              <a href="#">
                <img class="tw-h-full" :src="mask" alt="Personal">
              </a>
            </div>

            <div
              class="tw-flex tw-flex-col tw-ml-5 tw-pl-5 tw-border-l tw-mx-0 tw-md:mx-12 tw-border-gray-inputs tw-leading-4">
              <div class="tw-flex tw-items-start tw-flex-col tw-pr-8 tw-sm:pr-0">
                <p class="tw-text-base tw-">Victor Rodríguez</p>
                <p class="tw-text-gray-inputs tw-text-sm">Administrador</p>
              </div>
            </div>

            <div class="tw-ml-auto">
              <a href="#">
                <img class="tw-min-w-2" :src="chevron">
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

      <!--ESTO PERMITE QUE EL MAIN ESTÉ DEBAJO DEL HEADER-->
      <div class="tw-flex tw-flex-col tw- tw-w-full">
        <!--END BLOCK-->

        <!--COMIENZO HEADER-->

        <!--END HEADER-->
        <q-drawer :mini="leftDrawerOpen" show-if-above bordered>
          <section class="tw-flex tw-flex-row tw-pt-5 tw-px-2 tw-justify-between tw-items-center">
            <a href="#" class="" :class="leftDrawerOpen ? 'tw-hidden' : ''">
              <img :src="ProLinkTicSm" alt="logo-LinkTic"></a>
            <q-btn flat round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          </section>
          <q-list>
            <q-item-label header>

            </q-item-label>

            <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" /> -->
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" color="grey-6" size="2rem" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>

            </q-item>

          </q-list>

        </q-drawer>
      </div>

    <q-page-container class="tw-bg-background " style="min-height: 100vh">
      <router-view class="tw-p-[40px]" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import home from "assets/home.svg"
import lines from "assets/icon-lines.svg"
import chevron from "assets/chevron.svg"
import mask from "assets/mask.svg"
import interrogation from "assets/interrogation.svg"
import tink from 'assets/tink.svg'
import graphic from 'assets/graphic-icon.svg'
import branch from 'assets/branch.svg'
import ProLinkTicSm from 'assets/ProLinkTic-little.svg'
import menu from 'assets/menu.svg'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false)
const search = ref("")

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
