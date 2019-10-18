// Accommodation Specific Component

import React from "react";
import MapContainer from "../components/MapContainer";

export default class AccommodationSpecific extends React.Component {
	render() {
		return (
			<div className="[ container ] [ accommodation ]">
				<div className="[ row ]">
					<div className="[ col-md-6 ]">
						<img src={this.props.image} className="[ hotel__image ] [ img-fluid ]" alt={this.props.name} />
					</div>
					<div className="[ col-md-6 ] [ hotel__info ]">
						<div class="[ hotel__info ]">
							<h2 className="[ hotel__name ]">{this.props.name}</h2>
							<h2 className="[ hotel__price ]">{this.props.price + "$"}</h2>
							<p className="[ hotel__description ]">{this.props.description}</p>
							<b className="[ hotel__email ]">Email:</b> <p>{this.props.email}</p>
							<b className="[ hotel__location ]">Location:</b>
							<div className="[ map ]">
								<MapContainer lat={this.props.lat} long={this.props.long} />
							</div>
							<button className="[ enquiryButton2 ]" onClick={this.props.openModal}>
								Make an enquiry!
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
