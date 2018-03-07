import { connect } from 'react-redux'
import { toggleLoginModal, toggleRegister, getLoginInfo } from '../actions'
import Login from '../components/header/Login'

const mapStateToProps = state => {
	return {
		showLoginModal: state.showLoginModal,
		registering: state.registering,
		loggedIn: state.userInfo.session_token
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleLoginModal: () => {
			dispatch(toggleLoginModal())
		},
		requestLogin: (loginParams) => {
			dispatch(getLoginInfo(loginParams))
			dispatch(toggleLoginModal())
		},
		toggleRegister: () => {
			dispatch(toggleRegister())
		}
	}
}


const LoginContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

export default LoginContainer