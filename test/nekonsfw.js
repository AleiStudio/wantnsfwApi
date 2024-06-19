const { wantnekonsfw } = require('../nekonsfw/index');

wantnekonsfw.wantneko()
    .then(url => console.log('Neko NSFW Image URL:', url))
    .catch(error => console.error('Error fetching NSFW Neko image:', error));