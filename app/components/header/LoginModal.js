import React from 'react'
import './header.css'
import { toggleRegister } from '../../actions'

const LoginModal = ({registering, dispatch}) => (
	<div className="login-modal">
		<div>{!registering ? 'Log in to your account!' : 'Create an account!'}</div>
		<input type="text" placeholder="Username"/>
		<input type="password" placeholder="Password"/>
		<button>{!registering ? "Log in" : "Register"}</button>
		<div>
			<a 
				href="#" 
				onClick={(e) => {
					e.preventDefault()
					dispatch(toggleRegister())
			}}>
				{!registering ? "Don't have an account?" : "Have an account?"}
			</a>
		</div>
	</div>
)

export default LoginModal