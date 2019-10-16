// Accommodation Specific Component

import React from "react";
import MapContainer from "../components/MapContainer";

export default class AccommodationSpecific extends React.Component {
  render() {
    return (
    <div className="[ container-fluid ]">
      <div className="[ row ]">
        <div className="[ col-sm-12 ]">
          <br />
          <br />
          <br />
        </div>
        <div className="[ col-sm-6 ]">
          <img
            src={this.props.image}
            className="[ hotel__image ] [ img-fluid ]"
            alt={this.props.name}
          />
        </div>
        <div className="[ col-sm-6 ] [ hotel__info ]">
          <h2 className="[ hotel__name ]">{this.props.name}</h2>
          <h2 className="[ hotel__price ]">{this.props.price + "$"}</h2>
          <br />
          <p className="[ hotel__description ]">{this.props.description}</p>
          <b className="[ hotel__email ]">Email:</b> <p>{this.props.email}</p>
          <b className="[ hotel__location ]">Location:</b>
          <MapContainer
                    lat={this.props.lat}
                    long={this.props.long}
          />
          <button className="[ enquiryButton ]" onClick={this.props.openModal}>
            Make an enquiry!
          </button>
        </div>
      </div>
    </div>
    );
  }
}
