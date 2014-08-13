	<script type="text/javascript" src="js/zepto.min.js"></script>
	<!--<script type="text/javascript" src="js/transition.min.js"></script>-->
	<script type="text/javascript" src="js/snap.svg-min.js"></script>
	
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/svgicons.js"></script>

	<script type="text/javascript">
		Zepto(function($){
		  new svgIcon( document.querySelector( 'header .menu' ), svgIconConfig, { easing : mina.elastic, speed: 600 } )
		  new svgIcon( document.querySelector( 'header .reload' ), svgIconConfig, { easing : mina.elastic, speed: 2400 } )
		  //new svgIcon( document.querySelector( 'header .filter' ), svgIconConfig, { easing : mina.quart, speed: 300 } )
		})
	</script>

</body>
</html>