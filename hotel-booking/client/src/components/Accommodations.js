// Accommodations Component

import React from "react";
import { withRouter } from "react-router-dom";

class Accommodations extends React.Component {
  handleClick = () => {
    const { id, history } = this.props;
    history.push(`/AccommodationSpecificPage/${id}`);
  };

  render() {
    return (
      <div className="[ row ]">
          <div class="[ col-sm ]">
        <div className="[ card ]" onClick={this.handleClick}>
          <img
            src={this.props.image}
            className="[ card__image ] [ card-img-top ] [ img-fluid ]"
            alt="the accommodation"
          />
          <div className="[ card-body ]">
            <h3 className="[ card__name ] [ card-title ]">{this.props.name}</h3>
            <h3 className="[ card__price ]">{this.props.price + "$"}</h3>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Accommodations);
