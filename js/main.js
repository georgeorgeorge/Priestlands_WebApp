var svgIconConfig = {
	hamburgerCross : {
		url : 'assets/hamburger.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"path" : "M0,6h22"}' }, 
					to : { val : '{"path" : "M3.2,3.2l15.6,15.6"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' }, 
					to : { val : '{"opacity" : 0}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "M0,16h22"}' }, 
					to : { val : '{"path" : "M3.2,18.8L18.8,3.2"}' }
				} 
			}
		]
	},
	reload : {
		url : 'assets/reload.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 11 11"}' }, 
					to : { val : '{"transform" : "r360 11 11"}' }
				} 
			}
		]
	}
};