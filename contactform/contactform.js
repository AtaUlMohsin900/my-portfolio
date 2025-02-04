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
        if (rule !== undefined) {
            var ierror = false; // error flag for current input
            var pos = rule.indexOf(':', 0);
            if (pos >= 0) {
              var exp = rule.substr(pos + 1, rule.length);
              rule = rule.substr(0, pos);
            } else {
              rule = rule.substr(pos + 1, rule.length);
            }
    
            switch (rule) {
              case 'required':
                if (i.val() === '') {
                  ferror = ierror = true;
                }
                break;
    
              case 'minlen':
                if (i.val().length < parseInt(exp)) {
                  ferror = ierror = true;
                }
                break;
    