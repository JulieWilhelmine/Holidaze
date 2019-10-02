// Accommodations Page
import React, { Component } from 'react';
import Accommodations from '../components/Accommodations';
import Search from '../components/Search';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

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
                <Typeahead className="[ searchbar ] [ searchbar--accommodations ]"
                onChange={(selected) => {
                // Handle selections...
                }}
                options={[ /* Array of objects or strings */ ]}
                placeholder="What are you looking for?"
                />
                </div>
                <div className="[ row ]">
                <div className="[ card-deck ]">
                        {this.renderAccommodations()}
                </div>
                </div>
            </div>
        );
    }
}