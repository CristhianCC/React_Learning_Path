import React from 'react';

// Functional Component
const FirstApp = ({greeting = 'Hello, Cristhian!'}) => {
    return (
        <>
            <h1> {greeting} </h1>
            <p>My first application</p>
        </>
    );
}

export default FirstApp;