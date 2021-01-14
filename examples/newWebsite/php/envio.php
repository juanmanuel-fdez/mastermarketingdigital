<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
        <title>Master on Digital Marketing teacher example</title>
		<!-- Estilos propios de la página -->
        <link href="./style/main.css" rel="stylesheet" type="text/css">
	</head> 
	<body>
			<main id="contacto" class="bloque-contenido contenido-principal">
			<article>
				<header><h1>Gracias por contactar conmigo</h1></header>
				<p>Enhorabuena, has envíado un formulario por el método post al sevidor. Los datos que has enviado son:</p>
				<ul>
					<?php 
					foreach($_POST as $nombre_campo => $valor)
					{
						$asignacion = "\$" . $nombre_campo . "='" . $valor . "';";
						eval($asignacion);
						echo "<li>".$nombre_campo.":".$valor."</li>";
					}?> 
				</ul> 
			</article>
		</main>
		<footer>
			<p><span class="negrita">Juanma</span><br>&copy; 2019</p>
			<address>
				<a href="mailto:juanmanuel.fdez@outlook.com">juanmanuel.fdez@outlook.com</a><br>
				<a href="tel:+13115552368">(311) 555-2368</a>
			</address>
			<ul id="rrss">
				<li><a href="http://www.facebook.com">Facebook</a></li>
				<li><a href="http://www.twitter.com">Twitter</a></li>
				<li><a href="http://www.linkedin.com">LinkedIn</a></li>
			</ul>
			
		</footer>
	</body>
</html>   
