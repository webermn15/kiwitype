export const getUserInfoFromToken = token => {
  return (dispatch) => {
    dispatch(requestLogin())
  	request
  		.get("https://kiwitype-api.herokuapp.com/users/token/"+token)
  		.withCredentials()
  		.end((err,res) => {
				const parsed = JSON.parse(res.text)
				if (parsed.success) {
					console.log(parsed.user.id)
					dispatch(setUserInfo(parsed.user))
					// dispatch(fetchScores(parsed.user.id))
				}
				else {
					console.log(parsed)
				}
  		})
  }
}


export const setUserInfo = data => {
	localStorage.setItem('kiwiTypeUser', data.session_token)
	return {
		type: 'SET_USER',
		data
	}
}


const requestLogin = () => {
	return {
		type: 'REQUEST_LOGIN'
	}
}