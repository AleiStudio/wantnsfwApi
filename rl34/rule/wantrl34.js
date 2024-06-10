const axios = require('axios');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function wantrule34x(tag) {
    const urlImgTab = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1000&pid=1&tags=${tag}`;
    try {
        const response = await axios.get(urlImgTab);
        const body = response.data;
        const body1 = body.split('<post');
        if (body1.length < 3) {
            return 'El Tag no esta realmente en nuestra lista. Gracias por unas WantRule34.';
        }
        const int = getRandomInt(body1.length);
        if (int === 0) {
            return generateRule34Links(tag);
        }
        const body2 = body1[int].split('file_url=')[1].split('parent_id=')[0];
        return body2;
    } catch (error) {
        console.error('Error fetching data from Rule34:', error);
        return 'Error fetching data';
    }
}

module.exports = {
    wantrule34x,
};