import React from 'react';
import PropTypes from 'prop-types';

const Logout = ({requestLogout}) => (
	<div style={{fontFamily: 'Helvetica'}} onClick={() => requestLogout()} className="login-button">Logout</div>
)

export default Logout;

Logout.propTypes = {
	requestLogout: PropTypes.func.isRequired
}