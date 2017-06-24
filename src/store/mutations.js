export default {
	register(state, userId) {
		console.log('mutations -> register')
		const date = new Date
		const user = state.users.find(user => {
			return user.id == userId
		})
		user.registered = true
		const registration = {
			userId,
			name: user.name,
			date: date.getMonth() + '/' + date.getDay()
		}
		state.registrations.push(registration)
	},
	unregister(state, payload) {
		const user = state.users.find(user => {
			return user.id == payload.userId
		})
		user.registered = false
		state.registrations.splice(state.registrations.indexOf(registration), 1)
	},
	getComments(state, { body }) {
		state.comments = body
	},
	removeComments(state, payload) {
		state.comments = []
	},
	removeComment(state, payload) {
		const comment = state.comments.find(comment => {
			return comment.id == payload.id
		})
		state.comments.splice(state.comments.indexOf(comment), 1)
	}
}