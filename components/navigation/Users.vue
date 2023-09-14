<script setup lang="ts">
import { NuxtLink } from '#components'
</script>

<template>
  <h-navigation-button
    label="Users"
    :as="NuxtLink"
    hide-label
    to="/user"
    :is-active="$route.path.startsWith('/user')"
  >
    <template #active>
      <Icon name="mdi:account" />
    </template>
    <template #inactive>
      <Icon name="mdi:account-outline" />
    </template>
  </h-navigation-button>
</template>
