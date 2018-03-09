import React from 'react'
import './header.css'
import LoginContainer from '../../containers/LoginContainer'
import UserInfoContainer from '../../containers/UserInfoContainer'
import ktLogo from './ktlogo.svg'

const Header = () => (
	<div className="header">
		<nav className="header-nav">
			<div className="nav-inner">
				<img src={ktLogo} />
				<LoginContainer />
			</div>
			<UserInfoContainer />
		</nav>
	</div>
)

export default Header