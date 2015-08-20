jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()>150)
     {
      jQuery('.arrow').fadeOut();
     }
    else
     {
      jQuery('.arrow').fadeIn();
     }
 });
