// Admin Page

import React, { Component } from "react"
import Enquiries from "../components/Enquiries"
import Messages from "../components/Messages"
import { Helmet } from "react-helmet"

export default class AdminPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			enquiries: [],
			messages: []
		}
	}

	componentDidMount() {
		this.getEnquiries()
		this.getMessages()
	}

	getEnquiries = () => {
		fetch("http://localhost/hotel-booking/server/get-enquiries.php")
			.then(response => {
				return response.json()
			})
			.then(result => {
				console.log("result", result)

				this.setState({
					enquiries: result
				})
			})
	}

	getMessages = () => {
		fetch("http://localhost/hotel-booking/server/get-contacts.php")
			.then(response => {
				return response.json()
			})
			.then(result => {
				console.log("result", result)

				this.setState({
					messages: result
				})
			})
	}

	renderEnquiries = () => {
		return this.state.enquiries.map((value, key) => {
			return (
				<Enquiries
					establishment={value.establishment}
					clientName={value.clientName}
					email={value.email}
					checkin={value.checkin}
					checkout={value.checkout}
					adults={value.adults}
					children={value.children}
					notes={value.notes}
					key={key}
				/>
			)
		})
	}

	renderMessages = () => {
		return this.state.messages.map((value, key) => {
			return <Messages clientName={value.clientName} email={value.email} message={value.message} key={key} />
		})
	}

	redirect = () => {
		this.props.history.push("/addEstablishment")
	}

	render() {
		return (
			<div className="[ container-fluid ]">
				<div className="[ row ]">
					<div className="[ col-sm-12 ]">
						<h1 className="[ headline ] [ headline--admin ]">Administration</h1>
						<button className="[ AddEstablishmentButton ]" onClick={this.redirect}>
							Add Establishment
						</button>
					</div>
				</div>

				<div className="[ row ]">
					<div className="[ col-sm-6 ] [ enquiries ]">
						<h2 className="[ headline ] [ headline--enquiries ]">Enquiries</h2>
						{this.renderEnquiries()}
					</div>

					<div className="[ col-sm-6 ] [ messages ]">
						<h2 className="[ headline ] [ headline--messages ]">Messages</h2>
						{this.renderMessages()}
					</div>
				</div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Holidaze Admin</title>
				</Helmet>
			</div>
		)
	}
}
