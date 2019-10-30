// Valores padrão podem ser passado nos parâmetros.

function multiply(a, b = 1) {
	return a * b;
}

console.log(multiply(2, 5));