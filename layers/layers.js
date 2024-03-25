var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Padangadm_1 = new ol.format.GeoJSON();
var features_Padangadm_1 = format_Padangadm_1.readFeatures(json_Padangadm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_1.addFeatures(features_Padangadm_1);
var lyr_Padangadm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Padangadm_1, 
                style: style_Padangadm_1,
                popuplayertitle: "Padang adm",
                interactive: true,
                title: '<img src="styles/legend/Padangadm_1.png" /> Padang adm'
            });
var format_titikkunjungan_2 = new ol.format.GeoJSON();
var features_titikkunjungan_2 = format_titikkunjungan_2.readFeatures(json_titikkunjungan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikkunjungan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikkunjungan_2.addFeatures(features_titikkunjungan_2);cluster_titikkunjungan_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_titikkunjungan_2
});
var lyr_titikkunjungan_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_titikkunjungan_2, 
                style: style_titikkunjungan_2,
                popuplayertitle: "titik kunjungan",
                interactive: true,
                title: '<img src="styles/legend/titikkunjungan_2.png" /> titik kunjungan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Padangadm_1.setVisible(true);lyr_titikkunjungan_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Padangadm_1,lyr_titikkunjungan_2];
lyr_Padangadm_1.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', });
lyr_titikkunjungan_2.set('fieldAliases', {'NO': 'NO', 'NAMA_TEMPAT': 'NAMA_TEMPAT', '.S': '.S', '.E': '.E', });
lyr_Padangadm_1.set('fieldImages', {'Id': '', 'kecamatan': '', });
lyr_titikkunjungan_2.set('fieldImages', {'NO': 'Range', 'NAMA_TEMPAT': 'TextEdit', '.S': 'TextEdit', '.E': 'TextEdit', });
lyr_Padangadm_1.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', });
lyr_titikkunjungan_2.set('fieldLabels', {'NO': 'no label', 'NAMA_TEMPAT': 'no label', '.S': 'no label', '.E': 'no label', });
lyr_titikkunjungan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});