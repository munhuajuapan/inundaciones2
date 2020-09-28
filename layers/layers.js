var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_agenciasycolonias_1 = new ol.format.GeoJSON();
var features_agenciasycolonias_1 = format_agenciasycolonias_1.readFeatures(json_agenciasycolonias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agenciasycolonias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agenciasycolonias_1.addFeatures(features_agenciasycolonias_1);
var lyr_agenciasycolonias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agenciasycolonias_1, 
                style: style_agenciasycolonias_1,
                interactive: true,
                title: '<img src="styles/legend/agenciasycolonias_1.png" /> agencias y colonias'
            });
var format_POLIGONODEINUNDACIN_2 = new ol.format.GeoJSON();
var features_POLIGONODEINUNDACIN_2 = format_POLIGONODEINUNDACIN_2.readFeatures(json_POLIGONODEINUNDACIN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONODEINUNDACIN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONODEINUNDACIN_2.addFeatures(features_POLIGONODEINUNDACIN_2);
var lyr_POLIGONODEINUNDACIN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLIGONODEINUNDACIN_2, 
                style: style_POLIGONODEINUNDACIN_2,
                interactive: true,
                title: '<img src="styles/legend/POLIGONODEINUNDACIN_2.png" /> POLIGONO DE INUNDACIÓN'
            });
var format_2Unidadesmdicasdeconsultaexterna_3 = new ol.format.GeoJSON();
var features_2Unidadesmdicasdeconsultaexterna_3 = format_2Unidadesmdicasdeconsultaexterna_3.readFeatures(json_2Unidadesmdicasdeconsultaexterna_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Unidadesmdicasdeconsultaexterna_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Unidadesmdicasdeconsultaexterna_3.addFeatures(features_2Unidadesmdicasdeconsultaexterna_3);
var lyr_2Unidadesmdicasdeconsultaexterna_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Unidadesmdicasdeconsultaexterna_3, 
                style: style_2Unidadesmdicasdeconsultaexterna_3,
                interactive: true,
                title: '<img src="styles/legend/2Unidadesmdicasdeconsultaexterna_3.png" /> 2 Unidades médicas de consulta externa'
            });
var format_2Unidadesdehositalizacinespecializada_4 = new ol.format.GeoJSON();
var features_2Unidadesdehositalizacinespecializada_4 = format_2Unidadesdehositalizacinespecializada_4.readFeatures(json_2Unidadesdehositalizacinespecializada_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Unidadesdehositalizacinespecializada_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Unidadesdehositalizacinespecializada_4.addFeatures(features_2Unidadesdehositalizacinespecializada_4);
var lyr_2Unidadesdehositalizacinespecializada_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Unidadesdehositalizacinespecializada_4, 
                style: style_2Unidadesdehositalizacinespecializada_4,
                interactive: true,
                title: '<img src="styles/legend/2Unidadesdehositalizacinespecializada_4.png" /> 2 Unidades de hositalización especializada'
            });
var format_2UnidadesdeHospitalizacingeneral_5 = new ol.format.GeoJSON();
var features_2UnidadesdeHospitalizacingeneral_5 = format_2UnidadesdeHospitalizacingeneral_5.readFeatures(json_2UnidadesdeHospitalizacingeneral_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2UnidadesdeHospitalizacingeneral_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2UnidadesdeHospitalizacingeneral_5.addFeatures(features_2UnidadesdeHospitalizacingeneral_5);
var lyr_2UnidadesdeHospitalizacingeneral_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2UnidadesdeHospitalizacingeneral_5, 
                style: style_2UnidadesdeHospitalizacingeneral_5,
                interactive: true,
                title: '<img src="styles/legend/2UnidadesdeHospitalizacingeneral_5.png" /> 2 Unidades de Hospitalización general'
            });

lyr_OSMStandard_0.setVisible(true);lyr_agenciasycolonias_1.setVisible(true);lyr_POLIGONODEINUNDACIN_2.setVisible(true);lyr_2Unidadesmdicasdeconsultaexterna_3.setVisible(true);lyr_2Unidadesdehositalizacinespecializada_4.setVisible(true);lyr_2UnidadesdeHospitalizacingeneral_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_agenciasycolonias_1,lyr_POLIGONODEINUNDACIN_2,lyr_2Unidadesmdicasdeconsultaexterna_3,lyr_2Unidadesdehositalizacinespecializada_4,lyr_2UnidadesdeHospitalizacingeneral_5];
lyr_agenciasycolonias_1.set('fieldAliases', {'AGENCIA': 'AGENCIA', 'CATEGO': 'CATEGO', 'COLONIA': 'COLONIA', 'CATEG': 'CATEG', 'BENEFICIRI': 'BENEFICIRI', 'ZONA': 'ZONA', 'VALOR': 'VALOR', 'OID_1': 'OID_1', });
lyr_POLIGONODEINUNDACIN_2.set('fieldAliases', {'Id': 'Id', });
lyr_2Unidadesmdicasdeconsultaexterna_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Unidadesdehositalizacinespecializada_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2UnidadesdeHospitalizacingeneral_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_agenciasycolonias_1.set('fieldImages', {'AGENCIA': '', 'CATEGO': '', 'COLONIA': '', 'CATEG': '', 'BENEFICIRI': '', 'ZONA': '', 'VALOR': '', 'OID_1': '', });
lyr_POLIGONODEINUNDACIN_2.set('fieldImages', {'Id': '', });
lyr_2Unidadesmdicasdeconsultaexterna_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Unidadesdehositalizacinespecializada_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2UnidadesdeHospitalizacingeneral_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_agenciasycolonias_1.set('fieldLabels', {'AGENCIA': 'no label', 'CATEGO': 'no label', 'COLONIA': 'no label', 'CATEG': 'no label', 'BENEFICIRI': 'no label', 'ZONA': 'no label', 'VALOR': 'no label', 'OID_1': 'no label', });
lyr_POLIGONODEINUNDACIN_2.set('fieldLabels', {'Id': 'no label', });
lyr_2Unidadesmdicasdeconsultaexterna_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Unidadesdehositalizacinespecializada_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2UnidadesdeHospitalizacingeneral_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2UnidadesdeHospitalizacingeneral_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});