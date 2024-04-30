/*

- 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체로 다른 객체에 공유 프로퍼티를 제공한다.
- 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 가지며, 이 내부 슬롯의 값은 프로타입의 참조다.
- 모든 객체는 하나의 프로토타입을 가진다.
- 모든 프로토타입은 생성자 함수와 연결되어 있다.
	=> 객체와 프로토타입과 생성자 함수의 연결

*/

// __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입에 간접적으로 접근할 수 있다.
const person = { name : 'kim' };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__')); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')); 
// { get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__ 를 상속받아 사용할 수 있다.
console.log(Object.prototype === person.__proto__); // true



//! __proto__ 프로퍼티를 코드 내에서 직접 사용하는 것을 권장하지 않는다.
const obj = {};
const parent = { x : 1 };

// 프로토타입의 참조를 취득하고 싶다면 Object.getPrototypeOf 메서드를 사용할 수 있다.
console.log(Object.getPrototypeOf(obj)); 

// 프로토타입을 교체하고 싶은 경우에는 Object.setPrototypeOf 메서드를 사용할 것을 권장한다.
Object.setPrototypeOf(obj, parent); 
console.log(Object.getPrototypeOf(obj)); 



//함수 객체만이 소유하고 있는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
console.log((function(){}).hasOwnProperty('prototype')); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log({}.hasOwnProperty('prototype')); // false

const PersonArrow = (name) => { // 화살표 함수는 non-constructor로 prototype 프로퍼티를 소유하지 않는다.
	this.name = name;
}

console.log(PersonArrow.hasOwnProperty('prototype')); // false
console.log(PersonArrow.prototype); // undefined



function Person(name) {
	this.name = name;
}

const me = new Person('kim');
console.log(Person.prototype === me.__proto__); // true
console.log(me.constructor === Person); // true


