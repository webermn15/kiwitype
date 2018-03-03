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
	SHOW_SCORES: 'SHOW_SCORES',
	SHOW_MY_SCORES: 'SHOW_MY_SCORES'
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