const { wantanime } = require('../src/anime/anime');

const nombreAnime = 'naruto';
const token = 'Tu_Token';

wantanime(nombreAnime, token)
  .then(data => console.log(data))
  .catch(error => console.error(error));

