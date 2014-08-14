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
	},
	filter : {
		url : 'assets/filter.svg',
		animation : [
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"path" : "M13.3,5.3C11,5.3,9.6,6,6.5,6C6.2,6,6,6,5.8,6l4.2,4.2v6.5l2-0.4v-6.1l4.5-4.5C15.7,5.5,14.5,5.3,13.3,5.3z"}' }, 
					to : { val : '{"path" : "M11,10c-0.4,0,1,0-1,0c-0.2,0,0.2,0,0,0l0,0v6.7l2-0.4v-6.1V10C11.6,10,12.1,10,11,10z"}', animAfter : '{"path" : "M11,18.5c-1,0.2-1,0.2-1,0.2l0,0l0,0l0,0l2-0.4l0,0l0,0C11.4,18.4,12.1,18.3,11,18.5z"}' }
				} 
			}
		]
	},
	dash : {
		url : 'assets/dash.svg',
		animation : [
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 11 17"}' }, 
					to : { val : '{"transform" : "r65 11 17"}' }
				} 
			}
		]
	}
};