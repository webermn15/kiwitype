import { connect } from 'react-redux';
import AlertModal from './AlertModal';
import { hideAlert } from './actions';

const mapStateToProps = state => {
	return {
		alertMessage: state.alertMessage,
		alertActive: state.showAlertModal
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleAlert: () => dispatch(hideAlert())
	}
}

const AlertModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AlertModal)

export default AlertModalContainer;