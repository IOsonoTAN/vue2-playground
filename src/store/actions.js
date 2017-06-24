export default {
	register({ commit }, userId) {
		console.log('actions -> register')
		setTimeout(() => {
			commit('register', userId)
		}, 100)
	},
}