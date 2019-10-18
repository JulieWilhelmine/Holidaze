// Accommodations Page

import React, { Component } from "react"
import Accommodations from "../components/Accommodations"
import "react-bootstrap-typeahead/css/Typeahead.css"
import Spinner from "react-bootstrap/Spinner"
import { Helmet } from "react-helmet"

export default class AccommodationsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hotelArray: [],
			loading: true
		}
	}

	componentDidMount() {
		this.getEstablishments()
	}

	getEstablishments = () => {
		fetch("http://localhost/hotel-booking/server/get-establishments.php")
			.then(response => {
				return response.json()
			})
			.then(result => {
				console.log("result", result)

				this.setState({
					hotelArray: result,
					loading: false
				})
			})
	}

	renderAccommodations = () => {
		const hotelArray = this.state.hotelArray

		return hotelArray.map((value, key) => {
			let image

			if (value.imageUrl !== undefined) {
				image = value.imageUrl
			} else {
				image = "https://via.placeholder.com/300"
			}

			return (
				<Accommodations
					name={value.establishmentName}
					image={image}
					id={value.id}
					description={value.description}
					email={value.establishmentEmail}
					price={value.price}
					lat={value.googleLat}
					long={value.googleLong}
					max={value.maxGuests}
					key={key}
				/>
			)
		})
	}

	render() {
		const { loading, hotelArray } = this.state

		if (loading || !hotelArray) {
			return (
				<Spinner animation="border" variant="info" className="spinner">
					<span className="sr-only">Loading...</span>
				</Spinner>
			)
		}

		return (
			<div className="[ container-fluid ]">
				<h1 className="[ headline ] [ headline--accommodations ]">Accommodations</h1>

				<div className="[ row ] [ accommodations ]">
					<div className="[ card-deck ]">{this.renderAccommodations()}</div>
				</div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Holidaze Accommodations</title>
					<meta name="description" content="Accommodations in Bergen" />
				</Helmet>
			</div>
		)
	}
}
