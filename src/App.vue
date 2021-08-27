<template>
  <div id="app" class=" w-full">
    <!-- Top Navigation bar -->
    <main-navigation />

    <div id="nav" class="font-medium  mt-6 space-x-8 text-gray-900 text-lg">
      <router-link to="/" class="hover:text-indigo-500">
        Posts
      </router-link>

      <router-link class="hover:text-indigo-500" to="/create-post">
        Create Post
      </router-link>

      <router-link class="hover:text-indigo-500" to="/register">
        Register
      </router-link>

      <router-link class="hover:text-indigo-500" to="/login">
        Login
      </router-link>
      <!-- <router-link class="hover:text-indigo-500" to="/secret">
        Secret
      </router-link> -->
    </div>

    <div class="h-full">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue'

export default {
  components: {
    MainNavigation,
  },
  data() {
    return {
      name: 'SP Varma',
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
