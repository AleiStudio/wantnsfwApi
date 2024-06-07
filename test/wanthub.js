const { wanthub } = require('../hub/index');

wanthub.wanthubx('gif')
  .then(url => console.log('Imagen URL:', url))
  .catch(error => console.error(error));