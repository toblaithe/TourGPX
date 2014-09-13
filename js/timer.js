(function(exports) {


  exports.Timer = function(trip) {
    var _prop = {};

    _prop.start = function (interval) {
      if(typeof timeout !== 'undefined')
        clearTimeout(timeout);

      timeout = setTimeout(function(){
        trip.next();
        _prop.start(interval)
      }, interval);
    }

    _prop.stop = function () {
      if(typeof timeout !== 'undefined')
        clearTimeout(timeout);
    }
    return _prop;
  };


}(ks || {}));
