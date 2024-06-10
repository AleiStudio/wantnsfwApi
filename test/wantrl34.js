const { wantrl34, wantrlp } = require('../rl34/index');

////Buscar Rule34
wantrl34.wantrule34x('boobs')
    .then(image => console.log('NSFW Image URL:', image))
    .catch(error => console.error('Error fetching NSFW waifu image:', error));

////Rule34 Random
wantrlp.wantrule34random()
    .then(image => console.log('NSFW Image Random URL:', image))
    .catch(error => console.error('Error fetching NSFW waifu image:', error));
