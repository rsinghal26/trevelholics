window.onload = function(event){
    //enter here the action you want to do once loaded
    setTimeout(function(){ 
    	window._openUrlt = function openUrl() {
			window.open("http://google.com");
		}
    	$("<a href='http://travelholics.host22.com' target=\"_blank\">Book Now</a>").appendTo('.step-2-travel-details');
    	console.log("hello!!");
    }, 4000);
}

	