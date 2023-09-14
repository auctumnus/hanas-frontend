<script setup lang="ts">
import { SignUpPartOne, SignUpPartTwo } from '#components'

definePageMeta({
  title: 'Sign up'
})

const part = ref(1)

const router = useRouter()

const component = computed(() => {
  switch (part.value) {
    case 1: return SignUpPartOne
    case 2: return SignUpPartTwo
  }
  return SignUpPartOne
})

const onDone = () => {
  switch (part.value) {
    case 1: part.value = 2; break
    case 2: navigateTo('/'); break
  }
}
</script>

<template>
  <main>
    <appear-transition>
      <h1 v-if="!isCompact" class="display-small">
        Sign up
      </h1>
    </appear-transition>
    <!--<h-button content="one" @click="part = 1" kind="filled" />
        <h-button content="two" @click="part = 2" kind="filled" />-->

    <Transition name="fade" mode="out-in">
      <component :is="component" key="part" @done="onDone" />
    </Transition>
  </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

h1 {
  margin-top: 30px;
}
</style>
