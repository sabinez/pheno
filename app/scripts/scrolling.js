"use strict";

$(function () {
  var scrollingController = new ScrollMagic.Controller();

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