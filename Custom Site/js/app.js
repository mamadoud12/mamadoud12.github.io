$(document).ready(function() {

  // responsive menu handler

  $('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('#links').toggleClass('active');
 
        e.preventDefault();
    });
});
