$(document).ready(function(){
   
   $("div.imagen").hide();
   
   $("img#foto1").click(function () {
		$("div.imagen").hide("slow");
		$("div#fotoGrande1").toggle("slow");
    });
   $("img#foto2").click(function () {
		$("div.imagen").hide("slow");
		$("div#fotoGrande2").toggle("slow");
    });
   $("img#foto3").click(function () {
		$("div.imagen").hide("slow");
		$("div#fotoGrande3").toggle("slow");
    });	
});