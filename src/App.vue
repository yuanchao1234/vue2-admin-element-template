<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import layout from '@/views/layout/index.vue'
export default {
  name: 'App',
  components: {
    layout
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html, 
body,
#app,
.layout{
  height: 100%;
}
</style>
