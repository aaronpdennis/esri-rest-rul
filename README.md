# esri-rest-url
small module to construct an ESRI REST API url

###install:
```
npm install --save esri-rest-url
```

###usage:
```javascript
var esriUrl = require('esri-rest-url');

var url = esriUrl({
  base: 'https://services1.arcgis.com/test/arcgis', // host url up to "/rest/services/"
  folderLocation: 'FolderName/AnotherFolder',       // [OPTIONAL] folder location, if any
  service: 'ServiceName',                           // [OPTIONAL] service name, including any folders
  type: 'MapServer',                                // [OPTIONAL] resource type
  layerIndex: 0,                                    // [OPTIONAL] index of specific layer
  format: 'pjson'                                   // [OPTIONAL] format of response, defaults to 'json'
});

// url => 'https://services1.arcgis.com/test/arcgis/rest/services/FolderName/AnotherFolder/ServiceName/MapServer/0?f=pjson'
```
