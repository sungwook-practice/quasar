<template>
  <div>
    <q-page class="q-pa-xl">
      <section class="q-mb-xl">
        <p class="text-h1">Headlines</p>
        <q-separator class="q-my-md"></q-separator>
        <div class="text-h4">Headline 1</div>
        <div class="text-h4">Headline 2</div>
      </section>
      <section class="q-mb-xl">
        <p class="text-h1">Components</p>
        <q-separator class="q-my-md"></q-separator>
        <q-btn color="accent">accent</q-btn>
      </section>
    </q-page>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
p {
  color: $red;
  background-color: $grey-5
}
</style>
