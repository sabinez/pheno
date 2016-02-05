(function(){
  'use strict';

  angular.module('phenoApp').service('initScrolling', function () {

    var initScrolling = function() {

      var scrollingController = new ScrollMagic.Controller();

      var sideBarTween = new TweenMax.to("#target-side-bar-tween", 1, {left: '5px'});
      var sideBarLinesTween = new TweenMax.to("#target-side-bar-lines-tween", 1, {right: '98vw'});
      var sideBarLinksTween = new TweenMax.to(".target-side-bar-links-tween", 1, {opacity: '0'});

      var calendar = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 1.5 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-calendar", {pushFollowers: true})
        .addTo(scrollingController);

      var sideBarTween = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 0.5 * $(window).height()})
        .triggerHook(0)
        .offset($(window).height())
        .setTween(sideBarTween)
        .addTo(scrollingController);

      var sideBarLinksTween = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 0.5 * $(window).height()})
        .triggerHook(0)
        .offset($(window).height())
        .setTween(sideBarLinksTween)
        .addTo(scrollingController);

      var sideBarLinesTween = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 0.5 * $(window).height()})
        .triggerHook(0)
        .offset($(window).height())
        .setTween(sideBarLinesTween)
        .addTo(scrollingController);

      var sideBar = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-frame", duration: $(document).height()})
        .triggerHook(1)
        .setPin("#target-side-bar", {pushFollowers: false})
        .setClassToggle("#target-side-bar", "side-bar")
        .addTo(scrollingController);

      var sideBarLines = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-frame", duration: $(document).height()})
        .triggerHook(1)
        .setPin("#target-side-bar-lines", {pushFollowers: false})
        .addTo(scrollingController);

      var tomatoFrame = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-frame", duration: 2.2 * $(window).height()
    })
        .triggerHook(0)
        .setPin("#target-tomato-frame", {pushFollowers: false})
        .setClassToggle("#side-bar-tomato", "active")
        .addTo(scrollingController);

      var tomatoImg = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-img", duration: $(window).height() })
        .triggerHook(0)
        .setPin("#target-tomato-img", {pushFollowers: false})
        .addTo(scrollingController);

      var tomatoImg = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-img", duration: $(window).height() })
        .triggerHook(0)
        .setPin("#target-tomato-img-layer", {pushFollowers: false})
        .addTo(scrollingController);

      var tomatoText = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-text", duration: 0.6 * $(window).height()})
        .triggerHook(0.4)
        .setPin("#target-tomato-text", {pushFollowers: false})
        .addTo(scrollingController);

      scrollingController.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
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

    return initScrolling;

  })
})();