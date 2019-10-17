// Search bar typeahead component

import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { withRouter } from "react-router-dom";
import "react-bootstrap-typeahead/css/Typeahead.css";

class HotelSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hotelArray: [],
			loading: true
		};
	}

	componentDidMount() {
		fetch("http://localhost/hotel-booking/server/get-establishments.php")
			.then(response => {
				return response.json();
			})
			.then(result => {
				console.log("result", result);

				const searchOptions = result.map(r => {
					return { id: r.id, label: r.establishmentName };
				});

				this.setState({
					hotelArray: searchOptions,
					loading: false
				});
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				this.setState({
					loading: false
				});
			});
	}

	handleChange = selected => {
		const id = selected[0].id;
		this.props.history.push(`/AccommodationSpecificPage/${id}`);
	};

	render() {
		return (
			<Typeahead
				className="[ searchbar ]"
				onChange={selected => {
					this.handleChange(selected);
				}}
				options={this.state.hotelArray}
				placeholder="What are you looking for?"
			/>
		);
	}
}

export default withRouter(HotelSearch);
