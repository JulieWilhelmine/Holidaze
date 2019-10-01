// HomePage

import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';



class HomePage extends Component {

  render() {
    return (
        <div className="[ row ]">
          <div className="[ col-sm-12 ] [ homePage ]">
          <h1 className="[ headline ] [ headline--home ]">Accommodations in Bergen!</h1>
          <Typeahead
            onChange={(selected) => {
            // Handle selections...
            }}
            options={[ /* Array of objects or strings */ ]}
        />
        </div>
        </div>
    )
  }
}
export default HomePage;