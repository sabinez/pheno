(function(){
  'use strict';

  angular.module('phenoApp').service('initScrolling', function () {
    var sceneCollection = [];

    var initScrolling = function(scrollEvents, PLANTS) {
      var unit = $(window).height() / 15;
      var threeTimesUnit = 3 * unit;
      var fourTimesUnit = 4 * unit;
      var fiveTimesUnit = 5 * unit;
      var sixTimesUnit = 6 * unit;
      var sixAndAHalfTimesUnit = 6.5 * unit;
      var sevenTimesUnit = 7 * unit;
      var eightTimesUnit = 8 * unit;
      var elevenTimesUnit = 11 * unit;
      var pepperBeetrootTweenPosition = ($(window).width() / 2) - (5 * unit);

      var scrollingController = new ScrollMagic.Controller({container: "#viewport"});

      var generateTimeBarTweens = function(plantIndex, reverse) {
        var tweenArray = [];
        var start;
        var end;

        if (plantIndex == "all") {
          start = 0;
          end = PLANTS.length;
        } else {
          start = plantIndex;
          end = plantIndex + 1;
        }

        for (var i = start; i < end; i++) {
          tweenArray.push(
            TweenMax.to(".time-bar-sowing-" + PLANTS[i].URL, 0.4, {width: reverse ? 0 : PLANTS[i].sowingWidth.toString() + 'px'}),
            TweenMax.to(".time-bar-harvesting-" + PLANTS[i].URL, 0.4, {width: reverse ? 0 : PLANTS[i].harvestingWidth.toString() + 'px'})
          );
          if (PLANTS[i].sowingWidthSecond !== undefined) {
            tweenArray.push(TweenMax.to(".time-bar-sowing-2nd-" + PLANTS[i].URL, 0.4, {width: reverse ? 0 : PLANTS[i].sowingWidthSecond.toString() + 'px', 'margin-left': reverse ? (PLANTS[i].sowingMarginSecond + PLANTS[i].sowingWidth + 'px') : PLANTS[i].sowingMarginSecond.toString() + 'px'}))
          };
          if (PLANTS[i].plantingWidth !== undefined) {
            tweenArray.push(TweenMax.to(".time-bar-planting-" + PLANTS[i].URL, 0.4, {width: reverse ? 0 : PLANTS[i].plantingWidth.toString() + 'px'}))
          };
          if (PLANTS[i].harvestingWidthSecond !== undefined) {
            tweenArray.push(TweenMax.to(".time-bar-harvesting-2nd-" + PLANTS[i].URL, 0.4, {width: reverse ? 0 : PLANTS[i].sowingWidthSecond.toString() + 'px', 'margin-left': reverse ? (PLANTS[i].harvestingMarginSecond + PLANTS[i].harvestingWidth + 'px') : PLANTS[i].harvestingMarginSecond.toString() + 'px'}))
          };
        }
        return tweenArray;
      };

      var calendar = new TimelineMax();
        calendar.add(generateTimeBarTweens("all"), 0);       
        calendar.add([
          TweenMax.to(".plant-names-wrapper", 0.4, {left: '-100vh'}),
          TweenMax.to(".plant-separator-line", 0.4, {width: '0'}),
          TweenMax.to(".month-separators", 0.4, {height: '0'})
        ].concat(generateTimeBarTweens("all", true)), 0.6);
      
      var pepper = new TimelineMax();
        pepper.add([
          TweenMax.to(".vegetable-heading-pepper", 1, {top: '5vh'}),
          TweenMax.to(".pepper-img-tweener", 1, {top: sixTimesUnit.toString()}),
          TweenMax.to(".pepper-text-position", 1, {top: sixTimesUnit.toString()})
        ].concat(generateTimeBarTweens(3)));
      var beetroot = new TimelineMax();
        beetroot.add([
          TweenMax.to(".vegetable-heading-beetroot", 1, {top: '5vh'}),
          TweenMax.to(".beetroot-img", 1, {top: sixTimesUnit.toString()}),
          TweenMax.to(".beetroot-text-position", 1, {top: sevenTimesUnit.toString()})
        ].concat(generateTimeBarTweens(4)));
        beetroot.add(TweenMax.to(['.beetroot-img', '.pepper-img-tweener'], 1, {'left': pepperBeetrootTweenPosition.toString()}));
      var peas = new TimelineMax();
        peas.add([
          TweenMax.to(".vegetable-heading-peas", 1, {top: '5vh'}),
          TweenMax.to(".peas-img", 1, {top: fiveTimesUnit.toString()}),
          TweenMax.to(".peas-text-position", 1, {top: sevenTimesUnit.toString()})
        ].concat(generateTimeBarTweens(5)));
      var onion = new TimelineMax();
        onion.add([
          TweenMax.to(".vegetable-heading-onion", 1, {top: '5vh'}),
          TweenMax.to(".onion-img", 1, {top: fourTimesUnit.toString()}),
          TweenMax.to(".onion-text-position", 1, {top: sevenTimesUnit.toString()})
        ].concat(generateTimeBarTweens(6)));
      var carrot = new TimelineMax();
        carrot.add([
          TweenMax.to(".vegetable-heading-carrot", 1, {top: '5vh'}),
          TweenMax.to(".carrot-img", 1, {top: fiveTimesUnit.toString()}),
          TweenMax.to(".carrot-text-position", 1, {top: sixTimesUnit.toString()}),
          TweenMax.to(".carrot-img", 1, {rotation: 180, ease: Linear.easeNone})
        ].concat(generateTimeBarTweens(7)));
      var tomato = new TimelineMax();
        tomato.add([
          TweenMax.to(".vegetable-heading-tomato", 0.9, {top: '5vh'}),
          TweenMax.to(".tomato-hg", 0.9, {top: sixTimesUnit.toString()}),
          TweenMax.to(".tomato-img", 0.9, {top: sixAndAHalfTimesUnit.toString()}),
          TweenMax.to(".tomato-text-position", 0.9, {top: sevenTimesUnit.toString()})
        ].concat(generateTimeBarTweens(8)), 0);
        tomato.add( TweenMax.to(".tomato-img", 0.1, {top: sixTimesUnit.toString()}), 0.9 )
      var sweetPotato = new TimelineMax();
        sweetPotato.add([
          TweenMax.to(".vegetable-heading-sweet-potato", 1, {top: '5vh'}),
          TweenMax.to(".sweet-potato-img", 1, {top: threeTimesUnit.toString()}),
          TweenMax.to(".sweet-potato-text-position", 1, {top: elevenTimesUnit.toString()})
        ].concat(generateTimeBarTweens(9)));

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-calendar", duration: 1.5 *  $(window).height()})
        .triggerHook(0)
        .setPin(".screen-calendar", {pushFollowers: true})
        .setTween(calendar)
        .on("end", function(){
          scrollEvents.removeLinesAndShowMenu();
        })
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(1.5 *  $(window).height())
        .setPin("#target-side-bar-lines", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(1.5 *  $(window).height())
        .setPin(".month-separators", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(1.5 *  $(window).height())
        .setPin(".calendar-months", {pushFollowers: false})
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-calendar", duration: $('#viewport')[0].scrollHeight})
        .triggerHook(0)
        .offset(1.5 *  $(window).height())
        .setPin(".menu-wrapper", {pushFollowers: false})
      );


      var spinach = new TimelineMax();

      spinach.add([
        TweenMax.to(".vegetable-heading-spinach", 0.4, {top: '5vh'}),
        TweenMax.to(".spinach-img", 0.4, {top: sixTimesUnit.toString()}),
        TweenMax.to(".spinach-text-position", 0.4, {top: sevenTimesUnit.toString()})
      ].concat(generateTimeBarTweens(0)), 0);

      spinach.add([
        TweenMax.to(".vegetable-heading-spinach", 0.4, {top: '-50vh'}),
        TweenMax.to(".spinach-img", 0.4, {top: '-50vh'}),
        TweenMax.to(".spinach-text-position", 0.4, {top: '-100vh'})
      ].concat(generateTimeBarTweens(0, true)), 0.6);

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-spinach", duration: 1.5 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-spinach", {pushFollowers: false})
        .setTween(spinach)
        .setClassToggle("#menu-spinach", "active")
      );


      var chard = new TimelineMax();

      chard.add([
        TweenMax.to(".vegetable-heading-chard", 0.4, {top: '5vh'}),
        TweenMax.to(".chard-img", 0.4, {top: sixTimesUnit.toString()}),
        TweenMax.to(".chard-text-position", 0.4, {top: sixTimesUnit.toString()})
      ].concat(generateTimeBarTweens(1)), 0);

      chard.add([
        TweenMax.to(".vegetable-heading-chard", 0.4, {top: '-50vh'}),
        TweenMax.to(".chard-img", 0.4, {top: '-50vh'}),
        TweenMax.to(".chard-text-position", 0.4, {top: '-100vh'})
      ].concat(generateTimeBarTweens(1, true)), 0.6);

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-chard", duration: 1.5 * $(window).height() })
        .triggerHook(0)
        .setPin(".screen-chard", {pushFollowers: false})
        .setTween(chard)
        .setClassToggle("#menu-chard", "active")
      );


      var brusselSprouts = new TimelineMax();
      brusselSprouts.add([
        TweenMax.to(".vegetable-heading-brussel-sprouts", 0.4, {top: '5vh'}),
        TweenMax.to(".brussel-sprouts-img", 0.4, {top: threeTimesUnit.toString()}),
        TweenMax.to(".brussel-sprouts-text-position", 0.4, {top: sevenTimesUnit.toString()})
      ].concat(generateTimeBarTweens(2)), 0);

      brusselSprouts.add(TweenMax.to("#target-brussel-sprouts-cutout", 0.4, {rotation: 360, ease: Linear.easeNone}), 0.4);
      
      brusselSprouts.add([
        TweenMax.to(".vegetable-heading-brussel-sprouts", 0.4, {top: '-50vh'}),
        TweenMax.to(".brussel-sprouts-img", 0.4, {top: '-50vh'}),
        TweenMax.to(".brussel-sprouts-text-position", 0.4, {top: '-50vh'})
      ].concat(generateTimeBarTweens(2, true)), 0.8);

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

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-tomato", duration: 1 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-tomato", {pushFollowers: false})
        .setTween(tomato)
        .setClassToggle("#menu-tomato", "active")
      );

      sceneCollection.push( new ScrollMagic.Scene({triggerElement: ".screen-sweet-potato", duration: 1 * $(window).height()})
        .triggerHook(0)
        .setPin(".screen-sweet-potato", {pushFollowers: false})
        .setTween(sweetPotato)
        .setClassToggle("#menu-sweet-potato", "active")
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