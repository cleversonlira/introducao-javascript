var pacientes = document.querySelectorAll(".paciente");

var table = document.querySelector("#tabela-pacientes");

table.addEventListener("dblclick", function(event) {
	event.target.parentNode.remove(); //Remova o pai do alvo do evento (Right to Left)! 
});

/*function addRemotion(pacientes) {
	console.log("entrou na addRemotion");
	pacientes.forEach(function(paciente) {
		paciente.addEventListener("dblclick", function(){
			paciente.remove(); //this.remove();
		});
	});
}*/