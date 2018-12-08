import React from 'react';

const LoginButton = ({registering, onClick}) => (
	<div className="login-button" style={{fontFamily: 'Helvetica'}}onClick={() => onClick()}>{!registering ? 'Sign in' : 'Register'}</div>
)

export default LoginButton;