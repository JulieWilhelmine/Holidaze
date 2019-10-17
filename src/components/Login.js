// Login Component

import React from "react"

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: ""
		}
	}

	handleUsernameChange = e => {
		this.setState({ username: e.target.value })
	}
	handlePasswordChange = e => {
		this.setState({ password: e.target.value })
	}

	login = () => {
		console.log("The login function works")
		this.props.childLogin(this.state.username, this.state.password)
	}

	render() {
		return (
			<div className=" [ login ]">
				<form className="[ login__form ]">
					<fieldset>
						<label htmlFor="username">Username: </label>
						<input
							className="[ login__input ]"
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleUsernameChange}
						/>
						<span className="[ login__error ]">
							<i>{this.props.usernameError}</i>
						</span>
					</fieldset>
					<fieldset>
						<label htmlFor="password">Password: </label>
						<input
							className="[ login__input ]"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handlePasswordChange}
						/>
						<span className="[ login__error ]">
							<i>{this.props.passwordError}</i>
						</span>
					</fieldset>
					<button type="button" className="[ login__button ]" onClick={this.login}>
						Login
					</button>
				</form>
			</div>
		)
	}
}
