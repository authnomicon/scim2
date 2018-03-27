exports = module.exports = function(
  configHandler,
  userReadHandler,
  userSearchHandler
) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/ServiceProviderConfig', configHandler);
  
  // TODO: Dyanmically build these routes based on resourceTypes
  
  router.get('/Users/:id', userReadHandler);
  router.post('/Users/.search', userSearchHandler);
  
  return router;
};

exports['@implements'] = 'http://schemas.modulate.io/js/http/scim/v2/Service';
exports['@require'] = [
  './handlers/config',
  './handlers/users/read',
  './handlers/users/search'
];
