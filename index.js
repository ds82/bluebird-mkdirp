var bluebird = require('bluebird');
var mkdirp   = require('mkdirp');

module.exports = bluebird.promisify(mkdirp);
