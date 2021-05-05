import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe( 'Tests in 05-funciones.test.js', () => {

    test('getUser should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect( userTest ).toEqual( user );

    });

    test('getUsuarioActivo should return an object', () => {

        const name = 'Cristhian';
        const usuarioActivoTest = getUsuarioActivo('Cristhian');
        expect( usuarioActivoTest ).toEqual({
            uid: 'ABC567',
            username: name
        } );

    });
});
