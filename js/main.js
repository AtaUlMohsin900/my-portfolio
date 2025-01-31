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
// star counter

$('.counter').counterUp({
    dalay: 15,
    time: 2000
});

//  Star Scrolling nav

$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - navHeight + 5)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll').on("click", function () {
    $('.navbar-collapse').collapse('hide');
});
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});