import React from 'react'
import LoginModal from './LoginModal'
import { toggleLoginModal } from '../../actions'

const Login = ({showLoginModal, registering, dispatch}) => (
	<div>
		<div className="login-button" onClick={() => dispatch(toggleLoginModal())}>{!registering ? 'Sign in' : 'Register'}</div>
		{showLoginModal ? <LoginModal dispatch={dispatch} registering={registering}/> : null}
	</div>
)

export default Login