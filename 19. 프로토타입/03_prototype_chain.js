function Person(name) {
	this.name = name;
}

Person.prototype.sayHello = function() {
	return `${this.name}이 인사를 합니다.`;
};

const me = new Person('kim');
console.log(me.sayHello());

console.log(me.hasOwnProperty('name')); // true

console.log(Object.getPrototypeOf(me) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype)  === Object.prototype); // true

