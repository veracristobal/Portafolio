$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  // Add smooth scrolling to all links
  

  

  $('a').click(function(event){
		if(this.hash !== ""){
			event.preventDefault();

		//GUARDAR ESE VALOR EN VARIIABLE GATO
		var gato = this.hash;
		//ANIMACION A TODO EL DOCUMENTO, 
		$('html, body').animate({
			scrollTop: $(gato).offset().top
		}, 800, function(){
			window.location.hash = gato;
		});
		
		}
	});

 	 $('[data-toggle="popover"]').popover();

});