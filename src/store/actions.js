import Vue from 'vue'

export default {
	register({ commit }, userId) {
		setTimeout(() => {
			commit('register', userId)
		}, 100)
	},
	getComments({ commit }) {
		Vue.http.get('https://jsonplaceholder.typicode.com/comments').then(response => {
			commit('getComments', response)
		})
	},
	removeComments({ commit }) {
		commit('removeComments')
	},
	removeComment({ commit }, commentId) {
		commit('removeComment', commentId)
	}
}