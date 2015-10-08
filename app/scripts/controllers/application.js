(function(){
  'use strict';

  angular.module('phenoApp')
    .controller('ApplicationCtrl', function (plantData, $scope) {

      plantData.requestPlantData(function(data){
        $scope.plantData = data;
        console.log($scope.plantData);

      });

    });
})();
