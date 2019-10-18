// Home page

import React, { Component } from "react"
import HotelSearch from "../components/HotelSearch"
import { Helmet } from "react-helmet"

class HomePage extends Component {
	render() {
		return (
			<div className="[ row ]">
				<div className="[ col-sm-12 ] [ homePage ]">
					<h1 className="[ headline ] [ headline--home ]">Accommodations in Bergen!</h1>
					<HotelSearch />
				</div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Holidaze</title>
					<meta name="description" content="Find accommodations in Bergen!" />
				</Helmet>
			</div>
		)
	}
}
export default HomePage
