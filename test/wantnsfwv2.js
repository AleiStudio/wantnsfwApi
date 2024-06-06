const { wantnsfwv2 } = require('../wantnsfw/index');

wantnsfwv2.wantapiinfluencersv2()
  .then(url => console.log('Imagen URL:', url))
  .catch(error => console.error(error));