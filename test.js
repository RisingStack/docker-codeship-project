var test = require('tape');
var server = require('./server');

test ('Root endpoint', function (t) {
  var req = {
    method: 'GET',
    url: '/'
  };

  server.inject(req, function (res) {
    t.equal(res.statusCode, 200);
    t.equal(res.result, 'We <3 Docker & Codeship');
    t.end();
  });
});
