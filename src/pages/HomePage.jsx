// HomePage

import React, { Component } from 'react';



class HomePage extends Component {
  render() {
    return (
      <div className="[ wrapper ]">
        <div className="[ col-sm-6 ]">
        <img src="https://cdn.pixabay.com/photo/2018/01/21/22/17/house-3097664_960_720.jpg" className="[ sideImage ] [ sideImage--home ]" />
        </div>
        <div className="[ col-sm-6 ]">
        <h1 className="[ headline ] [ headline--home ]">Accommodations in Bergen!</h1>

        <div className="[ search ] [ search--home ]">
          <input type="text" className="[ search__input ]" placeholder="What are you looking for?" />
          <br />
          <label className="[ search__label ]">Check in: </label>
          <input type="date" className="[ search__date ]" />

          <label className="[ search__label ]">Check out: </label>
          <input type="date" className="[ search__date ]" />
          <br />
          <label className="[ search__label ]">Number of guests:</label>
          <input type="number" className="[ search__number ]" placeholder="Adults" />
          <input type="number" className="[ search__number ]" placeholder="Children" />

          <br />
          <button type="submit" className="[ search__button ] ">Search</button>
   </div>
        </div>
      </div>
    )
  }
}
export default HomePage;