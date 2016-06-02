(function(){
  'use strict';

  angular.module('phenoApp')
    .service('media', function ($window, $timeout) {
      var windowWidth = $window.innerWidth;
      $window.addEventListener('resize', function(){
        $timeout(function(){
          windowWidth = $window.innerWidth;
        });
      });

      var media = {
        isMobile : function(){
          if (windowWidth <= 480) {
            return true;
          } else {
            return false;
          };
        }
      };
      return media;
    });
})();