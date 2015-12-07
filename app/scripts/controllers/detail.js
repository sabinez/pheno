(function(){
  'use strict';

  angular.module('phenoApp')
    .controller('DetailCtrl', function ($routeParams, plantData, $scope, $location) {

      plantData.requestPlantData(function(data){

        var plantName = $routeParams.plantName;
        console.log(plantName);

        $scope.plantDetails = data.PLANTS.find(function(element){
          if(element.NAME === plantName){
            return true;
          }
        });

        if ($scope.plantDetails === undefined ) {
          $location.url('/');
        }

      });

    });
})();
