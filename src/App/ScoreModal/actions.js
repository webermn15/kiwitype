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
			.end((err,res) => {
				const parsed = JSON.parse(res.text)
				dispatch(receiveScores(parsed))
			})
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