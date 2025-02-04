jQuery(document).ready(function($) {
    "use strict";
  
    //Contact
    $('form.contactForm').submit(function() {
      var f = $(this).find('.form-group'),
        ferror = false,
        emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
  
      f.children('input').each(function() { // run all inputs
  
        var i = $(this); // current input
        var rule = i.attr('data-rule');