<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <h-icon-button label="Open menu" @click="open = true">
    <Icon name="mdi:menu" />
  </h-icon-button>
  <h-navigation-drawer v-model:open="open">
    <navigation-inner />

    <navigation-extra />
  </h-navigation-drawer>
</template>
