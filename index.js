const apiwant = require('./src/want/apiwant');
const apianimewant = require('./src/anime/anime');
const others = require('./others/index');
const wantnsfwv2 = require('./wantnsfw/index')
const wantwaifux = require('./waifupic/index')

module.exports = {
  apiwant,
  apianimewant,
  ...others,
  ...wantnsfwv2,
  ...wantwaifux
};

//test
// require('./npm-test')