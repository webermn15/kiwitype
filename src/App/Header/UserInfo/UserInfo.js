import React from 'react';
import PropTypes from 'prop-types';
import UserInfoModal from './UserInfoModal';
import '../header.css';

const UserInfo = ({userInfo, toggleInfo}) => (
	<div 
		className="user-info"
		style={{fontFamily: 'Helvetica'}}
		onClick={() => toggleInfo()}
	>
		{userInfo.username}&apos;s Stats
		{userInfo.showInfo ? <UserInfoModal username={userInfo.username} wpm={userInfo.lifetimeWpm}/> : null}
	</div>
)

export default UserInfo;

UserInfo.propTypes = {
	userInfo: PropTypes.object,
	toggleInfo: PropTypes.func.isRequired
}