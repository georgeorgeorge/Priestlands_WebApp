Zepto(function($){

	// Icon Animation Setup
	new svgIcon( document.querySelector( 'header .menu' ), svgIconConfig, { easing : mina.elastic, speed: 600 } )
	new svgIcon( document.querySelector( 'header .reload' ), svgIconConfig, { easing : mina.elastic, speed: 2400 } )
	//new svgIcon( document.querySelector( 'header .filter' ), svgIconConfig, { easing : mina.quart, speed: 300 } )
	new svgIcon( document.querySelector( 'nav .dash' ), svgIconConfig, { easing : mina.elastic, speed: 600 } )

	var currentTitle = $('header .navigation-title').text()

	$('.button.menu').on('click', function() {
		var menuOpen = $('nav.menu').hasClass('open')
		if(!menuOpen) {
			$('nav.menu').addClass('open')
			$('header .navigation-title').css('opacity', '0').text('Main Menu').css('opacity', '1')
		} else {
			$('nav.menu').removeClass('open')
			$('header .navigation-title').text(currentTitle)
		}
	})
})