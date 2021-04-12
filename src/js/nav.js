(function($){
  // Scroll to each link animated section.

  $('header .navbar-nav .nav-link').on('click', function(e) {
    e.preventDefault();
    const link = $(this).data('link');
    const offset = $('main #' + link).offset().top - 10;
    var array_easy = ['easeInOutExpo', 'easeInOutQuad', 'easeInOutCubic', 'easeInOutQuint', 'easeInOutExpo'];
    var rand = array_easy[Math.floor(Math.random() * array_easy.length)];

    $('html, body').animate({
      scrollTop: offset
    }, 1000, rand);
  });


  $(window).on('scroll', function (){
     var $sections = $('main > section'),
       topDistance = $(window).scrollTop(),
       nextActive,
       $navItems = $('header .navbar #navbarNav .navbar-nav .nav-item'),
       current = $navItems.filter('.active').find('.nav-link').attr('data-link');

     $sections.each(function () {
       var $this = $(this),
         idName = $this.attr('id').split(' ')[0];
       if ($this.offset().top - 200 < topDistance && topDistance - $this.offset().top < $this.outerHeight() * 0.7) {
         nextActive = idName;
       }
     });


     if (nextActive) {
       if (nextActive !=  current) {
         $navItems.removeClass('active');
         $('[data-link="' + nextActive + '"]', $navItems)
           .parent()
           .addClass('active');
       }

     } else {
        $navItems.removeClass('active');
     }

  });

  $('.arrow').on('click', function(){
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    },1000);
    return false;
  });

  $('.to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

   // Get mobile/desktop classes to add to <html> element.
  $(window).on('load resize', function() {
    if ($(window).width() <= (992-15)) {
      $('html').addClass('mobile');
      $('html').removeClass('desktop');
      if ($(window).width() >= (768-15)) {
        $('html').addClass('tablet');
      } else {
        $('html').removeClass('tablet');
      }
    } else {
      $('html').addClass('desktop');
      $('html').removeClass('mobile');
      $('html').removeClass('tablet');
    }
  });

  // Collapse navbar if an internal item is clicked on mobile layout.
  $('header .nav-item .nav-link').on('click', function() {
    if ($('html').hasClass('mobile')) {
      $('#navbarNav').collapse('hide');
    }
  });

  $('.load-more').on('click', function() {
     $('.hide').addClass("hidden");
     $('.page2').addClass("hidden");
     $('.load-more').removeClass("hidden");

  });

  $('.hide').on('click', function() {
     $('.hide').removeClass("hidden");
     $('.page2').removeClass("hidden");
     $('.load-more').addClass("hidden");

  });



})(jQuery);
