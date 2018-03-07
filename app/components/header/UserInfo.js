import React from 'react'
import { toggleInfo } from '../../actions'
import UserInfoModal from './UserInfoModal'

const UserInfo = ({userInfo, toggleInfo}) => (
	<div 
		className="nav-inner"
		onClick={() => toggleInfo()}
	>
		{userInfo.username}
		{userInfo.showInfo ? <UserInfoModal username={userInfo.username} wpm={userInfo.lifetimeWpm}/> : null}
	</div>
)

export default UserInfo