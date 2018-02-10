console.log('::::: ::: pakke 7 feb 18');



// MENU RESPONSIVE
function menu() {

	var eventFired = 0;
	var opennn = false;


	$('.menu-btn a').on('click', function(e){
		e.preventDefault();
		if(opennn === false) {

			$('#menu').addClass('activo');
			$('#menu').fadeIn('swing');

			opennn = true;

		} else {

			$('#menu').fadeOut('fast');

			opennn = false;
		}
	})
	$('#menu li a').on('click', function(){

		$('#menu').fadeOut('fast');
		$('#menu').removeClass('activo');

		opennn = false;
	})




	$(window).on('resize', function() {
		if (!eventFired) {
			if ($(window).width() === 1000) {

				$('#menu').fadeOut('fast');
				opennn = false;

			} else if ($(window).width() > 1000) {

				$('#menu').fadeIn('fast');
				opennn = false;

			} 
		}
	});

}


// PARA MENU FIJO STICKY
function detectarScroll() {
	$(window).on('scroll', function(){
		var paraMenu = $(window).scrollTop();
		if(paraMenu > 230){
			$('#menu-scroll').addClass('activo');
		} else{
			$('#menu-scroll').removeClass('activo');
		};
	});
};


// MENU EFECTO SCROLL ID
function menuscroll() {
	jQuery('#menu li a[href^="#"]').on('click', function() {
		
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				jQuery('html, body').animate({
					scrollTop: target.offset().top - 70
				}, 1000);
				return false;
			}
		}
	});
}




// SLIDER TESTIMONIOS


// CONTACTO


// FORM NEWSLETTER

function widthmenu() {

	
}




setTimeout(function(){
	menuscroll();
	detectarScroll();
	menu();
	widthmenu();
}, 250);




