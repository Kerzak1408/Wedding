(function(window, document, undefined) {
	window.onload = init;
	intensity = 0;
	growing = true;
	
	function init() {
		// the code to be called when the dom has loaded
		// #document has its nodes
	
		setInterval(function() {
			console.log(intensity);
			document.getElementById("img").style.borderWidth = intensity;
			if (growing) {
				intensity++;
			} else {
				intensity--;
			}
			if (intensity == 20) {
				growing = false;
			} else if (intensity == 0) {
				growing = true;
			}
	}, 40);
  }

})(window, document, undefined);

