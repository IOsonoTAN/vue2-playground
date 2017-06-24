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
	}
}