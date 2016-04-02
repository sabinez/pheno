"use strict";angular.module("phenoApp",["ngAnimate","ngCookies","ngRoute","ngSanitize","ngTouch"]),window.animatePeas=function(){var a=""+($(".peas-img-hg").width()-$(".pea-a").width())+"px",b=""+($(".peas-img-hg").height()-$(".pea-a").height())+"px";$(".pea").each(function(c,d){var e=$(d),f=e.css("left"),g=e.css("top"),h=Math.floor(3*Math.random()),i=Math.floor(Math.random()*parseInt(b)),j=Math.floor(Math.random()*parseInt(a));"0px"===f?0===h?(e.css("top","0px"),e.css("left",""+j+"px")):1===h?(e.css("left",a),e.css("top",""+i+"px")):(e.css("top",b),e.css("left",""+j+"px")):f===a?0===h?(e.css("top",b),e.css("left",""+j+"px")):1===h?(e.css("left","0px"),e.css("top",""+i+"px")):(e.css("top","0px"),e.css("left",""+j+"px")):"0px"===g?0===h?(e.css("left",a),e.css("top",""+i+"px")):1===h?(e.css("top",b),e.css("left",""+j+"px")):(e.css("left","0px"),e.css("top",""+i+"px")):g===b&&(0===h?(e.css("left","0px"),e.css("top",""+i+"px")):1===h?(e.css("top","0px"),e.css("left",""+j+"px")):(e.css("left",a),e.css("top",""+i+"px")))})},angular.module("phenoApp").controller("AboutCtrl",function(){}),function(){angular.module("phenoApp").service("plantData",["$http",function(a){var b={};return b.requestPlantData=function(b){a.get("/plants.json").success(function(a){b(a)})},b}])}(),function(){angular.module("phenoApp").controller("ApplicationCtrl",["plantData","$scope","initScrolling","$timeout",function(a,b,c,d){var e=function(){return document.getElementById("calendar-month-section").offsetWidth/12},f=function(a,b,c){return 1===b?(a[1]-a[0])*c:2===b?(a[3]-a[2])*c:void 0},g=function(a,b,c){return 1===b?(a[0]-1)*c:2===b?(a[2]-a[1])*c:void 0},h=function(){for(var a=e(),c=0;c<b.PLANTS.length;c++)for(var d=b.PLANTS[c],h=["sowing","planting","harvesting"],i=0;i<h.length;i++){var j=h[i]+"Width",k=h[i]+"Margin",l=h[i]+"WidthSecond",m=h[i]+"MarginSecond",n=h[i].toUpperCase(),o=d.TIMES[n];void 0!==o&&(b.PLANTS[c][j]=f(o,1,a),b.PLANTS[c][k]=g(o,1,a),o.length>2?(b.PLANTS[c][l]=f(o,2,a),b.PLANTS[c][m]=g(o,2,a)):(b.PLANTS[c][l]=0,b.PLANTS[c][m]=0))}};a.requestPlantData(function(a){b.PLANTS=a.PLANTS,h(),d(function(){c(),setInterval(animatePeas,20)})})}])}(),function(){angular.module("phenoApp").service("initScrolling",function(){var a=function(){var a=new ScrollMagic.Controller({container:"#viewport"}),b=new TweenMax.to("#target-side-bar-tween",1,{left:"5px"}),c=new TweenMax.to("#target-side-bar-lines-tween",1,{right:"97vw"}),d=new TweenMax.to(".target-side-bar-links-tween",1,{opacity:"0.3"}),e=new TweenMax.to(["#target-beetroot-img","#target-pepper-img"],1,{"margin-left":"-50vw"}),f=new TweenMax.to("#target-carrot-rotation",1,{rotation:180,ease:Linear.easeNone}),g=new TweenMax.to("#target-brussel-sprouts-cutout",1,{rotation:360,ease:Linear.easeNone}),b=(new ScrollMagic.Scene({triggerElement:"#trigger-calendar",duration:.5*$(window).height()}).triggerHook(0).setPin("#target-calendar",{pushFollowers:!0}).addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-calendar",duration:.5*$(window).height()}).triggerHook(0).offset(.5*$(window).height()).setTween(b).addTo(a)),d=new ScrollMagic.Scene({triggerElement:"#trigger-calendar",duration:.5*$(window).height()}).triggerHook(0).offset(.5*$(window).height()).setTween(d).addTo(a),c=new ScrollMagic.Scene({triggerElement:"#trigger-calendar",duration:.5*$(window).height()}).triggerHook(0).offset(.5*$(window).height()).setTween(c).addTo(a);new ScrollMagic.Scene({triggerElement:"#trigger-tomato-hg",duration:$("#viewport")[0].scrollHeight}).triggerHook(1).setPin("#target-side-bar",{pushFollowers:!1}).setClassToggle("#target-side-bar","side-bar").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-calendar",duration:$("#viewport")[0].scrollHeight}).triggerHook(0).offset(.5*$(window).height()).setPin("#target-side-bar-lines",{pushFollowers:!1}).addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-tomato-hg",duration:1.3*$(window).height()}).triggerHook(0).setPin("#target-tomato-hg",{pushFollowers:!1}).setClassToggle("#side-bar-tomato","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-tomato-img",duration:1.15*$(window).height()}).triggerHook(0).setPin("#target-tomato-img",{pushFollowers:!1}).addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-tomato-text",duration:.5*$(window).height()}).triggerHook(.4).setPin("#target-tomato-text",{pushFollowers:!1}).addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-sweet-potato-img",duration:.65*$(window).height()}).triggerHook(0).setPin("#target-sweet-potato-img",{pushFollowers:!1}).setClassToggle("#side-bar-sweet-potato","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-sweet-potato-text",duration:.4*$(window).height()}).triggerHook(.55).setPin("#target-sweet-potato-text",{pushFollowers:!1}).addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-pepper-img",duration:3*$(window).height()}).triggerHook(0).setPin("#target-pepper-img",{pushFollowers:!1}).setClassToggle("#side-bar-pepper","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-pepper-text",duration:.4*$(window).height()}).triggerHook(.4).setPin("#target-pepper-text",{pushFollowers:!1}).addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-beetroot-img",duration:1.2*$(window).height()}).triggerHook(0).setPin("#target-beetroot-img",{pushFollowers:!1}).setClassToggle("#side-bar-beetroot","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-beetroot-text",duration:.3*$(window).height()}).triggerHook(.3).setPin("#target-beetroot-text",{pushFollowers:!1}).setTween(e).setClassToggle("#trigger-beetroot-text","visible").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-peas-img",duration:1.25*$(window).height()}).triggerHook(0).setPin("#target-peas-img",{pushFollowers:!1}).setClassToggle("#side-bar-peas","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-carrot-img",duration:.5*$(window).height()}).triggerHook(.3).setTween(f).setPin("#target-carrot-img",{pushFollowers:!1}).setClassToggle("#side-bar-carrot","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-chard-img",duration:1.3*$(window).height()}).triggerHook(0).setPin("#target-chard-img",{pushFollowers:!1}).setClassToggle("#side-bar-chard","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-brussel-sprouts",duration:.5*$(window).height()}).triggerHook(0).setTween(g).setPin("#trigger-brussel-sprouts",{pushFollowers:!1}).setClassToggle("#side-bar-brussel-sprouts","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-spinach-img",duration:.9*$(window).height()}).triggerHook(0).setPin("#target-spinach-img",{pushFollowers:!1}).setClassToggle("#side-bar-spinach","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-spinach-text",duration:.3*$(window).height()}).triggerHook(.6).setPin("#target-spinach-text",{pushFollowers:!1}).addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-onion-text",duration:1.2*$(window).height()}).triggerHook(.7).setPin("#target-onion-text",{pushFollowers:!1}).setClassToggle("#side-bar-onion","active").addTo(a),new ScrollMagic.Scene({triggerElement:"#trigger-onion-img",duration:.2*$(window).height()}).triggerHook(.1).setPin("#target-onion-img",{pushFollowers:!1}).addTo(a);a.scrollTo(function(a){TweenMax.to(window,.5,{scrollTo:{y:a}})}),$(document).on("click","a[href^='#']",function(b){var c=$(this).attr("href");$(c).length>0&&(b.preventDefault(),a.scrollTo(c),window.history&&window.history.pushState&&history.pushState("",document.title,c))})};return a})}(),angular.module("phenoApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>")}]);