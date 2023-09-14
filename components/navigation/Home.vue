<script setup lang="ts">
import { NuxtLink } from '#components'
</script>

<template>
  <h-navigation-button
    label="Home"
    :as="NuxtLink"
    hide-label
    to="/"
    :is-active="$route.path === '/'"
  >
    <template #active>
      <Icon name="mdi:home" />
    </template>
    <template #inactive>
      <Icon name="mdi:home-outline" />
    </template>
  </h-navigation-button>
</template>
