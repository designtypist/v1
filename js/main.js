//Function to make the every wrapper class take up the width and height of the window size
$(function(){
	//When window is loaded run the resizeWindow()
	$( window ).ready(function() {
		resizeWindow();
		
	});
	//When window is resized run the resizeWindow()
	$( window ).resize(function() {
		resizeWindow();
	});
	
	//Function to resize window
	function resizeWindow() {
		$('.fullPage').css( {	
			'height':($(window).height())+'px',
			'width':($(window).width())+'px'
		});
	}
	
	//Event handler for hidden nav to appear when passed the first page
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var firstPage = $('#homeCont').innerHeight();             // set to whatever you want it to be
		
		
		//if the window is scroll pass the first page
		if(y_scroll_pos > firstPage) {
			$('#backToTop').removeClass('hidden');
		} else {
			$('#backToTop').addClass('hidden');
		}
		
		//if the window is scroll pass the skills section
		/*if(y_scroll_pos > skillsSect){
			$('.progress-bar').animate({width: '100%'}, 600);
		}*/
		
		if($("#skills").position().top - 200 < $(window).scrollTop()){
			$('.progress-bar').animate({width: '100%'});
		}
	});
	
	
});

/*
function outputQuotes() {
	
	
	/*var quotes = new Array('Now punch that laziness in the face and have a great day! - "Bobby Chiu"', 'Hey', 'Bye');
	for(var i=0; i<quotes.length; i++){
		return quotes[i];
	}
}*/