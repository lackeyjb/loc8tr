(function () {

  angular
    .module('loc8rApp')
    .service('loc8rData', loc8rData);

  loc8rData.$inject = ['$http'];
  function loc8rData ($http) {
    
    var loc8rData = {
      locationByCoords: locationByCoords,
      locationById: locationById,
      addReviewById: addReviewById
    };
    return loc8rData;
    
    function locationByCoords(lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat +
        '&maxDistance=20');
    }

    function locationById(locationid) {
      return $http.get('/api/locations/' + locationid);
    }

    function addReviewById(locationid, data) {
      return $http.post('/api/locations/' + locationid + '/reviews', data);
    }
  }

})();
