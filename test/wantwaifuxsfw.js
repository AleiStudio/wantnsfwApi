const { wantpicsxsfw, wantpicsx } = require('../waifupic/index');

wantpicsxsfw.wantwaifuxsfw()
    .then(url => console.log('SFW Image URL:', url))
    .catch(error => console.error('Error fetching NSFW waifu image:', error));

wantpicsx.wantwaifux()
    .then(url => console.log('NSFW Image URL:', url))
    .catch(error => console.error('Error fetching NSFW waifu image:', error));