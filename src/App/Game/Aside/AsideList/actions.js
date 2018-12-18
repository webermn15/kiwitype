import request from 'superagent';

export const setSelectedExcerpt = object => {
	return {
		type: 'SET_SELECTED_EXCERPT',
		object: object
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


const errorGettingScores = msg => {
	return {
		type: 'ERROR_MSG',
		message: msg
	}
}


const showAlert = () => {
	return {
		type: 'SHOW_ALERT'
	}
}


export const fetchScores = (id) => {
	return (dispatch) => {
		dispatch(requestScores())
		request
			.get("https://kiwitype-api.herokuapp.com/attempts/scores/"+id)
			.withCredentials()
			.then(res => {
				const parsed = JSON.parse(res.text)
				dispatch(receiveScores(parsed))
			})
			.catch(err => {
				dispatch(errorGettingScores(err.message))
				dispatch(showAlert())
			})
	}
}