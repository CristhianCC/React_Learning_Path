import { retornaArreglo } from '../../base/07-deses-arr';

describe( 'Tests in 07-deses-arr.test.js', () => {

    test('retornaArreglo should return a string and a number', () => {
        const [letters, numbers] = retornaArreglo();

        expect(retornaArreglo()).toEqual(['ABC', 123]);

        expect( letters ).toBe( 'ABC' );
        expect( typeof letters ).toBe( 'string' );

        expect( numbers ).toBe( 123 );
        expect( typeof numbers ).toBe( 'number' );
    });

});






