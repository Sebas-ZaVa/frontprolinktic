<template>
  <section class="tw-flex tw-flex-row">
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
    <!--COMIENZO ASIDE-->
    <aside class="tw-w-1/6 tw-hidden sm:tw-block tw-shadow-r tw-shadow-lg tw-min-h-full tw-bg-white tw-z-20"
      style="min-width: 300px; min-height: 100vh;">
      <div class="tw-flex tw-flex-row tw-pt-5">
        <a href="#" class="tw-m-auto"><img :src="ProLinkTicSm" alt="logo-LinkTic"></a>
        <a href="#" class="tw-m-auto"><img :src="menu" alt="menu"></a>
      </div>

      <div
        class=" tw-px-6 tw-pt-10 tw-flex tw-flex-col tw-text-gray-texts tw-text-base tw-font-medium tw--auto tw-top-0 tw-left-0 tw-min-w-[300px]">
        <a href="#">
          <span class="tw-flex tw-flex-row tw-gap-4 tw-py-7 tw-m-auto tw-items-center">
            <img :src="home" alt="icon-home">
            <p>Home</p>
          </span>
        </a>

        <a href="#">
          <span class="tw-flex tw-flex-row tw-gap-4 tw-m-auto tw-py-7 tw-items-center">
            <img :src="lines" alt="icon">
            <p class="tw-flex-grow">SGDA</p>
            <img :src="chevron" alt="open">
          </span>
        </a>

        <a href="#">
          <span class="tw-flex tw-flex-row tw-gap-3 tw-m-auto tw-py-7 tw-items-center">
            <img :src="branch" alt="icon-branch">
            <p>BPMN</p>
          </span>
        </a>

        <a href="#">
          <span class="tw-flex tw-flex-row tw-gap-4 tw-m-auto tw-py-7 tw-items-center">
            <img :src="graphic" alt="icon-reports">
            <p>Reportes</p>
          </span>
        </a>
      </div>

    </aside>
    <!--END ASIDE-->

    <!--ESTO PERMITE QUE EL MAIN ESTÉ DEBAJO DEL HEADER-->
    <div class="tw-flex tw-flex-col tw- tw-w-full">
      <!--END BLOCK-->

      <!--COMIENZO HEADER-->
      <header class="tw-header tw-top-0 tw-flex tw-flex-grow">
        <div
          class="tw-flex tw-items-center tw-justify-between tw-w-full tw-bg-white tw-px-8 tw-h-24 tw-shadow-md tw-z-10 tw-">

          <div class="tw-flex tw-flex-row tw-justify-start">
            <!--SEARCH-->
            <div class="tw-relative">
              <input
                class="tw-pl-10 tw-w-24 tw-sm:52 tw-lg:w-96 tw-py-3 tw-rounded-lg tw-border tw-border-gray-sky tw-bg-white"
                type="search" placeholder="Buscar" style="">
              <div class="tw-absolute tw-inset-y-0 tw-left- tw-flex tw-items-center tw-pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#505050" class="tw-bi tw-bi-search"
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
      <!--CONTENIDO PRICIPAL-->
      <main class="tw-min-h-screen tw-w-full tw-p-7 tw-bg-blue-fondo">

        <h1 class="tw-text-3xl tw-font-medium">Bienvenido, Victor</h1>

      </main>
      <!-- END BLOCK -->

    </div>
  </section>
</template>

<script setup lang="ts">
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
import {ref} from "vue";

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
