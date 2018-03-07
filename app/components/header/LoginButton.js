import React from 'react'

const LoginButton = ({registering, onClick}) => (
	<div className="login-button" onClick={() => onClick()}>{!registering ? 'Sign in' : 'Register'}</div>
)

export default LoginButton