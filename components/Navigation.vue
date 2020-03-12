<template>
  <!-- .hero-head -->
  <nav class="hero-head">
    <nav class="navbar has-background-info">
      <div class="container">
        <div class="navbar-brand">
          <NuxtLink
            to="/"
            class="navbar-item color-loggo"
            style="font-weight:bold;"
          >
            {{ website }}
          </NuxtLink>
          <span
            class="navbar-burger burger"
            :class="{ 'is-active': isBurgerOpen }"
            @click="BurgerClick"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': isBurgerOpen }">
          <div class="navbar-end">
            <NuxtLink
              to="/"
              class="navbar-item"
              :class="{ 'is-active': $route.name == '/' }"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="navbar-item"
              :class="{ 'is-active': $route.name == '/contact' }"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </nav>
  <!-- /.hero-head -->
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isBurgerOpen: false,
      website: '< Swecoden >'
    }
  },
  methods: {
    BurgerClick() {
      this.isBurgerOpen = !this.isBurgerOpen
      // this.$refs.burger.classList.toggle("is-active");
      // this.$refs.NavMenu.classList.toggle("is-active");
    }
  }
}
</script>

<style lang="css">

.navbar-item.nuxt-link-exact-active.nuxt-link-active:not(.color-loggo){
  background-color: #fafafa;
  color: #3273dc;
  box-shadow:0 1px 0 0 #00000031;
}

@media screen and (max-width: 1025px){
  .navbar-item.nuxt-link-exact-active.nuxt-link-active:not(.color-loggo){
    box-shadow: none;
  }
}
</style>