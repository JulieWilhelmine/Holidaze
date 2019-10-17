// Add Establishment Page

import React, { Component } from "react"
import Modal from "react-bootstrap/Modal"
import { Helmet } from "react-helmet"

export default class AddEstablishmentPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalIsOpen: false,
			establishmentName: "",
			establishmentEmail: "",
			imageUrl: "",
			price: "",
			maxGuests: "",
			id: "",
			selfCatering: "",
			googleLat: "",
			googleLong: "",
			description: ""
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
		formData.append("establishmentName", this.state.establishmentName)
		formData.append("establishmentEmail", this.state.establishmentEmail)
		formData.append("imageUrl", this.state.imageUrl)
		formData.append("price", this.state.price)
		formData.append("maxGuests", this.state.maxGuests)
		formData.append("id", this.state.id)
		formData.append("selfCatering", this.state.selfCatering)
		formData.append("googleLat", this.state.googleLat)
		formData.append("googleLong", this.state.googleLong)
		formData.append("description", this.state.description)

		fetch("http://localhost/hotel-booking/server/add-establishments-success.php", {
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
			<div className="[ container-fluid ]">
				<div className="[ row ]">
					<div className="[ col-sm-12 ]">
						<h1 className="[ headline ] [ headline--admin ]">Administration</h1>

						<h2 className="[ headline ] [ headline--addEstablishment ]">Establishment details:</h2>
						<form onSubmit={this.sendMessage} className="[ addEstablishment ]">
							<fieldset>
								<label htmlFor="establishmentName">Establishment Name: </label>
								<input
									type="text"
									name="establishmentName"
									id="establishmentName"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.establishmentName}
									required
								/>
								<label htmlFor="establishmentEmail">Establishment Email: </label>
								<input
									type="text"
									name="establishmentEmail"
									id="establishmentEmail"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.establishmentEmail}
									required
								/>
							</fieldset>
							<fieldset>
								<label htmlFor="imageUrl">Image URL: </label>
								<input
									type="text"
									name="imageUrl"
									id="imageUrl"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.imageUrl}
									required
								/>
								<label htmlFor="price">Price per person per night ($): </label>
								<input
									type="number"
									name="price"
									id="price"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.price}
									required
								/>
							</fieldset>
							<fieldset>
								<label htmlFor="maxGuests">Max guests: </label>
								<input
									type="number"
									name="maxGuests"
									id="maxGuests"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.maxGuests}
									required
								/>
								<label htmlFor="id">ID: </label>
								<input
									type="number"
									name="id"
									id="id"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.id}
									required
								/>
							</fieldset>
							<fieldset>
								<label htmlFor="selfCatering">Self-catering?</label>
								<label htmlFor="true">Yes</label>
								<input
									type="radio"
									id="true"
									name="selfCatering"
									value={this.state.selfCatering}
									onChange={this.handleChange}
								/>
								<label htmlFor="false">No</label>
								<input
									type="radio"
									id="false"
									name="selfCatering"
									value={this.state.selfCatering}
									onChange={this.handleChange}
								/>
							</fieldset>
							<fieldset>
								<label htmlFor="googleLat">Google Coordinates Latitude: </label>
								<input
									type="text"
									name="googleLat"
									id="googleLat"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.googleLat}
									required
								/>
							</fieldset>
							<fieldset>
								<label htmlFor="googleLong">Google Coordinates Longitude: </label>
								<input
									type="text"
									name="googleLong"
									id="googleLong"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.googleLong}
									required
								/>
							</fieldset>
							<fieldset>
								<label htmlFor="description">Description: </label>
								<input
									name="description"
									id="description"
									className="[ addEstablishment__input ]"
									onChange={this.handleChange}
									value={this.state.description}
									required
								/>
							</fieldset>
							<input type="submit" className="[ addEstablishment__submit ]" />
						</form>
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
							<p>The establishment has been added!</p>
						</Modal.Body>
					</Modal>
				</div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Holidaze Add Establishment</title>
				</Helmet>
			</div>
		)
	}
}
