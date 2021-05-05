import React from 'react';
import PropTypes from 'prop-types';

// Functional Component
const FirstApp = ({greeting = 'Hello, Cristhian!'}) => {
    return (
        <>
            <h1> {greeting} </h1>
            <p>My first application</p>
        </>
    );
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

export default FirstApp;