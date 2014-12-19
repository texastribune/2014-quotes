(function() {

  'use strict';
  //first quote appears
  $('.slide').eq(0).addClass('active');

  //setting up counter
  var current = 1;

  //prev/next buttons being buttons
  $('.slide-btn').on('click', function(){
    var trigger = $(this).hasClass('next') ? 'next' : 'prev';
    var activeSlide = $('.slide.active'),
      idx = $('.slide').index(activeSlide),
      nextSlide = trigger === 'next' ? idx + 1 : idx - 1;
    $('.slide').eq(nextSlide).addClass('active').siblings('.active').removeClass('active');
    console.log(idx);

    pymChild.sendHeight();

    // reset at the end
    if (idx === 12 && trigger === 'next'){
      $('.slide').eq(0).addClass('active').siblings('.active').removeClass('active');
    };

    $('.current').text($('.slide').index($('.active')) + 1);
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
  // all of the quotes
  $('.view-all').on('click', function(){
    $('.slide').addClass('active');
    $('.slide-btn').addClass('hidden');
    $('.view-all').addClass('hidden');
  });

  var pymChild = new pym.Child();

})();
