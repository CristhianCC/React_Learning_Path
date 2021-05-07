import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';



describe( 'Tests in 08-imp-exp.test.js', () => {

    test('getHeroeById should return an object', () => {
        const id = 3;
        const hero = getHeroeById( id );

        const heroTest = heroes.find( hero => hero.id === id);

        expect(hero).toEqual(heroTest);

    });

    test('getHeroeById should return undefined', () => {
        const id = 10;
        const hero = getHeroeById( id );

        expect(hero).toBe(undefined);

    });

    test('getHeroesByOwner should return an array of objects with Marvel as owner', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        const heroesTest = heroes.filter( hero => hero.owner === owner);

        expect(heroes).toEqual(heroesTest);
        expect(2).toBe(heroes.length);
    });

    test('getHeroesByOwner should return the length of the array with Marvel as owner', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        const heroesTest = heroes.filter( hero => hero.owner === owner);

        expect(heroes.length).toBe(2);
    });

    test('getHeroesByOwner should return an empty array', () => {
        const owner = 'Undefined';
        const heroesTest = getHeroesByOwner( owner );

        expect(heroesTest.length).toBe(0);
    });
});
