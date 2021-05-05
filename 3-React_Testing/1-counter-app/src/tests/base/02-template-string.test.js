import {getSaludo} from '../../base/02-template-string';


describe( 'Tests in 02-template-string.test.js', () => {

    test('getSaludo should return Hola Cristhian', () => {

        const name = 'Cristhian';
        const greeting = getSaludo(name);
        expect(greeting).toBe(`Hola ${name}`);

    });

    test('getSaludo should return Hola Óscar if it has no parameters', () => {

        const greeting = getSaludo();
        expect(greeting).toBe(`Hola Óscar`);

    });


});
