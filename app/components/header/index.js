import React from 'react'
import './header.css'

const Header = () => (
	<div className="header">
		<nav className="header-nav">
			<div className="nav-inner">
				<div>KiwiType Logo</div>
				<div>Sign in/out</div>
			</div>
			<div className="nav-inner">{'Username'} dropdown</div>
		</nav>
	</div>
)

export default Header