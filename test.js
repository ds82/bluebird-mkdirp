//
// write ES5 code as long as this lib ist tested on
// node < 4
//

var assert = require('assert');
var quire = require('proxyquire');
var bluebird = require('bluebird');

var results = [];
var mockMkdirp = function(path, opts, cb) {
  results.push([path, opts, cb]);
  cb(null, true);
};

var mkdirp = quire('./index', {mkdirp: mockMkdirp});

function test1() {
  return mkdirp('/foo/bar', {})
    .then(function() {
      var r = results.pop();

      assert.equal(r[0], '/foo/bar');
      assert.deepEqual(r[1], {});
    });
}


test1()
  .then(function() { console.log('done.'); })
  .catch(function(err) {
    console.error('ooops', err);
    process.exit(1);
  })



