<script setup lang="ts">
import { NuxtLink } from '#components'
const showBadge = true
const badgeCount = 3
</script>

<template>
  <h-navigation-button
    label="Invites"
    :as="NuxtLink"
    hide-label
    to="/invite"
    :is-active="$route.path.startsWith('/invite')"
    :show-badge="showBadge"
    :badge-count="badgeCount"
  >
    <template #active>
      <Icon name="mdi:mailbox" />
    </template>
    <template #inactive>
      <Icon name="mdi:mailbox-outline" />
    </template>
  </h-navigation-button>
</template>
