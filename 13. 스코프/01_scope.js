var numOne = 20;

function levelOne() {
	console.log(numOne);
}

// levelOne(); // 20

function levelOne() {
	var numOne = 40;
	console.log(numOne);
}

levelOne(); // 40

console.log(numOne); // 20

function levelOne() {
	var numOne = 40;

	function levelTwo() {
		var numTwo = 90;
		console.log(`levelTwo numTwo : ${numTwo}`);
		console.log(`levelTwo numOne : ${numOne}`);
	}

	levelTwo();
	console.log(`levelTwo numTwo : ${numOne}`);
}

levelOne();


// Lexical Scope : 선언된 위치가 상위 스코프를 정한다.
// Dynamic Scope : 실행한 위치가 상위 스코프를 정한다.
var numThree = 3;

function functionOne() {
	var numThree = 100;

	functionTwo();
}

function functionTwo() {
	console.log(numThree);
}

functionOne();

var i = 999;

for(var i = 0 ; i < 10 ; i++) {
	console.log(i);
}
console.log(`i in global scope : ${i}`);

i = 999;
for (let i = 0 ; i < 10 ; i++) {
	console.log(i);
}
console.log(`i in global scope : ${i}`);

