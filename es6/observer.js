class Observable {
	constructor() {
		this.observables = [];
	}

	subscribe(fn) {
		this.observables.push(fn);
	}

	notify(data) {
		this.observables.forEach(fn => fn(data));
	}

	unsubscribe(fn) {
		this.observables = this.observables.filter(obs => obs !== fn);
	}
}

const ob = new Observable();

const logData1 = data => console.log(`subscribe 1: ${data}`);
const logData2 = data => console.log(`subscribe 2: ${data}`);
const logData3 = data => console.log(`subscribe 3: ${data}`);

ob.subscribe(logData1);
ob.subscribe(logData2);
ob.subscribe(logData3);

ob.notify('notified 1');

