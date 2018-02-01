
var enviarPaciente = document.querySelector("#adicionar-paciente");

enviarPaciente.addEventListener("click", function(event) {
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var paciente = getPaciente(form);

	var erros = validaForm(paciente);

	if(erros.length == 0) {
		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(montaTr(paciente));		
	} else {
		showErrorMessage(erros);
		return;
	}
	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
	
// testes
/*	var teste = document.querySelectorAll("#form-adiciona");
	console.log(teste);
	
	teste = [];
	teste.push(teste);
	console.log(teste);

	addRemotion(teste);	*/

// fim testes;
});

function showErrorMessage(erros) {
	var ul = document.querySelector("#mensagens-erro");	
	ul.innerHTML = "";
	erros.forEach(function (erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function getPaciente(form) {
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaForm(paciente) {
	var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }
    return erros;
}