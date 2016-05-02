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
              <div class="calendar-time-bar sowing time-bar-sowing-{{plant.URL}}" style="width:0;margin-left:{{plant.sowingMargin}}px;">sow</div>\
              <div class="calendar-time-bar sowing time-bar-sowing-2nd-{{plant.URL}}" ng-if="plant.TIMES.SOWING[2]" style="width:0;margin-left:{{plant.sowingMarginSecond}}px;">sow</div>\
            </div>\
            <div class="calendar-time-bar planting time-bar-planting-{{plant.URL}}" ng-if="plant.TIMES.PLANTING" style="width:0;margin-left:{{plant.plantingMargin}}px;">plant</div>\
            <div style="display:flex;">\
              <div class="calendar-time-bar harvesting time-bar-harvesting-{{plant.URL}}" style="width:0;margin-left:{{plant.harvestingMargin}}px;">harvest</div>\
              <div class="calendar-time-bar harvesting time-bar-harvesting-2nd-{{plant.URL}}" ng-if="plant.TIMES.HARVESTING[2]" style="width:0;margin-left:{{plant.harvestingMarginSecond}}px;">harvest</div>\
            </div>\
          </div>\
        </li>'
    };
  });
