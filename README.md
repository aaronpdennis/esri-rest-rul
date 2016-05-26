# esri-rest-url
small module to construct an ESRI REST API url

```javascript
var esriUrl = require('esri-rest-url');

var url = esriUrl({
  base: 'https://services1.arcgis.com/test/arcgis', // host url up to "/rest/services/"
  service: 'Folder/ServiceName', // service name, including any folders
  type: 'MapServer', // resource type
  layerIndex: 0, // index of specific layer
  format: 'pjson' // format of response, defaults to 'json'
});
