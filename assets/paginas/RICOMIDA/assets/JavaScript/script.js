$(function () {
  			$('[data-toggle="popover"]').popover();
			
  			var enviar = document.getElementById("enviarCorreo");
				
			$(enviar).click(function(){
  					alert("Tu correo fue enviado exitosamente.");
  			});

  			$('h3').dblclick(function(){
  				$(this).css('color','red')
  			});

  			var contenido = document.getElementsByClassName('contenido');
  			var contenido2 = document.getElementsByClassName('contenido2');
  			var contenido3 = document.getElementsByClassName('contenido3');

  			var id1 = document.getElementById('id1');
  			var id2 = document.getElementById('id2');
  			var id3 = document.getElementById('id3');

  			$(id1).click(function(){
  				$(contenido).toggle();
  			});

  			$(id2).click(function(){
  				$(contenido2).toggle();
  			});

  			$(id3).click(function(){
  				$(contenido3).toggle();
  			});

});


		