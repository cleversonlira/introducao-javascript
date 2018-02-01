//var container = document.querySelector(".container");

function changeTitle(valor) {
	var conteudoTitulo = document.querySelector(".titulo");
	conteudoTitulo.textContent = valor;
}

var listaPacientes = document.querySelectorAll(".paciente");

for (var i=0; i < listaPacientes.length; i++) {
	
	var peso = listaPacientes[i].querySelector(".info-peso").textContent;
	var altura = listaPacientes[i].querySelector(".info-altura").textContent;

	validaPaciente(listaPacientes[i], peso, altura);
}

function validaPaciente(paciente, peso, altura) {
	if (!validaPeso(peso)) {			
		paciente.querySelector(".info-imc").textContent = "Peso inválido!";
		addClass(paciente);
	} else if (!validaAltura(altura)) {
		paciente.querySelector(".info-imc").textContent = "Altura inválida!";
		addClass(paciente);
	} else {
		console.log(paciente.querySelector(".info-nome").textContent);
		paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
	}	
}

function validaPeso(peso) {
	if (peso <= 0 || peso >= 500) return false;
	else return true;
}

function validaAltura(altura) {
	if (altura < 0 || altura > 3.0) return false;
	else return true;	
}

function calculaImc(peso, altura) {
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function addClass(paciente) {
	paciente.classList.add("paciente-invalido");
}