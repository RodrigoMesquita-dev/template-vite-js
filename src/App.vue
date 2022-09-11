<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar class="w-full"/>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>}

<style scoped>

</style>
