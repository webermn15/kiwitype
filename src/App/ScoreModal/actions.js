import request from 'superagent';


export const closeResult = () => {
	return {
		type: 'CLOSE_RESULT'
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
				dispatch(errorRetrievingMessage(err.message))
				dispatch(showAlert())
			})
	}
}


const errorRetrievingMessage = msg => {
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