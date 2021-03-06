import React from 'react';
import './header.css';
import { LoginContainer } from './Login';
import { UserInfoContainer } from './UserInfo';
import ktLogo from './ktlogo.svg';

const Header = () => (
	<div className="header">
		<nav className="header-nav">
			<img 
				src={ktLogo} 
				style={{marginLeft: '30px'}}
			/>
			<div className="nav-inner">
				<LoginContainer />
				<UserInfoContainer />
			</div>
		</nav>
	</div>
)

export default Header;