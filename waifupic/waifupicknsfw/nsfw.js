const axios = require('axios');

async function obtenerUrlAleatoria(url) {
    try {
        const response = await axios.get(url);
        return response.data.url;
    } catch (error) {
        throw new Error(`Error al obtener la URL aleatoria: ${error.message}`);
    }
}

async function wantwaifux() {
    const url = 'https://api.waifu.pics/nsfw/waifu';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
    }
}

async function wantnekox() {
    const url = 'https://api.waifu.pics/nsfw/neko';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de neko: ${error.message}`);
    }
}

async function wanttrapx() {
    const url = 'https://api.waifu.pics/nsfw/trap';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de trap: ${error.message}`);
    }
}

async function wantblowjobx() {
    const url = 'https://api.waifu.pics/nsfw/blowjob';
    try {
        const imageUrl = await obtenerUrlAleatoria(url);
        return imageUrl;
    } catch (error) {
        throw new Error(`Error al obtener la imagen de blowjob: ${error.message}`);
    }
}

module.exports = {
    wantwaifux,
    wantnekox,
    wanttrapx,
    wantblowjobx
};
