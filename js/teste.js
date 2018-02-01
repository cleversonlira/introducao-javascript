function messageLog(message) {
	console.log(message);
}

function soma(numA, numB, cb) {
	cb(`A soma de ${numA} + ${numB} e igual a ${numA + numB}`);
}

soma(5, 7, messageLog);



var nomes = ["Douglas", "Flávio", "Nico", "Rômulo", "Leonardo"];

for (var i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + " é instrutor da Alura");
}

nomes.forEach(function(nome) {
	console.log(nome + " é instrutor da Alura");
});