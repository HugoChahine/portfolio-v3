$(document).ready(function() {
	$('.scrollTo').click(function() {
		var page = $(this).attr('href');
		var speed = 1000
		$('html, body').animate({
			scrollTop: $(page).offset().top-50
		}, speed);
		return false;
	});

	var offset = $("nav").offset().top;
	$(document).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > offset){
			$('nav').addClass("nav--active");
		}
		else {
			$('nav').removeClass("nav--active");
		}
	});
});


ScrollToTop=function() {
	var s = $(window).scrollTop();
	if (s > 800) {
		$('.scrollTop').fadeIn();
	} else {
		$('.scrollTTop').fadeIn();
	}

	$('.scrollTop').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
}

StopAnimation=function() {
	$("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
		$('html, body').stop();
 	});
}

$(window).scroll(function() {
	ScrollToTop();
	StopAnimation();
})(jQuery);