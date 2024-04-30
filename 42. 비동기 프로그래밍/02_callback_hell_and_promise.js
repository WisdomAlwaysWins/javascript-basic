// callback

function waitAndRun() {
	setTimeout(()=> {
		console.log('끝');
	}, 2000);
}

// waitAndRun();

function waitAndRun2() {
	setTimeout(()=> {
		console.log('1번 콜백 끝');

		setTimeout(()=> {
			console.log('2번 콜백 끝');

			setTimeout(()=> {
				console.log('3번 콜백 끝');
			}, 2000)
		}, 2000)

	}, 2000);
}

// waitAndRun2();

// promise
const timeoutPromise = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('완료'); // 2초 기다린 뒤, 완료
	}, 2000);
});

// timeoutPromise.then((res) => {
// 	console.log('----then-----');
// 	console.log(res); // res에 '완료'가 담겨옴
// });

const getPromise = (seconds) => new Promise((res, rej) => {
	setTimeout(() => {
		res('완료');
		// rej('에러');
	}, seconds * 1000);
});

// getPromise(3).then((res)=> {
// 	console.log('-----first then-----');
// 	console.log(res);
// }).catch((res) => {
// 	console.log('-----first catch-----');
// 	console.log(res);
// })

Promise.all([ // 동시 실행 -> 총 4초 걸림
	getPromise(1),
	getPromise(4),
	getPromise(1),
]).then((res)=> {
	console.log(res);
});
