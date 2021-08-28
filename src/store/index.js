import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },

  getters: {
    getAllPosts: (state) => state.posts,
  },

  mutations: {
    add_post(state, data) {
      state.posts.push(data)
      localStorage.setItem('posts', JSON.stringify(state.posts))
    },
    set_posts(state) {
      state.posts = JSON.parse(localStorage.getItem('posts'))
    },
    add_comment(state, data) {
      localStorage.setItem('posts', JSON.stringify(data))
    },
  },

  actions: {
    fetchPosts({ commit }) {
      commit('set_posts')
    },
    addPost({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('https://jsonplaceholder.typicode.com/posts', data)
          .then((response) => {
            commit('add_post', response.data)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    addPostComment({ commit }, data, id) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
            data
          )
          .then((response) => {
            commit('add_comment', response.data)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },

  modules: {},
})
