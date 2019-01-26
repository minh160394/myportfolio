(function($) {
  "use strict"; 
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });
  
  $(document).on("scroll", function() {
	if($(document).scrollTop()>75) {
		$(".navbar").removeClass("large").addClass("small");
    $(".navbar").addClass("bg-dark");
	} else {
		$(".navbar").removeClass("small").addClass("large font-weight-bold");
    $(".navbar").removeClass("bg-dark");
	}
	});
})(jQuery); // End of use strict
