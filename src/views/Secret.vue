<template>
  <div class="h-full">
    <h3>
      <h5 class="secret" v-for="secret in secrets" :key="secret.char_id">
        {{ secret.name }}
      </h5>

      <!-- <router-link
        class="bg-indigo-500 hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 border text-white px-4 py-3 w-60 mt-10 rounded-md shadow-lg"
        to="/create-post"
      >
        Add New Post
      </router-link> -->

      <!-- <h4 class="text-gray-900 font-medium text-md">Create Your Post</h4> -->
    </h3>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      secrets: '',
    }
  },
  mounted() {
    this.getSecrets()
  },
  methods: {
    async getSecrets() {
      const token = await firebase.auth().currentUser.getIdToken()
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      this.secrets = await this.$axios.get('http://localhost:3000/erik', config)
      this.secrets = this.secrets.data
    },
  },
}
</script>

<style scoped>
div {
  color: inherit;
}
</style>
