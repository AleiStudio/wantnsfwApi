const axios = require('axios');

async function wantanime(nombre, tokenanime) {
  try {
    const response = await axios.get(`https://cdn.apiwant.xyz/api/anime/${nombre}`, {
      headers: {
        'Authorization': tokenanime
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching anime: ${error.response ? error.response.statusText : error.message}`);
  }
}

module.exports = { wantanime };
