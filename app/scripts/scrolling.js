"use strict";

$(function () {
  var scrollingController = new ScrollMagic.Controller();

  var sideBarTween = new TweenMax.to("#target-side-bar-tween", 1, {left: '5px'});

  var calendar = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1.5 * $(window).height()})
    .triggerHook(0)
    .setPin("#target-calendar", {pushFollowers: true})
    .addTo(scrollingController);

  var sideBarTween = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 0.5 * $(window).height()})
    .triggerHook(0)
    .offset($(window).height())
    .setTween(sideBarTween)
    .addTo(scrollingController);

  var sideBar = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-frame", duration: $(document).height()})
    .triggerHook(1)
    .setPin("#target-side-bar", {pushFollowers: false})
    .addTo(scrollingController)
    .addIndicators();

  var tomatoFrame = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-frame", duration: 2.2 * $(window).height()
})
    .triggerHook(0)
    .setPin("#target-tomato-frame", {pushFollowers: false})
    .addTo(scrollingController);

  var tomatoImg = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-img", duration: $(window).height() })
    .triggerHook(0)
    .setPin("#target-tomato-img", {pushFollowers: false})
    .addTo(scrollingController);

  var tomatoImg = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-img", duration: $(window).height() })
    .triggerHook(0)
    .setPin("#target-tomato-img-layer", {pushFollowers: false})
    .addTo(scrollingController);

});