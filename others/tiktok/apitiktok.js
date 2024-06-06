const axios = require('axios');

async function wantTiktok(url) {
  try {
    const response = await axios.get(`https://tiktok.apiwant.xyz/tiktok/v1/${url}`);
    return response.data.result;
  } catch (error) {
    throw new Error(`Error al obtener los datos de TikTok: ${error.response ? error.response.statusText : error.message}`);
  }
}

module.exports = { wantTiktok };
