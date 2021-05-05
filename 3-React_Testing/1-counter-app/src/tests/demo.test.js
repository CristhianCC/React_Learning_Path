

test( 'this is my first test', () => {

    const isActive = true;

    if ( isActive ) {
        throw new Error('It is not active');
    }

})