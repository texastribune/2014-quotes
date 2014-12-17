'use strict';

$(document).ready(function() {

  // function showQuoteSlide(index){
  //    $('.slide.slide-' + slug).addClass('active').siblings('.active').removeClass('active');
  // };


  $('.slide').eq(0).addClass('active');

  $('.slide-btn').on('click', function(){
    var activeSlide = $('.slide.active'),
      idx = $('.slide').index(activeSlide),
      nextSlide = $(this).hasClass('next') ? idx + 1 : idx - 1;
    $('.slide').eq(nextSlide).addClass('active').siblings('.active').removeClass('active');
    console.log(idx);
    if (idx === 12){
      idx === 0;
    };
  });

  $(document).keydown(function(e) {
    if (e.which == 37) { // left key
        $('.prev').trigger('click');
    } else if (e.which == 39) { // right key
        $('.next').trigger('click');
    }
  });

  $('.view-all').on('click', function(){
    $('.slide').addClass('active');
    $('.slide-btn').addClass('hidden');
    $('.view-all').addClass('hidden');
  });

});
