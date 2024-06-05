const axios = require('axios');

async function wantanime(nombre, token) {
  try {
    const response = await axios.get(`https://cdn.apiwant.xyz/api/anime/${nombre}`, {
      headers: {
        'Authorization': token
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching anime: ${error.response ? error.response.statusText : error.message}`);
  }
}

module.exports = { wantanime };
