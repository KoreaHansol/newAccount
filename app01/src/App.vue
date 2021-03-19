<template>
  <div class="app">
    <calander />
  </div>
</template>

<script>
import calander from '@/components/calander'

export default {
  name: 'App',
  components: {
    calander
  }
}
</script>

<style scoped>
  .app {
    width: 100%;
    height: 100%;
  }
</style>
