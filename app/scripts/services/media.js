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
          if (windowWidth < 740) {
            return true;
          } else {
            return false;
          };
        }
      };
      return media;
    });
})();