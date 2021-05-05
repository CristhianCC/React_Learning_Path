


const nombre   = 'Cristhian';
const apellido = 'Cabrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo( nombre = 'Óscar') {
    return 'Hola ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );