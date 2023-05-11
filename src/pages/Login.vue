<script lang="ts" setup >
import { ref } from 'vue'
import womenlogin from "assets/women-login.svg"
import proLinkTicLogo from "assets/ProLinkTic.svg"
import login from "assets/final-login.svg"
//import triggerError from './components/trigger-error.vue';

const error = ref(false)


const errorHandler = (e: any) => {
  e.preventDefault()
  error.value = true
}
</script>


<template>
  <section class="tw-min-h-screen  tw-h-full tw-flex tw-flex-col md:tw-flex-row ">
    <!-- SECCION IZQUIERDA IMAGEN-->
    <div class="tw-w-full">
      <div class="tw-relative tw-h-full tw-bg-blue-linktic">
        <img :src="womenlogin" class="tw-w-full tw-h-full tw-object-cover tw-bg-[#00A0FF] tw-object-left" alt="woman">
        <div class="tw-absolute tw-top-1/2 tw-left-14 tw-transform tw--translate-y-1/2">
          <h1 class="tw-text-white tw-font-semibold tw-text-3xl md:tw-text-6xl tw-text-left tw-mb-4">Bienvenido<br>de
            nuevo</h1>
          <p class="tw-text-white tw-text-base md:tw-text-xl tw-text-left tw-pr-6 tw-pb-8 tw-max-w-xs">En esta plataforma
            podrás Lorem Ipsum
            dolor sit amet</p>
          <a href="#"
            class="tw-text-blue-linktic tw-hidden sm:tw-block tw-text-center tw-bg-white tw-font-semibold tw-py-3 tw-mr-20 tw-rounded-md">¿Necesitas
            ayuda?</a>
        </div>
      </div>
    </div>
    <!--END BLOCK-->

    <!--SECCION DERECHA INICIAR SESION-->
    <div class="tw-flex tw-flex-col tw-mx-auto tw-bg-white tw- tw-z-50" style="width: 80%">
      <div class="tw-p-10 tw-mx-auto md:tw-mr-0">
        <img :src="proLinkTicLogo" alt="logo-linktic">
      </div>

      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <div class="tw-mx-auto tw-w-11/12 md:tw-w-10/12 lg:tw-w-3/5">
          <h1 class="tw-text-4xl tw-text-gray-texts tw-text-center">Completa tus datos<br> para ingresar</h1>

          <form class="tw-pt-3">

            <!-- AQUÍ DEBE IR EL TRIGGER ERROR  -->
            <trigger-error v-if="error" />
            <!-- AQUÍ DEBE IR EL TRIGGER ERROR -->

            <div class="tw-py-6">
              <label for="username" class="tw-block tw-text-gray-inputs tw-text-lg tw-mx-2 tw-mb-1">Usuario</label>
              <div class="tw-relative">
                <span class="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-3 tw-w-7 tw-flex tw-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#969EAF">
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17
                    71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2
                    16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132
                      0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0
                      35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                </span>
                <input type="text" id="username" name="username" placeholder="Ingrese su email" required
                  class="tw-border tw-rounded-xl tw-py-3 tw-pl-10 tw-w-full tw-shadow-sm">
              </div>
            </div>

            <div>
              <label for="username" class="tw-block tw-text-gray-inputs tw-text-lg tw-mx-2 tw-mb-1">Contraseña</label>
              <div class="tw-relative">
                <span class="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-3 tw-flex tw-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#969EAF" class="tw-bi tw-bi-lock"
                    viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2
                      0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0
                       1-1-1V9a1 1 0 0 1 1-1z" />
                  </svg>
                </span>
                <input type="password" id="password" name="password" placeholder="Ingrese su Ingrese su clave" required
                  class="tw-border tw-rounded-xl tw-py-3 tw-pl-10 tw-w-full tw-shadow-sm">
                <span class="tw-absolute tw-inset-y-0 tw-right-0 tw-pr-3 tw-w-8 tw-flex tw-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#969EAF"
                    class="tw-bi tw-bi-eye tw- tw-hidden sm:tw-block tw-" tw-viewBox="0 tw-0 tw-16 tw-16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133
                        13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168
                         2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83
                          1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134
                           13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5
                            8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </span>
              </div>
            </div>

            <div class="tw-flex tw-flex-col">

              <a href="#" class="tw-font-semibold tw-text-blue-linktic tw-ml-auto tw-mt-2">¿Olvidaste tu contraseña?</a>

              <div class="tw-flex tw-items-center tw-justify-center tw-mr-auto tw-pt-5">
                <label for="remember" class="tw-flex tw-items-center">
                  <input type="checkbox" id="remember" name="remember"
                    class="tw-h-6 tw-w-6 tw-border tw-border-gray-inputs tw-mr-2">
                  <span class="tw-text-gray-texts">Recordar mi clave</span>
                </label>
              </div>

              <button type="submit" @click="errorHandler"
                class="tw-flex tw-justify-center tw-items-center tw-w-auto tw-bg-blue-linktic tw-text-white tw-py-3 tw-rounded-lg tw-font-semibold tw-mt-5">Ingresar</button>
              <a href="#" class="tw-font-bold tw-text-blue-intense tw-mx-auto tw-my-8">Registrarme</a>
            </div>
          </form>
          <!--END FORM-->

        </div>
        <p
          class="tw-text-gray-texts tw-text-center tw-text-sm tw-mx-w-full tw-pt-10 tw-pb-6 tw--mx-2 md:tw-mx-0 md:tw-px-5">
          © 2023 Todos los
          derechos reservados. Desarrollado por LinkTIC</p>
      </div>

      <!--IMAGEN HOJAS-->
      <div class="tw-relative tw-mt-auto">
        <img :src="login" alt="final-login" class="tw-w-1/2 tw-absolute tw-bottom-0 tw-right-0" style="z-index: tw--1;">
      </div>

    </div>
  </section>
  <!--END BLOCK-->
</template>