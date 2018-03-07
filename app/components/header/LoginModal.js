import React, { Component } from 'react'
import './header.css'
import { toggleRegister } from '../../actions'

class LoginModal extends Component<{}> {
	constructor() {
		super()

		this.state = {
			usernameIsValid: false,
			passwordIsValid: false,
			errorAlert: false
		}
	}

	checkInputs = () => {
		let validUser = this.inputUser.value.trim().length > 0 ? true : false
		let validPass = this.inputPass.value.trim().length > 0 ? true : false

		this.setState({
			usernameIsValid: validUser,
			passwordIsValid: validPass
		}, () => {
			if (this.state.usernameIsValid && this.state.passwordIsValid) {
				this.props.requestLogin({username: this.inputUser.value, password: this.inputPass.value})
			}
			else {
				this.inputPass.value = ''
				this.inputUser.value = ''
				this.inputUser.focus()
				this.setState({errorAlert: true})
			}
		})
	}

	render() {
		return(
			<div className="login-modal">
				<div>{this.state.errorAlert ? 'Username or password missing' : !this.props.registering ? 'Log in to your account!' : 'Create an account!'}</div>
				<form 
					className="login-form"
					onSubmit={(e) => {
							e.preventDefault()
							this.checkInputs()
						}
				}>
					<input 
						style={{borderColor: this.state.errorAlert ? 'red' : null}}
						type="text" 
						placeholder="Username"
						ref={text => this.inputUser = text}
						onChange={()=> {this.setState({errorAlert: false})}}
						spellCheck="false"
					/>
					<input 
						style={{borderColor: this.state.errorAlert ? 'red' : null}}
						type="password" 
						placeholder="Password"
						ref={text => this.inputPass = text}
						onChange={()=> {this.setState({errorAlert: false})}}
						spellCheck="false"
					/>
					<button>
					{!this.props.registering ? "Log in" : "Register"}
					</button>
				</form>
				<div>
					<a 
						href="#" 
						onClick={(e) => {
							e.preventDefault()
							this.props.toggleRegister()
					}}>
						{!this.props.registering ? "Don't have an account?" : "Already have an account?"}
					</a>
				</div>
			</div>
		)
	}
}

export default LoginModal