var test = require('tape'),
    esriUrl = require('..');

test('constructs url', function(t) {
  t.plan(6);

  var url1 = esriUrl({
    base: 'https://services1.arcgis.com/test/arcgis/',
    service: 'ServiceName',
    type: 'MapServer',
    layerIndex: 0,
    format: 'pjson'
  });
  t.equals(url1, 'https://services1.arcgis.com/test/arcgis/rest/services/ServiceName/MapServer/0?f=pjson', 'returned expected url');

  var url2 = esriUrl({
    base: 'https://services1.arcgis.com/test/arcgis/',
    service: 'Folder/AnotherFolder/ServiceName',
    type: 'FeatureServer',
    layerIndex: 4,
    format: 'json'
  });
  t.equals(url2, 'https://services1.arcgis.com/test/arcgis/rest/services/Folder/AnotherFolder/ServiceName/FeatureServer/4?f=json', 'returned expected url for within folders service');

  var url3 = esriUrl({
    base: 'https://services1.arcgis.com/gis/test/ArcGIS/',
    service: 'ServiceName',
    type: 'MapServer',
    layerIndex: 0
  });
  t.equals(url3, 'https://services1.arcgis.com/gis/test/ArcGIS/rest/services/ServiceName/MapServer/0?f=json', 'format defaults to json');

  var url4 = esriUrl({
    base: 'https://services1.arcgis.com/gis/test/ArcGIS',
    service: 'ServiceName',
    type: 'MapServer',
    layerIndex: 0
  });
  t.equals(url4, 'https://services1.arcgis.com/gis/test/ArcGIS/rest/services/ServiceName/MapServer/0?f=json', 'last forward slash on base not required');

  var url5 = esriUrl({
    base: 'https://services1.arcgis.com/gis/test/ArcGIS/',
    service: 'ServiceName',
    type: 'MapServer',
  });
  t.equals(url5, 'https://services1.arcgis.com/gis/test/ArcGIS/rest/services/ServiceName/MapServer?f=json', 'layerIndex optional');

  var url6 = esriUrl({
    base: 'https://services1.arcgis.com/gis/test/ArcGIS/',
  });
  t.equals(url6, 'https://services1.arcgis.com/gis/test/ArcGIS/rest/services/?f=json', 'service and type optional');

})
