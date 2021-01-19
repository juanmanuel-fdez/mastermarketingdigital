$(document).ready(function(){
	$("ul#gallery li img").click(function(){
		$("ul#gallery li figcaption").hide();
		$(this).siblings("figcaption").show();
	});
	
	$("ul#gallery li figcaption").click(function(){
		$(this).hide();
	});
	

	$("ul#gallery2 li img").click(function(){
		$("ul#gallery-big-pictures li img").hide();
		var tmp = "#"+$(this).attr('id')+"_g";
		if(!$(tmp).is(":visible")){
			$(tmp).show();
		}
	});
	
	
});