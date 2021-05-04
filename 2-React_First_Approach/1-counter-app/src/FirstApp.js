import React from 'react';

// Functional Component
const FirstApp = () => {
    const person = {
        name: 'Cristhian',
        age: 27
    };

    return (
        <>
            <h1> { JSON.stringify(person) } </h1>
            <p>My first application</p>
        </>
    );
}

export default FirstApp;