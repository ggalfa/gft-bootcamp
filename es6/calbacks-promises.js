// Promises, status[Pending, Fulfilled, Rejected]

const doSomethingPromise = () =>
	new Promise((resolve, reject) => {
		// throw new Error('something wrong');
		// did something
		setTimeout(function() {
			resolve('First Data');
		}, 1000);
	});

const doOtherThingPromise = () =>
	new Promise((resolve, reject) => {
		// did other something
		setTimeout(function() {
			resolve('Second Data');
		}, 1000);
	});

doSomethingPromise()
	.then(data => {
		console.log(data.split(''));
		return doOtherThingPromise();
	})
	.then(data2 => console.log(data2.split('')))
	.catch(error => console.log('Ops...', error));

// Callbacks
function doSomething(callback) {
	setTimeout(function() {
		callback('First data');
	}, 1000);
}

function doOtherThing(callback) {
	setTimeout(function() {
		callback('Second data');
	}, 1000);
}

function doAll() {
	doSomething(function(data) {
		var processedData = data.split('');

		doOtherThing(function(data2) {
			var processedData2 = data2.split('');

			setTimeout(function() {
				console.log(processedData, processedData2);
			}, 1000);
		});
	});
}

doAll();