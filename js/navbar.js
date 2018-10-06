(function($){

	var sections = [];
	var id = false;

	$("nav a").each(function(){
		sections.push($($(this).attr('href')));
	});

	$(window).scroll(function(e){
		var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
		for (var i in sections){
			var section = sections[i];
			if (scrollTop > section.offset().top) {
				id = section.attr('id');
			}
		}
		$('nav a').removeClass("active");
		$('nav a[href="#' + id + '"]').addClass("active");
		console.log("#" + id);
	});
})(jQuery);