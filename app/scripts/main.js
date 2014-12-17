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
  });

  $('.view-all').on('click', function(){
    $('.slide').addClass('active');
  });

});
