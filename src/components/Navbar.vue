<template>
  <nav class="bg-primary p-4">
    <div class="container mx-auto flex flex-row justify-between items-center text-white">
      <div class="text-4x1">TEMPLATE</div>
        <div>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/about">About</router-link>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>