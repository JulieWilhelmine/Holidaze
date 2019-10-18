// Accommodation Specific page

import React from "react"
import AccommodationSpecific from "../components/AccommodationsSpecific"
import Modal from "react-bootstrap/Modal"
import EnquiryContainer from "../components/EnquiryContainer"
import MapContainer from "../components/MapContainer"
import { Helmet } from "react-helmet"

export default class AccommodationSpesificPage extends React.Component {
	state = {
		hotelObj: null,
		modalIsOpen: false
	}

	openModal = () => {
		this.setState({ modalIsOpen: true })
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}

	componentDidMount() {
		const id = this.props.match.params.id

		fetch("http://localhost/hotel-booking/server/get-establishment.php?id=" + id)
			.then(response => {
				return response.json()
			})
			.then(result => {
				this.setState({
					hotelObj: result
				})
			})
			.catch(error => console.error(error))
	}

	render() {
		if (!this.state.hotelObj) {
			return <div>No hotel found</div>
		}
		const {
			establishmentName,
			imageUrl,
			establishmentEmail,
			price,
			googleLat,
			googleLong,
			maxGuests,
			description
		} = this.state.hotelObj

		return (
			<div className="[ container-fluid ]">
				<div className="[ col-sm-12 ] [ hotel ]">
					<AccommodationSpecific
						name={establishmentName}
						image={imageUrl}
						description={description}
						email={establishmentEmail}
						price={price}
						lat={googleLat}
						long={googleLong}
						max={maxGuests}
						openModal={this.openModal}
					/>
				</div>

				<Modal
					className="[ enquiryModal ]"
					show={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title"
					size="lg"
				>
					<Modal.Header closeButton onClick={this.closeModal}>
						<Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
					</Modal.Header>

					<EnquiryContainer className="[ enquiry__container ]" establishmentName={establishmentName} />
				</Modal>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Holidaze {establishmentName}</title>
					<meta name="description" content="Details about accommodation in Bergen" />
				</Helmet>
			</div>
		)
	}
}
