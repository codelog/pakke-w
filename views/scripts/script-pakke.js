//console.log('::::: ::: pakke 7 feb 18');
console.log('::::: ::: pakke 14 feb 18');

var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;


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
	

// FORM NEWSLETTER
function formNewsletter(){
	var formulario 		= $('#mc-embedded-subscribe-form');
		email 			= document.getElementById('mce-EMAIL');
		email2 			= $("#mce-EMAIL");
		messages		= $('#mc-embedded-subscribe-form p.mensajes');
		condiciones 	= document.getElementById('condiciones');
		condiciones2 	= $("#condiciones");
		verificar 		= true;

	if(!email.value){
		email2.addClass('error');
		email.focus();
		messages.html('Correo requerido');
		verificar = false;
	} else if(!expRegEmail.exec(email.value)){
		email2.addClass('error');
		email.focus();
		messages.html('Correo invalido');
		verificar = false;
	} else if(!condiciones.checked){
		condiciones2.addClass('error');
		condiciones.focus();
		messages.html('Tienes que aceptar nuestro Aviso de privacidad');
		verificar = false;
	} else {
		email2.removeClass('error');
		condiciones2.removeClass('error');
		messages.html('');
	}

	if(verificar){
		messages.html('¡Gracias, pronto recibirás noticias de PAKKE!');
		formulario.submit();
		formulario.show();
		formulario.trigger('reset');
		setTimeout(function(){
			messages.html('');
			formulario.trigger('reset');
			formulario.show();
		}, 7000);
	}
};


// FORM CONTANTO
function formContacto() {

	var formulario 		= $('#formContacto');

		name 			= document.getElementById('cname');
		name2			= $('#cname');
		nameVal			= name2.val();

		email 			= document.getElementById('cemail');
		email2			= $('#cemail');
		emailVal		= email2.val();

		phone 			= document.getElementById('cphone');
		phone2			= $('#cphone');
		phoneVal		= phone2.val();

		message 		= document.getElementById('cmessage');
		message2		= $('#cmessage');
		messageVal		= message2.val();

		comentariosVal = ("PAKKE CONTACTO: " + messageVal);

		condiciones 	= document.getElementById('ccondiciones');
		condiciones2 	= $('#ccondiciones');

		messages		= $('#formContacto span.mensajes');
		verificar 		= true;

		loaderr			= $('#formContacto .loader');
		spinnerr		= $('#formContacto .loader .spinner');


	if(!email.value){
		email2.addClass('error');
		email.focus();
		messages.html('Correo requerido');
		verificar = false;
	} else if(!expRegEmail.exec(email.value)){
		email2.addClass('error');
		email.focus();
		messages.html('Correo invalido');
		verificar = false;
	} else if(!condiciones.checked){
		condiciones2.addClass('error');
		condiciones.focus();
		messages.html('Tienes que aceptar nuestro Aviso de privacidad');
		verificar = false;
	} else {
		email2.removeClass('error');
		condiciones2.removeClass('error');
		messages.html('');
	}

	if(verificar){

		spinnerr.fadeIn('swing');
		loaderr.fadeIn('swing');

		setTimeout(function(){
			$.ajax({
				url: "//appservices.next-cloud.mx/rest/services/pipeline/venders/internet/1/send/email/",
				type: 'POST',
				data: JSON.stringify({
					comments: comentariosVal ?  comentariosVal : '',
					//emailtype:"demostraci\u00f3n",
					emailtype: 1,
					email:emailVal ? emailVal : '',
					name:nameVal ? nameVal : '',
					telephone: phoneVal ? phoneVal : ''
				}),
				contentType:"application/json; charset=utf-8",
				dataType:"json",
				fail: function(a){
					return a.code?console.log("Error message "): console.log("message ",a.msg)
				}
			})
			//messages.html('¡Gracias, pronto recibirás noticias de PAKKE!');
			$('#formContacto p').css('opacity', '0');
			spinnerr.fadeOut('fast');
			loaderr.html('¡Gracias, pronto recibirás noticias de PAKKE!');
			//formulario.submit();
			formulario.show();
			formulario.trigger('reset');
			setTimeout(function(){
				messages.html('');
				formulario.trigger('reset');
				formulario.show();
				$('#formContacto p').css('opacity', '1');
				loaderr.fadeOut('fast');
				loaderr.html('');
				loaderr.append('<div class="spinner" style="display:none;"></div>');
			}, 8000);
		}, 500);
	}
};


// ELIMINAR ESTILO AL MENU SCROLL
function deleteStyle() {
	$('#menu-scroll').removeAttr('style');
}

// FUNCION PARA RECOGER PAQUETE INFO MENSAJERIA
function recoleccion() {
	var opennn = false;
	$('.recoleccion .txt a').on('click', function(e){
		e.preventDefault();
		if(opennn === false) {

			$('.mensajerias').addClass('activo');
			$('.recoleccion .txt a').html('Cerrar información');
			opennn = true;

		} else {

			$('.mensajerias').removeClass('activo');
			$('.recoleccion .txt a').html('Información de las mensajerías');
			opennn = false;
		}
	})
}


// SLIDER TESTIMONIALES
/*
function sliderr(){
	jQuery(document).ready(function ($) {

		console.log('listooo');

		$('#checkbox').change(function(){
			setInterval(function () {
				moveRight();
			}, 3000);
		});

		var slideCount = $('#slider ul li').length;
		var slideWidth = $('#slider ul li').width();
		var slideHeight = $('#slider ul li').height();
		var sliderUlWidth = slideCount * slideWidth;

		$('#slider').css({ width: slideWidth, height: slideHeight });

		$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

		$('#slider ul li:last-child').prependTo('#slider ul');

		function moveLeft() {
			$('#slider ul').animate({
				left: + slideWidth
			}, 200, function () {
				$('#slider ul li:last-child').prependTo('#slider ul');
				$('#slider ul').css('left', '');
			});
		};

		function moveRight() {
			$('#slider ul').animate({
				left: - slideWidth
			}, 200, function () {
				$('#slider ul li:first-child').appendTo('#slider ul');
				$('#slider ul').css('left', '');
			});
		};

		$('a.control_prev').click(function (e) {
			e.preventDefault();
			moveLeft();
		});

		$('a.control_next').click(function (e) {
			e.preventDefault();
			moveRight();
		});

	});
}
*/


function slider2() {

	setTimeout(function(){
		var script = document.createElement('script'),
		scripts = document.getElementsByTagName('script')[0];
		script.async = true;
		script.src = 'js/slider.min.js';
		scripts.parentNode.insertBefore(script, scripts);
	}, 1000);




	setTimeout(function(){
		
		jQuery(document).ready(function($) {
			$('#full-width-slider').royalSlider({
				arrowsNav: true,
				loop: true,
				keyboardNavEnabled: false,
				controlsInside: false,
				imageScaleMode: 'fill',
				arrowsNavAutoHide: false,
				autoScaleSlider: true,  
				autoScaleSliderWidth: 1080,      
				autoScaleSliderHeight: 350,
				controlNavigation: 'bullets',
				thumbsFitInViewport: false,
				navigateByClick: false,
				startSlideId: 0,
				autoPlay: {
		    		enabled: true,
		    		delay: 9000,
		    		pauseOnHover: false
		    	},
				transitionType:'move',
				transitionSpeed: 600,
				globalCaption: false,
				deeplinking: {
					enabled: true,
					change: false
				},
				imgWidth: 1080,
				imgHeight: 400
			});
		});

	}, 2400);
}




setTimeout(function(){
	menuscroll();
	detectarScroll();
	menu();
	video();
	deleteStyle();
}, 300);

setTimeout(function(){
	mapaContacto();
	//sliderr();
	slider2();
	recoleccion();
	$('#mc-embedded-subscribe').on('click', function(e){
		e.preventDefault();
		formNewsletter();
	});
	$('#csend').on('click', function(e){
		e.preventDefault();
		formContacto();
	});
}, 1000);




