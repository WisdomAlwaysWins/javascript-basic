const getPromise = (seconds) => new Promise((res, rej) => {
	setTimeout(()=> {
		rej('완료');
	}, seconds * 1000);
});

async function runner() {
	try{
		const result1 = await getPromise(1);
		console.log(result1);
		const result2 = await getPromise(3);
		console.log(result2);
	}catch(e){
		console.log('----catch e-----');
		console.log(e);
	}finally{
		console.log('------finally-----');
	}
}

runner();
console.log('실행 끝');