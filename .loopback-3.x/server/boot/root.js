'use strict';

module.exports = function(server) {
  console.log(1)
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  //router.get('/', server.loopback.status());
  server.use(router);
};