/*

- 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 중복을 제거한다.

*/

function Circle(radius) {
	this.radius = radius;
}

// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어있다.
Circle.prototype.getArea = function() {
	return Math.PI * this.radius ** 2;
} ;

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true