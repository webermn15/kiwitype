import React from 'react'
import LoginModal from './LoginModal'
import { toggleLoginModal } from '../../actions'

const Login = ({showLoginModal, dispatch}) => (
	<div>
		<div className="login-button" onClick={() => dispatch(toggleLoginModal())}>Sign in/out</div>
		{showLoginModal ? <LoginModal /> : null}
	</div>
)

export default Login