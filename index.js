module.exports = function(options) {
  if (options.base.lastIndexOf('/') !== options.base.length - 1) options.base += '/';
  var url = options.base + 'rest/services';

  if (options.folderLocation) {
    if (options.folderLocation.indexOf('/') !== 0) options.folderLocation = '/' + options.folderLocation;
    if (options.folderLocation.lastIndexOf('/') !== options.folderLocation.length - 1) options.folderLocation += '/';
    url += options.folderLocation;
  } else {
    url += '/';
  }

  if (options.service && !options.type) throw new Error('must specify service type');
  if (!options.service && options.type) throw new Error('must specify service name');
  if (options.service && options.type) url += options.service + '/' + options.type;

  if (isInt(options.layerIndex) || options.layerIndex === 'layers') url += '/' + options.layerIndex;

  if (!options.format) options.format = 'json';
  url += '?f=' + options.format;

  return url;
}

function isInt(value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}
