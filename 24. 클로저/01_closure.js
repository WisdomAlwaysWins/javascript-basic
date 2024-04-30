/*

클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.

-> 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.

*/

function getNumber() {
	var number = 5;

	function innerGetNumber() {
		return number;
	}

	return innerGetNumber;
}

// 상위함수보다 하위 함수가 더 오래 살아있는 경우
const runner = getNumber();
console.log(runner); // [Function: innerGetNumber] -> 함수 자체를 반환받음
console.log(runner()); // 5 

// 1) 데이터 캐싱
function cacheFunction(newNum) {
	// 아래 계산이 매우 오래 걸린다 가정했을 때
	var number = 10 * 10;

	function innerCacheFunction(newNum) {
		return number * newNum; // number를 한번만 계산
	}

	return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

// 2) 값 변경
function cacheFunction2() {
	var number = 99;

	function increment() {
		number++;
		return number;
	}
	return increment;
}
const runner3 = cacheFunction2(); 
console.log(runner3()); // number에 직접적으로 접근할 수는 없지만 실행할 때마다 1씩 증가
console.log(runner3());
console.log(runner3());

// 3) 정보 은닉
function Idol(name, year) {
	this.name = name;
	
	var _year = year;

	this.sayNameAndYear = function(){
		return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
	}
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear()); // 안녕하세요 저는 안유진입니다. 2003에 태어났습니다.

console.log(yuJin._year); // undefined
console.log(yuJin.name); // 안유진

