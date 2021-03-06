(function(){
  'use strict';

  angular.module('phenoApp')
    .controller('ApplicationCtrl', function (plantData, $scope, initScrolling, initScrollingMobile, $timeout, media) {

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

      var setTimeBarStyle = function(monthWidth){
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

      $scope.hideLines = false;
      $scope.showMenuAll = false;
      $scope.showMenu = false;
      $scope.hideMenu = true;
      $scope.showBeetrootText = false;
      $scope.anchorStatuses = {};
      var scrollEvents = {};

      scrollEvents.removeLinesAndShowMenu = function(){
        $scope.$apply(function(){
          if ($scope.hideLines == false) {
            $scope.hideLines = true;
            $scope.showMenuAll = true;
          } else {
            $scope.hideLines = false;
            $scope.showMenuAll = false;
          };
        });
      };

      scrollEvents.updateAnchorStatus = function(plantName) {
        $scope.$apply(function(){
          if ($scope.anchorStatuses[plantName]) {
            $scope.anchorStatuses[plantName] = false;
          } else {
            $scope.anchorStatuses[plantName] = true;
          };
        });
      };

      $scope.menuButton = function(){
        if ($scope.showMenu == false) {
          $scope.showMenu = true;
          $scope.hideMenu = false;
        } else {
          $scope.showMenu = false;
          $scope.hideMenu = true;
        };
      };

      plantData.requestPlantData(function(data){
        $scope.PLANTS = data.PLANTS;
        setTimeBarStyle(getMonthWidth());
        $timeout(function(){
          if (media.isMobile() === true) {
            initScrollingMobile(scrollEvents, $scope.PLANTS);
          }else{
            initScrolling(scrollEvents, $scope.PLANTS);
          };
          setInterval(animatePeas, 20);
        });
      });

      $scope.media = media;


    });
})();
