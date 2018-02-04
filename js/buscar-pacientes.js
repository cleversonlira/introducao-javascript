var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function(event) {
	 //Utilização de tecnica AJAX.
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function() {
	    var erroAjax = document.querySelector("#erro-ajax");
	    if (xhr.status == 200) {
	        erroAjax.classList.add("invisivel");
	        var resposta = xhr.responseText;
	        var pacientes = JSON.parse(resposta);
            adicionaPacienteNaTabela(pacientes);	        
	    } else {
	        erroAjax.classList.remove("invisivel");
	    }
	});
	xhr.send();
	event.target.removeEventListener(event.type, arguments.callee);
});

// Com try Cath | Sem sucesso

/*var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function() {
	 //Utilização de tecnica AJAX.
	 var xhr = new XMLHttpRequest();
	 xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientess");
	 	
	 try {
		 xhr.addEventListener("load", function() {
		 	var resposta = xhr.responseText;
		 	var pacientes = JSON.parse(resposta);
		 	adicionaPacienteNaTabela(pacientes);
		 });
		 xhr.send();	 	
	 } catch(error) {
	 	console.log("Erro na requisição: " + error);
	 }
});*/