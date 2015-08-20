jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()>200)
     {
      jQuery('.arrow').fadeOut();
     }
    else
     {
      jQuery('.arrow').fadeIn();
     }
 });
