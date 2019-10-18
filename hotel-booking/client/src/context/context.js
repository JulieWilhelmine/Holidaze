import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const HotelContext = React.createContext();
const ContextProvider = HotelContext.Provider;
export const ContextConsumer = HotelContext.Consumer;

class Provider extends Component {
    state = {
        loggedIn: false
    };

    toggleLoggedIn = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        });
    };

    render() {
        return (
            <ContextProvider
                value={{
                    loggedIn: this.state.loggedIn,
                    toggleLoggedIn: this.toggleLoggedIn
                }}
            >
                {this.props.children}
            </ContextProvider>
        );
    }
}

export default withRouter(Provider);
