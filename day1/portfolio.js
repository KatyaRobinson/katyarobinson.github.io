$(document).ready(function(){
	
//	$(".project").hover(function(){
//		$("#project-card-1").slideToggle("slow");
//		}, function(){
//		$("#project-card-1").slideToggle("slow");
//	});	


	
$(".project").hover(function(){
    $(this).children(".project-card").slideToggle("slow");
    }, function(){
    $(this).children(".project-card").slideToggle("slow");
});		

$('span.nav-btn').click(function(){
$("ul.nav").slideToggle();
});
});
	
$(window).resize(function(){
		$("ul.nav").removeAttr("style");
	});

	
	$("ul.nav > li").click(function(){
		if ($(window).width() < 414){
		$("ul.nav").slideUp();
		}	
	});

