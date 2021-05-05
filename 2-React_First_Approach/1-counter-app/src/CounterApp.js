import React from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ number }) => {

    //handleAdd
    const handleAdd = (event) => {
        console.log(event);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p> { number } </p>

            <button onClick={ handleAdd }> ++ </button>
        </>
    );
};

CounterApp.propTypes = {
    number: PropTypes.number
}

export default CounterApp;