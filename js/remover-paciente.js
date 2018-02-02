var pacientes = document.querySelectorAll(".paciente");

var table = document.querySelector("#tabela-pacientes");
//var table = document.querySelector("table"); Neste caso um if(event.target.tagName == 'TD') seria necessário para não apagar também o cabeçalho

table.addEventListener("dblclick", function(event) {
	event.target.parentNode.classList.add("fadeOut"); // Adiciona a classe .fadeOut no pai do alvo do evento;
	setTimeout(function() { //Aguarda 500 milisegundos para executar o que foi descrito na functio anonima passada como primeiro parâmetro
		event.target.parentNode.remove(); //Remova o pai(tr) do alvo(td) do evento(click) - (Right to Left)!
	}, 500);
});

/*function addRemotion(pacientes) {
	console.log("entrou na addRemotion");
	pacientes.forEach(function(paciente) {
		paciente.addEventListener("dblclick", function(){
			paciente.remove(); //this.remove();
		});
	});
}*/