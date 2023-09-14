<script setup lang="ts">
import { inject } from 'vue'
const auth = useAuth()

const inDrawer = inject('in drawer', false)
</script>

<template>
  <div class="end" :class="{ 'in-drawer': inDrawer }">
    <navigation-settings />
    <navigation-profile v-if="auth.isLoggedIn" />
  </div>
</template>

<style scoped lang="scss">
.end {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.in-drawer {
  margin-bottom: 4px;
}
</style>
