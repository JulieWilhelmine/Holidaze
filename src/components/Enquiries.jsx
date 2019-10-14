// Enquiries Component

import React from "react";

export default class Enquiries extends React.Component {
  render() {
    return (
      <div className="[ enquiry ]">
        <p className="[ enquiry__establishment ]">{this.props.establishment}</p>
        <p className="[ enquiry__clientName ]">{this.props.clientName}</p>
        <p className="[ enquiry__email ]">{this.props.email}</p>
        <p className="[ enquiry__dates ]">
          {this.props.checkin + "-" + this.props.checkout}
        </p>
        <p className="[ enquiry__guests ]">
          {this.props.adults +
            " adults and " +
            this.props.children +
            " children"}
        </p>
        <p className="[ enquiry__notes ]">{this.props.notes}</p>
      </div>
    );
  }
}
