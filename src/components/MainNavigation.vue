<template>
  <div class="flex justify-between px-6 py-5">
    <div v-if="loggedIn" class="text-indigo-500 font-medium text-md">
      User Logged In Successfully.
    </div>
    <div v-else class="text-red-500 font-medium text-md">
      No User Logged In!
    </div>
    <button
      type="submit"
      class="w-40 flex justify-center py-2 px-4 border border-transparent  hover:text-indigo-800 rounded-md shadow-sm text-md text-white bg-transparent border border-indigo-500  hover:bg-opacity-30 text-indigo-500 font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="signOut"
    >
      Sign out
    </button>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'top-header',
  mounted() {
    this.setupFirebase()
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          this.loggedIn = true
        } else {
          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'login' })
        })
    },
  },
  data() {
    return {
      loggedIn: false,
    }
  },
}
</script>
