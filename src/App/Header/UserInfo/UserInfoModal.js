import React from 'react';
import PropTypes from 'prop-types';

const UserInfoModal = ({username, wpm}) => (
	<div className="user-info-modal">
		<div>User: {username}</div>
		<div>Lifetime WPM: {wpm}</div>
	</div>
)

export default UserInfoModal;

UserInfoModal.propTypes = {
	username: PropTypes.string,
	wpm: PropTypes.string
}