$(window).on('load', function () {
            // $('.loader').fadeOut();
            $('#preloader-area').delay(1500).fadeOut('slow');
        });

$(document).ready(function(){
		
		$(".project_title").hide();
		
		$("#img_1").hover(function(){
			$("#pt_1").toggle(600);
		});
		
		$("#img_2").hover(function(){
			$("#pt_2").toggle(600);	
		});
		$("#img_3").hover(function(){
			$("#pt_3").toggle(600);	
		});
			$("#img_4").hover(function(){
			$("#pt_4").toggle(600);	
		});
			$("#img_5").hover(function(){
			$("#pt_5").toggle(600);	
		});
			$("#img_6").hover(function(){
			$("#pt_6").toggle(600);	
		});	
			$('.counter_num').counterUp();
		  	$("#owl-demo").owlCarousel({
 
      			navigation : false, // Show next and prev buttons
 				gotoFirst: true,	
      			slideSpeed : 300,
      			paginationSpeed : 400,
 				autoPlay:true,	
      			items : 1, 
      			itemsDesktop : false,
      			itemsDesktopSmall : false,
      			itemsTablet: false,
      			itemsMobile : false,
      			pagination: false,
      			paginationNumbers:false
 
  			});
  			$('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });		
});	



