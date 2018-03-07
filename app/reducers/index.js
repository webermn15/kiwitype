/* my state
{
	userInfo: {
		id: 0,
		username: '',
		lifetimeWpm: 0,
		showInfo: false,
		authenticating: false,
		authenticated: false,
		session_token: null
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

import { combineReducers } from 'redux'
import { asideFilters } from '../actions'

const userInfo = (state = 
	{
		id: 0, 
		username: 'Guest', 
		lifetimeWpm: 0, 
		showInfo: false,
		authenticating: false,
		authenticated: false,
		session_token: null
	}, 
	action) => {
	switch (action.type) {
		case 'SET_USER':
			return Object.assign({}, state, {
				...state,
				authenticated: true,
				authenticating: false,
				id: data.id,
				username: data.username,
				lifetimeWpm: data.lifetimeWpm,
				session_token: data.session_token
			})
		case 'TOGGLE_INFO':
			return Object.assign({}, state, {
				...state,
				showInfo: !state.showInfo
			})
		case 'REQUEST_LOGIN':
			return Object.assign({}, state, {
				...state,
				authenticating: true
			})
		default:
			return state
	}
}

const currentExcerpt = (state = {}, action) => {
	switch (action.type) {
		case 'SET_SELECTED_EXCERPT':
			return Object.assign({}, state, action.object)
		default:
			return state
	}
}

const scores = (state = {isFetching: false, allScores: [], userScores: []}, action) => {
	switch (action.type) {
		case 'SET_ALL_SCORES':
			return Object.assign({}, state, {
				...state,
				allScores: action.scores.allScores,
				userScores: action.scores.userScores
			})
		case 'REQUEST_SCORES':
			return Object.assign({}, state, {
				...state,
				isFetching: true
			})
		case 'RECEIVE_SCORES':
			return Object.assign({}, state, {
				isFetching: false,
				allScores: action.scores.allScores,
				userScores: action.scores.userScores
			})
		default:
			return state
	}
}

const mostRecentAttempt = (state = {wpm: 0, title: '', isPosting: false, hasPosted: false}, action) => {
	switch (action.type) {
		case 'RECORD_WPM_LOCALLY':
			return Object.assign({}, state, {
				...state,
				wpm: action.wpm,
				title: action.title,
				isPosting: false,
				hasPosted: true
			})
		case 'RECORD_WPM_SERVER':
			return Object.assign({}, state, {
				...state,
				isPosting: true
			})
		case 'CLOSE_RESULT':
			return Object.assign({}, state, {
				...state,
				hasPosted: false
			})
		default:
			return state
	}
}

const filteredExcerpts = (state = [], action) => {
	switch (action.type) {
		case 'SET_FILTERED_EXCERPTS':
			return action.filteredExcerpts
		default:
			return state
	}
}

const asideFilter = (state = 'SHOW_EXCERPTS', action) => {
  switch (action.type) {
    case 'SET_ASIDE_FILTER':
      return action.filter
    default:
      return state
  }
}

const showLoginModal = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_LOGIN':
			return !state
		default:
			return state
	}
}

const registering = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_REGISTER':
			return !state
		default:
			return state
	}
}

const showStatsModal = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_STATS':
			return !state
		default:
			return state
	}
}

const kiwiApp = combineReducers({
	userInfo,
  currentExcerpt,
  scores,
  mostRecentAttempt,
	filteredExcerpts,
  asideFilter,
  showLoginModal,
  registering,
  showStatsModal
})
 
export default kiwiApp