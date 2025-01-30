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