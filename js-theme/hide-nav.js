  var offset = 560; // some offset value for which when the header becomes hidden
  jQuery(window).scroll(function() { //also an option: jQuery .on('scroll') method
    if(jQuery('#hide-bar').is(':visible') && jQuery(window).scrollTop() < offset) {
      jQuery('#hide-bar').fadeOut(200);
    } else if(!jQuery('#hide-bar').is(':visible') && jQuery(window).scrollTop() > offset) {
      jQuery('#hide-bar').fadeIn(400);
    }    
  });
