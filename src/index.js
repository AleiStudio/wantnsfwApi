const axios = require('axios');

async function obtenerUrlAleatoria(url) {
    try {
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error(`Error al obtener la URL aleatoria: ${response.statusText}`);
        }
        return response.data.url;
    } catch (error) {
        throw new Error(`Error al obtener la URL aleatoria: ${error.message}`);
    }
}

async function wantapiwaifus() {
    const url = 'https://cdn.apiwant.xyz/api/waifus';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
    }
}

async function wantapimemes() {
    const url = 'https://cdn.apiwant.xyz/api/memes';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de meme: ${error.message}`);
    }
}

module.exports = {
    wantapiwaifus,
    wantapimemes,
};
