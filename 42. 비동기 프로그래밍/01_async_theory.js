function longWork() {
	const now = new Date();

	// milliseconds since epoch
	// 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지 시간을 밀리초로 반환
	const milliseconds = now.getTime();
	const afterTwoSeconds = milliseconds + 2 * 1000;

	while(new Date().getTime() < afterTwoSeconds) { // 2초

	}
	
	console.log('완료');
}

// console.log('hello');
// longWork();
// console.log('word');

function longWork() {
	setTimeout(() => { // 비동기
		console.log('완료');
	}, 2000); // 2초
}

console.log('hello');
longWork();
console.log('word');