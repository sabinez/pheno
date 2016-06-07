'use strict';

angular.module('phenoApp')
  .directive('vegetableTimeTable', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {plant : '='},
      link: function(scope, attrs, element){
        var months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
        scope.monthNameFromNumber = function(number, isEnd){
          number = number - 1;
          console.log(number);
          if(number === undefined){ return; };
          if( number % 1 !== 0 ){ //check if number is an float
            var monthName = "Mid " + months[Math.floor(number)];
          } else if(isEnd) {
            number = number -1;
            var monthName = months[number];
          } else {
            var monthName =  months[number];
          };
          return monthName;
      };
      },
      template: '\
        <table>\
          <tr>\
            <td>sow</td>\
            <td>{{monthNameFromNumber(plant.TIMES.SOWING[0])}} - {{monthNameFromNumber(plant.TIMES.SOWING[1], true)}}</td>\
          </tr>\
          <tr ng-if="plant.TIMES.PLANTING">\
            <td>planting</td>\
            <td>{{monthNameFromNumber(plant.TIMES.PLANTING[0])}} - {{monthNameFromNumber(plant.TIMES.PLANTING[1], true)}}</td>\
          </tr>\
          <tr>\
            <td>harvest</td>\
            <td>{{monthNameFromNumber(plant.TIMES.HARVESTING[0])}} - {{monthNameFromNumber(plant.TIMES.HARVESTING[1], true)}}</td>\
          </tr>\
          <tr ng-if="plant.TIMES.SOWING[2]">\
            <td>2nd sow</td>\
            <td>{{monthNameFromNumber(plant.TIMES.SOWING[2])}} - {{monthNameFromNumber(plant.TIMES.SOWING[3], true)}}</td>\
          </tr>\
          <tr ng-if="plant.TIMES.HARVESTING[2]">\
            <td>2nd harvest</td>\
            <td>{{monthNameFromNumber(plant.TIMES.HARVESTING[2])}} - {{monthNameFromNumber(plant.TIMES.HARVESTING[3], true)}}</td>\
          </tr>\
        </table>'
    };
  });
