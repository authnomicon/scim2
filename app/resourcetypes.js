exports = module.exports = function(container, logger) {
  // Load modules.
  var ResourceTypes = require('../lib/resourcetypes');
  
  
  var registry = new ResourceTypes();
  
  return Promise.resolve(registry)
    .then(function(registry) {
      // Register resource types.
      var typeComps = container.components('http://schemas.modulate.io/js/scim/v2/resourceType');
    
      return Promise.all(typeComps.map(function(comp) { return comp.create(); } ))
        .then(function(types) {
          types.forEach(function(type, i) {
            registry.use(typeComps[i].a['@type'], type);
            logger.info('Loaded SCIM 2.0 resource type: ' + typeComps[i].a['@type']);
          });
        })
        .then(function() {
          return registry;
        });
    })
    .then(function(registry) {
      return registry;
    });
};

exports['@singleton'] = true;
exports['@require'] = [ '!container', 'http://i.bixbyjs.org/Logger' ];
