(function(){
  'use strict';

  angular.module('phenoApp')
    .controller('ApplicationCtrl', function (plantData, $scope, initScrolling, $timeout) {

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
        var monthWidth = getMonthWidth();
        for(var i = 0; i < $scope.PLANTS.length; i++){
          var plant = $scope.PLANTS[i];

          var cultivationSteps = [ "sowing", "planting", "harvesting" ];
          for(var j = 0; j < cultivationSteps.length; j++){
            var cultivationStepWidth = cultivationSteps[j] + "Width";
            var cultivationStepMargin = cultivationSteps[j] + "Margin";
            var cultivationStepWidthSecond = cultivationSteps[j] + "WidthSecond";
            var cultivationStepMarginSecond = cultivationSteps[j] + "MarginSecond";
            var cultivationStepUpperCase = cultivationSteps[j].toUpperCase();
            var plantTime = plant.TIMES[cultivationStepUpperCase];

            if ( plantTime === undefined ){ continue; }
            $scope.PLANTS[i][cultivationStepWidth] = calculateTimeBarWidth(plantTime, 1, monthWidth);
            $scope.PLANTS[i][cultivationStepMargin] = calculateTimeBarMargin(plantTime, 1, monthWidth);
            if ( plantTime.length > 2 ) {
              $scope.PLANTS[i][cultivationStepWidthSecond] = calculateTimeBarWidth(plantTime, 2, monthWidth);
              $scope.PLANTS[i][cultivationStepMarginSecond] = calculateTimeBarMargin(plantTime, 2, monthWidth);
            } else {
              $scope.PLANTS[i][cultivationStepWidthSecond] = 0;
              $scope.PLANTS[i][cultivationStepMarginSecond] = 0;
            }
          }
        }
      };


      plantData.requestPlantData(function(data){
        $scope.PLANTS = data.PLANTS;
        setTimeBarStyle();
        $timeout(function(){
          initScrolling();
          setInterval(animatePeas, 20);
        });
      });
    });
})();
