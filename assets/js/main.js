(function ($) {
	"use strict";

	jQuery(document).ready(function ($){

		var window_width = $(window).width();

		// Offcanvas Menu Trigger

		if($(window).width() > 767)
			$('[data-toggle="tooltip"]').tooltip();

		$('.header_absolute.share').on('click',function(){
			$('.facebook, .twitter, .linkedin, .google_plus').slideToggle();
		});


		$(".footer_absolute .ext_icon").on('click', function (){
			$('.footer_absolute .ext_icon, .footer_absolute .facebook, .footer_absolute .twitter, .footer_absolute .linkedin, .footer_absolute .google_plus').hide(300, function () {
				$('.footer_absolute.social_icon').hide();
				$('.footer_absolute.share').show(300);
			});
		});

		$(".footer_absolute.share").on('click', function () {
			$(this).hide(300, function () {
				$('.footer_absolute.social_icon').show();
				$('.footer_absolute .ext_icon, .footer_absolute .facebook, .footer_absolute .twitter, .footer_absolute .linkedin, .footer_absolute .google_plus').show(300);
			});
		});

		$('.menu-trigger img').on('click', function (){
			$('.offcanvas-menu, .offcanvas-menu-overlay').addClass('active');
			if(window_width <= 767) {
				$(this).hide(200);
				$('.ext-menu').show(200);
			}
		});

		$('.ext-menu').on('click', function () {
			$(this).hide(200);
			$('.menu-trigger img').show(200);
			$('.offcanvas-menu, .offcanvas-menu-overlay').removeClass('active');
		});

		$('.offcanvas-close-btn, .offcanvas-menu-overlay').on('click', function (){
			$('.offcanvas-menu, .offcanvas-menu-overlay').removeClass('active');
			$('.ext-menu').hide(200);
			$('.menu-trigger img').show(200);
		});

		// ScrollTop Manual Coding 
		$(window).on('scroll', function(){
			var bottomPos = $(window).scrollTop() + $(window).height();
			if(bottomPos > 893 && $(window).width() < 767) {
				$('.offcanvas-menu').css('position', 'fixed');
				$('.offcanvas-menu').css('top', 100 - (893 - $(window).height()));
			}
			else { 
				$('.offcanvas-menu').css('position', 'absolute');
				$('.offcanvas-menu').css('top', 100);
			}
			if($(window).scrollTop() > 1){
				$('.scroll_top').fadeIn();
				} else{	
					$('.scroll_top').fadeOut();

				}
			});

			$(".scroll_top").on("click", function(){
				$('body, html').animate({scrollTop:0}, 1000);
		});
	});

	jQuery(window).load(function (){
		// Preloader Active
		jQuery('.template-preloader-wrap').fadeOut(1000);
	});

}(jQuery));