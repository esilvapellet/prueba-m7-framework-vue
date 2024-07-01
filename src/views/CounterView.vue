<template>
  <div class='counter'>
    <CounterComp />
  </div>
</template>

<script>
import CounterComp from '@/components/CounterComp.vue'

export default {
  name: 'CounterView',
  components: {
    CounterComp
  }
}
</script>
<style scoped lang='scss'>
</style>