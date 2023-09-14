<script setup lang="ts">
import { NuxtLink } from '#components'
</script>

<template>
  <h-navigation-button
    label="Settings"
    :as="NuxtLink"
    hide-label
    to="/settings"
    :is-active="$route.path === '/settings'"
  >
    <template #active>
      <Icon name="mdi:cog" />
    </template>
    <template #inactive>
      <Icon name="mdi:cog-outline" />
    </template>
  </h-navigation-button>
</template>
