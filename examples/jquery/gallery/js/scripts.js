/* Cuando el documento esté cargado completamente se ejecutará el código jquery */
$(document).ready(function(){
	
	/* cuando el susuario haga click sobre un elemento de la lista se ocultarán todas las imagenes de la galería */
	$("li.imgBoton").click(function(){
		$("li.imgOculta").hide("fast");	
	});
	
	/* Si se ha hecho click sobre el li con id#imgP1 se mostrará el li con imgG1 que contiene la imagen correspondiente */
	$("li#imgP1").click(function(){
		$("li#imgG1").show("slow");
	});
	/* Si se ha hecho click sobre el li con id#imgP1 se mostrará el li con imgG2 que contiene la imagen correspondiente */
	$("li#imgP2").click(function(){
		$("li#imgG2").show("slow");
	});
	/* Si se ha hecho click sobre el li con id#imgP1 se mostrará el li con imgG2 que contiene la imagen correspondiente */
	$("li#imgP3").click(function(){
		$("li#imgG3").show("slow");
	});

});