import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({registering, onClick}) => (
	<div className="login-button" style={{fontFamily: 'Helvetica'}}onClick={() => onClick()}>{!registering ? 'Sign in' : 'Register'}</div>
)

export default LoginButton;

LoginButton.propTypes = {
	registering: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}