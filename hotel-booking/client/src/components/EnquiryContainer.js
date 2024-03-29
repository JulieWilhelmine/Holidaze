// Enquiry form container component

import React, { Component } from 'react';
import EnquiryForm from "./EnquiryForm";
import MessageAlert from "./MessageAlert";

export default class EnquiryContainer extends Component {

    state = {
        enquirySent: false
    }

    updateSentState = () => {
        this.setState({
            enquirySent: true
        })
    }

    render() {
        return !this.state.enquirySent 
                ? <EnquiryForm establishmentName={this.props.establishmentName} updateSentState={this.updateSentState} />
                : <MessageAlert message="Your enquiry has been sent and your booking will be confirmed shortly! Thanks!" />
    }

}