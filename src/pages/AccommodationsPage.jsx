// Accommodations Page
import React, { Component } from 'react';
import Accommodations from '../components/Accommodations';
import Search from '../components/Search';

export default class AccommodationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelArray: [],
            hotelSearch: [],
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {

        fetch('http://localhost/hotel-booking/server/get-establishments.php')
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log('result', result);

                this.setState({
                    hotelArray: result,
                    hotelSearch: result
                });
            });
    }

    handleSearchTerm = (searchTerm) => {

        let hotelArray = this.state.hotelSearch;

        let hotels = hotelArray.filter((hotel) => {
            return hotel.establishmentName.toLowerCase().includes(searchTerm.toLowerCase())
        });

        this.setState({
            hotelArray: hotels
        });
    }


    renderAccommodations = () => {
        const hotelArray = this.state.hotelArray;

        return hotelArray.map((value, key) => {

            let image;

            if (value.imageUrl !== undefined) {
                image = value.imageUrl;
            }
            else {
                image = 'https://via.placeholder.com/300';
            }

            return <Accommodations name={value.establishmentName}
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
        });
    }

    render() {

        return (
            <div className="[ wrapper ]">
                <h1 className="[ headline ] [ headline--accommodations ]">Accommodations</h1>

                <div className="[ row ]">
                    <div className="[ col-sm-12 ]">
                        <Search onSearchTerm={this.handleSearchTerm}></Search>
                    </div>
                    <div className="[ col-sm-12 ]">
                        {this.renderAccommodations()}
                    </div>
                </div>
            </div>
        );
    }
}