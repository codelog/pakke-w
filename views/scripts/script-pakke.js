console.log('::::: ::: pakke 7 feb 18');



// MENU
function menu() {

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
}


// MENU BAJA


// SLIDER TESTIMONIOS


// CONTACTO


// FORM NEWSLETTER








menu();