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


// VIDEO
function video() {
	
	$('#videoBtn').on('click', function(e){
		e.preventDefault();
		$('#video .video').append('<iframe src="https://www.youtube.com/embed/zjFevJen1dY?rel=0&amp;showinfo=0?ecver=1" allowfullscreen></iframe>');
		$('body').addClass('videoWp');
		$('#video').fadeIn('swing');
	});
	$('.btn-close, #video .bg').on('click', function(e){
		e.preventDefault();
		
		$('#video').fadeOut('swing');
		$('body').removeClass('videoWp');

		setTimeout(function(){
			$('#video .video iframe').remove();
		}, 800);	
	})
	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			
			$('#video').fadeOut('swing');
			$('body').removeClass('videoWp');

			setTimeout(function(){
				$('#video .video iframe').remove();
			}, 800);
		}
	});
}


// MAPA CONTACTO
function mapaContacto() {

	$('#contacto .mapa').append('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15053.490181359532!2d-99.22707!3d19.396303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201a44b349ffb%3A0xc2a6de81ea87b73f!2sAv+Constituyentes+908%2C+Lomas+Altas%2C+11950+Ciudad+de+M%C3%A9xico%2C+CDMX%2C+M%C3%A9xico!5e0!3m2!1ses!2sus!4v1486745337249" allowfullscreen></iframe>');
}






// SLIDER TESTIMONIOS


// CONTACTO


// FORM NEWSLETTER






setTimeout(function(){
	menuscroll();
	detectarScroll();
	menu();
	widthmenu();
	video();
}, 250);

setTimeout(function(){
	mapaContacto();
}, 1000);




