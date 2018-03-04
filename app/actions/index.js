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
	asideFilter: 'SHOW_EXCERPTS'
}
*/
import request from 'superagent'


export const AsideFilters = {
	SHOW_EXCERPTS: 'SHOW_EXCERPTS',
	SHOW_ALL_SCORES: 'SHOW_ALL_SCORES',
	SHOW_USER_SCORES: 'SHOW_USER_SCORES'
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


export const RECEIVE_SCORES = 'RECEIVE_SCORES'
 
const receiveScores = () => {
	return {
		type: 'RECEIVE_SCORES',
		scores: {
			allScores: object.allScores,
			userScores: object.userScores
		}
	}
}



export const fetchScores = (id) => {
  return (dispatch) => {
    dispatch(requestScores())
    return 
    	request
    		.get("http://localhost:9292/attempts/scores/"+id)
    		.end((err, data) => {
					if (err) {
						console.log(err)
					}
					else {
						const parsed = JSON.parse(data.text)
						// console.log(parsed, 'parse me daddy')
						const scores = {allScores: parsed.allscores, userScores: parsed.userscores}
						dispatch(receiveScores(scores))
					}
			})
  }
}







