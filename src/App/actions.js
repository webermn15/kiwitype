import request from 'superagent';


export const errorGettingScores = msg => {
	return {
		type: 'ERROR_MSG',
		message: msg
	}
}

export const showAlert = () => {
	return {
		type: 'SHOW_ALERT'
	}
}

export const setSelectedExcerpt = object => {
	return {
		type: 'SET_SELECTED_EXCERPT',
		object: object
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


const requestScores = () => {
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
			.get("https://kiwitype-api.herokuapp.com/attempts/scores/"+id)
			.withCredentials()
			.end((err,res) => {
				const parsed = JSON.parse(res.text)
				dispatch(receiveScores(parsed))
			})
	}
}