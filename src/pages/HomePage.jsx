// HomePage

import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelArray: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch("http://localhost/hotel-booking/server/get-establishments.php")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log("result", result);

        this.setState({
          hotelArray: result
        });
      });
  };

  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-sm-12 ] [ homePage ]">
          <h1 className="[ headline ] [ headline--home ]">
            Accommodations in Bergen!
          </h1>
          <Typeahead
            className="[ searchbar ] [ searchbar--home ]"
            onChange={selected => {
              // Handle selections...
            }}
            options={this.state.hotelArray}
            placeholder="What are you looking for?"
          />
        </div>
      </div>
    );
  }
}
export default HomePage;
