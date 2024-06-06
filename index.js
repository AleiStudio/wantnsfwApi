const apiwant = require('./src/want/apiwant');
const apianimewant = require('./src/anime/anime');
const others = require('./others/index');
const wantnsfwv2 = require('./wantnsfw/index')

module.exports = {
  apiwant,
  apianimewant,
  ...others,
  ...wantnsfwv2
};

//test
// require('./test/anime')
// require('./test/apiwant')
// require('./test/tiktok')
// require('./test/wantnsfwv2')