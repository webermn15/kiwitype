import React from 'react'
import './header.css'
import LoginContainer from '../../containers/LoginContainer'
import UserInfoContainer from '../../containers/UserInfoContainer'

const Header = () => (
	<div className="header">
		<nav className="header-nav">
			<div className="nav-inner">
				<div>KiwiType Logo</div>
				<LoginContainer />
			</div>
			<UserInfoContainer />
		</nav>
	</div>
)

export default Header