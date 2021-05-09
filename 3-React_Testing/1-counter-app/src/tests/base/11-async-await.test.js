import { getImagen } from '../../base/11-async-await';

describe('Testing async-await and fetch', () => {

    test('getImagen should return an url', async() =>  {
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);
    });

});