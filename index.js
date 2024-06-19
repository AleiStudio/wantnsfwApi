const apiwant = require('./src/want/apiwant');
const apianimewant = require('./src/anime/anime');
const others = require('./others/index');
const wantnsfwv2 = require('./wantnsfw/index')
const wantwaifux = require('./waifupic/index')
const wanth = require('./hub/index')
const wantsafex = require('./wantsafe/index')
const rl34 = require('./rl34/index')
const nekonsfw = require('./nekonsfw/index');

module.exports = {
  apiwant,
  apianimewant,
  ...others,
  ...wantnsfwv2,
  ...wantwaifux,
  ...wanth,
  ...wantsafex,
  ...rl34,
  ...nekonsfw
};

//test
// require('./npm-test')