<template>
  <div>
    <q-page class="q-pa-xl">
      <section class="q-mb-xl">
        <p class="text-h1">Flexbox-Menu</p>
        <q-separator></q-separator>
        <div class="row items-center justify-between bg-primary q-px-sm" :style="{ minHeight: '50px' }">
          <div class="row">
            <q-btn icon="menu" flat dense color="white"></q-btn>
            <div class="text-h6 text-white">Quasar APP</div>
          </div>
          <q-btn icon="light_mode" flat dense color="white"></q-btn>
        </div>
      </section>
      <section class="q-mb-xl">
        <p class="text-h1">Flexbox-row</p>
        <q-separator></q-separator>
        <div class="row">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
      </section>
      <section class="q-mb-xl">
        <p class="text-h1">Flexbox-column</p>
        <q-separator></q-separator>
        <div class="column">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
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
.square {
  height: 80px;
  width: 80px;
  background-color: $primary;
  border: 1px solid black;
  display: inline-block;
}
</style>
