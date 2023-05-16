<template>
  <div>
    <q-breadcrumbs
        gutter="sm"
        style="color: #006FB0"
        >
      <q-breadcrumbs-el
          v-for="crumb in crumbs"
          :key="crumb.name"
          :label="crumb.name"
          :to="crumb.to"
      />
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  crumbs: {[key:string]: string| undefined}[]
}>()
</script>
