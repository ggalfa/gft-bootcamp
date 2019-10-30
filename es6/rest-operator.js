// Rest operator, usado para um numero indefinido de argumentos.

const sum = (...args) => {
	return args.reduce((acc, value) => acc + value, 0);
};

console.log(sum(2, 3, 5, 4)); // Deve retornar 14

// Spread operator, pega os items de um array, string e transforma em uma lista.

const fullName = 'Gleison Oliveira Costa';

function logFullName() {
	console.log(arguments);
}

logFullName(...fullName);