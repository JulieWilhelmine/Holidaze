// Messages Component

import React from 'react';

export default class Messages extends React.Component {
    render() {
        return (
            <div className="[ col-sm-6 ]">
                <div className="[ message ]">
                        <p className="[ message__clientName ]">{this.props.clientName}</p>
                        <p className="[ message__email ]">{this.props.email}</p>
                        <p className="[ message__message ]">{this.props.message}</p>
                </div>
            </div>
        );
    }
}
