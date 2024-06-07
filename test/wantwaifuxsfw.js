const { wantpicsxsfw } = require('../waifupic/index');

wantpicsxsfw.wantcringexsfw()
    .then(url => console.log('SFW Image URL:', url))
    .catch(error => console.error('Error fetching NSFW waifu image:', error));