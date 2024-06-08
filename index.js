const apiwant = require('./src/want/apiwant');
const apianimewant = require('./src/anime/anime');
const others = require('./others/index');
const wantnsfwv2 = require('./wantnsfw/index')
const wantwaifux = require('./waifupic/index')
const wanth = require('./hub/index')
const wantsafex = require('./wantsafe/index')

module.exports = {
  apiwant,
  apianimewant,
  ...others,
  ...wantnsfwv2,
  ...wantwaifux,
  ...wanth,
  ...wantsafex
};

//test
// require('./npm-test')