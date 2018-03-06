import React from 'react'
import { toggleInfo } from '../../actions'
import UserInfoModal from './UserInfoModal'

const UserInfo = ({userInfo, dispatch}) => (
	<div 
		className="nav-inner"
		onClick={() => dispatch(toggleInfo())}
	>
		{userInfo.username}
		{userInfo.showInfo ? <UserInfoModal username={userInfo.username} wpm={userInfo.lifetimeWpm}/> : null}
	</div>
)

export default UserInfo