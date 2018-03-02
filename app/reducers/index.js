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
	}
	allScores: [],
	userScores: [],
	filteredExcerpts: [],
	asideFilter: 'SHOW_EXCERPTS'
}
*/

import { combineReducers } from 'redux'
import { asideFilters } from '../actions'

const setUser = (state = {id: 0, username: 'Guest', lifetimeWpm: 0}, action) => {
	switch (action.type) {
		case 'SET_USER':
			return Object.assign({}, state, action.user)
		default:
			return state
	}
}

const selectExcerpt = (state = {}, action) => {
	switch (action.type) {
		case 'SET_SELECTED_EXCERPT':
			return Object.assign({}, state, action.object)
		default:
			return state
	}
}

const populateAllScores = (state = [], action) => {
	switch (action.type) {
		case 'GET_ALL_SCORES':
			return ['new all scores']
		default:
			return state
	}
}

const populateUserScores = (state = [], action) => {
	switch (action.type) {
		case 'GET_USER_SCORES':
			return ['new user scores']
		default:
			return state
	}
}

const populateExcerpts = (state = [], action) => {
	switch (action.type) {
		case 'GET_NEW_EXCERPTS':
			return ['new excerpts']
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

const kiwiApp = combineReducers({
	setUser,
  selectExcerpt,
  populateAllScores,
	populateUserScores,
	populateExcerpts,
  asideFilter
})
 
export default kiwiApp