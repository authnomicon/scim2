function ResourceTypes() {
  this._types = {};
}

ResourceTypes.prototype.use = function(type, iface) {
  this._types[type] = iface;
};

ResourceTypes.prototype.obtainResource =
ResourceTypes.prototype.obtainInterface = function(type) {
  var iface = this._types[type];
  if (!iface) { throw new Error('Resource type "' + type + '" is not supported'); }
  return iface;
};


module.exports = ResourceTypes;
