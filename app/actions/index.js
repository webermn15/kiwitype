/* my state
{
	userInfo: {
		id: 0,
		username: '',
		lifetimeWpm: 0
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


export const setUserInfo = info => {
	return {
		type: 'SET_USER',
		user: info
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
			.type('form')
			.send({excerpt_id: excerptId, wpm: wpm})
			.end((err, res) => {
				const parsed = JSON.parse(res.text)
				console.log(parsed, 'postscore action creator')
				dispatch(recordWpm(parsed.wpm, parsed.title))
			})
	}
}






// // thunk example
// function logOutUser() {
// 	return function(dispatch, getState) {
// 		return axios.post('/logout').then(function() {
// 			// pretend we declared an action creator
// 			// called 'userLoggedOut', and now we can dispatch it
// 			dispatch(userLoggedOut());
// 		});
// 	}
// }
