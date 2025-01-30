(function ($) {
    "use strict";
    var nave = $ ('nav');
var navHeight = nav.outerHeight();

$('.navbar-toggler').on('click', function(){
    if(! $('#mainNav').hasClass('navbar-reduce')){
        $('#mainNav').addClass('navbar-reduce');
    }
})
// PreLoader
$(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });
//    Back to top Button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100){
        $('.back-to-top').fadIn('slow');
    }else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('html, body').animate({scrollTop : 0},1500,'easeInOutExpo');
return false;
});

// Star Scroll Top
$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function(){
    if (location.pathname.replace(/^\//,'')== this.pathname.replace(/^\//,'')&& location.hostname == this.hostname){
        var target = $(this.hash);
        target = target.length ? target : $('[name='+this.hash.slice(1) +']');
        if (target.length){
            $('html, body').animate({
                scrollTop: (target.offset().top - navHeight + 5)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});