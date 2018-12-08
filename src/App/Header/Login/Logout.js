import React from 'react';

const Logout = ({requestLogout}) => (
	<div style={{fontFamily: 'Helvetica'}} onClick={() => requestLogout()} className="login-button">Logout</div>
)

export default Logout;