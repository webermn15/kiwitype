import React from 'react';

const UserInfoModal = ({username, wpm}) => (
	<div className="user-info-modal">
		<div>User: {username}</div>
		<div>Lifetime WPM: {wpm}</div>
	</div>
)

export default UserInfoModal;