
describe( 'Tests in the file demo.test.js', () => {

    test( 'should string be equal', () => {

        const message = 'Hello World';

        const message2 = `Hello World`;

        expect( message ).toBe( message2 );
    })
});
