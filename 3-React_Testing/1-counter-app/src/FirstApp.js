import React from 'react';
import PropTypes from 'prop-types';

// Functional Component
const FirstApp = ({ greeting, subtitle }) => {
    return (
        <>
            <h1>{ greeting }</h1>
            <p id="text">{ subtitle }</p>
        </>
    );
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    subtitle: 'I am a subtitle'
}

export default FirstApp;