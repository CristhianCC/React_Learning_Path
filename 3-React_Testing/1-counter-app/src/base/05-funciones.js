const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;


export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


// Tarea
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})