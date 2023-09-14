<template>
  <template v-if="isCompact">
    <h-top-app-bar hide-on-scroll kind="center" :title="$route.meta.title || 'Hanas'">
      <template #navigation-icon>
        <navigation-drawer />
      </template>
    </h-top-app-bar>
    <h-navigation-bar hide-on-scroll style="background-color: var(--halcyon-surface-container)">
      <navigation-inner />
    </h-navigation-bar>
  </template>
  <h-navigation-rail v-else has-drawer>
    <template #drawer>
      <navigation-inner />
      <navigation-extra />
    </template>
    <template #content>
      <navigation-inner />
      <navigation-extra />
    </template>
  </h-navigation-rail>
</template>
