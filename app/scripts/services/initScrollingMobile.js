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


      // var tomato = new TimelineMax();
      
      // tomato.add([
      //   TweenMax.to(".vegetable-heading-tomato", 0.35, {top: '5vh'}),
      //   TweenMax.to(".tomato-hg", 0.35, {top: sixTimesUnit.toString()}),
      //   TweenMax.to(".tomato-img", 0.35, {top: sixAndAHalfTimesUnit.toString()}),
      //   TweenMax.to(".tomato-text-position", 0.35, {top: sevenTimesUnit.toString()})
      // ], 0);
      
      // tomato.add( TweenMax.to(".tomato-img", 0.05, {top: sixTimesUnit.toString()}), 0.35 )
      
      // tomato.add([
      //   TweenMax.to(".vegetable-heading-tomato", 0.4, {top: '-50vh'}),
      //   TweenMax.to(".tomato-hg", 0.4, {top: '-50vh'}),
      //   TweenMax.to(".tomato-img", 0.4, {top: '-50vh'}),
      //   TweenMax.to(".tomato-text-position", 0.4, {top: '-100vh'})
      // ], 0.6);

      // sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-tomato", duration: 1.5 * windowHeight})
      //   .triggerHook(0)
      //   .setPin(".screen-tomato", {pushFollowers: false})
      //   .setTween(tomato)
      //   .setClassToggle("#menu-tomato", "active")
      //   .on("end", function(){
      //     scrollEvents.updateAnchorStatus("tomato");
      //   })
      // );

      // sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-tomato"})
      //   .offset(0.9 * windowHeight)
      //   .setTween(generateTimeBarTweens(8))
      // );

      // sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-tomato"})
      //   .offset(1.5 * windowHeight)
      //   .setTween(generateTimeBarTweens(8, true))
      // );


      // var sweetPotato = new TimelineMax();
      
      // sweetPotato.add([
      //   TweenMax.to(".vegetable-heading-sweet-potato", 0.4, {top: '5vh'}),
      //   TweenMax.to(".sweet-potato-img", 0.4, {top: threeTimesUnit.toString()}),
      //   TweenMax.to(".sweet-potato-text-position", 0.4, {top: elevenTimesUnit.toString()})
      // ], 0);
      
      // sweetPotato.add([
      //   TweenMax.to(".vegetable-heading-sweet-potato", 0.4, {top: '-50vh'}),
      //   TweenMax.to(".sweet-potato-img", 0.4, {top: '-50vh'}),
      //   TweenMax.to(".sweet-potato-text-position", 0.4, {top: '-100vh'})
      // ], 0.6);

      // sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-sweet-potato", duration: 1.5 * windowHeight})
      //   .triggerHook(0)
      //   .setPin(".screen-sweet-potato", {pushFollowers: false})
      //   .setTween(sweetPotato)
      //   .setClassToggle("#menu-sweet-potato", "active")
      //   .on("end", function(){
      //     scrollEvents.updateAnchorStatus("sweet-potato");
      //   })
      // );

      // sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-sweet-potato"})
      //   .offset(0.9 * windowHeight)
      //   .setTween(generateTimeBarTweens(9))
      // );

      // sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-sweet-potato"})
      //   .offset(1.5 * windowHeight)
      //   .setTween(generateTimeBarTweens(9, true))
      // );


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