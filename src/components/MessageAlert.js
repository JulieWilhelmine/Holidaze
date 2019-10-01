import React from 'react';
import PropTypes from 'prop-types';

export default function MessageAlert({ message}) {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

MessageAlert.propTypes = {
    message: PropTypes.string.isRequired
}