(function(){
  'use strict';

  angular.module('phenoApp').service('initScrolling', function () {
    var sceneCollection = [];

    var initScrolling = function(scrollEvents) {

      var unit = $(window).height() / 15;
      var threeTimesUnit = 3 * unit;
      var fourTimesUnit = 4 * unit;
      var fiveTimesUnit = 5 * unit;
      var sixTimesUnit = 6 * unit;
      var sevenTimesUnit = 7 * unit;
      var eightTimesUnit = 8 * unit;
      var pepperBeetrootTweenPosition = ($(window).width() / 2) - (5 * unit);

      var scrollingController = new ScrollMagic.Controller({container: "#viewport"});

      var sideBarTween = new TweenMax.to("#target-side-bar-tween", 1, {left: '-100vh'});
      var sideBarLinesTween = new TweenMax.to(".plant-separator-line", 1, {width: '0'});
      var calendarMonthLinesTween = new TweenMax.to(".month-separators", 1, {height: '0'});
      var calendarContentTween = new TweenMax.to(".calendar-content", 1, {left: '-85vh'});
      var vegetableTimeBars = new TweenMax.to(".target-tween-tomato", 1, {left: '40vw'});
      var spinach = new TimelineMax();
        spinach.add([
          TweenMax.to(".vegetable-heading-spinach", 1, {top: '5vh'}),
          TweenMax.to(".spinach-img", 1, {top: sixTimesUnit.toString()}),
          TweenMax.to(".spinach-text-position", 1, {top: sevenTimesUnit.toString()})
        ]);
      var chard = new TimelineMax();
        chard.add([
          TweenMax.to(".vegetable-heading-chard", 1, {top: '5vh'}),
          TweenMax.to(".chard-img", 1, {top: sixTimesUnit.toString()}),
          TweenMax.to(".chard-text-position", 1, {top: sixTimesUnit.toString()})
        ]);
      var brusselSprouts = new TimelineMax();
        brusselSprouts.add([
          TweenMax.to(".vegetable-heading-brussel-sprouts", 1, {top: '5vh'}),
          TweenMax.to(".brussel-sprouts-img", 1, {top: threeTimesUnit.toString()}),
          TweenMax.to(".brussel-sprouts-text-position", 1, {top: sevenTimesUnit.toString()})
        ]);
        brusselSprouts.add(TweenMax.to("#target-brussel-sprouts-cutout", 1, {rotation: 360, ease: Linear.easeNone}));
      var pepper = new TimelineMax();
        pepper.add([
          TweenMax.to(".vegetable-heading-pepper", 1, {top: '5vh'}),
          TweenMax.to(".pepper-img-tweener", 1, {top: sixTimesUnit.toString()}),
          TweenMax.to(".pepper-text-position", 1, {top: sixTimesUnit.toString()})
        ]);
      var beetroot = new TimelineMax();
        beetroot.add([
          TweenMax.to(".vegetable-heading-beetroot", 1, {top: '5vh'}),
          TweenMax.to(".beetroot-img", 1, {top: sixTimesUnit.toString()}),
          TweenMax.to(".beetroot-text-position", 1, {top: sevenTimesUnit.toString()})
        ]);
        beetroot.add(TweenMax.to(['.beetroot-img', '.pepper-img-tweener'], 1, {'left': pepperBeetrootTweenPosition.toString()}));
      var peas = new TimelineMax();
        peas.add([
          TweenMax.to(".vegetable-heading-peas", 1, {top: '5vh'}),
          TweenMax.to(".peas-img", 1, {top: fiveTimesUnit.toString()}),
          TweenMax.to(".peas-text-position", 1, {top: sevenTimesUnit.toString()})
        ]);
      var onion = new TimelineMax();
        onion.add([
          TweenMax.to(".vegetable-heading-onion", 1, {top: '5vh'}),
          TweenMax.to(".onion-img", 1, {top: fourTimesUnit.toString()}),
          TweenMax.to(".onion-text-position", 1, {top: sevenTimesUnit.toString()})
        ]);
      var carrot = new TimelineMax();
        carrot.add([
          TweenMax.to(".vegetable-heading-carrot", 1, {top: '5vh'}),
          TweenMax.to(".carrot-img", 1, {top: fiveTimesUnit.toString()}),
          TweenMax.to(".carrot-text-position", 1, {top: sixTimesUnit.toString()}),
          TweenMax.to(".carrot-img", 1, {rotation: 180, ease: Linear.easeNone})
        ]);

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1.5 *  $(window).height()})
        .triggerHook(0)
        .setPin("#target-calendar", {pushFollowers: true})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(sideBarTween)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(calendarContentTween)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(sideBarLinesTween)
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(calendarMonthLinesTween)
        .on("end", function(){
          scrollEvents.removeLinesAndShowMenu();
        })
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(0.5 *  $(window).height())
        .setPin("#target-side-bar-lines", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(1.5 *  $(window).height())
        .setPin(".month-separators", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(1.5 *  $(window).height())
        .setPin("#calendar-month-section", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(1.5 *  $(window).height())
        .setPin(".menu-wrapper", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-spinach", duration: 1 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-spinach", {pushFollowers: false})
        .setTween(spinach)
        .setClassToggle("#menu-spinach", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-chard", duration: 1 * $(window).height() })
        .triggerHook(0)
        .setPin(".screen-chard", {pushFollowers: false})
        .setTween(chard)
        .setClassToggle("#menu-chard", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-brussel-sprouts", duration: 1.5 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-brussel-sprouts", {pushFollowers: false})
        .setTween(brusselSprouts)
        .setClassToggle("#menu-brussel-sprouts", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-pepper", duration: 1 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-pepper", {pushFollowers: false})
        .setTween(pepper)
        .setClassToggle("#menu-pepper", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-beetroot", duration: 2 * $(window).height()})
        .triggerHook(1)
        .setPin("#pepper-img-pin", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-beetroot", duration: 1 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-beetroot", {pushFollowers: false})
        .setTween(beetroot)
        .setClassToggle("#menu-beetroot", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-peas", duration: 1 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-peas", {pushFollowers: false})
        .setTween(peas)
        .setClassToggle("#menu-peas", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-onion", duration: 1 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-onion", {pushFollowers: false})
        .setTween(onion)
        .setClassToggle("#menu-onion", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-carrot", duration: 1 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-carrot", {pushFollowers: false})
        .setTween(carrot)
        .setClassToggle("#menu-carrot", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-tomato", duration: 1.3 * $(window).height()
    })
        .triggerHook(0)
        .setPin("#target-tomato-hg", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-tomato-hg", duration: 1.15 * $(window).height() })
        .triggerHook(0)
        .offset(0.05 * $(window).height())
        .setPin("#target-tomato-img", {pushFollowers: false})
      );

      // sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-tomato", duration: 1.3 * $(window).height() })
      //   .triggerHook(0)
      //   .setPin(".vegetable-time-bars", {pushFollowers: false})
      // );

      // sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-tomato", duration: 0.5 * $(window).height()})
      //   .triggerHook(0)
      //   .setTween(vegetableTimeBars)
      // );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-tomato-text", duration: 0.5 * $(window).height()})
        .triggerHook(0.4)
        .setPin("#target-tomato-text", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-sweet-potato-img", duration: 0.65 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-sweet-potato-img", {pushFollowers: false})
        .setClassToggle("#menu-sweet-potato", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: "#trigger-sweet-potato-text", duration: 0.4 * $(window).height()})
        .triggerHook(0.55)
        .setPin("#target-sweet-potato-text", {pushFollowers: false})
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

      initScrolling();

    });

    return initScrolling;

  })
})();