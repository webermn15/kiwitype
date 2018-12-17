import React from 'react';
import PropTypes from 'prop-types';
import './alert.css';
import AlertModalInner from './AlertModalInner';
import AlertModalToggle from './AlertModalToggle';

const AlertModal = ({alertActive, toggleAlert, alertMessage}) => {
	if (!alertActive) {
		return <div></div>
	}
	else {
		return(
			<div className="alert-modal visible">
				<AlertModalInner alertMessage={alertMessage} />
				<AlertModalToggle toggleAlert={toggleAlert} />
			</div>
		)
	}
}

export default AlertModal;

AlertModal.propTypes = {
	alertActive: PropTypes.bool.isRequired,
	toggleAlert: PropTypes.func.isRequired,
	alertMessage: PropTypes.string.isRequired
}