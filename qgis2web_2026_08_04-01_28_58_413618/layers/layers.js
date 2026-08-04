var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZonedtudepriphriqueAvlktGrandpopo_1 = new ol.format.GeoJSON();
var features_ZonedtudepriphriqueAvlktGrandpopo_1 = format_ZonedtudepriphriqueAvlktGrandpopo_1.readFeatures(json_ZonedtudepriphriqueAvlktGrandpopo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonedtudepriphriqueAvlktGrandpopo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedtudepriphriqueAvlktGrandpopo_1.addFeatures(features_ZonedtudepriphriqueAvlktGrandpopo_1);
var lyr_ZonedtudepriphriqueAvlktGrandpopo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedtudepriphriqueAvlktGrandpopo_1, 
                style: style_ZonedtudepriphriqueAvlktGrandpopo_1,
                popuplayertitle: 'Zone d\'étude (périphérique Avlékété à Grand-popo)',
                interactive: true,
                title: '<img src="styles/legend/ZonedtudepriphriqueAvlktGrandpopo_1.png" /> Zone d\'étude (périphérique Avlékété à Grand-popo)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ZonedtudepriphriqueAvlktGrandpopo_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ZonedtudepriphriqueAvlktGrandpopo_1];
lyr_ZonedtudepriphriqueAvlktGrandpopo_1.set('fieldAliases', {'id': 'id', });
lyr_ZonedtudepriphriqueAvlktGrandpopo_1.set('fieldImages', {'id': 'TextEdit', });
lyr_ZonedtudepriphriqueAvlktGrandpopo_1.set('fieldLabels', {'id': 'no label', });
lyr_ZonedtudepriphriqueAvlktGrandpopo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});