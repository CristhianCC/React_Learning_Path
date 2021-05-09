import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Testing promises', () => {

    test('getHeroeByIdAsync should return hero async', ( done ) =>  {
        const id = 1;

        getHeroeByIdAsync(id)
            .then( hero => {
                expect( hero ).toBe( heroes.find( heroTest => heroTest.id === id) );
                done();
            })
    });

    test('getHeroeByIdAsync should return an error if hero does not exist', ( done ) =>  {
        const id = 50;

        getHeroeByIdAsync(id)
            .catch( err => {
                expect( err ).toBe( 'No se pudo encontrar el héroe' );
                done();
            })
    });
});