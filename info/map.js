var center = SMap.Coords.fromWGS84(14.4141750, 50.1179844);
var m = new SMap(JAK.gel("m"), center, 13);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

var card = new SMap.Card();
card.getHeader().innerHTML = "<strong>Botanická záhrada Troja</strong>";
card.getBody().innerHTML = "Trojská 800/196, 171 00 Praha-Troja";

var options = { 
    title: "Botanická záhrada Troja"
};
var marker = new SMap.Marker(center, "myMarker", options);
marker.decorate(SMap.Marker.Feature.Card, card);
layer.addMarker(marker);