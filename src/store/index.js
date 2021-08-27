import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {
      title: '',
      description: '',
      user_id: '',
    },
    posts: [],
  },

  mutations: {},

  actions: {
    fetchPosts() {
      axios.get('/posts').then((response) => {
        this.posts = response.data
      })
    },
    addPost() {
      axios.post('/post/1', this.formData).then((response) => {
        console.log(response)
        this.formData.push(response.data)
        window.location.reload()
      })
    },
  },

  modules: {},
})
