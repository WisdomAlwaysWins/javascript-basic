/*

- 인스턴스 메서드에서 프로토타입 메서드를 오버라이딩할 수 있다.
- 상속 관계에 의해 프로퍼티가 가려지는 현상을 '프로퍼티 섀도잉' 이라고 한다.

*/

const Person = (function() {
	function Person(name) {
		this.name = name;
	}

	Person.prototype.sayHello = function() {
		console.log(`내 이름은 ${this.name}입니다.`);
	};

	return Person;
}());

const me = new Person('kim');

me.sayHello = function() {
	console.log(`반가워요. 내 이름은 ${this.name}입니다.`);
}

// 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me.sayHello(); // 반가워요. 내 이름은 kim입니다.

// 인스턴스 메서드를 삭제하면 프로토타입 메서드가 호출된다.
delete me.sayHello; 
me.sayHello(); // 내 이름은 kim입니다.

// delete me.prototype.sayHello;
// me.sayHello(); // TypeError: Cannot convert undefined or null to object

console.log(me.constructor === Person); // true
console.log(me.constructor === Object); // false


function Person1(name) {
	this.name = name;
}

const me1 = new Person1('kim');

const parent = {
	sayHello() {
		console.log(`내 이름은 ${this.name}입니다.`);
	}
};

Object.setPrototypeOf(me1, parent);
me.sayHello(); // 내 이름은 kim입니다.

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me1.constructor === Person1); // false
console.log(me1.constructor === Object); // true

