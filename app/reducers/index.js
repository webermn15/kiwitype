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
	filteredExcerpts: [],
	asideFilter: 'SHOW_EXCERPTS',
	showLoginModal: false,
	registering: false,
	showStatsModal: false
}
*/

import { combineReducers } from 'redux'
import { asideFilters } from '../actions'

const userInfo = (state = {id: 0, username: 'Guest', lifetimeWpm: 0}, action) => {
	switch (action.type) {
		case 'SET_USER':
			return Object.assign({}, state, action.user)
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
	filteredExcerpts,
  asideFilter,
  showLoginModal,
  registering,
  showStatsModal
})
 
export default kiwiApp