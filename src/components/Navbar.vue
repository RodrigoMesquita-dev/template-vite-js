<template>
  <nav class="bg-primary p-4">
    <div class="container mx-auto flex flex-row justify-between items-center text-white">
      <div class="text-4x1">TEMPLATE</div>
        <div class="hidden laptop:block">
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/about">About</router-link>
        </div>
        <div class="fixed bottom-4 bg-red-500 right-4 rounded-full px-4 py-6 z-50 laptop:hidden" @click="toggle">
          <span>Menu</span>
        </div>
        <div class="fixed bg-primary text-2xl flex flex-col py-4 justify-center items-center inset-0" v-if="this.active">
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/about">About</router-link>  
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  },
}
</script>

<style>

</style>