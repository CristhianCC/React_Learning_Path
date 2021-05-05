import React from "react";
import { number } from 'prop-types';


const CounterApp = (number) => {
    return (
        <>
            <h1>CounterApp</h1>
            <p> { number } </p>
        </>
    );
};

CounterApp.propTypes = {
    number: number
}

export default CounterApp;