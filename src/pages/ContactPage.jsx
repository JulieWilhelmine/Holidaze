// Contact Page

import React, { Component } from 'react';


export default class ContactPage extends Component {
 
    constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      nameError: '',
      emailError: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  submitContact = () => {

    let app = this;
    let name = app.state.name;
    let email = app.state.email;
    let nameRGEX = /^[a-zA-Z]+$/;
    let emailRGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let nameResult = nameRGEX.test(name);
    let emailResult = emailRGEX.test(email);

    if (nameResult === false) {
        app.setState({ nameError: 'Please enter your full name' });
    }
    else{
        app.setState({ nameError: ''});
    }
    if (emailResult === false) {
        app.setState({ emailError: 'Please enter your email' });
    }
    else{
        app.setState({ emailError: ''});
    }

    if(nameResult && emailResult){
        alert("message sent!")
    }
}


  render() {
    return (
      <div className="[ wrapper ]">
        <div className="[ col-sm-6 ] ">
        <img src="https://images.unsplash.com/photo-1560687123-268c79127e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="[ sideImage ] [ sideImage--contact ]" />
        </div>
        
        <div className="[ col-sm-6 ]">
             <h1 className="[ headline ] [ headline--contact ]">Contact us</h1>
                 <form className="[ contact ]" method="POST" action="http://localhost/hotel-booking/server/contact-success.php">
                    <label for="clientName">Full name: </label>
                    <input className="[ contact__input ]" type="text" name="clientName" id="clientName" value={this.state.name} onChange={this.handleNameChange} />
                    <br />
                    <label for="email">Email Address: </label>
                    <input className="[ contact__input ]" type="text" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange}/>
                    <br />
                    <label className="[ contact__message ]" for="message">Message: </label>
                    <br />
                    <textarea name="message" id="message" rows="8" cols="80"></textarea>
                    <br />
                    <input className="[ contact__submit ]" onClick={this.submitContact} type="submit" />
                </form>
        </div>
      </div>
    )
  }
}
