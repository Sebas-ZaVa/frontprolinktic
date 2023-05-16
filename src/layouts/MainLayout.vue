<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat color="white" class="bg-white tw-shadow-md">
      <q-toolbar class="tw-p-0">

        <div class="row tw-flex tw-items-center tw-justify-between tw-w-full tw-bg-white tw-px-8 tw-h-24  tw-z-10 tw-">

          <div class="tw-flex tw-flex-row tw-justify-start col-5">
            <!--SEARCH-->
            <q-input outlined v-model="search" label="Buscar " dense class="tw-w-full">
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <!--END SEARCH-->


          <div class="tw-flex tw-flex-row tw-justify-center tw-items-center">

            <div class="md:tw-mr-5">
              <q-btn-dropdown class="tw-bg-blue-light  tw-text-black" label="Módulo SDGA" icon="archive">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Videos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Articles</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>

            <div class="tw-mx-2 tw-sm:mx-3">
              <a href="#">
                <q-btn icon="question_mark" text-color="black"></q-btn>
              </a>
            </div>

            <div class="tw-mx-2 tw-sm:mx-3">
              <a href="#">
                <q-btn icon="o_notifications" text-color="black"></q-btn>
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
                <div class="tw-flex tw-items-start tw-flex-col tw-pr-6 tw-sm:pr-0">
                  <p class="tw-text-base tw-text-black">Victor Rodríguez
                  </p>
                  <p class="tw-text-gray-400 tw-text-sm">Administrador</p>
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
      </q-toolbar>
    </q-header>

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
