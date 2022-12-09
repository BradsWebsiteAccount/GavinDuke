$ (document).ready(function()){


	$("a").click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('herf') ).offset().top
		}, 3000);
		return false;
	});


	setTimeout(function() {
		$('body').addClass('loaded');
	}, 3500);




};







$ (window).load(function () {

	if (screen.width <=699) {
		document.location = "https://m.bradswebsiteaccount.github.io/BradleyClevenger/";
}



