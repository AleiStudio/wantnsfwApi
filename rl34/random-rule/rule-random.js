const axios = require('axios');

const tag = ['dragon_ball', 'fortnite', 'video', 'gif', 'ahe_gao', 'lying_on_back', 'underboob', 'thong', 'lipstick', 'tongue_out', 'dark_skin', 'orc', 'monster', 'detached_sleeves', 'pink_hair', 'areolae', 'fucked_silly', 'long_hair', 'yellow_eyes', 'partially_clothed', 'smile', 'clothing']

const randomIndex = tag[Math.floor(Math.random() * tag.length)]
 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function wantrule34random() {
    const urlImgTab = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1000&pid=1&tags=${randomIndex}`;
    try {
        const response = await axios.get(urlImgTab);
        const body = response.data;
        const body1 = body.split('<post');
        if (body1.length < 3) {
            return 'el Tag random a fallado.';
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
    wantrule34random
};