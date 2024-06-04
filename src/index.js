const axios = require('axios');

let token = '';

function setToken(userToken) {
    token = userToken;
}

async function obtenerUrlAleatoria(url) {
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `${token}`
            }
        });
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

async function wantapinekonsfw() {
    const url = 'https://cdn.apiwant.xyz/api/neko-nsfw';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de neko-nsfw: ${error.message}`);
    }
}

async function wantapiasshentai() {
    const url = 'https://cdn.apiwant.xyz/api/asshentai';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de asshentai: ${error.message}`);
    }
}

async function wantapirealbonitas() {
    const url = 'https://cdn.apiwant.xyz/api/real/bonitas';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de real bonitas: ${error.message}`);
    }
}

async function wantapirealboobs() {
    const url = 'https://cdn.apiwant.xyz/api/real/boobs';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de real boobs: ${error.message}`);
    }
}

async function wantapirealcosplay() {
    const url = 'https://cdn.apiwant.xyz/api/real/cosplay';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de real cosplay: ${error.message}`);
    }
}

module.exports = {
    setToken,
    wantapiwaifus,
    wantapimemes,
    wantapinekonsfw,
    wantapiasshentai,
    wantapirealbonitas,
    wantapirealboobs,
    wantapirealcosplay
};
