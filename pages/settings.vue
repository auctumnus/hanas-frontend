<script setup lang="ts">
definePageMeta({
  title: 'Settings'
})

const themes = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
]

const theme = ref('system')
</script>

<template>
  <main>
    <appear-transition>
      <h1 v-if="!isCompact" class="display-large">
        Settings
      </h1>
    </appear-transition>

    <section>
      <h1 class="title-large">
        Theme
      </h1>
      <h-select v-model="theme" label="Theme" :options="themes" />
    </section>

    <section>
      <div>
        <h1 class="title-large">
          Language
        </h1>
        <h2 class="body-large">
          The language Hanas is displayed in.
        </h2>
      </div>
      <!--<settings-language-select />-->
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  margin-left: 32px;
}

section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 50ch;

  align-items: center;

  & + section {
    margin-top: 8px;
  }
}
</style>
