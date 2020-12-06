(function ($) {
  "use strict"; // Start of use strict

	$(document).ready(function () {
		// Header
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

		// Mobile button
		$('.button__js').click(function(){
			$('.nav-container').toggleClass('show');
		});

		(function() {

			"use strict";
			var toggles = document.querySelectorAll(".cmn-toggle-switch");
			for (var i = toggles.length - 1; i >= 0; i--) {
			  var toggle = toggles[i];
			  toggleHandler(toggle);
			};
		  
			function toggleHandler(toggle) {
			  toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			  });
			}
		  
		  })();

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
			responsive: [
				{
				  breakpoint: 960,
				  settings: {
					centerMode: false,
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
		});

		// Modal
		var modal = document.getElementById("modal");
		var btn = document.getElementById("modal-button");
		var span = document.getElementsByClassName("close")[0];

		btn.onclick = function(e) {
			e.preventDefault;
			modal.style.display = "block";
			
		}

		span.onclick = function() {
			modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	});
})(jQuery); // End of use strict
