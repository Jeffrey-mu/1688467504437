var idLits = [12871,17131,13151,11603,1531,4777,3270,2030,1229,13558,1240,8853,13828,1498]
var num = Math.floor(Math.random() * 100) + 1;
page()
function page() {
	  
		
		
		
		
		
		// gii
		if ((num > 0 && num < 100) || num == 100) {
			window.location.replace('two/' + idLits[Math.floor(Math.random() * idLits.length)] + 'play.html')
			return
		}
		
		
		// 外链
		
	  
}