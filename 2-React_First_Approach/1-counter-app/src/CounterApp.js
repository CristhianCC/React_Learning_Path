import React from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ number }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <p> { number } </p>
        </>
    );
};

CounterApp.propTypes = {
    number: PropTypes.number
}

export default CounterApp;