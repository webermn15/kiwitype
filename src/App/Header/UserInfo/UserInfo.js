import React from 'react';
// import { toggleInfo } from '../../actions'; why am I importing this??
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