// Google maps component

import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function MapContainer(props) {
	return (
		<Map className="[ map__google ]" google={props.google} zoom={11} initialCenter={{ lat: props.lat, lng: props.long }}>
			<Marker position={{ lat: props.lat, lng: props.long }} />
		</Map>
	);
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyDcbKy88ktKrQ9jYW-FiRrwlRNtYMaHJLk"
})(MapContainer);
