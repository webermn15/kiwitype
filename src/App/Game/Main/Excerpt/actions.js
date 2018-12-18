import request from 'superagent';

export const postScore = (excerptId, wpm) => {
	return (dispatch) => {
		dispatch(postResult())
		request
			.post('https://kiwitype-api.herokuapp.com/attempts/new')
			.withCredentials()
			.type('form')
			.send({excerpt_id: excerptId, wpm: wpm})
			.then(res => {
				const parsed = JSON.parse(res.text)
				dispatch(recordWpm(parsed.wpm, parsed.title, excerptId))
			})
			.catch(err => {
				dispatch(errorPostingScores(err.message))
				dispatch(showAlert())
			})
	}
}


const errorPostingScores = msg => {
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


const postResult = () => {
	return {
		type: 'RECORD_WPM_SERVER'
	}
}


export const recordWpm = (wpm, title, id) => {
	return {
		type: 'RECORD_WPM_LOCALLY',
		wpm: wpm,
		title: title,
		excerptId: id
	}
}