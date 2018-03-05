import React from 'react'
import './header.css'

const LoginModal = () => (
	<div className="login-modal">
		<input type="text" placeholder="Username"/>
		<input type="password" placeholder="Password"/>
		<button>Log In</button>
	</div>
)

export default LoginModal