import React from 'react'
import LoginModal from './LoginModal'
import Logout from './Logout'
import LoginButton from './LoginButton'

const Login = ({showLoginModal, registering, authenticating, errorMsg, toggleLoginModal, requestLogin, requestLogout, toggleRegister, loggedIn}) => (
	<div>
		{loggedIn ? <Logout requestLogout={requestLogout}/> : <LoginButton onClick={() => toggleLoginModal()} registering={registering}/>}
		{showLoginModal ? <LoginModal toggleRegister={toggleRegister} requestLogin={requestLogin} registering={registering} authenticating={authenticating} errorMsg={errorMsg}/> : null}
	</div>
)

export default Login