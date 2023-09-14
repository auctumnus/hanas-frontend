<script setup lang="ts">
import { NuxtLink } from '#components'
</script>

<template>
  <h-navigation-button
    label="Profile"
    :as="NuxtLink"
    hide-label
    to="/"
    :is-active="$route.path === '/profile'"
  >
    <template #active>
      <profile-picture />
    </template>
    <template #inactive>
      <profile-picture />
    </template>
  </h-navigation-button>
</template>
