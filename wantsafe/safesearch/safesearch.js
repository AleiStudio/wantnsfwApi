const axios = require('axios');

const BASE_URL = 'https://safebooru.org/index.php';
const MAX_LIMIT = 5;

let cache = new Set();

function addToCache(url) {
    cache.add(url);
    setTimeout(() => cache.delete(url));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function wantsafex(tags = '', limit = 5,) {
    if (limit > MAX_LIMIT) {
        throw new Error(`Lo siento, el límite es ${MAX_LIMIT} imágenes.`);
    }
    try {
        let resultUrls = [];
        let pid = 100;

        while (resultUrls.length < limit) {
            const response = await axios.get(BASE_URL, {
                params: {
                    page: 'dapi',
                    s: 'post',
                    q: 'index',
                    tags,
                    limit: 450,
                    pid,
                    json: 1
                }
            });

            const fetchedUrls = response.data.map(image => `https://safebooru.org/images/${image.directory}/${image.image}`);
            const newUrls = fetchedUrls.filter(url => !cache.has(url));

            newUrls.forEach(addToCache);
            resultUrls = resultUrls.concat(newUrls);

            pid++;
        }

        return shuffleArray(resultUrls).slice(0, limit);
    } catch (error) {
        throw new Error(`Error fetching images: ${error.message}`);
    }
}

module.exports = {
    wantsafex
};