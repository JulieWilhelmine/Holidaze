// Add Establishment Page

import React, { Component } from 'react';


class AddEstablishmentPage extends Component {
  render() {
    return (
      <div className="[ wrapper ]">
        
        <div className="[ col-sm-12 ]">
            <h1 className="[ headline ] [ headline--admin ]">Administration</h1>
                
                <h2 className="[ headline ] [ headline--addEstablishment ]">Establishment details:</h2>
                    <form method="POST" action="http://localhost/hotel-booking/server/add-establishments-success.php">
                        <label for="establishmentName">Establishment Name: </label>
                        <input type="text" name="establishmentName" id="establishmentName" className="[ addEstablishment__input ]" />
                        <label for="establishmentEmail">Establishment Email: </label>
                        <input type="text" name="establishmentEmail" id="establishmentEmail" className="[ addEstablishment__input ]" />
                        <label for="imageUrl">Image URL: </label>
                        <input type="text" name="imageUrl" id="imageUrl" className="[ addEstablishment__input ]" />
                        <label for="price">Price per person per night ($): </label>
                        <input type="number" name="price" id="price" className="[ addEstablishment__input ]" />
                        <label for="maxGuests">Max guests: </label>
                        <input type="number" name="maxGuests" id="maxGuests" className="[ addEstablishment__input ]" />
                        <label for="googleLat">Google Coordinates Latitude: </label>
                        <input type="text" name="googleLat" id="googleLat" className="[ addEstablishment__input ]" />
                        <label for="googleLong">Google Coordinates Longitude: </label>
                        <input type="text" name="googleLong" id="googleLong" className="[ addEstablishment__input ]" />
                        <label for="description">Description: </label>
                        <textarea name="description" id="description" rows="8" cols="80" className="[ addEstablishment__input ]" />
                        <label for="selfCatering">Self-catering?</label>
                        <label for="true">True</label>
                        <input type="radio" id="true" name="selfCatering" value="true" />
                        <label for="false">False</label>
                        <input type="radio" id="false" name="selfCatering" value="false" />
                        <label for="id">ID: </label>
                        <input type="number" name="id" id="id" className="[ addEstablishment__input ]" />
                        <input type="submit" className="[ addEstablishment__submit ]"/>
                    </form>
        </div>
      </div>
    )
  }
}
export default AddEstablishmentPage;