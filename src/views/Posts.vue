<template>
  <div class="mt-10 max-w-7xl mx-6">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="bg-gray-800 text-white p-10 text-center space-y-5"
    >
      <h1 v-if="post" class="text-3xl">{{ post.title }}</h1>
      <p v-if="post" class="text-xl">{{ post.description }}</p>

      <!-- Comment Section -->
      <div class="mt-6">
        <label
          for="title"
          class="block text-sm text-left font-medium text-gray-700"
        >
          Add Comment
        </label>

        <div class="mt-1">
          <input
            v-model="comment"
            type="text"
            name="comment"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="button"
          @click="addComment"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'posts',

  data() {
    return { posts: [], comment: '' }
  },

  created() {
    this.fetchPosts()
  },

  methods: {
    ...mapActions(['fetchPosts']),

    addComment() {
      let data = this.comment

      this.comment.push(data)
    },
  },
}
</script>

<style>
div {
  color: inherit;
}
</style>
