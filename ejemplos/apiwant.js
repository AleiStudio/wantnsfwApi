const apiWant = require('../src/want/apiwant');

apiWant.setToken('Tu_Token');

async function APIWANTNSFW() {
    try {
        const waifuImage = await apiWant.wantapiwaifus();
        console.log('Waifu Image URL:', waifuImage);
    } catch (error) {
        console.error(error.message);
    }
}

APIWANTNSFW();