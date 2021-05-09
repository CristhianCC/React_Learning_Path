export const getImagen = async() => {
    try {
        const apiKey = 'eIlq9i6PONAbK3zOjULHiarvBTB3I5c8';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;
    } catch (error) {
        return 'Not good bro';
    }
}


