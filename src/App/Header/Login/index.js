import { connect } from 'react-redux';
import { toggleLoginModal, toggleRegister, getLoginInfo, requestLogout, registerNewUser } from './actions';
import Login from './Login';

const mapStateToProps = state => {
	return {
		showLoginModal: state.showLoginModal,
		registering: state.registering,
		authenticating: state.userInfo.authenticating,
		loggedIn: state.userInfo.session_token,
		errorMsg: state.userInfo.errorMsg
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleLoginModal: () => {
			dispatch(toggleLoginModal())
		},
		requestLogin: (loginParams) => {
			dispatch(getLoginInfo(loginParams))
		},
		toggleRegister: () => {
			dispatch(toggleRegister())
		},
		requestLogout: () => {
			dispatch(requestLogout())
		},
		requestRegister: (loginParams) => {
			dispatch(registerNewUser(loginParams))
		}
	}
}


const LoginContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

export default LoginContainer;