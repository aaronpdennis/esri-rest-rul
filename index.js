module.exports = function(options) {
  if (options.base.lastIndexOf('/') !== options.base.length - 1) options.base += '/';
  if (!options.format) options.format = 'json';
  return options.base + options.service + '/' + options.type + '/' + options.layerIndex + '?f=' + options.format;
}
