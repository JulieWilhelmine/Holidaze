// Contact Page

import React, { Component } from 'react';
import Modal from 'react-modal';


export default class ContactPage extends Component {
  
  state = {
    modalIsOpen: false
}

openModal = () => {
    this.setState({modalIsOpen: true});
}

closeModal = () => {
    this.setState({modalIsOpen: false});
}

updateSentState = () => {
  this.setState({
      enquirySent: true
  })
}

  render() {
    return (
      <div className="[ wrapper ]">
        <div className="[ row ]">
        <div className="[ col-sm-6 ] ">
        <img src="https://images.unsplash.com/photo-1560687123-268c79127e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="street view in Bergen" className="[ sideImage ] [ sideImage--contact ]" />
        </div>
        
        <div className="[ col-sm-6 ]">
             <h1 className="[ headline ] [ headline--contact ]">Contact us</h1>
                 <form className="[ contact ]" method="POST" action="http://localhost/hotel-booking/server/contact-success.php">
                    <label for="clientName">Full name: </label>
                    <input className="[ contact__input ]" type="text" name="clientName" id="clientName"  required />
                    <br />
                    <label for="email">Email Address: </label>
                    <input className="[ contact__input ]" type="text" name="email" id="email"  required />
                    <br />
                    <label className="[ contact__message ]" for="message">Message: </label>
                    <br />
                    <textarea name="message" id="message" rows="8" cols="60"></textarea>
                    <br />
                    <input className="[ contact__submit ]" onClick={this.submitContact} type="submit" />
                </form>
        </div>
        </div>
                    <Modal className="[ contactSent ]"
                           isOpen={this.state.modalIsOpen}
                           onRequestClose={this.closeModal}
                           contentLabel="contactSent"
                          >
                          <p>Thank you for your message, we will get back to you shortly!</p>
                          <h1 className="[ contactSent__X ]" onClick={this.closeModal + this.updateSentState}>X</h1>
                    </Modal>
      </div>
    )
  }
}
