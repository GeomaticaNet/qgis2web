var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ARG_adm1_1 = new ol.format.GeoJSON();
var features_ARG_adm1_1 = format_ARG_adm1_1.readFeatures(json_ARG_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARG_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARG_adm1_1.addFeatures(features_ARG_adm1_1);
var lyr_ARG_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARG_adm1_1, 
                style: style_ARG_adm1_1,
                interactive: true,
    title: 'ARG_adm1<br />\
    <img src="styles/legend/ARG_adm1_1_0.png" /> Buenos Aires<br />\
    <img src="styles/legend/ARG_adm1_1_1.png" /> Catamarca<br />\
    <img src="styles/legend/ARG_adm1_1_2.png" /> Chaco<br />\
    <img src="styles/legend/ARG_adm1_1_3.png" /> Chubut<br />\
    <img src="styles/legend/ARG_adm1_1_4.png" /> Ciudad de Buenos Aires<br />\
    <img src="styles/legend/ARG_adm1_1_5.png" /> Córdoba<br />\
    <img src="styles/legend/ARG_adm1_1_6.png" /> Corrientes<br />\
    <img src="styles/legend/ARG_adm1_1_7.png" /> Entre Ríos<br />\
    <img src="styles/legend/ARG_adm1_1_8.png" /> Formosa<br />\
    <img src="styles/legend/ARG_adm1_1_9.png" /> Jujuy<br />\
    <img src="styles/legend/ARG_adm1_1_10.png" /> La Pampa<br />\
    <img src="styles/legend/ARG_adm1_1_11.png" /> La Rioja<br />\
    <img src="styles/legend/ARG_adm1_1_12.png" /> Mendoza<br />\
    <img src="styles/legend/ARG_adm1_1_13.png" /> Misiones<br />\
    <img src="styles/legend/ARG_adm1_1_14.png" /> Neuquén<br />\
    <img src="styles/legend/ARG_adm1_1_15.png" /> Río Negro<br />\
    <img src="styles/legend/ARG_adm1_1_16.png" /> Salta<br />\
    <img src="styles/legend/ARG_adm1_1_17.png" /> San Juan<br />\
    <img src="styles/legend/ARG_adm1_1_18.png" /> San Luis<br />\
    <img src="styles/legend/ARG_adm1_1_19.png" /> Santa Cruz<br />\
    <img src="styles/legend/ARG_adm1_1_20.png" /> Santa Fe<br />\
    <img src="styles/legend/ARG_adm1_1_21.png" /> Santiago del Estero<br />\
    <img src="styles/legend/ARG_adm1_1_22.png" /> Tierra del Fuego<br />\
    <img src="styles/legend/ARG_adm1_1_23.png" /> Tucumán<br />\
    <img src="styles/legend/ARG_adm1_1_24.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_ARG_adm1_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ARG_adm1_1];
lyr_ARG_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_ARG_adm1_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_ARG_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'header label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_ARG_adm1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});