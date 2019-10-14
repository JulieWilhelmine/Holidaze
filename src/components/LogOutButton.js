import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import withContext from "../context/withContext";

class LogOutButton extends Component {
    logOut = () => {
        this.props.context.toggleLoggedIn();
        this.props.history.push("/");
    };

    render() {
        return <button onClick={this.logOut}>Log out</button>;
    }
}

export default withRouter(withContext(LogOutButton));
