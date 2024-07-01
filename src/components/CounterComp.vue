<template>
  <header>
    <h1 class="text-center my-3">Componente Contador</h1>
  </header>
  <main class="counter container">
    <p class="counterText">El valor del contador es: {{ counter }}</p>
    <div class="d-flex justify-content-center">
      <button
        class="btn btn-primary decreaseButton m-3 p-3"
        @click="decreaseValue"
      >
        <i class="fa-solid fa-circle-minus"></i>
      </button>
      <button
        class="btn btn-primary increaseButton m-3 p-3"
        @click="increaseValue"
      >
        <i class="fa-solid fa-circle-plus"></i>
      </button>
    </div>
</main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CounterComp",
  data() {
    return {

    }
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapActions(["increaseValue", "decreaseValue"]),
  },
};
</script>

<style scoped lang='scss'>
</style>