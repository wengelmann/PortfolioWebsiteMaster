jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()>300)
     {
      jQuery('.arrow').fadeOut();
     }
    else
     {
      jQuery('.arrow').fadeIn();
     }
 });

