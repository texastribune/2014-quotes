'use strict';

$(document).ready(function() {

  //first quote appears
  $('.slide').eq(0).addClass('active');

  //prev/next buttons being buttons
  $('.slide-btn').on('click', function(){
    var activeSlide = $('.slide.active'),
      idx = $('.slide').index(activeSlide),
      nextSlide = $(this).hasClass('next') ? idx + 1 : idx - 1;
    $('.slide').eq(nextSlide).addClass('active').siblings('.active').removeClass('active');
    console.log(idx);

    //reset at the end
    if (idx === 12){
      $('.slide').eq(0).addClass('active').siblings('.active').removeClass('active');
    }
  });

  // oh cool, it works with keyboard arrows too!
  $(document).keydown(function(e) {
    if (e.which === 37) { // left key
        $('.prev').trigger('click');
    } else if (e.which === 39) { // right key
        $('.next').trigger('click');
    }
  });
  // all of the quotes
  $('.view-all').on('click', function(){
    $('.slide').addClass('active');
    $('.slide-btn').addClass('hidden');
    $('.view-all').addClass('hidden');
  });

});
