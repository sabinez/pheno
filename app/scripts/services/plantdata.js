(function(){
  'use strict';

  angular.module('phenoApp')
    .service('plantData', function ($http) {

      var res = {};

      res.requestPlantData = function(cb){
        $http.get('/plants.json')
          .success(function(data) {
            cb(data);
          });
      };

      return res;
    });
})();
