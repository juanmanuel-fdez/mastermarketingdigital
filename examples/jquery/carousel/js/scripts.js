/* este código se va a reulizar varias veces así que es mejor tenerlo en una función para reutilizarlo y llamarla cuando haga falta */
function cambiaImagen(index){
	/* ocultamos la imágen que se estaba mostrando */
	$("ul#carrusel li.imgCarrusel").hide("slow");
	/* ahora que sabemos que imágen mostrar indicamos que el n-ésimo li de la lista carrusel se debe mostrar */
	$( "ul#carrusel li:nth-child("+index+")" ).show("slow");
}

$(document).ready(function(){

	/* comenzamos mostrando la segunda imagen */
	var index = 2;

	/* cuando se haga click en la flecha derecha se ejecutará este código */	
	$("li#flechaDerecha").click(function(){
		
		index = index - 1; /* queremos mostrar la imágen a la izquierda por lo tanto movemos el índice restando 1 */

		if(index<1){/* al llegar por debajo de 0 debemos ir al final de la lista */
			index = $("ul#carrusel").children().length; /* el total de elementos del carrusel son los hijos de la lista con id carussel*/
		}
		
		cambiaImagen(index); /* llamamos a la función de cambio de imágen con el índice de la imagen a mostrar */
	
	});
	/* cuando se haga click en la flecha izquierda  se ejecutará este código */	
	$("li#flechaIzquierda").click(function(){
		
		index = index + 1; /* queremos mostrar la imágen a la izquierda por lo tanto movemos el índice restando 1 */

		if(index>$("ul#carrusel").children().length){/* al llegar al total de elementos del carrusel que son los hijos de la lista con id carussel*/
			index = 1; /* volvemos al principio*/
		}

		cambiaImagen(index); /* llamamos a la función de cambio de imágen con el índice de la imagen a mostrar */
		
	});


});