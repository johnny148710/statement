(function ($) {
  "use strict"; // Start of use strict

	$(document).ready(function () {

		$('.slider__js').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			centerMode: true,
			centerPadding: '60px',
			autoplay: true,
			infinite: true,
			autoplaySpeed: 2000,
			arrows: false,
		});
	});
})(jQuery); // End of use strict
