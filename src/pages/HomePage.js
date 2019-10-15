import React, { Component } from "react";
import HotelSearch from "../components/HotelSearch";

class HomePage extends Component {
	render() {
		return (
			<div className="[ row ]">
				<div className="[ col-sm-12 ] [ homePage ]">
					<h1 className="[ headline ] [ headline--home ]">Accommodations in Bergen!</h1>
					<HotelSearch />
					/>
				</div>
			</div>
		);
	}
}
export default HomePage;
