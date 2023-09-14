<script setup lang="ts">
const mainMargin = computed(() => (isCompact.value ? '8px' : '88px'))

const route = useRoute()

const auth = useAuth()

useHead({
  title: computed(() => {
    const title = route.meta.title
    return title ? `${title} | Hanas` : 'Hanas'
  }),
  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: '/favicon.svg'
    }
  ]
})
</script>

<template>
  <div>
    <main-navigation />
    <NuxtPage />
    <h-tooltip />
  </div>
</template>

<style>
main {
  padding-left: v-bind(mainMargin);
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>
