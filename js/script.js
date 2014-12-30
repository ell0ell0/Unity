// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$( document ).ready(function() {  

	/*--------------------------------
	Evenets
	--------------------------------*/

	//open close brand nav on click
	$(".nav_brand").click(function(){
		$(".brand_sub_nav").toggleClass("sub_nav_open");
		$(".nav_brand").toggleClass("active");
		$(".nav_brand .fa-chevron-down").toggleClass("flip");
	});
	//open close ui nav on click
	$(".nav_ui").click(function(){
		$(".ui_sub_nav").toggleClass("sub_nav_open");
		$(".nav_ui").toggleClass("active");
		$(".nav_ui .fa-chevron-down").toggleClass("flip");
	});

	//open menus when scrolled too if collapsed
	$('#brand_name').waypoint(function(direction) {
		if(!$(".brand_sub_nav").hasClass("sub_nav_open") && direction === 'down') {
			$(".brand_sub_nav").toggleClass("sub_nav_open");
			$(".nav_brand").toggleClass("active");
			$(".nav_brand .fa-chevron-down").toggleClass("flip");
		}
	}, {
		offset: '100%'
	}).waypoint(function(direction) {
		if(!$(".brand_sub_nav").hasClass("sub_nav_open") && direction === 'up') {
			$(".brand_sub_nav").toggleClass("sub_nav_open");
			$(".nav_brand").toggleClass("active");
			$(".nav_brand .fa-chevron-down").toggleClass("flip");
		}
	}, {
		offset: function() {
	  		return -$(this).height();
		}
	});

	$('#ui').waypoint(function(direction) {
		if(!$(".ui_sub_nav").hasClass("sub_nav_open") && direction === 'down') {
			$(".ui_sub_nav").toggleClass("sub_nav_open");
			$(".nav_ui").toggleClass("active");
			$(".nav_ui .fa-chevron-down").toggleClass("flip");
		}
	}, {
		offset: '100%'
	}).waypoint(function(direction) {
		if(!$(".ui_sub_nav").hasClass("sub_nav_open") && direction === 'up') {
			$(".ui_sub_nav").toggleClass("sub_nav_open");
			$(".nav_ui").toggleClass("active");
			$(".nav_ui .fa-chevron-down").toggleClass("flip");
		}
	}, {
		offset: function() {
	  		return -$(this).height();
		}
	});

	$("#brand_name").waypoint(function() {
		$("#side_nav .row").toggleClass("nav_fixed");
	});

	//make relevent nav active when scrolled too
	$('#content section').waypoint(function(direction) {
		var $links = $('a[href="#' + this.id + '"]');
		$links.toggleClass('focus', direction === 'down');
	}, {
		offset: '100%'
	}).waypoint(function(direction) {
		var $links = $('a[href="#' + this.id + '"]');
		$links.toggleClass('focus', direction === 'up');
	}, {
		offset: function() {
	  		return -$(this).height();
		}
	});

	var menu = $('.left-off-canvas-menu');

	$(document).on('resize', function() {
		// Beware with resize handlers...
		//  Throttle & consolidate #perfmatters
		menu.height($(this).height());  
	});

	// Initialize height
	$(document).trigger('resize');




// ------------------------------------------------
// utilities
// ------------------------------------------------

	//smooth scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
		|| location.hostname == this.hostname) {
	  		var target = $(this.hash);
	  		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  		if (target.length) {
	   			$('html,body').animate({
	   	 			scrollTop: target.offset().top
	    		}, 1000);
	    		return false;
	    	}
	  	}
	});
});