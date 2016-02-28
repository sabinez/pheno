'use strict';

window.animatePeas = function() {
  var width = '' + ($('.peas-img-hg').width() - $('.pea-a').width()) + 'px';
  var height = '' + ($('.peas-img-hg').height() - $('.pea-a').height()) + 'px';

  $('.pea').each(function(index, element){
    var pea  = $(element);
    var left = pea.css('left');
    var top  = pea.css('top');

    var randomNextEdge = Math.floor(Math.random() * 3);
    var randomTop = Math.floor(Math.random() * parseInt(height));
    var randomLeft = Math.floor(Math.random() * parseInt(width));


    if(left === '0px'){ // we are left
      if(randomNextEdge === 0) {
        pea.css('top', '0px');
        pea.css('left', '' + randomLeft + 'px');
      } else if (randomNextEdge === 1) {
        pea.css('left', width);
        pea.css('top', '' + randomTop + 'px');
      } else {
        pea.css('top', height);
        pea.css('left', '' + randomLeft + 'px');
      }
    } else if(left === width) {  // we are right
      if(randomNextEdge === 0) {
        pea.css('top', height);
        pea.css('left', '' + randomLeft + 'px');
      } else if (randomNextEdge === 1) {
        pea.css('left', '0px');
        pea.css('top', '' + randomTop + 'px');
      } else {
        pea.css('top', '0px');
        pea.css('left', '' + randomLeft + 'px');
      }
    } else if(top === '0px') { // we are top
      if(randomNextEdge === 0) {
        pea.css('left', width);
        pea.css('top', '' + randomTop + 'px');
      } else if (randomNextEdge === 1) {
        pea.css('top', height);
        pea.css('left', '' + randomLeft + 'px');
      } else {
        pea.css('left', '0px');
        pea.css('top', '' + randomTop + 'px');
      }
    } else if (top === height){ // we are bottom
      if(randomNextEdge === 0) {
        pea.css('left', '0px');
        pea.css('top', '' + randomTop + 'px');
      } else if (randomNextEdge === 1) {
        pea.css('top', '0px');
        pea.css('left', '' + randomLeft + 'px');
      } else {
        pea.css('left', width);
        pea.css('top', '' + randomTop + 'px');
      }
    }


    // if(left === '0px'){
    //   pea.css('left', width);
    // } else if(left === width) {
    //   pea.css('left', '0px');
    // } else {
    //   // ...
    // }
  });
}