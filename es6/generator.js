// Generators

function* hello() {
	console.log('Hello');
	yield 1;

	console.log('From');
	yield 2;

	console.log('From');
	yield 3;
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

function* naturalNumbers() {
	let number = 0;
	while(true) {
		yield number;
		number++;
	}
}

const num = naturalNumbers();

console.log(num.next());
console.log(num.next());
console.log(num.next());