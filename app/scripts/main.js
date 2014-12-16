'use strict';

$(document).ready(function() {

  $('.slide-0').addClass('active');

  $('.slide-btn.next').on('click', function(){
    var activeSlide = $('.active'),
      idx = activeSlide.index(),
      nextSlide = idx += 1;
      $(activeSlide).removeClass('active');
      $('.slide').index(nextSlide).addClass('active');
      console.log(idx);
      console.log(nextSlide);
  });

  $('.view-all').on('click', function(){
    $('.slide').addClass('active');
  });

});
