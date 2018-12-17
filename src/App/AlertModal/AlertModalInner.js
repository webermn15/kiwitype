import React from 'react';
import PropTypes from 'prop-types';

const AlertModalInner = ({alertMessage}) => {
	return(
		<div
			style={{paddingRight: '5px'}}
		>
			{alertMessage}
		</div>
	)
}

export default AlertModalInner;

AlertModalInner.propTypes = {
	alertMessage: PropTypes.string.isRequired
}