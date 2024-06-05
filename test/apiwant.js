const { apiwant } = require('../index');

apiwant.setToken('tu-token');

apiwant.wantapirealbonitas()
  .then(url => console.log('Waifu URL:', url))
  .catch(error => console.error(error));