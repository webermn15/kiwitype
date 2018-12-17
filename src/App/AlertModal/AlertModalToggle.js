import React from 'react';
import PropTypes from 'prop-types';

const AlertModalToggle = ({toggleAlert}) => {
	return <button onClick={() => toggleAlert()} >X</button>
}

export default AlertModalToggle;

AlertModalToggle.propTypes = {
	toggleAlert: PropTypes.func.isRequired
}