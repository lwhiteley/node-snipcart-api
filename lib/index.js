const api = require('./api');
const methods = require('./methods');

const self = Object.assign({ api }, methods);

module.exports = self;
