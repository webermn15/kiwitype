import React from 'react';
import PropTypes from 'prop-types';
import LoginModal from './LoginModal';
import Logout from './Logout';
import LoginButton from './LoginButton';

const Login = ({showLoginModal, registering, requestRegister, authenticating, errorMsg, toggleLoginModal, requestLogin, requestLogout, toggleRegister, loggedIn}) => (
	<div>
		{loggedIn ? <Logout requestLogout={requestLogout}/> : <LoginButton onClick={() => toggleLoginModal()} registering={registering}/>}
		{showLoginModal ? <LoginModal toggleRegister={toggleRegister} requestRegister={requestRegister} requestLogin={requestLogin} registering={registering} authenticating={authenticating} errorMsg={errorMsg}/> : null}
	</div>
)

export default Login;

Login.propTypes = {
	showLoginModal: PropTypes.bool.isRequired,
	registering: PropTypes.bool.isRequired,
	requestRegister: PropTypes.func.isRequired,
	authenticating: PropTypes.bool.isRequired,
	errorMsg: PropTypes.string,
	toggleLoginModal: PropTypes.func.isRequired,
	requestLogin: PropTypes.func.isRequired,
	requestLogout: PropTypes.func.isRequired,
	toggleRegister: PropTypes.func.isRequired,
	loggedIn: PropTypes.bool
}