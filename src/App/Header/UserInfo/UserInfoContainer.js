import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import { toggleInfo } from './actions';

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleInfo: () => {
			dispatch(toggleInfo())
		}
	}
}

const UserInfoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserInfo)

export default UserInfoContainer;