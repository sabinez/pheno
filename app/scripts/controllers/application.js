(function(){
  'use strict';

  angular.module('phenoApp')
    .controller('ApplicationCtrl', function (plantData, $scope) {

      plantData.requestPlantData(function(data){
        $scope.plantData = data;
        var sowingWidth = 0;
        var sowingMargin = 0;
        var sowingWidthSecond = 0;
        var sowingMarginSecond = 0;
        var plantingWidth = 0;
        var plantingMargin = 0;
        var harvestingWidth = 0;
        var harvestingMargin = 0;
        var harvestingWidthSecond = 0;
        var harvestingMarginSecond = 0;
        var monthWidth = document.getElementById('calendar-month-section').offsetWidth / 12;
        for(var i = 0; i < $scope.plantData.PLANTS.length; i++){
          var plant = $scope.plantData.PLANTS[i];
          sowingWidth = ( plant.TIMES.SOWING[1] - plant.TIMES.SOWING[0] ) * monthWidth;
          sowingMargin = ( plant.TIMES.SOWING[0] - 1 ) * monthWidth;
          if ( plant.TIMES.SOWING.length > 2 ) {
            sowingWidthSecond = ( plant.TIMES.SOWING[3] - plant.TIMES.SOWING[2] ) * monthWidth;
            sowingMarginSecond = ( plant.TIMES.SOWING[2] - 1 ) * monthWidth;
          }
          if ( plant.TIMES.PLANTING ) {
            plantingWidth = ( plant.TIMES.PLANTING[1] - plant.TIMES.PLANTING[0] ) * monthWidth;
            plantingMargin = ( plant.TIMES.PLANTING[0] - 1 ) * monthWidth;
          }
          harvestingWidth = ( plant.TIMES.HARVESTING[1] - plant.TIMES.HARVESTING[0] ) * monthWidth;
          harvestingMargin = ( plant.TIMES.HARVESTING[0] - 1 ) * monthWidth;
          if ( plant.TIMES.SOWING.length > 2 ) {
            harvestingWidthSecond = ( plant.TIMES.HARVESTING[3] - plant.TIMES.HARVESTING[2] ) * monthWidth;
            harvestingMarginSecond = ( plant.TIMES.HARVESTING[0] - 1 ) * monthWidth;
          }
          $scope.plantData.PLANTS[i].sowingWidth = sowingWidth;
          $scope.plantData.PLANTS[i].sowingMargin = sowingMargin;
          $scope.plantData.PLANTS[i].sowingWidthSecond = sowingWidthSecond;
          $scope.plantData.PLANTS[i].sowingMarginSecond = sowingMarginSecond;
          $scope.plantData.PLANTS[i].plantingWidth = plantingWidth;
          $scope.plantData.PLANTS[i].plantingMargin = plantingMargin;
          $scope.plantData.PLANTS[i].harvestingWidth = harvestingWidth;
          $scope.plantData.PLANTS[i].harvestingMargin = harvestingMargin;
          $scope.plantData.PLANTS[i].harvestingWidthSecond = harvestingWidthSecond;
          $scope.plantData.PLANTS[i].harvestingMarginSecond = harvestingMarginSecond;
        }
      });
    });
})();
