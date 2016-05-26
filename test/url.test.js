var test = require('tape'),
    esriUrl = require('..');

test('constructs url', function(t) {
  t.plan(3);

  var url1 = esriUrl({
    base: 'https://services1.arcgis.com/test/arcgis/',
    service: 'ServiceName',
    type: 'MapServer',
    layerIndex: 0,
    format: 'pjson'
  });
  t.equals(url1, 'https://services1.arcgis.com/test/arcgis/ServiceName/MapServer/0?f=pjson', 'returned expected url');

  var url1 = esriUrl({
    base: 'https://services1.arcgis.com/test/arcgis/',
    service: 'Folder/AnotherFolder/ServiceName',
    type: 'FeatureServer',
    layerIndex: 4,
    format: 'json'
  });
  t.equals(url1, 'https://services1.arcgis.com/test/arcgis/Folder/AnotherFolder/ServiceName/FeatureServer/4?f=json', 'returned expected url for within folders service');

  var url1 = esriUrl({
    base: 'https://services1.arcgis.com/gis/test/ArcGIS/',
    service: 'ServiceName',
    type: 'MapServer',
    layerIndex: 0
  });
  t.equals(url1, 'https://services1.arcgis.com/gis/test/ArcGIS/ServiceName/MapServer/0?f=json', 'format defaults to json');

})
