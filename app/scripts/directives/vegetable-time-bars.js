'use strict';

angular.module('phenoApp')
  .directive('vegetableTimeBars', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {plant : '='},
      template: '\
        <li class="target-tween-tomato">\
          <div class="calendar-time-bars">\
            <div style="display:flex;">\
              <div class="calendar-time-bar sowing" style="width:{{plant.sowingWidth}}px;margin-left:{{plant.sowingMargin}}px;">sow</div>\
              <div class="calendar-time-bar sowing" ng-if="plant.TIMES.SOWING[2]" style="width:{{plant.sowingWidthSecond}}px;margin-left:{{plant.sowingMarginSecond}}px;">sow</div>\
            </div>\
            <div class="calendar-time-bar planting" ng-if="plant.TIMES.PLANTING" style="width:{{plant.plantingWidth}}px;margin-left:{{plant.plantingMargin}}px;">plant</div>\
            <div style="display:flex;">\
              <div class="calendar-time-bar harvesting" style="width:{{plant.harvestingWidth}}px;margin-left:{{plant.harvestingMargin}}px;">harvest</div>\
              <div class="calendar-time-bar harvesting" ng-if="plant.TIMES.HARVESTING[2]" style="width:{{plant.harvestingWidthSecond}}px;margin-left:{{plant.harvestingMarginSecond}}px;">harvest</div>\
            </div>\
          </div>\
        </li>'
    };
  });
