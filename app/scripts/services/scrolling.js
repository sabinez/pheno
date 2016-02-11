(function(){
  'use strict';

  angular.module('phenoApp').service('initScrolling', function () {

    var initScrolling = function() {

      var scrollingController = new ScrollMagic.Controller();

      var sideBarTween = new TweenMax.to("#target-side-bar-tween", 1, {left: '5px'});
      var sideBarLinesTween = new TweenMax.to("#target-side-bar-lines-tween", 1, {right: '97vw'});
      var sideBarLinksTween = new TweenMax.to(".target-side-bar-links-tween", 1, {opacity: '0.3'});
      var beetrootTween = new TweenMax.to(['#target-beetroot-img', '#target-pepper-img'], 1, {'margin-left': '-50vw'});

      var calendar = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 0.5 *  $(window).height()})
        .triggerHook(0)
        .setPin("#target-calendar", {pushFollowers: true})
        .addTo(scrollingController);

      var sideBarTween = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 0.5 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(sideBarTween)
        .addTo(scrollingController);

      var sideBarLinksTween = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 0.5 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(sideBarLinksTween)
        .addTo(scrollingController);

      var sideBarLinesTween = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: 0.5 * $(window).height()})
        .triggerHook(0)
        .offset(0.5 * $(window).height())
        .setTween(sideBarLinesTween)
        .addTo(scrollingController);

      var sideBar = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-hg", duration: $(document).height()})
        .triggerHook(1)
        .setPin("#target-side-bar", {pushFollowers: false})
        .setClassToggle("#target-side-bar", "side-bar")
        .addTo(scrollingController);

      var sideBarLines = new ScrollMagic.Scene({triggerElement: "#trigger-calendar", duration: $(document).height()})
        .triggerHook(0)
        .offset(0.5 *  $(window).height())
        .setPin("#target-side-bar-lines", {pushFollowers: false})
        .addTo(scrollingController);

      var tomatoHg = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-hg", duration: 1.3 * $(window).height()
    })
        .triggerHook(0)
        .setPin("#target-tomato-hg", {pushFollowers: false})
        .setClassToggle("#side-bar-tomato", "active")
        .addTo(scrollingController);

      var tomatoImg = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-img", duration: 1.15 * $(window).height() })
        .triggerHook(0)
        .setPin("#target-tomato-img", {pushFollowers: false})
        .addTo(scrollingController);

      var tomatoText = new ScrollMagic.Scene({triggerElement: "#trigger-tomato-text", duration: 0.5 * $(window).height()})
        .triggerHook(0.4)
        .setPin("#target-tomato-text", {pushFollowers: false})
        .addTo(scrollingController);

      var sweetPotatoImg = new ScrollMagic.Scene({triggerElement: "#trigger-sweet-potato-img", duration: 0.65 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-sweet-potato-img", {pushFollowers: false})
        .setClassToggle("#side-bar-sweet-potato", "active")
        .addTo(scrollingController);

      var sweetPotatoText = new ScrollMagic.Scene({triggerElement: "#trigger-sweet-potato-text", duration: 0.4 * $(window).height()})
        .triggerHook(0.55)
        .setPin("#target-sweet-potato-text", {pushFollowers: false})
        .addTo(scrollingController);

      var pepperImg = new ScrollMagic.Scene({triggerElement: "#trigger-pepper-img", duration: 4 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-pepper-img", {pushFollowers: false})
        .setClassToggle("#side-bar-pepper", "active")
        .addTo(scrollingController);

      var pepperText = new ScrollMagic.Scene({triggerElement: "#trigger-pepper-text", duration: 0.4 * $(window).height()})
        .triggerHook(0.4)
        .setPin("#target-pepper-text", {pushFollowers: false})
        .addTo(scrollingController);

      var beetrootImg = new ScrollMagic.Scene({triggerElement: "#trigger-beetroot-img", duration: 1.7 * $(window).height()})
        .triggerHook(0)
        .setPin("#target-beetroot-img", {pushFollowers: false})
        .setClassToggle("#side-bar-beetroot", "active")
        .addTo(scrollingController);

      var beetrootText = new ScrollMagic.Scene({triggerElement: "#trigger-beetroot-text", duration: 0.6 * $(window).height()})
        .triggerHook(0.3)
        .setPin("#target-beetroot-text", {pushFollowers: false})
        .setTween(beetrootTween)
        .setClassToggle("#trigger-beetroot-text", "visible")
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