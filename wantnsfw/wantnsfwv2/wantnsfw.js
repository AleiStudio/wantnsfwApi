const axios = require('axios');
const cheerio = require('cheerio');

async function obtenerUrlsCategoria(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const imageUrls = [];

    $('figure.wp-block-image img[src]').each((_, element) => {
      imageUrls.push($(element).attr('src'));
    });

    return imageUrls;
  } catch (error) {
    throw new Error(`Error al obtener las imágenes (${url}): ${error.message}`);
  }
}

async function obtenerUrlAleatoria(url) {
  try {
    const imageUrls = await obtenerUrlsCategoria(url);

    if (imageUrls.length === 0) {
      throw new Error('No se encontraron imágenes en la categoría.');
    }

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

    return randomImageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen aleatoria de la categoría (${url}): ${error.message}`);
  }
}

async function wantapiwaifuv2() {
  const url = 'https://wantbot.xyz/wantapiwaifu/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapiassv2() {
  const url = 'https://wantbot.xyz/wantapiass/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapibikinisv2() {
  const url = 'https://wantbot.xyz/wantapibikinis/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapidogv2() {
  const url = 'https://wantbot.xyz/wantapidog/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapiwaifuexoticav2() {
  const url = 'https://wantbot.xyz/wantapiwaifuexotica/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapiboobsv2() {
  const url = 'https://wantbot.xyz/wantapiboobs/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapiinfluencersv2() {
  const url = 'https://wantbot.xyz/wantapiinfluencers/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapicosplayv2() {
  const url = 'https://wantbot.xyz/wantapicosplay/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapifemboysv2() {
  const url = 'https://wantbot.xyz/wantapifemboys/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

async function wantapischoolgirlsv2() {
  const url = 'https://wantbot.xyz/wantapischoolgirls/';
  try {
    const imageUrl = await obtenerUrlAleatoria(url);
    return imageUrl;
  } catch (error) {
    throw new Error(`Error al obtener la imagen de waifu: ${error.message}`);
  }
}

module.exports = {
  wantapiwaifuv2,
  wantapiassv2,
  wantapibikinisv2,
  wantapidogv2,
  wantapiwaifuexoticav2,
  wantapiboobsv2,
  wantapiinfluencersv2,
  wantapicosplayv2,
  wantapifemboysv2,
  wantapischoolgirlsv2
};