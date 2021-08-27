<template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Login
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          class="space-y-6"
          action="#"
          method="POST"
          @submit.prevent="submitUser"
        >
          <div>
            <label
              for="email"
              class="block text-left text-sm font-medium text-gray-700"
            >
              Email / User Id
            </label>

            <div class="mt-1">
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                placeholder="email"
                autocomplete="email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <label
              for="password"
              class="block text-left text-sm mt-4 font-medium text-gray-700"
            >
              Password
            </label>

            <div class="mt-1">
              <input
                v-model="password"
                type="password"
                placeholder="password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div class="error" v-if="error">{{ error.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    submitUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data)
          this.$router.replace({ name: 'secret' })
        })
        .catch((error) => {
          this.error = error
        })
    },
  },
}
</script>
