(function(){
  'use strict';

  angular.module('phenoApp').service('initScrollingMobile', function () {
    var sceneCollection = [];

    var initScrollingMobile = function(scrollEvents, PLANTS) {

      var scrollingController = new ScrollMagic.Controller({container: "#viewport"});

      var brusselSprouts = TweenMax.to(".brussel-sprouts-cutout", 1, {rotation: 360, ease: Linear.easeNone});

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".brussel-sprouts-img", duration: 150})
        .triggerHook(0)
        .setPin(".brussel-sprouts-img", {pushFollowers: true})
        .setTween(brusselSprouts)
      );


      var tomato = TweenMax.to(".tomato-cutout", 1, {top: 0});

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".tomato-img", duration: 30})
        .triggerHook(0)
        .setPin(".tomato-img", {pushFollowers: true})
        .setTween(tomato)
      );


      sceneCollection.forEach(function(scene){
        scene.addTo(scrollingController);
      });

      scrollingController.scrollTo(function (newpos) {
        var viewport = $("#viewport");
        TweenMax.to(viewport, 0.5, {scrollTo: {y: newpos}});
      });

      $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
          e.preventDefault();
          scrollingController.scrollTo(id);
          if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
          }
        }
      });
    };

    $(window).on('resize', function() {

      for (var i = 0; i < sceneCollection.length; i++) {
        sceneCollection[i].destroy(true);
      };

      sceneCollection = [];

      initScrollingMobile();

    });

    return initScrollingMobile;

  })
})();