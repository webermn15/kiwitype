import React from 'react'
import './header.css'
import LoginContainer from '../../containers/LoginContainer'

const Header = () => (
	<div className="header">
		<nav className="header-nav">
			<div className="nav-inner">
				<div>KiwiType Logo</div>
				<LoginContainer />
			</div>
			<div className="nav-inner">{'Username'} dropdown</div>
		</nav>
	</div>
)

export default Header