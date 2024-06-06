const { apitiktokwant } = require('../others/index');

const tiktokUrl = 'https://www.tiktok.com/@staryuukiii/video/7358879268085992747?lang=es';

apitiktokwant.wantTiktok(tiktokUrl)
  .then(result => console.log('TikTok Data:', result))
  .catch(error => console.error('Error al obtener los datos:', error));
