(function(exports) {
  exports.Map = function(canvasId, mapOptions) {
    var _trip, _map,
    _options = {
      bounds: true,
      route: true,
      center: false
    };

    var initialize = function(){
      _map = new google.maps.Map(document.getElementById(canvasId), mapOptions);
    };

    var addListener = function (trip) {
      _trip.addEventListener("change", function(data) {

        var route = new google.maps.Polyline({
          path: data.mapData.points,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        if(_options.route) {
          route.setMap(_map);
        }

        if(_options.bounds)
          _map.fitBounds(data.mapData.bounds);

        if(_options.center)
          _map.setCenter(data.mapData.bounds.getCenter());
      });
    };

    this.trip = function (trip, options){
      options || (options = {});

      if(options.hasOwnProperty("bounds")) _options.bounds = options.bounds;
      if(options.hasOwnProperty("route")) _options.route = options.route;
      if(options.hasOwnProperty("center")) _options.center = options.center;

      _trip = trip;
      addListener(trip, _map);
    }

    initialize();
  };
} (ks || {}));
