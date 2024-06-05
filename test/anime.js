const { apianimewant } = require('../index');
const nombreAnime = 'naruto'; 
const tokenanime = 'tu-token';

apianimewant.wantanime(nombreAnime, tokenanime)
  .then(data => console.log('Anime Data:', data))
  .catch(error => console.error(error));

