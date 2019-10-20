<html>
	<head> 
		<title>Ejemplo de uso simple en envío y recepción de parámetros con PHP</title> 
	</head> 
	<body> 
	<p>Enhorabuena, has envíado un formulario por el método post al sevidor. Los datos que has enviado son:</p><ul>
		<?php 
		foreach($_POST as $nombre_campo => $valor)
		{
			$asignacion = "\$" . $nombre_campo . "='" . $valor . "';";
			eval($asignacion);
			echo "<li>".$nombre_campo.":".$valor."</li>";
		}?> 
		</ul> 
	</body> 
</html> 
