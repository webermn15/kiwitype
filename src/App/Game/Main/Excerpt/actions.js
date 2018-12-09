import request from 'superagent';

export const postScore = (excerptId, wpm) => {
	return (dispatch) => {
		dispatch(postResult())
		request
			.post('https://kiwitype-api.herokuapp.com/attempts/new')
			.withCredentials()
			.type('form')
			.send({excerpt_id: excerptId, wpm: wpm})
			.end((err, res) => {
				if (err) {
					console.log(err, res) // Y I K E S
				}
				else {
					console.log(res) // YOINKS
					const parsed = JSON.parse(res.text)
					dispatch(recordWpm(parsed.wpm, parsed.title, excerptId))
				}
			})
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