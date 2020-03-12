<template>
  <div>
    <Navigation />
    <nuxt />
  </div>
</template>
<script>
import Navigation from '~/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>
<style>
@import '~/assets/styles/grid.css';
@import '~/assets/styles/helpers.css';
@import '~/assets/styles/main.css';
</style>
