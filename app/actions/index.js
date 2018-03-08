/* my state
{
	userInfo: {
		id: 0,
		username: '',
		lifetimeWpm: 0,
		showInfo: false,
		authenticating: false,
		authenticated: false,
		session_token: null,
		errorMsg: null
	},
	currentExcerpt: {
		id: 0,
		author: '',
		title: '',
		description: '',
		body: ''
	},
	scores: {
		isFetching: false,
		allScores: [],
		userScores: []
	},
	lastAttempt: {
		wpm: 0,
		title: '',
		isPosting: false
	}
	filteredExcerpts: [],
	asideFilter: 'SHOW_EXCERPTS',
	showLoginModal: false,
	registering: false,
	showStatsModal: false,
	showResultModal: false
}
*/

import request from 'superagent'

// TOGGLE & SCORE LOGIC
export const AsideFilters = {
	SHOW_EXCERPTS: 'SHOW_EXCERPTS',
	SHOW_ALL_SCORES: 'SHOW_ALL_SCORES',
	SHOW_USER_SCORES: 'SHOW_USER_SCORES'
}


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


export const toggleStatsModal = () => {
	return {
		type: 'TOGGLE_STATS'
	}
}


export const toggleInfo = () => {
	return {
		type: 'TOGGLE_INFO'
	}
}


export const setAllScores = object => {
	return {
		type: 'SET_ALL_SCORES',
		scores: {
			allScores: object.allScores,
			userScores: object.userScores
		}
	}
}


export const setFilteredExcerpts = array => {
	return {
		type: 'SET_FILTERED_EXCERPTS',
		filteredExcerpts: array
	}
}


export const setSelectedExcerpt = object => {
	return {
		type: 'SET_SELECTED_EXCERPT',
		object: object
	}
}


export const setAsideFilter = filter => {
	return {
		type: 'SET_ASIDE_FILTER',
		filter
	}
}


// USER LOGIN / REGISTER
export const getLoginInfo = data => {
	return (dispatch) => {
		dispatch(requestLogin())
		request
			.post("http://localhost:9292/users/login")
			.withCredentials()
			.type('form')
			.send(data)
			.end((err, res) => {
				const parsed = JSON.parse(res.text)
				console.log(parsed)
				if (parsed.success) {
					dispatch(setUserInfo(parsed.user))
					dispatch(toggleLoginModal())
				}
				else {
					dispatch(loginFailed(parsed.message))
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
			.get('http://localhost:9292/users/logout')
			.end((err, res) => {
				const parsed = JSON.parse(res.text)
				if (parsed.success) {
					dispatch(userIsLoggedOut())
				}
			})
	}
}


export const setUserInfo = data => {
	localStorage.setItem('kiwiTypeUser', data.session_token)
	console.log(data)
	return {
		type: 'SET_USER',
		data
	}
}


export const getUserInfoFromToken = token => {
  return (dispatch) => {
    dispatch(requestLogin())
  	request
  		.get("http://localhost:9292/users/token/"+token)
  		.end((err,res) => {
				const parsed = JSON.parse(res.text)
				console.log(parsed)
				if (parsed.success) {
					dispatch(setUserInfo(parsed.user))
				}
				else {
					console.log(parsed)
				}
  		})
  }
}


export const registerNewUser = data => {
	return (dispatch) => {
		dispatch
	}
}


// SCORE LOGIC & SENDING
export const requestScores = () => {
  return {
    type: 'REQUEST_SCORES'
  }
}

 
const receiveScores = object => {
	return {
		type: 'RECEIVE_SCORES',
		scores: {
			allScores: object.allscores,
			userScores: object.userscores
		}
	}
}


export const fetchScores = (id) => {
  return (dispatch) => {
    dispatch(requestScores())
  	request
  		.get("http://localhost:9292/attempts/scores/"+id)
  		.type('json')
  		.end((err,res) => {
  			const parsed = JSON.parse(res.text)
  			console.log(parsed)
  			dispatch(receiveScores(parsed))
  		})
  }
}


const postResult = () => {
	return {
		type: 'RECORD_WPM_SERVER'
	}
}


export const recordWpm = (wpm, title) => {
	return {
		type: 'RECORD_WPM_LOCALLY',
		wpm: wpm,
		title: title
	}
}


export const closeResult = () => {
	return {
		type: 'CLOSE_RESULT'
	}
}


export const postScore = (excerptId, wpm) => {
	return (dispatch) => {
		dispatch(postResult())
		request
			.post('http://localhost:9292/attempts/new')
			.withCredentials()
			.type('form')
			.send({excerpt_id: excerptId, wpm: wpm})
			.end((err, res) => {
				console.log(res)
				const parsed = JSON.parse(res.text)
				dispatch(recordWpm(parsed.wpm, parsed.title))
			})
	}
}




