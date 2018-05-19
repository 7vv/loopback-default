'use strict';

module.exports = function(server) {
 const models = {
  product: server.models.product,
  product_api: server.mdoels.product_api,
 };

 console.log('Boot Load product model >> ', models);
}
