$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.scene1').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.scene2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#scene2').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.scene3').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#scene3').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.scene4').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#scene4').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.scene5').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#scene5').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	 $('a.scene6').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#scene6').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	 $('a.scene7').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#scene7').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	 $('a.scene8').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#scene8').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#scene1').css('top',(0-(scrolled*0.25))+'px');
	$('#scene').css('top',(0-(scrolled*0.5))+'px');
}


/* Set navigation changes to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#scene2').offset().top - (($('#scene3').offset().top - $('#scene2').offset().top) / 2);
	var section3Top =  $('#scene3').offset().top - (($('#scene4').offset().top - $('#scene3').offset().top) / 2);
	var section4Top =  $('#scene4').offset().top - (($('#scene5').offset().top - $('#scene4').offset().top) / 2);
	var section5Top =  $('#scene5').offset().top - (($('#scene6').offset().top - $('#scene5').offset().top) / 2);
	var section6Top =  $('#scene6').offset().top - (($('#scene7').offset().top - $('#scene6').offset().top) / 2);
	var section7Top =  $('#scene7').offset().top - (($('#scene8').offset().top - $('#scene7').offset().top) / 2);
	var section8Top =  $('#scene8').offset().top - (($(document).height() - $('#scene8').offset().top) / 2);
	$('nav#primary a').removeClass('active');
	
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.scene1').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.scene2').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){ 
		$('nav#primary a.scene3').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.scene4').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.scene5').addClass('active'); 
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.scene6').addClass('active');
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('nav#primary a.scene7').addClass('active');
	}
	  else if ($(document).scrollTop() >= section8Top){
		$('nav#primary a.scene8').addClass('active');
   }
}
