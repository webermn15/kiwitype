import React from 'react'
import LoginModal from './LoginModal'
import Logout from './Logout'
import LoginButton from './LoginButton'

const Login = ({showLoginModal, registering, toggleLoginModal, requestLogin, toggleRegister, loggedIn}) => (
	<div>
		{loggedIn ? <Logout /> : <LoginButton onClick={() => toggleLoginModal()} registering={registering}/>}
		{showLoginModal ? <LoginModal toggleRegister={toggleRegister} requestLogin={requestLogin} registering={registering}/> : null}
	</div>
)

export default Login