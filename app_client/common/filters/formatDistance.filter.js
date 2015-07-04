(function () {

  angular
    .module('loc8rApp')
    .filter('formatDistance', formatDistance);

  var _isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  function formatDistance() {
    return function(distance) {
      var numDistance, unit;
      if (distance && _isNumeric(distance)) {
        if (distance > 1) {
          numDistance = parseFloat(distance).toFixed(1);
          unit = ' miles';
        } else {
          numDistance = parseInt(distance * 5280, 10);
          unit = ' ft';
        }
        return numDistance + unit;
      } else {
        return '?';
      }
    };
  }

})();
