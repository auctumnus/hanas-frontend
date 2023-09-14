<script setup lang="ts">
import { NuxtLink } from '#components'
</script>

<template>
  <h-navigation-button
    label="Languages"
    :as="NuxtLink"
    hide-label
    to="/lang"
    :is-active="$route.path.startsWith('/lang')"
  >
    <template #active>
      <Icon name="mdi:chat" />
    </template>
    <template #inactive>
      <Icon name="mdi:chat-outline" />
    </template>
  </h-navigation-button>
</template>
