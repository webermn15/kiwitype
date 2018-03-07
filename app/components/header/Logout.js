import React from 'react' 

const Logout = ({requestLogout}) => (
	<div onClick={() => requestLogout()} className="login-button">Logout</div>
)

export default Logout