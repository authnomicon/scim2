exports = module.exports = function(initialize, parse, authenticate, errorLogging) {


  function config(req, res, next) {
    var config = {};
  }

  return [
    initialize(),
    parse('application/json'),
    authenticate(),
    config,
    errorLogging(),
    //errorHandler()
  ];
  
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/parse',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
