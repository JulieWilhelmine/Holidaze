import React from 'react';
import PropTypes from 'prop-types';

export default function MessageAlert({ message}) {
    return (
        <div className="[ enquirySuccess__container ]">
            <p className=" enquirySuccess__message ]">{message}</p>
        </div>
    )
}

MessageAlert.propTypes = {
    message: PropTypes.string.isRequired
}