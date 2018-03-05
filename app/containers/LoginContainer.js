import { connect } from 'react-redux'
import { toggleLoginModal } from '../actions'
import Login from '../components/header/Login'

const mapStateToProps = state => {
	return {
		showLoginModal: state.showLoginModal
	}
}



const LoginContainer = connect(
	mapStateToProps
)(Login)

export default LoginContainer