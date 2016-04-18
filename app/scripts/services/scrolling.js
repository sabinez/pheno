(function(){
  'use strict';

  angular.module('phenoApp').service('initScrolling', function () {
    var sceneCollection = [];

    var initScrolling = function() {

      var scrollingController = new ScrollMagic.Controller({container: "#viewport"});

      var sideBarTween = new TweenMax.to("#target-side-bar-tween", 1, {left: '-20vh'});
      var sideBarLinesTween = new TweenMax.to("#target-side-bar-lines-tween", 1, {right: '100vw'});
      var calendarMonthLinesTween = new TweenMax.to(".month-separators", 1, {height: '10vh'});
      var beetrootTween = new TweenMax.to(['#target-beetroot-img', '#target-pepper-img'], 1, {'margin-left': '-50vw'});
      var carrotRotation = new TweenMax.to("#target-carrot-rotation", 1, {rotation: 180, ease: Linear.easeNone});
      var brusselSproutsRotation = new TweenMax.to("#target-brussel-sprouts-cutout", 1, {rotation: 360, ease: Linear.easeNone});


      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1.5 *  $(window).height()})
        .triggerHook(0)
        .setPin("#target-calendar", {pushFollowers: true})
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(sideBarTween)
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(sideBarLinesTween)
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(calendarMonthLinesTween)
        .addIndicators()
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-tomato-hg", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(1)
        .setPin("#target-side-bar", {pushFollowers: false})
        .setClassToggle("#target-side-bar", "side-bar")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(0.5 *  $(window).height())
        .setPin("#target-side-bar-lines", {pushFollowers: false})
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-tomato-hg", duration: 1.3 * $(window).height()
    })
        .triggerHook(0)
        .setPin("#target-tomato-hg", {pushFollowers: false})
        .setClassToggle("#side-bar-tomato", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-tomato-img", duration: 1.15 * $(window).height() })
        .triggerHook(0)
        .setPin("#target-tomato-img", {pushFollowers: false})
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-tomato-text", duration: 0.5 * $(window).height()})
        .triggerHook(0.4)
        .setPin("#target-tomato-text", {pushFollowers: false})
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-sweet-potato-img", duration: 0.65 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-sweet-potato-img", {pushFollowers: false})
        .setClassToggle("#side-bar-sweet-potato", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-sweet-potato-text", duration: 0.4 * $(window).height()})
        .triggerHook(0.55)
        .setPin("#target-sweet-potato-text", {pushFollowers: false})
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-pepper-img", duration: 3 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-pepper-img", {pushFollowers: false})
        .setClassToggle("#side-bar-pepper", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-pepper-text", duration: 0.4 * $(window).height()})
        .triggerHook(0.4)
        .setPin("#target-pepper-text", {pushFollowers: false})
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-beetroot-img", duration: 1.2 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-beetroot-img", {pushFollowers: false})
        .setClassToggle("#side-bar-beetroot", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-beetroot-text", duration: 0.3 * $(window).height()})
        .triggerHook(0.3)
        .setPin("#target-beetroot-text", {pushFollowers: false})
        .setTween(beetrootTween)
        .setClassToggle("#trigger-beetroot-text", "visible")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-peas-img", duration: 1.25 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-peas-img", {pushFollowers: false})
        .setClassToggle("#side-bar-peas", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-carrot-img", duration: 0.5 * $(window).height()})
        .triggerHook(0.3)
        .setTween(carrotRotation)
        .setPin("#target-carrot-img", {pushFollowers: false})
        .setClassToggle("#side-bar-carrot", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-chard-img", duration: 1.3 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-chard-img", {pushFollowers: false})
        .setClassToggle("#side-bar-chard", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-brussel-sprouts", duration: 0.5 * $(window).height()})
        .triggerHook(0)
        .setTween(brusselSproutsRotation)
        .setPin("#trigger-brussel-sprouts", {pushFollowers: false})
        .setClassToggle("#side-bar-brussel-sprouts", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-spinach-img", duration: 0.9 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-spinach-img", {pushFollowers: false})
        .setClassToggle("#side-bar-spinach", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-spinach-text", duration: 0.3 * $(window).height()})
        .triggerHook(0.6)
        .setPin("#target-spinach-text", {pushFollowers: false})
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-onion-text", duration: 1.2 * $(window).height()})
        .triggerHook(0.7)
        .setPin("#target-onion-text", {pushFollowers: false})
        .setClassToggle("#side-bar-onion", "active")
        .addTo(scrollingController)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-onion-img", duration: 0.2 * $(window).height()})
        .triggerHook(0.1)
        .setPin("#target-onion-img", {pushFollowers: false})
        .addTo(scrollingController)
      );

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

      initScrolling();

    });

    return initScrolling;

  })
})();