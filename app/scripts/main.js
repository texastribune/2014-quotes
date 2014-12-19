/* global pym */

(function() {

  'use strict';

  var $slide = $('.slide');
  var $slideBtn = $('.slide-btn');
  var $current = $('#current');
  var $total = $('#total');

  $total.text($slide.length);

  //prev/next buttons being buttons
  $slideBtn.on('click', function(){
    var trigger = $(this).hasClass('next') ? 'next' : 'prev',
      $activeSlide = $slide.filter('.active'),
      newSlide;
      $slide.removeClass('active');
      if(trigger === 'next'){
        newSlide = $activeSlide.next();
        newSlide = newSlide.length ? newSlide : $slide.first();
      } else {
        newSlide = $activeSlide.prev();
        newSlide = newSlide.length ? newSlide : $slide.last();
      }
      newSlide.addClass('active');


    pymChild.sendHeight();

    $current.text(newSlide.index() + 1);
    // console.log(nextSlide);
  });

  // oh cool, it works with keyboard arrows too!
  $(document).keydown(function(e) {
    if (e.which === 37) { // left key
        $('.prev').trigger('click');
    } else if (e.which === 39) { // right key
        $('.next').trigger('click');
    }
  });

  var pymChild = new pym.Child();

})();
