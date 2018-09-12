const shared = require("../shared");

module.exports = function shuffle() {
  return shared.player.setShuffle({state: 'true'})
}
