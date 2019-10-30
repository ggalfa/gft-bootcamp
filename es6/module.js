let name = 'default';
let newName;

function getName() {
	return name;
}

function setName() {
	name = getName();
}

module.exports = {
	getName,
	setName
};