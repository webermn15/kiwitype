import { connect } from 'react-redux'
import UserInfo from '../components/header/UserInfo'

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo
	}
}

const UserInfoContainer = connect(
	mapStateToProps
)(UserInfo)

export default UserInfoContainer