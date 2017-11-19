const config = require('../config');

module.exports = (key, value) => {
  config.set(key, value);
  return this;
};
