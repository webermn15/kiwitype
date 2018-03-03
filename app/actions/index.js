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


export const asideFilters = {
	SHOW_EXCERPTS: 'SHOW_EXCERPTS',
	SHOW_ALL_SCORES: 'SHOW_ALL_SCORES',
	SHOW_USER_SCORES: 'SHOW_USER_SCORES'
}


export const setAllScores = array => {
	return {
		type: 'SET_ALL_SCORES',
		allScores: array
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

