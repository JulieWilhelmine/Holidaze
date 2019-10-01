// Admin Page

import React, { Component } from 'react';
import Enquiries from '../components/Enquiries';
import Messages from '../components/Messages';

export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enquiries: [],
            messages: []
        };
    }

    componentDidMount() {
        this.getData();
        this.getData2();
    }

    getData = () => {

        fetch('http://localhost/hotel-booking/server/get-enquiries.php')
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log('result', result);

                this.setState({
                    enquiries: result
                });
            });
    }

    getData2 = () => {

      fetch('http://localhost/hotel-booking/server/get-contacts.php')
          .then(response => {
              return response.json()
          })
          .then(result => {
              console.log('result', result);

              this.setState({
                  messages: result
              });
          });
  }

    renderEnquiries = () => {
        return this.state.enquiries.map((value, key) => {
            return <Enquiries establishment={value.establishment}
                clientName={value.clientName}
                email={value.email}
                checkin={value.checkin}
                checkout={value.checkout}
                adults={value.adults}
                children={value.children}
                notes={value.notes}
                key={key} />
        })
    }

    renderMessages = () => {
      return this.state.messages.map((value, key) => {
          return <Messages
              clientName={value.clientName}
              email={value.email}
              message={value.message}
              key={key} />
      })
  }


    render() {

        return (
            <div className="[ wrapper ]">

                <h1 className="[ headline ] [ headline--admin ]">Administration</h1>
                <button className="[ AddEstablishmentButton ]">Add Establishment</button>
                
                <div className="[ row ]">
                <div className="[ col-sm-6 ] [ enquiries ]">
                    <h2 className="[ headline ] [ headline--enquiries ]">Enquiries</h2>
                    {this.renderEnquiries()}
                </div>

                <div className="[ col-sm-6 ] [ messages ]">
                    <h2 className="[ headline ] [ headline--messages ]">Messages</h2>
                    {this.renderMessages()}
                </div>
                </div>

            </div>
        )
    }
}