import request from 'superagent'

export const toggleLoginModal = () => {
	return {
		type: 'TOGGLE_LOGIN'
	}
}


export const toggleRegister = () => {
	return {
		type: 'TOGGLE_REGISTER'
	}
}


export const getLoginInfo = data => {
	return (dispatch) => {
		dispatch(requestLogin())
		request
			.post("https://kiwitype-api.herokuapp.com/users/login")
			.withCredentials()
			.type('form')
			.send(data)
			.end((err, res) => {
				if (res.text !== undefined) {
					const parsed = JSON.parse(res.text)
					if (parsed.success) {
						dispatch(setUserInfo(parsed.user))
						dispatch(toggleLoginModal())
					}
					else {
						dispatch(loginFailed(parsed.message))
					}
				}
				else {
					console.log(err)
				}
			})
	}
}


const requestLogin = () => {
	return {
		type: 'REQUEST_LOGIN'
	}
}


const loginFailed = errorMsg => {
	return {
		type: 'LOGIN_FAILED',
		message: errorMsg
	}
}


const logUserOut = () => {
	return {
		type: 'REQUEST_LOGOUT'
	}
}


const userIsLoggedOut = () => {
	localStorage.removeItem('kiwiTypeUser')
	return {
		type: 'LOGOUT_USER'
	}
}


export const requestLogout = () => {
	return (dispatch) => {
		dispatch(logUserOut())
		request
			.get('https://kiwitype-api.herokuapp.com/users/logout')
			.withCredentials()
			.end((err, res) => {
				const parsed = JSON.parse(res.text)
				if (parsed.success) {
					dispatch(userIsLoggedOut())
				}
			})
	}
}


const requestRegister = () => {
	return {
		type: 'REQUEST_REGISTER'
	}
}


const setNewUser = data => {
	localStorage.setItem('kiwiTypeUser', data.session_token)
	return {
		type: 'REGISTER_USER',
		data
	}
}


export const registerNewUser = data => {
	return (dispatch) => {
		dispatch(requestRegister())
		request
			.post("https://kiwitype-api.herokuapp.com/users/register")
			.withCredentials()
			.type('form')
			.send(data)
			.end((err, res) => {
				const parsed = JSON.parse(res.text)
				if (parsed.success) {
					dispatch(setNewUser(parsed.user))
					dispatch(toggleLoginModal())
				}
				else {
					console.log(parsed)
				}
			})
	}
}