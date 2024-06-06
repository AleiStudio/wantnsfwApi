const apiwant = require('./src/want/apiwant');
const apianimewant = require('./src/anime/anime');
const others = require('./others/index');

module.exports = {
  apiwant,
  apianimewant,
  ...others
};

//test
// require('./test/anime')
// require('./test/apiwant')
// require('./test/tiktok')