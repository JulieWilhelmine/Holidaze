// Contact Page

import React, { Component } from "react"
import Modal from "react-bootstrap/Modal"
import { Helmet } from "react-helmet"

export default class ContactPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalIsOpen: false,
			clientName: "",
			email: "",
			message: ""
		}
	}

	openModal = () => {
		this.setState({ modalIsOpen: true })
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	sendMessage = async e => {
		e.preventDefault()

		const formData = new FormData()
		formData.append("clientName", this.state.clientName)
		formData.append("email", this.state.email)
		formData.append("message", this.state.message)

		fetch("http://localhost/hotel-booking/server/contact-success.php", {
			method: "POST",
			body: formData
		})
			.then(data => {
				this.openModal()
				console.log("Request success: ", data)
			})
			.catch(error => {
				console.log("Request failure: ", error)
			})
	}

	render() {
		return (
			<div className="[ container-fluid ] [ container-fluid--contact ] ">
				<div className="[ row ]">
					<div className="[ col-sm-6 ] [ sideImage__container] [ d-none d-md-block ]">
						<img
							src="https://images.unsplash.com/photo-1560687123-268c79127e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
							alt="street view in Bergen"
							className="[ sideImage ] [ sideImage--contact ]"
						/>
					</div>

					<div className="[ col-sm-6 ]">
						<h1 className="[ headline ] [ headline--contact ]">Contact us</h1>

						<form className="[ contact ]" onSubmit={this.sendMessage}>
							<label htmlFor="clientName">Full name: </label>
							<input
								className="[ contact__input ]"
								onChange={this.handleChange}
								type="text"
								name="clientName"
								id="clientName"
								value={this.state.clientName}
								required
							/>
							<br />
							<label htmlFor="email">Email Address: </label>
							<input
								className="[ contact__input ]"
								onChange={this.handleChange}
								type="text"
								name="email"
								id="email"
								value={this.state.email}
								required
							/>
							<br />
							<label className="[ contact__message ]" onChange={this.handleChange} htmlFor="message">
								Message:{" "}
							</label>
							<br />
							<textarea
								name="message"
								id="message"
								rows="8"
								cols="40"
								onChange={this.handleChange}
								value={this.state.message}
							></textarea>
							<br />
							<input className="[ contact__submit ]" type="submit" />
						</form>
					</div>
				</div>
				<Modal
					show={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<Modal.Header closeButton onClick={this.closeModal}>
						<Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Thank you for your message, we will get back to you shortly!</p>
					</Modal.Body>
				</Modal>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Holidaze Contact</title>
				</Helmet>
			</div>
		)
	}
}
