// Enquiry form component

import React, { Component } from 'react';

export default class EnquiryForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            establishment: this.props.establishmentName,
            clientName: "",
            email: "",
            checkin: "",
            checkout: "",
            adults: "",
            children: "",
            notes: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,            
        })
   }

    sendEnquiry = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('establishment', this.state.establishment);
        formData.append('clientName', this.state.clientName);
        formData.append('email', this.state.email);
        formData.append('checkin', this.state.checkin);
        formData.append('checkout', this.state.checkout);
        formData.append('adults', this.state.adults);
        formData.append('children', this.state.children);
        formData.append('notes', this.state.notes);
        

        fetch('http://localhost/hotel-booking/server/enquiry-success.php', {  
            method: 'POST',
            body: formData
        })
        .then(data => {  
          this.props.updateSentState();
          console.log('Request success: ', data);  
        })  
        .catch(error => {  
          console.log('Request failure: ', error);  
        });


    }

    render() {
       return <form onSubmit={this.sendEnquiry} className="[ makeEnquiry__form ]">
            <label htmlFor="establishment">Establishment: </label>
            <input type="text" name="establishment" id="establishment" className="[ makeEnquiry__input ] [ makeEnquiry__input--establishment ]" value={this.state.establishment} readOnly />
            <br />
            <label htmlFor="clientName">Full name: </label>
            <input type="text" onChange={this.handleChange} name="clientName" id="clientName" className="[ makeEnquiry__input ]" value={this.state.clientName} required />
            <br />
            <label htmlFor="email">Email Address: </label>
            <input type="text" onChange={this.handleChange} name="email" id="email" className="[ makeEnquiry__input ]" value={this.state.email} required />
            <br />
            <label htmlFor="checkin">Check-in: </label>
            <input type="date" onChange={this.handleChange} name="checkin" id="checkin" className="[ makeEnquiry__input ] [ makeEnquiry__input--dates ]" value={this.state.checkin} required />
            <label htmlFor="checkout">Check-out: </label>
            <input type="date" onChange={this.handleChange} name="checkout" id="checkout" className="[ makeEnquiry__input ] [ makeEnquiry__input--dates ]" value={this.state.checkout} required />
            <br />
            <label htmlFor="guests">Guests: </label>
            <input type="number" onChange={this.handleChange} name="adults" id="adults" placeholder="adults" min="1" className="[ makeEnquiry__input ] [ makeEnquiry__input--guests ]" value={this.state.adults} required />
            <input type="number" onChange={this.handleChange} name="children" id="children" placeholder="children" min="0" className="[ makeEnquiry__input ] [ makeEnquiry__input--guests ]" value={this.state.children}required />
            <br />
            <label htmlFor="notes">Anything else?: </label>
            <input type="text" onChange={this.handleChange}name="notes" id="notes" className="[ makeEnquiry__input ] [ makeEnquiry__input--notes ]" value={this.state.notes} />
            <br />
            <input type="submit" className="[ makeEnquiry__submit ]" />
        </form>
    }

}