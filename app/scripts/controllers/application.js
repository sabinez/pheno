(function(){
  'use strict';

  angular.module('phenoApp')
    .controller('ApplicationCtrl', function (plantData, $scope) {

      var getMonthWidth = function() {
        return document.getElementById('calendar-month-section').offsetWidth / 12;
      };

      var calculateTimeBarWidth = function( state, cycleNumber, monthWidth ) {
        if ( cycleNumber === 1 ) {
          return ( state[1] - state[0] ) * monthWidth;
        } else if ( cycleNumber === 2 ) {
          return ( state[3] - state[2] ) * monthWidth;
        }
      };

      var calculateTimeBarMargin = function( state, cycleNumber, monthWidth ) {
        if ( cycleNumber === 1 ) {
          return ( state[0] - 1 ) * monthWidth;
        } else if ( cycleNumber === 2) {
          return ( state[2] - state[1] ) * monthWidth;
        }
      };

      var setTimeBarStyle = function(){
        var sowingWidth, sowingMargin, sowingWidthSecond, sowingMarginSecond, plantingWidth, plantingMargin, harvestingWidth, harvestingMargin, harvestingWidthSecond, harvestingMarginSecond;
        var monthWidth = getMonthWidth();
        for(var i = 0; i < $scope.PLANTS.length; i++){
          var plant = $scope.PLANTS[i];
          sowingWidth = calculateTimeBarWidth(plant.TIMES.SOWING, 1, monthWidth);
          sowingMargin = calculateTimeBarMargin(plant.TIMES.SOWING, 1, monthWidth);
          if ( plant.TIMES.SOWING.length > 2 ) {
            sowingWidthSecond = calculateTimeBarWidth(plant.TIMES.SOWING, 2, monthWidth);
            sowingMarginSecond = calculateTimeBarMargin(plant.TIMES.SOWING, 2, monthWidth);
          } else {
            sowingWidthSecond = 0;
            sowingMarginSecond = 0;
          }
          if ( plant.TIMES.PLANTING ) {
            plantingWidth = calculateTimeBarWidth(plant.TIMES.PLANTING, 1, monthWidth);
            plantingMargin = calculateTimeBarMargin(plant.TIMES.PLANTING, 1, monthWidth);
          } else {
            plantingWidth = 0;
            plantingMargin = 0;
          }
          harvestingWidth = calculateTimeBarWidth(plant.TIMES.HARVESTING, 1, monthWidth);
          harvestingMargin = calculateTimeBarMargin(plant.TIMES.HARVESTING, 1, monthWidth);
          if ( plant.TIMES.SOWING.length > 2 ) {
            harvestingWidthSecond = calculateTimeBarWidth(plant.TIMES.HARVESTING, 2, monthWidth);
            harvestingMarginSecond = calculateTimeBarMargin(plant.TIMES.HARVESTING, 2, monthWidth);
          } else {
            harvestingWidthSecond = 0;
            harvestingMarginSecond = 0;
          }
          $scope.PLANTS[i].sowingWidth = sowingWidth;
          $scope.PLANTS[i].sowingMargin = sowingMargin;
          $scope.PLANTS[i].sowingWidthSecond = sowingWidthSecond;
          $scope.PLANTS[i].sowingMarginSecond = sowingMarginSecond;
          $scope.PLANTS[i].plantingWidth = plantingWidth;
          $scope.PLANTS[i].plantingMargin = plantingMargin;
          $scope.PLANTS[i].harvestingWidth = harvestingWidth;
          $scope.PLANTS[i].harvestingMargin = harvestingMargin;
          $scope.PLANTS[i].harvestingWidthSecond = harvestingWidthSecond;
          $scope.PLANTS[i].harvestingMarginSecond = harvestingMarginSecond;
        }
      };


      plantData.requestPlantData(function(data){
        $scope.PLANTS = data.PLANTS;
        setTimeBarStyle();
      });
    });
})();
