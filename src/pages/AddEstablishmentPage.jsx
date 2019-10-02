// Add Establishment Page

import React, { Component } from 'react';
import Modal from 'react-modal';

export default class AddEstablishmentPage extends Component {

constructor(props) {
  super(props);

  this.state = {
      modalIsOpen: false,
      establishmentName: "",
      establishmentEmail: "",
      imageUrl: "",
      price: "",
      maxGuests: "",
      id: "",
      selfCatering: "",
      googleLat: "",
      googleLong: "",
      description: ""
  }
}

openModal = () => {
  this.setState({modalIsOpen: true});
}

closeModal = () => {
  this.setState({modalIsOpen: false});
}

handleChange = e => {
this.setState({
    [e.target.name]: e.target.value,            
})
}

sendMessage = async e => {
e.preventDefault();

const formData = new FormData();
formData.append('establishmentName', this.state.establishmentName);
formData.append('establishmentEmail', this.state.establishmentEmail);
formData.append('imageUrl', this.state.imageUrl);
formData.append('price', this.state.price);
formData.append('maxGuests', this.state.maxGuests);
formData.append('id', this.state.id);
formData.append('selfCatering', this.state.selfCatering);
formData.append('googleLat', this.state.googleLat);
formData.append('googleLong', this.state.googleLong);
formData.append('description', this.state.description);


fetch('http://localhost/hotel-booking/server/add-establishments-success.php', {  
    method: 'POST',
    body: formData
})
.then(data => {  
  this.openModal();
  console.log('Request success: ', data);  
})  
.catch(error => {  
  console.log('Request failure: ', error);  
});


}

  render() {
    return (
      <div className="[ wrapper ]">
        
        <div className="[ col-sm-12 ]">
            <h1 className="[ headline ] [ headline--admin ]">Administration</h1>
                
                <h2 className="[ headline ] [ headline--addEstablishment ]">Establishment details:</h2>
                    <form  onSubmit={this.sendMessage} className="[ addEstablishment ]">
                        <label for="establishmentName">Establishment Name: </label>
                        <input type="text" name="establishmentName" id="establishmentName" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.establishmentName} required />
                        <label for="establishmentEmail">Establishment Email: </label>
                        <input type="text" name="establishmentEmail" id="establishmentEmail" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.establishmentEmail} required />
                        <br />
                        <label for="imageUrl">Image URL: </label>
                        <input type="text" name="imageUrl" id="imageUrl" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.imageUrl} required />
                        <label for="price">Price per person per night ($): </label>
                        <input type="number" name="price" id="price" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.price} required />
                        
                        <br />
                        <label for="maxGuests">Max guests: </label>
                        <input type="number" name="maxGuests" id="maxGuests" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.maxGuests} required />
                        <label for="id">ID: </label>
                        <input type="number" name="id" id="id" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.id} required />
                        <br />
                        <label for="selfCatering">Self-catering?</label>
                        <label for="true">Yes</label>
                        <input type="radio" id="true" name="selfCatering" value={this.state.selfCatering} onChange={this.handleChange} />
                        <label for="false">No</label>
                        <input type="radio" id="false" name="selfCatering" value={this.state.selfCatering} onChange={this.handleChange} />
                        <br />
                        <label for="googleLat">Google Coordinates Latitude: </label>
                        <input type="text" name="googleLat" id="googleLat" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.googleLat} required />
                        <br />
                        <label for="googleLong">Google Coordinates Longitude: </label>
                        <input type="text" name="googleLong" id="googleLong" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.googleLong} required />
                        <br />
                        <label for="description">Description: </label>
                        <input name="description" id="description" className="[ addEstablishment__input ]" onChange={this.handleChange} value={this.state.description} required />
                        <br />
                        <input type="submit" className="[ addEstablishment__submit ]"/>
                    </form>
        </div>

        <Modal className="[ establishmentAdded ]"
                           isOpen={this.state.modalIsOpen}
                           onRequestClose={this.closeModal}
                           contentLabel="establishmentAdded"
                          >
                          <h1 className="[ establishmentAdded__X ]" onClick={this.closeModal}>X</h1>
                          <p>Thank you for your message, we will get back to you shortly!</p>
        </Modal>
      </div>
    )
  }
}