(function ($) {
  "use strict"; // Start of use strict

	$(document).ready(function () {

		$(function() {
			var header = $("#header-js");
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
	
				if (scroll >= 200) {
					header.addClass("fixed-header");
				} else {
					header.removeClass("fixed-header");
				}
			});
		});
		// Slider
		$('.slider__js').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			centerMode: true,
			centerPadding: '60px',
			autoplay: true,
			infinite: true,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: $('.prev'),
			nextArrow: $('.next'),
		});
	});
})(jQuery); // End of use strict
