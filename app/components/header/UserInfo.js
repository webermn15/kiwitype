import React from 'react'
import { toggleInfo } from '../../actions'
import UserInfoModal from './UserInfoModal'
import './header.css'

const UserInfo = ({userInfo, toggleInfo}) => (
	<div 
		className="user-info"
		style={{fontFamily: 'Helvetica'}}
		onClick={() => toggleInfo()}
	>
		{userInfo.username}'s Stats
		{userInfo.showInfo ? <UserInfoModal username={userInfo.username} wpm={userInfo.lifetimeWpm}/> : null}
	</div>
)

export default UserInfo