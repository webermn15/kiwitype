import request from 'superagent';


export const getUserInfoFromToken = token => {
  return (dispatch) => {
    dispatch(requestLogin())
    request
      .get("https://kiwitype-api.herokuapp.com/users/token/"+token)
      .withCredentials()
      .then(res => {
        const parsed = JSON.parse(res.text)
        dispatch(setUserInfo(parsed.user))
        dispatch(fetchScores(parsed.user.id))
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}


const fetchScores = (id) => {
  return (dispatch) => {
    dispatch(requestScores())
    request
      .get("https://kiwitype-api.herokuapp.com/attempts/scores/"+id)
      .withCredentials()
      .end((err, res) => {
        const parsed = JSON.parse(res.text)
        dispatch(receiveScores(parsed))
      })
  }
}


export const requestScores = () => {
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