// Arrow Functions
// Caracteres obrigatórios => 
// A característica  de hoisting não deve ser utilizada.

var sum = (a, b) => a + b;

console.log(sum(2, 2));

// Objetos literais com arrow functions

var createObj = () => ({ age: 30});

var obj = {
	showContext: function showContext() {
		// this = obj
		
		setTimeout(() => {
			this.log('after 1000ms');
		}, 100);
	},
	log: function log(value) {
		console.log(value);
	}
};

console.log(createObj());

obj.showContext();

