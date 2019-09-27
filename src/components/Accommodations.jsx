// Accommodations Component

import React from "react";
import { withRouter } from "react-router-dom";

class Accommodations extends React.Component {

    handleClick = () => {
        const { id, history } = this.props;
        history.push(`/AccommodationSpecificPage/${id}`);
    }

    render() {
        return (
            <div className="[ col-sm-3 ]">
                <div className="[ card ]">
                    <a onClick={this.handleClick} >
                        <div><img src={this.props.image} className="[ card__image ]" /></div>

                        <h3 className="[ card__name ]">{this.props.name}</h3>
                        <h3 className="[ card__price ]">{this.props.price + "$"}</h3>
                    </a>
                </div>
            </div>
        );
    }
}

export default withRouter(Accommodations);
