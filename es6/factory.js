function Pessoa(customProperties) {
	return {
		name: 'Gleison',
		lastName: 'Oliveira',
		...customProperties
	}
}

const p = Pessoa({name: 'Custom Name', age: 30});
console.log(p);