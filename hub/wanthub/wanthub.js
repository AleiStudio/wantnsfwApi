const axios = require('axios');

async function wanthubx(categoria) {
    try {
        const response = await axios.get(`https://nsfwhub.onrender.com/nsfw?type=${categoria}`);
        return response.data;
    } catch (err) {
        throw new Error(`Error fetching NSFW anime: ${err.message}`);
    }
}

module.exports = {
    wanthubx
};